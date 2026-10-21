# color-visited 重构计划 v6

> 基于提交 `a374c80`（2026-10-21，v5 的 S13、S14 已完成）的代码，从"脚本要做什么"重新推导一遍，取代 v5。v5 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v6.md`，做 S17」。
- 本文只写要做的事，不再附带架构和约束：
  - S17 之前，架构和约束看 v5 后半的「参考：架构和约束」，它和现在的代码一致；
  - S17 把它搬进 AGENTS.md，之后只在那里维护。v2 到 v5 每出一版计划都把这部分整段重抄一遍，到此为止。
- 编号：
  - **S** = 实施步骤，**D** = 要你拍板的决策，**Q** = 先实测、再决定做不做的调查。编号只是名字，先后看「进度」。
  - 接着 v5 往下排，删掉的编号不复用：新步骤从 S17 起；v5 没做的 S15、S16 编号不变（提交信息里已经引用过）；D8、Q1 沿用。本版没有新的 bug。
- 每完成一步：
  - 从正文删掉这一步，更新「进度」；
  - 改了架构或约束的，在同一个提交里改 AGENTS.md（S17 之后）；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的项列在对话里，能自动化的写成测试。
- D 项由你决定，动手前先问。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；设置对话框的 .vue 只有构建时才编译，它的交互在 jsdom 里执行构建出来的脚本来测（test/dialog.test.ts）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 状态 |
|---|---|---|
| S17 | 架构、约束和已定的取舍搬进 AGENTS.md；README 跟上现在的代码 | 未开始 |
| S16 | lint 规则和配置清理（v5 的 S16，文档部分并进了 S17） | 未开始 |
| S18 | 站点开关在默认值里列全 | 未开始 |
| S19 | 访问记录变化的通知不带 URL 列表 | 未开始 |
| S20 | 设置界面的模板整理 | 未开始 |
| S15 | 放进隔离环境；在真实的管理器里把手动验证一次做完，连同 Q1 | 未开始 |

- 为什么是这个顺序：S17 先做，之后每一步顺手改 AGENTS.md；S16 在 S20 之前，模板按新的 lint 规则写；S15 放最后，它的验证只能手动做，一次覆盖前面所有的改动。S18、S19 互不依赖。
- D8 随时可定。

## 结论

- **整体结构是对的，不需要推倒重来。** 从需求重新推了一遍，现在的每个机制都对应一条需求，去掉哪一个都会丢功能，或者把修过的 bug 引回来（见「每个机制为什么在」）。
  - 模块之间是一张有向无环图。唯一的环是 ui/message.ts 引用 ui/notify.ts 里的类型，运行时不存在；每次加载都执行的模块不碰界面，由 ESLint 守着。
  - 代码量（不算注释和空行）：运行时（main.ts 和 core/，不含同步）约 450 行，同步约 300 行，界面的 .ts 约 120 行、.vue 约 430 行；站点表约 420 行，基本是数据。
- **反复修 bug 留下的痕迹有三处**，都在模块内部，不动结构（见「迭代留下的痕迹」）。三处在副本里一起试过：`pnpm test` 全过，src 少 65 行，测试少 54 行。
- **越积越多的是计划文档本身。**
  - 约束从 v2 起每版整段重抄一遍；「考虑过、不做的」一版比一版长。它们记的是现状和已经定了的事，不是要做的事。
  - 隔离环境（S15）只改两行配置，从 v2 的 A14 起每一版都有它，每次都被新插进来的步骤挤到后面，因为它的验证只能在真实的管理器里手动做。
  - S17 把约束和已定的取舍搬进 AGENTS.md，S15 把攒下来的手动验证一次做完，这一轮重构到此结束。
- **大的方向重新算了一遍账**，不照搬以前的结论：换掉 Element Plus 或 Tailwind、对话框放进 iframe、设置即时生效、合并两个 MutationObserver，都不改；访问记录分片存、改成 `document-start`，仍然看 Q1。理由见「重新看过、不改的」。

## 从第一性原理推一遍

### 脚本要做的事

1. 判断当前页面要不要染色：站点表，加上用户的开关。
2. 给链接上色：链接 → 归一化 → 符不符合站点规则 → 存储里有没有还没过期的记录。
3. 记下访问：点击、批量标记、同步合并，都只是往存储里写时间戳；撤销只是按条件删除。
4. 后台维护：过期清理、自动同步。低频，可能失败，失败了也不该反复打扰。
5. 设置界面和通知：很少用到，用到时能用就行；不影响宿主页面，也不被它影响。

页面上的颜色只是（存储，设置，当前 URL）的函数。v5 由此推出的六条原则仍然成立：存储是唯一的事实来源；每次激活是一个整体；每次加载页面只付内核的钱；纯逻辑和搬运分开；后台任务有上限；和宿主页面互不影响。

### 每个机制为什么在

| 机制 | 为了什么 | 没有它 |
|---|---|---|
| 访问记录逐条存，键是归一化后的 URL | 多个标签页同时记下访问 | 整块写回，标签页之间互相冲掉记录（v2.21.0 及以前） |
| 写入只把时间戳改大（`mergeLinks`） | 标签页之间、设备之间按什么顺序合并，结果都一样 | 谁后写谁说了算 |
| 读的时候判断过期（`isVisited`） | 清理可以一天一次；改短过期时间马上生效 | 每次加载都要全量清理，或者改了不生效 |
| 后台任务轮流做（`takeTurn`） | 所有标签页合起来限次，失败也算一次 | 令牌失效时，每加载一个页面都请求一次、弹一次错 |
| 设置读时规范化，存时只写改动 | 容忍老数据和坏数据；对话框开着时，其他标签页的修改留得住 | 一个坏值让脚本起不来；互相冲掉 |
| 激活整体创建、整体释放 | URL 或设置一变，从头来过 | 增量修补，总有漏掉的状态 |
| URL 检测常驻，非激活页上也在 | SPA 从非激活页站内跳到激活页 | 跳过去之后不染色（v2.19.4 修过） |
| 标记只跟着存储走（`onLinksChange`） | 点击、批量标记、撤销、同步合并共用一条路径 | 每条写入路径各改各的 DOM，总有漏改 |
| 界面按需执行，产物只有一个文件 | 每次加载只付内核的钱 | 每次加载都执行 Vue 和 Element Plus（S9 实测：改之前每次加载激活页 48.7 ms，改之后 25.4 ms） |
| closed shadow root，键盘事件不冒泡出去，rem 换成 px，弹层从很高的 z-index 起 | 界面和页面互不影响 | 在设置里打字触发页面的快捷键，界面跟着页面的根字号缩放，通知被页面的置顶栏盖住 |
| 取色面板挂在 body（D10） | Element Plus 的 click-outside 只看 document 上的 `event.target` | 面板一点就关 |
| 请求走 `GM_xmlhttpRequest` | 不受页面 CSP 限制，令牌不经过页面的 `fetch` | Hacker News 这类 CSP 严的网站上，同步一直失败 |
| 同步格式读旧写新 | 其他设备上可能还跑着旧版本 | 读不了云端，或者拿本地数据覆盖了它 |

### 迭代留下的痕迹

1. **"没列出的站点算启用"要在三个地方各记一次**（S18）。
   - `userSettings.preset` 里只有用户动过的站点，没有的算启用。于是用到它的地方都得记着这条：`findActiveSite` 经过 `isSiteEnabled`；对话框打开时，`toDraft` 按站点表把每个站点补上；`diffSettings` 比较站点开关时也要按 `isSiteEnabled` 比，否则补上的 `true` 会被当成改动。
   - 这其实是缺省值，该在规范化时一次补齐：默认值里按站点表列出每个站点（都是 `true`），`parseSettings` 就能像别的分组一样用 `pick`（存储里是布尔值的照用，没有的取默认，站点表里没有的不留）。之后用到它的地方只看 `preset[id]`。
2. **记录变化的通知带着 URL 列表，唯一的订阅者又拿它在整页里过滤**（S19）。
   - `onLinksChange` 把这次写入、删除的 URL 交给订阅者；唯一的订阅者 colorizer.ts 为了找到页面上对应的链接，要把整页的链接都归一化一遍，再查这个集合。
   - 既然整页都要过一遍，就不必带 URL：存储一变，按存储把整页的链接重新判断一遍，和激活时的第一次扫描是同一段代码。
3. **设置界面的模板基本还是 2025 年 7 月的写法**（S20）。S10 换掉了数据流，模板没怎么动：
   - PresetTab 展开后的两段规则只差标题和颜色（v5 也指出过）；还有只包一层的 div，和一个什么也拦不住的 `@click.stop`（开关和可点的标题区是兄弟元素，没有外层的点击处理）。
   - 滚动容器叠了好几层：最外层 400px 的容器里只有一个 `h-full` 的 el-tabs，内容永远超不出它，这一层的 `overflow-y-auto` 不起作用；预设网站页的根元素和外面的 tab 面板都设了 `h-full overflow-y-auto`，实际只有一层在滚。
   - 不少注释只复述下面的标签，比如 `<!-- 启用同步开关 -->`、`<!-- 右侧：独立的开关控制区 -->`。

其余模块逐个看过，不动：main.ts、shortcut.ts、log.ts、core/sync/ 的三个文件，ui/ 的 root.ts、notify.ts、message.ts、dialog.ts，还有 vite.config.ts（page.ts 只在 S18 里改一行）。singleFile 仍然需要：vite-plugin-monkey 8.1.1 还是最新版，仍按入口 chunk 的 `dynamicImports` 决定改用 SystemJS。

## 重新看过、不改的

v5「考虑过、不做的」里的条目仍然成立。下面几项是这次重新算的账，其中有的以前定过，这次不靠以前的结论再看一遍。S17 把两份合成一份，搬进 AGENTS.md。

### 大方向

- **换掉 Element Plus（D9）。**
  - 为了让它在 closed shadow root 里正常工作，写了四十行左右的适配（不算注释）：收集组件样式、`:root` 换成 `:host`、包进 layer；取色面板的样式写进 `<head>`；通知借一个不挂载的应用拿配置；z-index 起点；Tab 键放行。
  - 换成自己写，要做对话框、tab、开关、数字输入框、带透明度滑块的取色器和通知，代码只会更多，外观也会变。每次加载页面的开销，按需执行之后已经和不用它相当（管理器把源码交给页面的那部分还没量，见 Q1）。
- **换掉 Tailwind（D7）。** 适配只有 vite.config.ts 的 `tailwindInShadowRoot`，十几行；去掉它，模板里的工具类都要改成手写的 CSS。
- **对话框放进 iframe**（新）。
  - iframe 是独立的文档，shadow root 带来的问题都会消失：键盘事件冒泡出去、rem 跟着宿主页面、`@property` 不生效、`:root` 要换、焦点陷阱拿不到焦点、取色面板只能放进 body。
  - 但 Element Plus 的弹层、click-outside、锁滚动都直接用全局的 `document`，Vue 和 Element Plus 得在 iframe 自己的 JS 环境里执行：界面的代码要作为页面脚本放进 iframe，受页面 CSP 的限制，也拿不到 GM API，还得在两边之间搭一套消息通道。
- **设置即时生效，去掉"保存"。**
  - 能省掉快照、draft、`diffSettings` 和 `SettingsPatch`。
  - 但把过期时间改小是破坏性的（清理会删掉超出的记录，下次上传时云端也跟着少）。即时生效时，每个输入框都要分清"正在输入"和"输入完了"（el-input-number 每按一个键就更新一次 model，从 365 退格到空，中间会经过 3 天，v2.21.1 修过这一类），"重置为默认"也要另做确认。显式保存把这些都收在一个按钮上。
- **合并两个 MutationObserver**（v4 否决过）。
  - 试写了一遍：激活不再自带 observer，要靠 page.ts 把每批变化喂给它，`activate` 的返回值从一个 dispose 变成 `{ update, dispose }`，代码量持平。
  - 两个 observer 的寿命本来就不同：URL 检测跟着页面，链接的 observer 跟着激活。激活自带 observer，正是"每次激活是一个整体"。page.ts 里"URL 检测比激活先建"只是省掉一次白做的扫描，不是正确性的前提。
- **访问记录分片存、改成 `document-start`。** 都取决于管理器注入的真实开销，看 Q1。

### 细节

- **`log.debug` 每次都读一遍设置。** 热路径上是每批 DOM 变化一次，比起处理这批变化本身可以忽略；把调试开关一路传进去，反而多一个到处传的参数。
- **测试只构建一次**（Vitest 的 globalSetup）。bundle.test.ts、dialog.test.ts 各构建一次，但两者并行，全套约 4 秒，省不出时间。
- **用 schema 库解析设置。** `pick`、`hasAllFields` 加起来十几行，换成库只是换个写法，多一个依赖。
- **把 `formatShortcut`、`isRecordable` 挪进 ui/。** 它们只给设置界面用，但和 `matchesShortcut` 共用 `toShortcut`（录下来的就是匹配时比较的），放在一起才看得出这一点。

## 步骤

### S17 · 架构、约束和已定的取舍搬进 AGENTS.md；README 跟上现在的代码

- AGENTS.md 新增：
  - v5 后半的「参考：架构和约束」，原样搬过去（它和现在的代码一致）。只有一处例外：只关于某一个函数、注释里已经讲清楚的细节，改成一句指向那个文件，不在两处各写一遍。
  - 「已经定了的取舍」：v5「考虑过、不做的」和本文「重新看过、不改的」合成一份，免得以后再提。
  - 「新增站点怎么做」：在 shared/sites.ts 加一项（`pages`、`links`；SPA 站点写 `match`，覆盖整个 host；链接要去掉查询参数这类部分的，在 `NORMALIZERS` 里按 hostname 加一条），再在 test/sites.test.ts、test/normalize.test.ts 里加行。判断是不是 SPA：在浏览器里从详情页点回列表页，看是整页跳转还是站内跳转。
  - D8 已经定了的话，版本号规则一起改。
- README、README_zh：
  - 「开发计划」里的「本地写入性能优化」（英文版是"用 trie 优化存储"那条）已经由逐条存储解决，删掉；
  - 「核心工作流程」「核心技术特性」按现在的架构改写。
- 搬完之后，删掉本文的「重新看过、不改的」；本文里指向 v5 后半和 v5「考虑过、不做的」的地方，都改成指向 AGENTS.md。仓库只用 AGENTS.md 一份说明，不建 CLAUDE.md。

### S16 · lint 规则和配置清理（v5 的 S16，文档部分并进了 S17；D8）

- **ESLint**：TS 部分只开了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`；Vue 那段只注册了插件，没有任何规则。
  - 换成 typescript-eslint 的 recommended 和 eslint-plugin-vue 的 `flat/recommended`。2026-10-21 在 HEAD 上试开：72 条，70 条是模板的格式（PresetTab 占 32 条），`--fix` 都能改掉；剩下 2 条是测试里用 `{ code: _, ...rest }` 去掉字段，让 `no-unused-vars` 放过下划线开头的变量。.vue 里也关掉 `no-undef`（类型检查已经管了）。没有查出真正的问题。
  - 依赖跟着精简：`@typescript-eslint/eslint-plugin`、`@typescript-eslint/parser` 换成一个 `typescript-eslint`；`vue-eslint-parser`（eslint-plugin-vue 的配置自带）、`globals`（关了 `no-undef` 就用不上）不再直接依赖。
