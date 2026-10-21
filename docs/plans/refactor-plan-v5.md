# color-visited 重构计划 v5

> 基于提交 `1a3dbec`（2026-10-20，v4 的 S8–S10 已完成）的代码，从"脚本要做什么"重新推导一遍，取代 v4。v4 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v5.md`，做 S15」。
- 本文分两半：
  - 前半是要做的事：结论、推导、步骤、决策、调查，以及考虑过、不做的；
  - 后半「参考：架构和约束」是改代码时不能破坏的东西。v2 到 v4 每出一版计划都把它重抄一遍；S16 把它原样搬进 AGENTS.md，之后本文就只剩历史。
- 编号：
  - **S** = 实施步骤，按「进度」里的顺序做；**B** = bug；**D** = 要你拍板的决策；**Q** = 先实测、再决定做不做的调查。
  - 接着 v4 往下排，删掉的编号不复用：新步骤从 S13 起，新 bug 从 B25 起；v4 没做的 S11、S12 内容基本不变，排到新步骤后面，改为 S15、S16；D8、Q1 沿用。
- 每完成一步：
  - 从正文删掉这一步，更新「进度」；后半部分去掉这一步的标记，因此变了的一并改；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的项列在对话里，能自动化的写成测试。
- D 项由你决定，动手前先问。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；设置对话框的 .vue 只有构建时才编译，它的交互在 jsdom 里执行构建出来的脚本来测（test/dialog.test.ts）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。已知的 bug 先按期望的行为写成 `it.fails`，修的那一步改回 `it`。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 依赖 | 状态 |
|---|---|---|---|
| S15 | 和宿主页面的 JS 环境隔开（v4 的 S11） | — | 未开始 |
| S16 | 收尾：lint 规则、配置、文档（v4 的 S12） | S15（配置清理和 D8 随时可做） | 未开始 |

- Q1 不在实施顺序里，随时可做。

## 结论

- 内核（存储、设置、激活、染色）、同步、站点表已经是该有的样子。逐个模块重看了一遍（见「逐个模块看过」），没有为了"写得更漂亮"值得重写的地方：再动只是换一种写法，不会更简单。顺手能简化的几处，跟着各步一起做。
- 剩下的问题都在边界上。实测出来的 bug 都修了，还差 v4 没做的两步：脚本和页面共享 JS 环境（S15）；工程收尾（S16）。S16 的 lint 规则试开过，只多出模板的格式问题。

## 从第一性原理推一遍

### 脚本要做的事

1. 判断当前页面要不要染色：站点表，加上用户的开关。
2. 给链接上色：链接 → 归一化 → 符不符合站点规则 → 存储里有没有还没过期的记录。
3. 记下访问：点击、批量标记、同步合并，都只是往存储里写时间戳；撤销只是按条件删除。
4. 后台维护：过期清理、自动同步。低频，可能失败，失败了也不该反复打扰。
5. 设置界面和通知：很少用到，用到时能用就行；不影响宿主页面，也不被它影响。

页面上的颜色只是（存储，设置，当前 URL）的函数。下面六条原则都从这里推出来，后文都按它们取舍：

- **存储是唯一的事实来源。** 所有写入只改存储，页面颜色和设置都跟着存储的变化走：一条写入路径，一个变化通知。
- **每次激活是一个整体。** 按（站点，设置）创建；URL 或设置一变，就整个释放、重建，不做增量修补。
- **每次加载页面只付内核的钱。** 内核每次加载页面都要跑，要轻；Vue、Element Plus 和界面的代码到第一次用到时才执行。
- **纯逻辑和搬运分开。** 站点匹配、归一化、设置的规范化和比较、同步格式的编解码都写成纯函数，在 Node 里测；碰 GM、DOM、网络的代码只做搬运，错误只在边界接住、报告一次。
- **后台任务有上限。** 过期清理一天一次、自动同步十分钟一次，都是所有标签页合起来算。按"开始做"计，不按"做成了"计：失败也占一次，否则一直失败时，每加载一个页面都从头来一遍。
- **和宿主页面互不影响。** 脚本留在页面上的只有染色样式和链接上的标记。界面放进 closed shadow root，在界面里打字不触发页面的快捷键，尺寸不跟着页面的根字号变，弹层盖得住页面的置顶元素；请求走管理器；最后整个脚本放进隔离环境。
  - 例外：取色面板只能挂在 `document.body`（D10），所以对话框开着时，`<head>` 里有一份 Element Plus 的样式。
  - 做不到的：事件先经过页面的节点才进 shadow root，页面在捕获阶段照样看得到界面里的按键和输入的文字，包括粘贴进去的令牌（v4 说"页面拿不到令牌"，说得太满）。所以只保证存储里的令牌和发出去的请求页面碰不到，不指望对页面藏住用户正在输入的令牌。

### 逐个模块看过

| 模块 | 结论 |
|---|---|
| shared/sites.ts | 不动。站点表和归一化表都是数据；归一化按链接自己的 hostname 查，Node 里也能执行 |
| core/storage.ts | 不动 |
| core/settings.ts | 不动。一条写入路径；保存时只写改过的字段、合并到存储里的当前值上；读的时候规范化 |
| core/page.ts、core/colorizer.ts | 不动。激活一次、释放一次；标记只跟着存储走 |
| core/shortcut.ts | 不动 |
| core/sync/ | 不动。格式、网络、流程已经分开 |
| ui/ | PresetTab 展开后的两段详情只差颜色和文字，合成一段（S16） |
| vite.config.ts | 不动。singleFile 照旧：vite-plugin-monkey 8.1.1（最新版）仍按入口 chunk 的 `dynamicImports` 决定改用 SystemJS，而 Rolldown 在 `codeSplitting: false` 时把入口自己列在里面 |
| test/ | 结构不动，各步补测试 |
| 配置、文档 | S16 |

### 还差什么

| 原则 | 现在差在哪 | 怎么知道的 | 步骤 |
|---|---|---|---|
| 和宿主页面互不影响 | 脚本和页面共享全局对象和原型 | — | S15 |

## 步骤

### S15 · 和宿主页面的 JS 环境隔开（v4 的 S11）

- 现状：两个管理器默认都把脚本注入页面环境（见「运行平台」），脚本的全局对象和原型都和宿主页面共享。脚本不需要页面里的任何 JS 对象，却因此让页面能改写它用到的内置对象；令牌已经不经过页面的 `fetch`，但仍会经过 Vue 的响应式用到的 `Proxy`、`WeakMap` 这类页面能事先改写的全局对象。
- 做法：vite.config.ts 的 userscript 里加 `sandbox: 'DOM'`（TM：只要 DOM 访问，在隔离环境里运行）和 `'inject-into': 'content'`（VM：注入内容脚本的环境），vite-plugin-monkey 两个字段都支持。产物里没有 SystemJS，不用再验证它。
- 验证（只能在真实的管理器里做，TM + Chrome、VM + Firefox 各一遍）：
  - test/runtime/ 的场景（每个文件开头一行写着场景，测试名就是要检查的项）；
  - 设置对话框：取色（点色块、拖透明度滑块）、录快捷键、在对话框的输入框里按批量快捷键不触发；
  - 界面和宿主页面互不影响：linux.do 上在颜色框里输入 c 和 /，不出发帖框、不开搜索；点进对话框的输入框之后连按 Shift+Tab，焦点停在对话框的第一个元素上；掘金上的对话框和 v2ex 上的一样大；虎扑的页面在顶部时按批量快捷键，通知完整可见、"撤销"点得到；36氪上打开设置，右侧的悬浮按钮在遮罩下面；
  - 通知、同步。Firefox 的内容脚本环境里，要特别看同步的压缩、解压（`CompressionStream`、`Response`）是否正常。自动同步失败一次之后（比如填一个作废了的令牌），10 分钟内再加载页面，这个标签页、别的标签页都不再请求、不再弹"同步失败"，满 10 分钟再试一次：jsdom 里只有一份存储，测不到每个标签页各有一份缓存、靠扩展后台广播。

### S16 · 收尾：lint 规则、配置、文档（v4 的 S12，D8）

- **ESLint**（S15 之后）：TS 部分只开了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`；Vue 那段只注册了插件，没有任何规则。
  - 换成 typescript-eslint 的 recommended 和 eslint-plugin-vue 的 `flat/recommended`。2026-10-20 试开过：75 条里 70 条是模板的格式（PresetTab 最多），都能 `--fix`；剩下 5 条在配置里处理——.vue 里也关掉 `no-undef`（类型检查已经管了），`no-unused-vars` 放过下划线开头的变量（测试里用 `{ code: _, ...rest }` 去掉字段）。没有查出真正的问题。
  - 依赖跟着精简：`@typescript-eslint/eslint-plugin`、`@typescript-eslint/parser` 换成一个 `typescript-eslint`；`vue-eslint-parser`（eslint-plugin-vue 的配置自带）、`globals`（关了 `no-undef` 就用不上）不再直接依赖。
  - 顺带：PresetTab 展开后的"在下面这些页面中生效""对下面这些链接染色"两段只差颜色和文字，合成一段 `v-for`。
