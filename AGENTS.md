# AGENTS 指南

## 语言

- 默认使用中文。
- 回复、说明、提交建议优先写中文，必要时保留少量英文技术词。

## 包管理器

- 强制使用 `pnpm`。
- 安装依赖、运行脚本、添加或移除依赖时，统一使用 `pnpm`，不要使用 `npm`、`yarn` 或其他包管理器。
- 常见示例：`pnpm install`、`pnpm build`、`pnpm add xxx`

## 测试

- 提交前这三项都要通过：`pnpm test`（几秒钟）、`pnpm exec eslint`、`pnpm typecheck`，CI 发版前也跑这些（见「发版」）。`pnpm lint` 带 `--fix`，会直接改文件。
- 纯逻辑在 Node 里跑，GM API、GitHub 换成 test/fakes/ 里的内存版。
- 运行时的 DOM 行为在 jsdom 里跑（test/runtime/）：每个文件是一次页面加载，开头一行写着场景，只经过其中的 helpers.ts 碰实现。
- 设置对话框的 .vue 只有构建时才编译，它的交互在 jsdom 里执行构建出来的脚本来测（test/dialog.test.ts）；产物本身（单文件、界面按需执行、样式写在哪）由 test/bundle.test.ts 检查。
- 样式层叠、对话框外观、真实的管理器只能在浏览器里验证。
- 用到真实同步数据的测试，在 test/fixtures/local/ 里没有样本时跳过；样本不入库，说明见那里的 README。

## 版本号

- 版本号只写在 `vite.config.ts` 的 `userscript.version`，发版或“把版本号加一”时改它；`package.json` 不写 `version`（D8）。

## 发版

- 发版由 CI 完成（[release.yml](.github/workflows/release.yml)）。构建产物 `dist/` 不入库，不用手动构建、提交。
- push 到 `main` 后，CI 先跑 `pnpm test` 和不带 `--fix` 的 eslint，任何一步失败都不构建、不发布；都通过才构建脚本（`pnpm build` 先跑 vue-tsc，类型检查不过也不发布）。版本号还没发布过时，自动发一个 GitHub Release（tag 为 `v版本号`），Greasy Fork 收到 webhook 后跟着更新；版本号没变的提交只构建、不发布。
- 产物文件名 `color-visited.user.js`（vite-plugin-monkey 按 `package.json` 的 `name` 取）不能改，头部要保留 `@version`。
- tag 指向 CI 另加的、放着构建产物的提交：Greasy Fork 收到 release 事件后，是用 `git show <tag>:color-visited.user.js` 取脚本的。

## Git Commit Message

根据现有历史，仓库主流格式是：

```text
type: 中文摘要
type(scope): 中文摘要
```

- 常见 `type`：`feat`、`fix`、`refactor`、`chore`、`docs`、`perf`、`ui`
- `scope` 可选，常见有 `core`、`sync`、`ui`、`types`、`styles`、`settings`、`readme`
- 摘要通常是一行中文，直接说明改动，不写空话
- 只有明确对应发版时，才在末尾加版本号，如 ` (v2.19.0)`

推荐示例：

```text
feat: 新增 gzip 压缩同步存储
fix(sync): 修复同步期间点击链接丢失的问题
docs(readme): 更新同步存储说明
```

避免：

- `fix: 修点问题`
- `refactor: 调整代码`
- `feat: 加站点支持并重构设置页并升级依赖`

## 架构和约束

改代码时不能破坏的东西。改了这里写到的架构或约束，在同一个提交里改这一节；只关于某一个函数的细节写在它的注释里，这里只指过去，不在两处各写一遍。

文中的 D7、D9 这类，是计划文档里已经定了的决策的编号，提交信息里引用过。

### 模块

路径相对于 `src/`。