- **配置**：
  - package.json：license 写的是 `ISC`，和脚本头部的 `GPL-3.0-only` 不一致，改成后者；去掉没有意义的 `main` 和空的 `keywords`、`author`，`description` 要么补上、要么去掉；版本号见 D8。`typecheck` 脚本里，`tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事，只留后者。
  - tsconfig：`useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 在本项目里不起作用；`noImplicitAny` 已经包含在 `strict` 里；include 里的 `*.tsx` 没有对应的文件，`src/components.d.ts` 已经被 `src/**/*.ts` 包含。
  - src/vite-env.d.ts 只留 `/// <reference types="vite/client" />`（`?inline` 和 `import.meta.env` 要它）：`*.vue` 的模块声明是给普通 tsc 用的，vue-tsc 不需要；GM API 都从 `vite-plugin-monkey/dist/client` import，用不到 vite-plugin-monkey 的两个全局声明。v5 在仓库副本里试过，去掉之后 vue-tsc 照样通过。
- **顺手**：
  - 测试注释里引用的计划编号（sites.test.ts 的 B20、dialog.test.ts 的 B24）改成直接说明现在的行为：计划文档里早就没有这些编号了。
  - `DAY` 在 main.ts、settings.ts、ui/draft.ts 各定义了一次，只留 settings.ts 的一份并导出。
  - sites.test.ts「不激活」那组里，Seeking Alpha 的文章页写了两行。