- **配置清理**（随时可做）：
  - package.json：license 写的是 `ISC`，和脚本头部的 `GPL-3.0-only` 不一致，改成后者；去掉没有意义的 `main` 和空的 `keywords`、`author`，`description` 要么补上、要么去掉；版本号见 D8。`typecheck` 脚本里，`tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事，只留后者。
  - tsconfig：`useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 在本项目里不起作用；`noImplicitAny` 已经包含在 `strict` 里；include 里的 `*.tsx` 没有对应的文件，`src/components.d.ts` 已经被 `src/**/*.ts` 包含。
  - src/vite-env.d.ts 只留 `/// <reference types="vite/client" />`（`?inline` 和 `import.meta.env` 要它）：`*.vue` 的模块声明是给普通 tsc 用的，vue-tsc 不需要；GM API 都从 `vite-plugin-monkey/dist/client` import，用不到 vite-plugin-monkey 的两个全局声明。在仓库副本里试过，去掉之后 vue-tsc 照样通过。
  - 测试注释里引用的计划编号（sites.test.ts 的 B20、dialog.test.ts 的 B24）改成直接说明现在的行为：计划文档删掉这些编号之后，它们就指向不明。
- **文档**（S15 之后）：
  - 本文后半「参考：架构和约束」原样搬进 AGENTS.md，再补一节"新增站点怎么做"；「考虑过、不做的」里仍然成立的条目一并搬过去，免得以后再提。仓库只用 AGENTS.md 一份说明，不建 CLAUDE.md。搬完之后本文只剩历史。
  - README、README_zh：「开发计划」里的「本地写入性能优化」（英文版是用 trie 优化存储那条）已经由逐条存储解决，删掉；「核心工作流程」「核心技术特性」按新架构改写。
  - D8 定下来之后，更新 AGENTS.md 的版本号规则。