| 模块 | 职责 |
|---|---|
| `main.ts` | 组合根。按顺序：注册"设置"菜单 → 迁移旧数据 → 轮到了就清理过期记录（一天一次）→ 轮到了就自动同步（10 分钟一次）→ `startPage()`。每一步各自接住错误；菜单最先注册，后面哪一步出错，设置都还能打开 |
| `shared/sites.ts` | 站点表、按链接的 hostname 查表的 `normalizeUrl`、按页面的 URL 查站点的 `findSite`（不看站点开关，开没开由 page.ts 看设置）。Node 也会执行它（见「构建与发布」） |
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
| `ui/draft.ts` | 对话框的纯逻辑："重置为默认"、过期时间按天编辑时的换算 |

### 依赖规则

- core 只通过 `ui/notify.ts` 使用界面；ui 不 import page.ts、colorizer.ts。
- 启动时执行的模块（main.ts、core/、shared/、ui/notify.ts）不静态 import vue、element-plus、@element-plus/*、`.vue` 和 ui/ 里的其他模块，ESLint 的 `no-restricted-imports` 守住这一条。界面只从两个 `import()` 进来：菜单回调、第一次通知。
- 没有事件总线。跨模块的变化只有存储上的三个订阅：`onSettingsChange`、`onLinksChange`（本标签页的访问记录）、`onLastSyncTimeChange`（设置页显示用），其余都是直接调用。
- 类型跟着它所属的模块走，没有公共的类型文件。

### 关键机制

- **设置只有一条更新路径。** `saveSettings(patch)` 把改动合并到存储里的当前值上，写回后通知订阅者；其他标签页写入后，storage 的订阅同样通知。订阅者用 `getSettings()` 读新值，读的时候规范化，不缓存。页面只订阅一次。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：扫描新出现的、或 href 变了的链接；收到本标签页访问记录的增删通知，扫描整页。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。扫描时一律按链接当前的 href 重新判断、不看原来有没有标记，结果没变时不写 DOM，原因见 colorizer.ts 的 `updateLinks`。
- **激活一次，释放一次。** `activate` 里的监听器共用一个 AbortController；observer、订阅、样式、标记都在它返回的 dispose 里释放。
- **后台任务轮流做。** 过期清理、自动同步都先过 `takeTurn`：每个任务一个时间戳，所有标签页共用，距上次开始不到间隔就跳过；轮到了先写下现在的时间，再开始做，失败也算一次。设置页的"立即同步"不经过它。
- **对话框只有一份 draft、一个保存。** 打开时取两次 `getSettings()`，一份作快照，一份作副本给各个 tab 编辑（每次取到的都是新建的对象）；有没有改动看 `diffSettings(快照, draft)` 是不是空的，保存就是把这份差别交给 `saveSettings`，之后快照、副本都重新从存储里取。只有关闭按钮会关，没保存的修改跟着丢掉。
- **界面单文件、按需执行。** 没打开过设置、也没弹过通知的页面上，没有宿主元素，Vue 和 Element Plus 的代码不执行，宿主页面上只多一段染色样式；只有设置对话框开着时，`<head>` 里多一份给取色面板用的 Element Plus 样式（见「构建与发布」）。
- **界面和宿主页面互不影响。** 脚本在隔离环境里运行，页面改写不了它用到的内置对象，也看不到它的 JS 对象（见「运行平台」）；closed shadow root 隔开选择器和元素；`:host { all: initial }` 挡住继承的样式；界面里的 keydown、keypress、keyup 在 shadow root 上停止冒泡，页面和脚本自己挂在 document 冒泡阶段的监听都收不到，Tab 除外（见「运行平台」）；Tailwind 的 rem 在构建时换成 px；Element Plus 的弹层从一个很高的 z-index（20 亿）起往上叠。取色面板是例外，挂在 `document.body`。

### 写法

- 注释写"为什么现在是这样"；以前是怎么写的、修过什么 bug，写进提交信息。不写 `// ====== 模块 ======` 这类横幅。
- 纯逻辑和搬运分开：站点匹配、归一化、设置的规范化和比较、同步格式的编解码都写成纯函数，在 Node 里测；碰 GM、DOM、网络的代码只做搬运。
- 检查只放在数据进来的地方：存储里读出的值、云端数据、页面的 DOM 和事件、用户的输入。模块之间相信类型和已经守住的约束，不为不会发生的状态写分支，同一件事只守一处。
- 错误只在接住之后行为会变的地方接：后面的步骤照常执行、变成给用户的提示、走另一条分支；promise 都要有 catch。接住的地方报告一次。
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
  - `preset` 读取时按站点表列全：存储里是布尔值的照用，没有的站点算启用（新站点默认启用），已经删掉的站点的键不留。所以保存过一次之后，存储里列着站点表里的每个站点。
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
10. 编码必须逐字往返：`decode(encode(x))` 的每个键都和原来完全一样。URL 要怎么拆才做得到（末尾空的 `?`、`#`，`mailto:` 这类没有 host 的），见 codec.ts 的 `splitUrl`。
11. 请求次数：和云端一致时只有 1 个 GET；要上传时是 GET 加 PATCH，PATCH 用 GET 拿到的文件名；文件被截断时再多一个 raw_url 的 GET。

### 构建与发布

- **站点表会在 Node 中执行。** vite.config.ts 在 Node 里 import 它来生成脚本头部（不写 `match` 的站点按 `pages` 生成 `@include`，写了的生成 `@match`），所以它的顶层不能引用浏览器全局对象，也不能 import 别的 src 模块。
- **体积只能靠减少依赖。** Greasy Fork 不允许发布压缩过的代码。
- **发版由 CI 完成**，见上面的「发版」。
- **单文件。** 产物是一个 IIFE，界面的代码也在里面，用到时才执行；vite.config.ts 的 `singleFile` 让它不退回 SystemJS，原因和什么时候能删见那里的注释。
- **已经定了的界面技术**：布局和装饰用 Tailwind（D7）；设置界面和通知用 Element Plus（D9），按需执行；取色器用 `el-color-picker`（D10），它的面板只能挂在 `document.body`。
  - 原因：Element Plus 的 click-outside 在 document 上监听 mousedown、mouseup，按 `event.target` 判断是不是点到了外面；shadow root 里的点击传到 document 时，`target` 已经换成了宿主元素。面板放进 shadow root 之后（open、closed 都一样），在面板里点一个预设色块，值变了，面板随即被当成点到外面而关掉，选的颜色也被重置（2026-10-16，Chrome 155，CDP 的真实鼠标事件）。
  - 代价：对话框开着时，宿主页面的 `<head>` 里要有一份 Element Plus 的样式，宿主网站自己也用 Element Plus 时两边会互相干扰。
- **界面的样式**（ui/root.ts）：shadow root 里先写 ui/style.css（Tailwind 和自己的样式），收集到的 Element Plus 样式把 `:root` 换成 `:host`、整段包进 `@layer components{…}`，接在后面。vite.config.ts 改写 Tailwind 的输出：`@layer properties` 里那层 `@supports` 换成 `@media all`（`@property` 在 shadow root 里不生效）；rem 按 16px 换成 px（rem 跟着宿主页面的根字号走）。
  - 不要另外声明层的顺序：比如先写一句 `@layer theme, base, element-plus, components, utilities;`，没列进去的 properties 层就排到了最后，放开的初始值会盖掉工具类设置的 `--tw-shadow`、`--tw-gradient-*`，阴影和渐变照样不显示。
  - 改动这几处，边框、阴影、渐变和写在 Element Plus 组件上的工具类会悄悄失效。test/bundle.test.ts 只查得到写进去的文本，效果要在浏览器里看。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

- **注入范围和激活范围。** 注入范围是管理器把脚本加载进哪些页面，由 `@include`、`@match` 决定，管理器只在整页加载时检查；激活范围是脚本在哪些页面上染色，由站点的 `pages` 在运行时判断，URL 一变就重新判断。
  - SPA 站点要写 `match` 覆盖整个 host：站内跳转不是整页加载，管理器不会补注入，否则从非激活页（比如从外部链接打开的帖子）站内跳到激活页，脚本一直不在。
  - 非 SPA 站点不写 `match`：每次注入，管理器都要把全部 GM 值交给页面（见「性能与数据规模」）。怎么判断是不是 SPA，见「新增站点怎么做」。
- **SPA 跳转检测用 MutationObserver**，在非激活页上也一直运行，原因见 page.ts 的 `watchUrl`。
- **注入环境。** 脚本头部写了 `@sandbox DOM`（Tampermonkey 认）和 `@inject-into content`（Violentmonkey 认），两个管理器都把脚本放进隔离环境：和页面共用 DOM，JS 对象各是各的。不写的话，两个管理器默认都先放进页面环境（TM 的 `raw`、VM 的 `auto`），脚本用到的全局对象和原型都和页面共享。
  - 页面环境里，页面先换掉 `attachShadow` 就能拿到 closed shadow root，换掉输入框 `value` 的 setter 就能在打开设置时看到令牌；Vue 设的 `__VUE__` 也落在页面的 `window` 上。放进隔离环境之后这些都没有了，功能不变（2026-10-29，Chrome 146 headless，CDP 的 isolated world 里执行构建产物，和页面环境对照）。在输入框里打字、粘贴，页面在捕获阶段照样看得到，见「已经定了的取舍」。
  - 开发模式（`pnpm dev`）不写这两行，代码在页面环境里跑：vite-plugin-monkey 的加载器往页面里插 `<script type="module">` 加载源码，GM API 挂在 `document` 的一个属性上交给它，而这种属性两个环境互相看不到。所以开发模式验证不了隔离环境里的行为。
  - 网络请求一律走 `GM_xmlhttpRequest`（只有 core/sync/github.ts 发请求）：由管理器发出，不受页面 CSP 的限制。页面环境里的 `fetch` 受页面 CSP 的限制：Hacker News 的 CSP 是 `default-src 'self'`，连不了 api.github.com。测试里全局的 `fetch` 被换成直接失败，哪里用了它，同步的测试就会失败。
- **界面的事件和层叠。** 键盘事件、input 事件都是 composed 的，会穿出 shadow root；页面在 document 上看到的目标是宿主元素（closed 时 `composedPath()` 也只给到宿主元素），分不出用户是不是在输入框里打字。页面在捕获阶段先于 shadow root 拿到事件。宿主元素没有定位，界面里的弹层和页面的元素在同一个层叠上下文里比 z-index。
  - Element Plus 的焦点陷阱拿 `document.activeElement` 找焦点，closed shadow root 里它只是宿主元素，所以对话框里按 Tab 不会循环。焦点移到对话框外的元素上时，它看 document 上最近一次是 keydown 还是 mousedown，是按键移走的才拉回来：按 Shift+Tab 移出第一个元素会被拉回来，按 Tab 从最后一个元素移到浏览器的地址栏就不管了。所以 Tab 不能在 shadow root 上拦下（2026-10-20，Chrome 146 headless，CDP 的真实按键：拦下 Tab 之后，点过对话框里的输入框再按 Shift+Tab，焦点跑到页面上）。
  - 不能把宿主元素做成层叠上下文（加定位和 z-index，或者用 popover 放进顶层）：取色面板挂在 body 里，会被整个压在对话框下面。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，在旧版本上退回逐条写。
  - `GM_addValueChangeListener` 对本标签页自己的写入也可能回调（VM 文档写明了这一点），这时 `remote` 为 false。只想订阅其他标签页的写入时，要跳过这种回调。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块，注入页面时整份交给页面。所以键越多，每次注入就越慢。

### 性能与数据规模

- 每次加载激活页，脚本自己在渲染主线程上约 25 ms，CPU 降速 4 倍时约 100 ms（2026-10-18，WSL 上的 chrome-headless-shell 146；模拟的 v2ex 首页，500 个帖子链接，GM 桩里 10 万条记录、一半链接访问过）。产物约 930 KB，界面的代码从不执行时只做预解析。第一次打开设置约 100 ms；批量标记 250 个链接加第一条通知约 30 ms。
  - 测法：用 Node 自带的 WebSocket 走 CDP，Fetch 拦截返回模拟的页面；先把 GM 桩和要注入的源码作为字符串放进页面，再在页面里建 `<script>` 执行，取前后两次 `Performance.getMetrics` 的 `TaskDuration` 之差；每次新开浏览器，7 次（降速时 5 次）取中位数。源码一定要先放进页面：经 DevTools 协议传 900 多 KB 的源码，光这一步就占主线程约 21 ms，真实的管理器不走这条路。
  - 不含管理器把脚本源码和 GM 值交给页面的开销，Firefox 没测。数字只用来比较同一次测量里的几种产物，不当绝对值用。
- 访问记录：2026-10-10 的同步数据有 129,378 条，分布在 33 个 host。按一年的有效期，其中 44% 已经过期；上传时去掉过期记录后剩 71,916 条，Gist 文件约 680 KB，低于 1 MB，所以正常同步不走 raw_url。本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧的源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：点击一次只写一个键，页面主线程的开销约为 0；每次注入页面约 53 ms（没在真实的管理器里量过）；后台每次持久化约 25 ms，不在页面主线程上。
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的。

## 新增站点怎么做

1. 先在浏览器里判断是不是 SPA：从详情页点回列表页，看是整页跳转还是站内跳转。
2. 在 src/shared/sites.ts 的 `SITES` 里加一项：
   - `id` 是 `userSettings.preset` 里的键，发布之后不能改（见「用户数据」）；`name` 是设置界面里显示的名字。
   - `pages`：在哪些页面上染色，一般是首页、列表页。一个页面最多属于一个站点。
   - `links`：染哪些链接，按归一化之后的 URL 判断，一般是帖子、文章的详情页。
   - SPA 站点再写 `match`，覆盖整个 host，注释里写一句从哪里到哪里是站内跳转。写了 `match` 就只按它注入、不再按 `pages` 生成 `@include`，所以它要盖住全部 `pages`。不是 SPA 的不写（见「运行平台」的注入范围和激活范围）。
3. 链接里有查询参数、楼层号这类不影响是哪个帖子的部分，在同一个文件的 `NORMALIZERS` 里按链接的 hostname 加一条。已有的条目不能改：归一化的输出就是存储键。
4. 测试里加行：test/sites.test.ts 加激活页、不激活的页面、要染色和不染色的链接，SPA 站点再在「注入范围」那组加一个非激活页；test/normalize.test.ts 的黄金表加上这个站点的链接（只加，不改已有的行）。
5. 脚本头部的 `@include`、`@match` 在构建时从站点表生成，不用手改。

## 已经定了的取舍

考虑过、定下来不做的，免得以后再提。前提变了（比如依赖升级）再重新算账，结论改在这里。

### 界面

- **换掉 Element Plus（D9）。**
  - 为了让它在 closed shadow root 里正常工作，写了四十行左右的适配（不算注释）：收集组件样式、`:root` 换成 `:host`、包进 layer；取色面板的样式写进 `<head>`；通知借一个不挂载的应用拿配置；z-index 起点；Tab 键放行。
  - 换成自己写，要做对话框、tab、开关、数字输入框、带透明度滑块的取色器和通知，代码只会更多，外观也会变。换别的组件库也不会更轻：同一组组件、同样不压缩、不含 Vue 时，Element Plus 约 600 KB 加约 100 KB 样式，Naive UI 约 820 KB（样式在 JS 里），无样式的 Reka UI 约 310 KB、样式还要全部自己写。
  - 每次加载页面的开销，按需执行之后已经和不用它相当（管理器把源码交给页面的那部分没量）。
- **把取色器换成原生控件（D10）。** 样式能全放进 shadow root，Element Plus 的部分少约 150 KB；代价是取色时没有透明度滑块，外观也会变。
- **换掉 Tailwind，或者为了体积去压它的产物（D7）。** 它的 CSS 约 18 KB。适配只有 vite.config.ts 的 `tailwindInShadowRoot`，十几行；去掉它，模板里的工具类都要改成手写的 CSS。
- **对话框放进 iframe。**
  - iframe 是独立的文档，shadow root 带来的问题都会消失：键盘事件冒泡出去、rem 跟着宿主页面、`@property` 不生效、`:root` 要换、焦点陷阱拿不到焦点、取色面板只能放进 body。
  - 但 Element Plus 的弹层、click-outside、锁滚动都直接用全局的 `document`，Vue 和 Element Plus 得在 iframe 自己的 JS 环境里执行：界面的代码要作为页面脚本放进 iframe，受页面 CSP 的限制，也拿不到 GM API，还得在两边之间搭一套消息通道。
- **用整份 Element Plus 样式（`element-plus/dist/index.css?inline`）代替按组件收集。** 能省掉 `cssSideEffects`、开发模式下的复制和 message.ts 里显式引入的样式，但产物要多约 260 KB。管理器每次注入都要把源码交给页面，这笔开销没量，不为这点简化加体积。
- **显式 import Element Plus 的组件，去掉 unplugin-vue-components。** 模板里的组件交给 resolver 是 Element Plus 的标准用法，模板更短；只有 message.ts 里用函数调用的组件要手写样式引入。
- **拦下界面里的所有事件，对页面藏住用户输入的令牌。** 页面在捕获阶段先拿到事件，拦不住。现在只拦键盘事件的冒泡，为的是不触发页面的快捷键。
- **用 SystemJS 拆块来按需加载。** 和单文件一样快，却多 3 个 `@require`（2 个来自 jsdelivr，1 个 data:）和一个全局的 `System`。
- **把 `formatShortcut`、`isRecordable` 挪进 ui/。** 它们只给设置界面用，但和 `matchesShortcut` 共用 `toShortcut`（录下来的就是匹配时比较的），放在一起才看得出这一点。

### 存储和同步

- **设置即时生效，去掉"保存"。**
  - 能省掉快照、draft、`diffSettings` 和 `SettingsPatch`。
  - 但把过期时间改小是破坏性的（清理会删掉超出的记录，下次上传时云端也跟着少）。即时生效时，每个输入框都要分清"正在输入"和"输入完了"（el-input-number 每按一个键就更新一次 model，从 365 退格到空，中间会经过 3 天，v2.21.1 修过这一类），"重置为默认"也要另做确认。显式保存把这些都收在一个按钮上。
- **给访问记录的键加前缀，或者分片存储。** 加前缀要迁移好几万条记录，换来的只是去掉"其他键不能含冒号"这一条约定。分片是为了让管理器每次注入少交一些 GM 值（键从几万个降到几十个），代价是要迁移，还会把多个标签页并发写同一个键的问题带回来。实际用下来加载不慢，这笔注入开销也就不量了（原来的 Q1，2026-10-29 取消）。
- **把设置拆成多个 GM 键。** 能彻底消除整块写回带来的竞争，但要迁移；只写改过的字段之后，剩下的竞争窗口只有两个标签页几乎同时保存这一种。
- **用 schema 库解析设置。** `pick`、`hasAllFields` 加起来十几行，换成库只是换个写法，多一个依赖。
- **删掉旧版整块记录的迁移（`migrateLegacyLinks`）。** 每次加载只多一次 `GM_getValue`；删掉的话，停用过脚本一段时间的老用户会丢记录。
- **去掉没有批量接口时逐条写的回退。** 只省两行，旧版本的管理器上记录访问会直接报错。
- **多个标签页同时自动同步时加锁。** 合并取最大值是幂等的，并发只是多发一轮请求；自动同步开始之前就记下时间，晚一点打开的页面看得到，也会跳过。
- **让"立即同步"、保存同步设置也影响自动同步的间隔**（手动同步过就推迟自动同步，换了令牌就马上自动同步）。自动同步只看自己上次开始的时间最简单。手动同步之后 10 分钟内还会自动同步一次，只多一个 GET；换了令牌想马上同步，点"立即同步"。
- **自动同步用 ETag 条件请求。** 304 只说明云端没变，要不要上传还得看本地，要么把本地全量读一遍，要么另存 ETag 和本地的最后写入时间，多一条代码路径；10 分钟一次时每小时最多 6 个 GET，离限流的 5000 很远。

### 运行时

- **用 Navigation API 检测 SPA 跳转。** 还得给不支持它的浏览器留一个 MutationObserver 的回退，两套机制不如一套。
- **把 URL 检测和链接的 MutationObserver 合成一个。**
  - 试写过一遍：激活不再自带 observer，要靠 page.ts 把每批变化喂给它，`activate` 的返回值从一个 dispose 变成 `{ update, dispose }`，代码量持平，两者却耦合在一起了；省下的一个 observer，开销本来就可以忽略。
  - 两个 observer 的寿命本来就不同：URL 检测跟着页面，链接的 observer 跟着激活。激活自带 observer，正是"激活一次，释放一次"。page.ts 里"URL 检测比激活先建"只是省掉一次白做的扫描，不是正确性的前提。
- **让 `startPage()` 返回一个停止函数，测试互相独立。** 线上用不到；test/runtime/ 的每个文件是一次页面加载，按顺序跑正合适；执行构建产物的 bundle、dialog 测试本来就停不下来。
- **把调试开关传给 `log.debug`，不让它每次都读一遍设置。** 热路径上是每批 DOM 变化读一次，比起处理这批变化本身可以忽略；把调试开关一路传进去，反而多一个到处传的参数。
- **改成 `document-start` 运行，消除"先显示、后变色"的闪烁。** 管理器在 `document-start` 注入全部 GM 值会不会推迟页面的解析，没有量过；而且这是行为上的变化，要做的话单独提，先量这一项。
- **把其他标签页记下的访问实时染到当前页上。** 做得到（storage 写访问记录时顺带写一个计数键，其他标签页监听它的变化，重新判断当前页面上的链接），但这是新功能，要做的话单独提。
- **给 shadow DOM 里的链接染色**（比如新版 reddit）。新功能，要做的话单独提。

### 构建和测试

- **靠构建配置缩小产物。** 压缩，Greasy Fork 不允许；删除死代码，默认已经开着；按需引入，已经生效（完整的 Element Plus 不压缩有 2.1 MB）。`externalGlobals` 从 CDN `@require` 的 Element Plus 只有完整版（压缩后 1.1 MB），更大，而且每次照样要解析。
- **Vitest 的 browser mode（D11）。** 测试页面在 Vitest 自己的服务器上，`location` 改不了，`pushState` 也不能换域名，测不了 test/runtime/ 的场景；跑的是源码，验证不了产物的 CSS；不值得为它多两个 devDependency、每次发版都在 CI 里装一次 Chromium。
- **测试只构建一次（Vitest 的 globalSetup）。** bundle.test.ts、dialog.test.ts 各构建一次，但两者并行，全套约 4 秒，省不出时间。
- **版本号由 package.json 提供（D8）。** vite-plugin-monkey 默认读 `package.json` 的 `version`，但脚本头部的其他字段都写在 vite.config.ts 的 `userscript` 里，版本号跟它们放在一起，一处看全；项目不发布到 npm，用不到 `package.json` 的版本号。