### S18 · 站点开关在默认值里列全

- 现状和思路：见「迭代留下的痕迹」第 1 条。
- 做法：
  - settings.ts：`createDefaultSettings` 的 `preset` 按站点表列出每个站点，都是 `true`；`parseSettings` 的 `preset` 用 `pick`；`diffSettings` 的站点开关直接用 `changedFields`；`SettingsPatch.preset` 改成 `Partial<Record<string, boolean>>`。
  - shared/sites.ts：删掉 `isSiteEnabled`；`findActiveSite(url, preset)` 换成只查站点表的 `findSite(url)`，开没开由 page.ts 看 `settings.preset[site.id]`。站点表从此不知道用户设置。
  - ui/draft.ts：删掉 `toDraft`。对话框的快照和副本各调一次 `getSettings()`，两次拿到的本来就是互不相干的两份；`resetGroup` 直接取 `createDefaultSettings()[group]`。
- 存储上的变化：保存过一次设置之后，`userSettings.preset` 会列出站点表里的每个站点，已经删掉的站点的键随之去掉。c210e24 之前的版本存的就是这个样子（启动时把缺的站点补成 `true` 写回去），新旧版本互相读都没问题；以后新加的站点不在存储里，照旧默认启用。
- 测试：
  - settings.test.ts：preset 的几条改成按站点表列全（存储里没有的、不是布尔值的算启用，站点表里没有的不留）；删掉"没有的站点打开不算改动"那条，副本列全之后这种情况不存在了。
  - draft.test.ts 删掉 `toDraft` 的几条；sites.test.ts 删掉 `findActiveSite` 那组，关掉的站点不激活由 test/runtime/disabled.test.ts 锁住；dialog.test.ts 里存下来的 preset 按列全的样子写。