## 待决策

- [ ] **D8 · 版本号只留一个来源**（v2 留下的）
  - 现状：userscript 的版本号写在 vite.config.ts 里，package.json 的 `version` 一直是 1.0.0，AGENTS.md 规定发版时只改前者。
  - 建议：删掉 vite.config.ts 里的 `version`（vite-plugin-monkey 默认读 package.json 的），以后只改 package.json，同时改 AGENTS.md 的版本号规则。不改也没有实际问题。

## 调查

- [ ] **Q1 · 管理器把脚本源码和 GM 值交给页面的真实开销**
  - 背景：「性能与数据规模」里"每次注入约 53 ms"是按 VM 页面侧的源码建模、用 9.7 万条记录在 Node 里测的，TM 是闭源的。脚本自己每次只要 25 ms 左右，这笔开销可能是每次加载页面最大的一项。它和记录条数成正比，而一年的有效期下，本地会长期保有七八万条以上。
  - 管理器把脚本源码交给页面也要时间，和脚本的体积成正比（约 930 KB），「性能与数据规模」的测法没有包含这一步。
  - 做法：在真实的 TM（Chrome）和 VM（Firefox）里，用一个临时脚本分别写入 0、5 万、13 万条记录，用 DevTools 的 Performance 面板录激活页的加载，看注入前后主线程上和注入有关的任务。另外，不写记录，分别装约 930 KB 的产物和只有内核的包，比较两者注入时的任务。
  - 怎么用结果：
    - 13 万条时在两个管理器里都不超过 20 ms：关掉这一条。
    - 明显更大：再评估按 host 分片存储（键从几万个降到几十个）。分片会把"多个标签页并发写同一个键"的问题带回来，要在写入前现读、现合并，并分析剩下的竞争窗口，还要做一次迁移。
    - 源码这一步明显花时间（比如约 930 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物，比如把 `el-form` 换成普通布局，少约 63 KB。取色器不换（D10）。

## 考虑过、不做的

已经定了的决策（D7、D9、D10、D11）也列在这里，免得再提。

- **界面**
  - 去掉 Element Plus（D9）：按需执行之后，每次加载页面的开销已经和去掉它相当；去掉要重写整个设置界面，外观也会变。换别的组件库也不会更轻：同一组组件、同样不压缩、不含 Vue 时，Element Plus 约 600 KB 加约 100 KB 样式，Naive UI 约 820 KB（样式在 JS 里），无样式的 Reka UI 约 310 KB、样式还要全部自己写。
  - 把取色器换成原生控件（D10）：样式能全放进 shadow root，Element Plus 的部分少约 150 KB；代价是取色时没有透明度滑块，外观也会变。
  - 去掉 Tailwind，或者为了体积去压它的产物（D7）：它的 CSS 约 18 KB。
  - 用整份 Element Plus 样式（`element-plus/dist/index.css?inline`）代替按组件收集：能省掉 `cssSideEffects`、开发模式下的复制和 message.ts 里显式引入的样式，但产物要多约 260 KB。Q1 有结果之前不加体积。
  - 显式 import Element Plus 的组件，去掉 unplugin-vue-components：模板里的组件交给 resolver 是 Element Plus 的标准用法，模板更短；只有 message.ts 里用函数调用的组件要手写样式引入。
  - 拦下界面里的所有事件，对页面藏住用户输入的令牌：页面在捕获阶段先拿到事件，拦不住。现在只拦键盘事件的冒泡，为的是不触发页面的快捷键。
  - 用 SystemJS 拆块来按需加载（v3 的方案）：和单文件一样快，却多 3 个 `@require`（2 个来自 jsdelivr，1 个 data:）和一个全局的 `System`。