- 副本里试过：src 少 22 行，测试少 54 行，`pnpm test` 全过。

### S19 · 访问记录变化的通知不带 URL 列表

- 现状和思路：见「迭代留下的痕迹」第 2 条。
- 做法：storage.ts 的 `onLinksChange` 改成 `(listener: () => void)`，`setLinks`、`deleteLinks` 不再把 URL 交出去；colorizer.ts 订阅时直接把 `document.querySelectorAll('a[href]')` 交给 `updateLinks`。其他标签页的写入照旧收不到（把其他标签页记下的访问实时染到当前页上是新功能，见 v5「考虑过、不做的」）。
- 开销：jsdom 里，500 个链接、存储里 10 万条记录的页面上点一次链接，中位数 11.78 → 11.83 ms。jsdom 本身慢，时间主要花在 `querySelectorAll` 和读 `href` 上，两版都要做。
- 测试：storage.test.ts 里 `onLinksChange` 的两条只查通知了几次；test/runtime/ 的场景不用改。
- 副本里试过：src 少 6 行，`pnpm test` 全过。

### S20 · 设置界面的模板整理

- 现状：见「迭代留下的痕迹」第 3 条。
- 做法（外观不变）：
  - PresetTab：两段规则合成一段 `v-for`；去掉只包一层的 div 和 `@click.stop`；根元素不再自己滚动。
  - SettingsDialog：最外层容器的 `overflow-y-auto` 去掉；每个 tab 面板只留一层滚动。
  - 各个 tab：去掉只复述标签的注释，说明"为什么"的留着。
  - 会改外观的，做之前先问：数据同步页"同步状态"里的"当前 Gist ID"和上面的输入框重复；"设置步骤"卡片和两个输入框下面的说明重复。