- **存储和同步**
  - 设置改成即时生效，去掉"保存"按钮：能省掉 draft 和快照，但把过期时间改小是破坏性的操作（清理会删掉超出的记录，下次上传时云端也跟着少），需要显式保存这一步。
  - 给访问记录的键加前缀，或者分片存储：加前缀要迁移好几万条记录，换来的只是去掉"其他键不能含冒号"这一条约定；分片看 Q1 的结果。
  - 把设置拆成多个 GM 键：能彻底消除整块写回带来的竞争，但要迁移；只写改过的字段之后，剩下的竞争窗口只有两个标签页几乎同时保存这一种。
  - 删掉旧版整块记录的迁移（migrateLegacyLinks）：每次加载只多一次 `GM_getValue`；删掉的话，停用过脚本一段时间的老用户会丢记录。
  - 去掉没有批量接口时逐条写的回退：只省两行，旧版本的管理器上记录访问会直接报错。
  - 多个标签页同时自动同步时加锁：合并取最大值是幂等的，并发只是多发一轮请求；自动同步开始之前就记下时间，晚一点打开的页面看得到，也会跳过。
  - 让"立即同步"、保存同步设置也影响自动同步的间隔（手动同步过就推迟自动同步，换了令牌就马上自动同步）：自动同步只看自己上次开始的时间最简单。手动同步之后 10 分钟内还会自动同步一次，只多一个 GET；换了令牌想马上同步，点"立即同步"。
  - 自动同步用 ETag 条件请求：304 只说明云端没变，要不要上传还得看本地，要么把本地全量读一遍，要么另存 ETag 和本地的最后写入时间，多一条代码路径；10 分钟一次时每小时最多 6 个 GET，离限流的 5000 很远。
- **运行时**
  - 用 Navigation API 检测 SPA 跳转：还得给不支持它的浏览器留一个 MutationObserver 的回退，两套机制不如一套。
  - 把 URL 检测和链接的 MutationObserver 合成一个：省一个 observer，但 page.ts 要把变化转交给当前的激活，两者就耦合在一起了；多一个 observer 的开销可以忽略。
  - 让 `startPage()` 返回一个停止函数，测试互相独立：线上用不到；test/runtime/ 的每个文件是一次页面加载，按顺序跑正合适；执行构建产物的 bundle、dialog 测试本来就停不下来。
  - 把其他标签页记下的访问实时染到当前页上：做得到（storage 写访问记录时顺带写一个计数键，其他标签页监听它的变化，重新判断当前页面上的链接），但这是新功能，不在重构的范围内。
  - 改成 `document-start` 运行，消除"先显示、后变色"的闪烁：要先知道管理器在 `document-start` 注入全部 GM 值会不会推迟页面的解析（Q1 的数据可以帮助判断），而且这是行为上的变化。
  - 给 shadow DOM 里的链接染色（比如新版 reddit）：新功能，不在重构的范围内。
- **构建和测试**
  - 靠构建配置缩小产物：压缩，Greasy Fork 不允许；删除死代码，默认已经开着；按需引入，已经生效（完整的 Element Plus 不压缩有 2.1 MB）。`externalGlobals` 从 CDN `@require` 的 Element Plus 只有完整版（压缩后 1.1 MB），更大，而且每次照样要解析。
  - Vitest 的 browser mode（D11）：测试页面在 Vitest 自己的服务器上，`location` 改不了，`pushState` 也不能换域名，测不了 test/runtime/ 的场景；跑的是源码，验证不了产物的 CSS；不值得为它多两个 devDependency、每次发版都在 CI 里装一次 Chromium。

---

## 参考：架构和约束

S16 把这一半原样搬进 AGENTS.md。写的是 S15 做完之后的样子；还没做到的地方标了步骤号，做完一步就去掉对应的标记。

### 模块