- 验证：dialog.test.ts 照旧全过；构建出的脚本在 headless Chrome 里截四个 tab、展开一个站点、取色面板，和改之前逐像素比较。预设网站页改成由 tab 面板滚动，底部的留白跟着内容一起滚，这是唯一预期的差别。
- 副本里试过（都按 S16 的规则格式化之后再比）：PresetTab 170 → 135 行，`pnpm test` 全过。

### S15 · 放进隔离环境；在真实的管理器里把手动验证一次做完（v5 的 S15，连同 Q1）

- 现状：两个管理器默认都把脚本注入页面环境，脚本的全局对象和原型都和宿主页面共享。脚本不需要页面里的任何 JS 对象，却因此让页面能改写它用到的内置对象；令牌已经不经过页面的 `fetch`，但仍会经过 Vue 的响应式用到的 `Proxy`、`WeakMap` 这类页面能事先改写的全局对象。
- 做法：vite.config.ts 的 userscript 里加 `sandbox: 'DOM'`（TM：只要 DOM 访问，在隔离环境里运行）和 `'inject-into': 'content'`（VM：注入内容脚本的环境），vite-plugin-monkey 两个字段都支持。产物里没有 SystemJS，不用再验证它。
- 验证（只能在真实的管理器里做，TM + Chrome、VM + Firefox 各一遍）：
  - test/runtime/ 的场景（每个文件开头一行写着场景，测试名就是要检查的项）；
  - 设置对话框：四个 tab 各改一项、点一次保存；取色（点色块、拖透明度滑块）、录快捷键、在对话框的输入框里按批量快捷键不触发；
  - 界面和宿主页面互不影响：linux.do 上在颜色框里输入 c 和 /，不出发帖框、不开搜索；点进对话框的输入框之后连按 Shift+Tab，焦点停在对话框的第一个元素上；掘金上的对话框和 v2ex 上的一样大；虎扑的页面在顶部时按批量快捷键，通知完整可见、"撤销"点得到；36氪上打开设置，右侧的悬浮按钮在遮罩下面；
  - 通知、同步。Firefox 的内容脚本环境里，要特别看同步的压缩、解压（`CompressionStream`、`Response`）是否正常。自动同步失败一次之后（比如填一个作废了的令牌），10 分钟内再加载页面，这个标签页、别的标签页都不再请求、不再弹"同步失败"，满 10 分钟再试一次：jsdom 里只有一份存储，测不到每个标签页各有一份缓存、靠扩展后台广播。