| 模块 | 职责 |
|---|---|
| `main.ts` | 组合根。按顺序：注册"设置"菜单 → 迁移旧数据 → 轮到了就清理过期记录（一天一次）→ 轮到了就自动同步（10 分钟一次）→ `startPage()`。每一步各自接住错误；菜单最先注册，后面哪一步出错，设置都还能打开 |
| `shared/sites.ts` | 站点表、按链接的 hostname 查表的 `normalizeUrl`、`isSiteEnabled`、`findActiveSite`。Node 也会执行它（见「构建与发布」） |
| `core/storage.ts` | 唯一调用 GM 存储 API 的模块，所有键名都定义在这里：访问记录的读写和 `onLinksChange`；设置的原始读写和其他标签页写入的订阅；`lastSyncTime` 的读写和订阅；后台任务轮流做的 `takeTurn`；旧数据迁移 |
| `core/settings.ts` | 默认值、`parseSettings`、`getSettings` / `saveSettings` / `onSettingsChange`、`diffSettings` |
| `core/page.ts` | 常驻的 URL 检测；URL 或设置一变，就释放上一次的激活、重新激活 |
| `core/colorizer.ts` | `activate(site, settings)` 返回 dispose，管染色样式、标记、observer、点击、批量标记和撤销 |
| `core/shortcut.ts` | 快捷键的匹配、显示、录入，`isTyping` |
| `core/log.ts` | 调试开关打开时的日志 |
| `core/sync/codec.ts` | 同步格式：`encode`、`decode`，纯函数 |
| `core/sync/github.ts` | 唯一发网络请求的地方 |
| `core/sync/index.ts` | `syncWithCloud`、`testConnection`、带通知的 `runSync`、`autoSync` |
| `ui/notify.ts` | 启动时就在的一层壳：`notify()` 被调用时才 `import()` message.ts |
| `ui/message.ts` | 用 Element Plus 的 `ElMessage` 显示通知。通知不属于哪个 Vue 应用，`ELEMENT_PLUS_CONFIG` 经一个只带配置、不挂载的应用的 context 交给它 |
| `ui/root.ts` | 第一次用到时才创建宿主元素和 closed shadow root，把样式写进去，拦下界面里键盘事件的冒泡（Tab 除外）；`createMountPoint()` 给对话框、通知各一个挂载点；`addPanelStyle()` 把取色面板要的样式写进 `<head>`；`ELEMENT_PLUS_CONFIG`：对话框、通知共用的 Element Plus 配置，现在只有 z-index 的起点 |
| `ui/dialog.ts`、`ui/*.vue` | `openSettings()`：每次打开都新建一个 Vue 应用（带上 `ELEMENT_PLUS_CONFIG`），关掉就卸载。每个 tab 一个组件，用 `v-model` 编辑 draft 里自己的那个分组 |
| `ui/draft.ts` | 对话框的纯逻辑：`toDraft`、"重置为默认"、过期时间按天编辑时的换算 |

### 依赖规则

- core 只通过 `ui/notify.ts` 使用界面；ui 不 import page.ts、colorizer.ts。
- 启动时执行的模块（main.ts、core/、shared/、ui/notify.ts）不静态 import vue、element-plus、@element-plus/*、`.vue` 和 ui/ 里的其他模块，ESLint 的 `no-restricted-imports` 守住这一条。界面只从两个 `import()` 进来：菜单回调、第一次通知。
- 没有事件总线。跨模块的变化只有存储上的三个订阅：`onSettingsChange`、`onLinksChange`（本标签页的访问记录）、`onLastSyncTimeChange`（设置页显示用），其余都是直接调用。
- 类型跟着它所属的模块走，没有公共的类型文件。

### 关键机制

- **设置只有一条更新路径。** `saveSettings(patch)` 把改动合并到存储里的当前值上，写回后通知订阅者；其他标签页写入后，storage 的订阅同样通知。订阅者用 `getSettings()` 读新值，读的时候规范化，不缓存。页面只订阅一次。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：扫描新出现的、或 href 变了的链接；收到本标签页访问记录的增删通知。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。
  - 扫描时不看链接原来有没有标记，一律按当前的 href 重新判断：翻页、"换一批"、虚拟滚动这类列表会复用 `<a>`、只换 href；移出 DOM 之后再改的 href，observer 收不到，只能在插回来时判断；克隆出来的链接也带着原来的标记。
  - 结果没变时不写 DOM：用 `toggleAttribute(name, force)`，状态没变就不产生变化记录；`setAttribute` 即使值没变，页面上的 MutationObserver 也会收到一次。
- **激活一次，释放一次。** `activate` 里的监听器共用一个 AbortController；observer、订阅、样式、标记都在它返回的 dispose 里释放。
- **后台任务轮流做。** 过期清理、自动同步都先过 `takeTurn`：每个任务一个时间戳，所有标签页共用，距上次开始不到间隔就跳过；轮到了先写下现在的时间，再开始做，失败也算一次。设置页的"立即同步"不经过它。
- **对话框只有一份 draft、一个保存。** 打开时取 `getSettings()` 作快照，`toDraft` 出一份副本给各个 tab 编辑；有没有改动看 `diffSettings(快照, draft)` 是不是空的，保存就是把这份差别交给 `saveSettings`，之后快照、副本都换成存储里的最新值。只有关闭按钮会关，没保存的修改跟着丢掉。
- **界面单文件、按需执行。** 没打开过设置、也没弹过通知的页面上，没有宿主元素，Vue 和 Element Plus 的代码不执行，宿主页面上只多一段染色样式；只有设置对话框开着时，`<head>` 里多一份给取色面板用的 Element Plus 样式（见「构建与发布」）。
- **界面和宿主页面互不影响。** closed shadow root 隔开选择器和元素；`:host { all: initial }` 挡住继承的样式；界面里的 keydown、keypress、keyup 在 shadow root 上停止冒泡，页面和脚本自己挂在 document 冒泡阶段的监听都收不到，Tab 除外（见「运行平台」）；Tailwind 的 rem 在构建时换成 px；Element Plus 的弹层从一个很高的 z-index（20 亿）起往上叠。取色面板是例外，挂在 `document.body`。

### 写法

- 注释写"为什么现在是这样"；以前是怎么写的、修过什么 bug，写进提交信息。不写 `// ====== 模块 ======` 这类横幅。
- 只有 shared/ 会在 Node 里执行，别的模块不为 Node 给浏览器全局对象判空。

### 用户数据

要守的兼容都来自已有的用户数据和其他设备上的旧版本，写干净之后代价都很小。

- **访问记录**：每条单独存成一个 GM 值，键是归一化后的 URL，值是最近一次访问的时间戳（ms），过期从这个时间算起。
  - 只有 storage.ts 读写它们。storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**其他键都不能含冒号**。
  - 所有写入（点击、批量标记、同步合并、迁移）都经过 `mergeLinks`，只会把时间戳改大。
  - 过期的记录在读的时候就当作没有（`isVisited` 按当前的过期时间判断），不依赖清理。
  - 删除记录的只有两处：
    - 过期清理：要把全部记录读一遍，所以所有标签页合起来一天最多一次，时间记在 `lastCleanupTime`。不要把它放回每次初始化页面的路径上。
    - 批量标记的撤销：只删时间戳仍等于那次标记时间的记录（`deleteLinksIfUnchanged`）。这依赖两点：批量标记不碰还没过期的记录；点击会刷新时间戳。改其中任何一点，都要连撤销一起看。
  - v2.21.0 及以前把全部记录存在 `visitedLinks` 一个键里。启动时把它逐条合并进来再删掉，可以重复执行。
- **归一化的输出就是存储键，站点 id 就是 `userSettings.preset` 的键。** 改了哪一个，已有的数据就对不上。归一化的输出由 test/normalize.test.ts 的黄金表锁住，站点 id 由 test/sites.test.ts 锁住。
- **`userSettings`**：存在一个 GM 值里，字段名都已经持久化了：
  ```ts
  {
    general: { color: string; expirationTime: number /* ms */; debug: boolean },
    preset:  Record<站点 id, boolean>,
    batch:   { ctrlKey, shiftKey, altKey, metaKey: boolean; code: string /* KeyboardEvent.code */ },
    sync:    { enabled: boolean; githubToken: string; gistId: string },
  }
  ```
  - 读取时要容忍：字段缺失或类型不对（包括 `preset` 是 null）；v2.21.0 及以前残留的 `sync.lastSyncTime`；快捷键缺 `code`（当时存的是 `key`，已经接受让这些用户重录）；`expirationTime` 不到 1 天（含 null、0、负数），这时换成默认的一年，否则所有记录都会被当作过期，清理时全部删掉。
  - `preset` 里没有的站点算启用（新站点默认启用）；已经删掉的站点留下的键不影响任何东西。
  - 保存时只写改过的字段，合并到存储里的当前值上；快捷键改了就整个替换（按字段合并的话，会拼出一个谁都没设过的组合）。这样对话框开着时其他标签页做的修改不会被冲掉。
- **`lastSyncTime`**：上次同步成功的时间，只有同步会写它，只用来在设置页显示"最后同步时间"。
- **`lastAutoSyncTime`**：上次自动同步开始的时间，开始之前写，成功、失败都算。加载页面时距它不到 10 分钟就不自动同步；所有标签页共用，所以是整个浏览器合起来 10 分钟最多一次。设置页的"立即同步"不看它，也不写它。
- **云端（Gist）的格式**：其他设备上可能还跑着旧版本的脚本。
  - 读：v3 和 v2 压缩包（压缩算法只有 gzip），以及旧的明文格式（键是网址、值是数字的对象，或者带 `visitedLinks` 字段的对象）。
  - 写：一律写 v3。外层包的 7 个字段都要写（`syncVersion`、`encoding`、`payload`、`itemCount`、`updatedAt`、`originalBytes`、`compressedBytes`），因为旧版本读取时会校验全部字段。`payload` 是先按 host 分组、组内排序后再做前缀差分的 JSON，gzip 之后再 base64。

### 同步的行为不变量（每一条都有 test/sync/ 里的测试锁住）

1. HTTP 请求失败时必须抛错，不能当作"云端为空"，否则紧接着就会用本地数据覆盖云端。
2. 遇到不认识的 `syncVersion`（通常来自更新版本的脚本）时抛错，不覆盖云端。
3. `syncVersion` 认识，但解码要用的字段（`encoding`、`payload`）不对，或者解出来的结构不对，也抛错，不覆盖云端。
4. 文件超过 1 MB 被截断时，改用 raw_url 获取完整内容。获取到的内容认不出来（比如代理或限流返回的 HTML）时抛错，不覆盖云端。
5. 不是同步数据的内容按"空"处理，并标记需要初始化，本次同步会把它写成同步格式。这包括：空内容、不是 JSON、不是对象、没有同步特征的对象（含 `{}`）。这样新建 Gist 时内容可以随便填。
6. 自愈：丢掉键不含冒号、或值不是有限数字的条目（比如旧脚本混进来的同步包字段），并打一行警告。规则和写入存储前的过滤是同一个函数（storage.ts 的 `isLinkEntry`）。原来有条目、却一条都留不下时，按结构不对抛错。
7. 合并时每条 URL 取较大的时间戳，而且直接和存储里的当前值比较，所以同步期间本标签页或其他标签页的写入不会被覆盖。
8. 只有合并后的数据和云端不一致（两边都去掉过期记录后再比），或者需要初始化时，才上传。云端只是有记录到期，不单独触发上传：否则几乎每次同步都要传一遍整份数据，过期时间不同的设备还会来回上传。
9. 过期记录两个方向都不同步：合并云端数据前、上传前，都按本机的过期时间去掉，两边用同一个截止时间。
10. 编码必须逐字往返：`decode(encode(x))` 的每个键都和原来完全一样。
    - 所以组内存的是从原字符串上截掉 origin 之后的部分，不能用 `new URL` 拆开再拼：`pathname + search + hash` 会丢掉末尾空的 `?`、`#`。
    - 不以 `<分组的 origin>/` 开头的 URL（`mailto:` 这类没有 host 的、解析失败的），整条放进 `@raw` 分组。否则解码时路径不以 `/` 开头会报错，整批同步都失败。