- Q1 在同一次量：注入方式换成内容脚本之后，量到的才是以后真实的开销。

## 待决策

- [ ] **D8 · 版本号只留一个来源**（v2 留下的）
  - 现状：userscript 的版本号写在 vite.config.ts 里，package.json 的 `version` 一直是 1.0.0，AGENTS.md 规定发版时只改前者。
  - 建议：删掉 vite.config.ts 里的 `version`（vite-plugin-monkey 默认读 package.json 的），以后只改 package.json，同时改 AGENTS.md 的版本号规则。不改也没有实际问题。

## 调查

- [ ] **Q1 · 管理器把脚本源码和 GM 值交给页面的真实开销**（和 S15 的验证一起做）
  - 背景：v5 后半「性能与数据规模」里"每次注入约 53 ms"，是按 VM 页面侧的源码建模、用 9.7 万条记录在 Node 里测的，TM 是闭源的。脚本自己每次只要 25 ms 左右，这笔开销可能是每次加载页面最大的一项。它和记录条数成正比，而一年的有效期下，本地会长期保有七八万条以上。管理器把约 930 KB 的源码交给页面也要时间，那次也没量。
  - 做法：在真实的 TM（Chrome）和 VM（Firefox）里、S15 之后的注入方式下，用一个临时脚本分别写入 0、5 万、13 万条记录，用 DevTools 的 Performance 面板录激活页的加载，看注入前后主线程上和注入有关的任务。另外，不写记录，分别装约 930 KB 的产物和只有内核的包，比较两者注入时的任务。
  - 怎么用结果：
    - 13 万条时在两个管理器里都不超过 20 ms：分片不再考虑。改成 `document-start`（消除"先显示、后变色"）的代价也就是这么多，到时候作为一个行为上的变化单独提。
    - 明显更大：再评估按 host 分片存储（键从几万个降到几十个）。分片会把"多个标签页并发写同一个键"的问题带回来，要在写入前现读、现合并，并分析剩下的竞争窗口，还要做一次迁移。
    - 源码这一步明显花时间（比如约 930 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物，比如把 `el-form` 换成普通布局，少约 63 KB。取色器不换（D10）。