11. 请求次数：和云端一致时只有 1 个 GET；要上传时是 GET 加 PATCH，PATCH 用 GET 拿到的文件名；文件被截断时再多一个 raw_url 的 GET。

### 构建与发布

- **站点表会在 Node 中执行。** vite.config.ts 在 Node 里 import 它来生成脚本头部（不写 `match` 的站点按 `pages` 生成 `@include`，写了的生成 `@match`），所以它的顶层不能引用浏览器全局对象，也不能 import 别的 src 模块。
- **体积只能靠减少依赖。** Greasy Fork 不允许发布压缩过的代码。
- **发版由 CI 完成**（[release.yml](../../.github/workflows/release.yml)），构建产物不入库。
  - 构建前先跑 `pnpm test` 和不带 `--fix` 的 eslint，任何一步失败都不发版。所以提交前要让这两项都通过。
  - 产物文件名 `color-visited.user.js` 不能改，头部要保留 `@version`。
  - tag 指向 CI 另加的、放着构建产物的提交：Greasy Fork 收到 release 事件后，是用 `git show <tag>:color-visited.user.js` 取脚本的。
- **单文件。** 产物是一个 IIFE：`codeSplitting: false` 时，Rolldown 把被动态 import 的模块包进用到时才执行的初始化函数。vite.config.ts 的 singleFile 清空入口 chunk 的 `dynamicImports`（Rolldown 把入口自己列在里面，vite-plugin-monkey 看到就改用 SystemJS），产物里出现 `System.register` 就让构建失败。
- **已经定了的界面技术**：布局和装饰用 Tailwind（D7）；设置界面和通知用 Element Plus（D9），按需执行；取色器用 `el-color-picker`（D10），它的面板只能挂在 `document.body`。
  - 原因：Element Plus 的 click-outside 在 document 上监听 mousedown、mouseup，按 `event.target` 判断是不是点到了外面；shadow root 里的点击传到 document 时，`target` 已经换成了宿主元素。面板放进 shadow root 之后（open、closed 都一样），在面板里点一个预设色块，值变了，面板随即被当成点到外面而关掉，选的颜色也被重置（2026-10-16，Chrome 155，CDP 的真实鼠标事件）。
  - 代价：对话框开着时，宿主页面的 `<head>` 里要有一份 Element Plus 的样式，宿主网站自己也用 Element Plus 时两边会互相干扰。
- **界面的样式**（ui/root.ts）：shadow root 里先写 ui/style.css（Tailwind 和自己的样式），收集到的 Element Plus 样式把 `:root` 换成 `:host`、整段包进 `@layer components{…}`，接在后面。vite.config.ts 改写 Tailwind 的输出：`@layer properties` 里那层 `@supports` 换成 `@media all`（`@property` 在 shadow root 里不生效）；rem 按 16px 换成 px（rem 跟着宿主页面的根字号走）。
  - 不要另外声明层的顺序：比如先写一句 `@layer theme, base, element-plus, components, utilities;`，没列进去的 properties 层就排到了最后，放开的初始值会盖掉工具类设置的 `--tw-shadow`、`--tw-gradient-*`，阴影和渐变照样不显示。
  - 改动这几处，边框、阴影、渐变和写在 Element Plus 组件上的工具类会悄悄失效（以前的 B19）。test/bundle.test.ts 只查得到写进去的文本，效果要在浏览器里看。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

- **注入范围和激活范围。** 注入范围是管理器把脚本加载进哪些页面，由 `@include`、`@match` 决定，管理器只在整页加载时检查；激活范围是脚本在哪些页面上染色，由站点的 `pages` 在运行时判断，URL 一变就重新判断。
  - SPA 站点要写 `match` 覆盖整个 host：站内跳转不是整页加载，管理器不会补注入，否则从非激活页（比如从外部链接打开的帖子）站内跳到激活页，脚本一直不在。
  - 非 SPA 站点不写 `match`：每次注入，管理器都要把全部 GM 值交给页面（见「性能与数据规模」）。新增站点时，先在浏览器里从详情页点回列表页，看是整页跳转还是站内跳转。
- **SPA 跳转检测用 MutationObserver。** 隔离环境里 hook 不到页面的 `history.pushState`，只能在 MutationObserver 的回调里比较 `location.href`。这个检测在非激活页上也必须一直运行：v2.19.4 修过从非激活页跳到激活页时监听失效的问题。
- **注入环境。** Tampermonkey 不写 `@sandbox` 时默认是 `raw`，注入页面的 MAIN_WORLD；Violentmonkey 的 `@inject-into` 默认是 `auto`，也是先试页面环境（S15 之后两者都进隔离环境）。在页面环境里，脚本用到的全局对象和原型都和页面共享，`fetch` 和外链的资源都受页面 CSP 的限制。
  - 所以网络请求一律走 `GM_xmlhttpRequest`（只有 core/sync/github.ts 发请求）：Hacker News 的 CSP 是 `default-src 'self'`，页面的 `fetch` 连不了 api.github.com，请求根本发不出去。测试里全局的 `fetch` 被换成直接失败，哪里用了它，同步的测试就会失败。
- **界面的事件和层叠。** 键盘事件、input 事件都是 composed 的，会穿出 shadow root；页面在 document 上看到的目标是宿主元素（closed 时 `composedPath()` 也只给到宿主元素），分不出用户是不是在输入框里打字。页面在捕获阶段先于 shadow root 拿到事件。宿主元素没有定位，界面里的弹层和页面的元素在同一个层叠上下文里比 z-index。
  - Element Plus 的焦点陷阱拿 `document.activeElement` 找焦点，closed shadow root 里它只是宿主元素，所以对话框里按 Tab 不会循环。焦点移到对话框外的元素上时，它看 document 上最近一次是 keydown 还是 mousedown，是按键移走的才拉回来：按 Shift+Tab 移出第一个元素会被拉回来，按 Tab 从最后一个元素移到浏览器的地址栏就不管了。所以 Tab 不能在 shadow root 上拦下（2026-10-20，Chrome 146 headless，CDP 的真实按键：拦下 Tab 之后，点过对话框里的输入框再按 Shift+Tab，焦点跑到页面上）。
  - 不能把宿主元素做成层叠上下文（加定位和 z-index，或者用 popover 放进顶层）：取色面板挂在 body 里，会被整个压在对话框下面。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，在旧版本上退回逐条写。
  - `GM_addValueChangeListener` 对本标签页自己的写入也可能回调（VM 文档写明了这一点），这时 `remote` 为 false。只想订阅其他标签页的写入时，要跳过这种回调。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块，注入页面时整份交给页面。所以键越多，每次注入就越慢（见 Q1）。

### 性能与数据规模

- 每次加载激活页，脚本自己在渲染主线程上约 25 ms，CPU 降速 4 倍时约 100 ms（2026-10-18，WSL 上的 chrome-headless-shell 146；模拟的 v2ex 首页，500 个帖子链接，GM 桩里 10 万条记录、一半链接访问过）。产物约 930 KB，界面的代码从不执行时只做预解析。第一次打开设置约 100 ms；批量标记 250 个链接加第一条通知约 30 ms。
  - 测法：用 Node 自带的 WebSocket 走 CDP，Fetch 拦截返回模拟的页面；先把 GM 桩和要注入的源码作为字符串放进页面，再在页面里建 `<script>` 执行，取前后两次 `Performance.getMetrics` 的 `TaskDuration` 之差；每次新开浏览器，7 次（降速时 5 次）取中位数。源码一定要先放进页面：经 DevTools 协议传 900 多 KB 的源码，光这一步就占主线程约 21 ms，真实的管理器不走这条路。
  - 不含管理器把脚本源码和 GM 值交给页面的开销（Q1），Firefox 没测。数字只用来比较同一次测量里的几种产物，不当绝对值用。
- 访问记录：2026-10-10 的同步数据有 129,378 条，分布在 33 个 host。按一年的有效期，其中 44% 已经过期；上传时去掉过期记录后剩 71,916 条，Gist 文件约 680 KB，低于 1 MB，所以正常同步不走 raw_url。本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧的源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：点击一次只写一个键，页面主线程的开销约为 0；每次注入页面约 53 ms（没在真实的管理器里量过，见 Q1）；后台每次持久化约 25 ms，不在页面主线程上。
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的。
