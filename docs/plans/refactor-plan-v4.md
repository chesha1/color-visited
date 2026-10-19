# color-visited 重构计划 v4

> 基于提交 `c210e24`（2026-10-18，S1–S3 已完成）的代码，从"脚本要做什么"重新推导，取代 v3。v3 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v4.md`，做 S11」。
- 编号：
  - **S** = 实施步骤，按「进度」里的顺序做；**B** = bug；**D** = 要你拍板的决策；**Q** = 先实测、再决定做不做的调查。
  - 都接着以前的往下排，删掉的编号不复用：v3 的 S4–S7 作废，由 S8–S12 取代（对应关系见「进度」）；D8、Q1 沿用。
- 本文只写还没做的事。每完成一步：
  - 从正文删掉这一步，更新「进度」，「约束」因此变了的一并改；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的项列在对话里，能自动化的写成测试。
- D 项由你决定，动手前先问。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；设置对话框的 .vue 只有构建时才编译，它的交互在 jsdom 里执行构建出来的脚本来测（test/dialog.test.ts）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。已知的 bug 先按期望的行为写成 `it.fails`，修的那一步改回 `it`。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 来自 v3 | 依赖 | 状态 |
|---|---|---|---|---|
| S11 | 和宿主页面的 JS 环境隔开 | S6 | — | 未开始 |
| S12 | 收尾：lint 规则、配置、文档 | S7 | S11（配置清理和 D8 随时可做） | 未开始 |

- Q1 不在实施顺序里，随时可做。

## 待决策

- [ ] **D8 · 版本号只留一个来源**（v2 留下的）
  - 现状：userscript 的版本号写在 vite.config.ts 里，package.json 的 `version` 一直是 1.0.0，AGENTS.md 规定发版时只改前者。
  - 建议：删掉 vite.config.ts 里的 `version`（vite-plugin-monkey 默认读 package.json 的），以后只改 package.json，同时改 AGENTS.md 的版本号规则。不改也没有实际问题。

## 从第一性原理推一遍

### 脚本要做的事

1. 判断当前页面要不要染色：站点表，加上用户的开关。
2. 给链接上色：链接 → 归一化 → 符不符合站点规则 → 存储里有没有还没过期的记录。
3. 记录访问：点击、批量标记、同步合并，都只是往存储里写时间戳；撤销只是按条件删除。
4. 设置界面和通知：很少用到，用到时能用就行。

页面上的颜色只是（存储，设置，当前 URL）的函数。下面五条原则都从这里推出来，后文的设计都按它们取舍：

- **存储是唯一的事实来源。** 所有写入只改存储，页面颜色和设置都跟着存储的变化走：一条写入路径，一个变化通知。
- **每次激活是一个整体。** 按（站点，设置）创建；URL 或设置一变，就整个释放、重建，不做增量修补。
- **每次加载页面只付内核的钱。** 内核每次加载页面都要跑，要轻；Vue、Element Plus 和界面的代码到第一次用到时才执行。
- **纯逻辑和搬运分开。** 站点匹配、归一化、设置的规范化和比较、同步格式的编解码都写成纯函数，在 Node 里测；碰 GM、DOM、网络的代码只做搬运，错误只在边界接住、报告一次。
- **和宿主页面只共享 DOM。** 脚本不需要页面里的任何 JS 对象：请求走管理器，界面放进 closed shadow root，最后整个脚本放进隔离环境。页面既改不了脚本的行为，也拿不到令牌。

### 现在的代码离这些原则还差什么

内核（S1–S3 之后）已经是这个形状：storage.ts 是唯一碰 GM 存储的模块；设置只有 `saveSettings` 一条写入路径、`onSettingsChange` 一个通知；`activate` 返回 dispose；标记只跟着 `onLinksChange` 走；站点表和归一化在一个纯数据文件里。它的结构不用再动。同步（core/sync/）也已经按格式、网络、流程分开，请求都走 `GM_xmlhttpRequest`。界面（ui/）也已经是目标的样子：产物是一个文件，界面到第一次用到时才执行，样式只写进 closed shadow root；设置对话框的所有 tab 编辑一份 draft，只有一个保存。

剩下的问题都在内核外面：

| 地方 | 问题 | 违反了哪条 | 步骤 |
|---|---|---|---|
| 注入环境 | 脚本和页面共享全局对象和原型 | 只共享 DOM | S11 |

## 目标架构

| 模块 | 职责 |
|---|---|
| `main.ts` | 组合根。按顺序：注册"设置"菜单 → 迁移旧数据 → 清理过期记录（一天一次）→ 自动同步（10 分钟一次）→ `startPage()`。每一步各自接住错误；菜单最先注册，后面哪一步出错，设置都还能打开 |
| `shared/sites.ts` | 站点表、按链接的 hostname 查表的 `normalizeUrl`、`isSiteEnabled`、`findActiveSite`。Node 也会执行它（见「构建与发布」） |
| `core/storage.ts` | 唯一调用 GM 存储 API 的模块，所有键名都定义在这里：访问记录的读写和 `onLinksChange`；设置的原始读写和其他标签页写入的订阅；`lastSyncTime`、`lastCleanupTime`；旧数据迁移 |
| `core/settings.ts` | 默认值、`parseSettings`、`getSettings` / `saveSettings` / `onSettingsChange`、`diffSettings` |
| `core/page.ts` | 常驻的 URL 检测；URL 或设置一变，就释放上一次的激活、重新激活 |
| `core/colorizer.ts` | `activate(site, settings)` 返回 dispose，管染色样式、标记、observer、点击、批量标记和撤销 |
| `core/shortcut.ts` | 快捷键的匹配、显示、录入，`isTyping` |
| `core/log.ts` | 调试开关打开时的日志 |
| `core/sync/codec.ts` | 同步格式：`encode`、`decode`，纯函数 |
| `core/sync/github.ts` | 唯一发网络请求的地方 |
| `core/sync/index.ts` | `syncWithCloud`、`testConnection`、带通知的 `runSync`、`autoSync` |
| `ui/notify.ts` | 启动时就在的一层壳：`notify()` 被调用时才 `import()` message.ts |
| `ui/message.ts` | 用 Element Plus 的 `ElMessage` 显示通知 |
| `ui/root.ts` | 第一次用到时才创建宿主元素和 closed shadow root，把样式写进去；`createMountPoint()` 给对话框、通知各一个挂载点，`addPanelStyle()` 把取色面板要的样式写进 `<head>` |
| `ui/dialog.ts`、`ui/*.vue` | `openSettings()`：每次打开都新建一个 Vue 应用，关掉就卸载。每个 tab 一个组件，用 `v-model` 编辑 draft 里自己的那个分组 |
| `ui/draft.ts` | 对话框的纯逻辑：`toDraft`、"重置为默认"、过期时间按天编辑时的换算 |

依赖规则：

- core 只通过 `ui/notify.ts` 使用界面；ui 不 import page.ts、colorizer.ts。
- 启动时执行的模块（main.ts、core/、shared/、ui/notify.ts）不静态 import vue、element-plus、@element-plus/*、`.vue` 和 ui/ 里的其他模块，ESLint 的 `no-restricted-imports` 守住这一条。界面只从两个 `import()` 进来：菜单回调、第一次通知。
- 没有事件总线。跨模块的变化只有存储上的三个订阅：`onSettingsChange`、`onLinksChange`（本标签页的访问记录）、`onLastSyncTimeChange`（设置页显示用），其余都是直接调用。
- 类型跟着它所属的模块走，没有公共的类型文件。

关键机制：

- **设置只有一条更新路径。** `saveSettings(patch)` 把改动合并到存储里的当前值上，写回后通知订阅者；其他标签页写入后，storage 的订阅同样通知。订阅者用 `getSettings()` 读新值，读的时候规范化，不缓存。页面只订阅一次。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：扫描新出现的、或 href 变了的链接；收到本标签页访问记录的增删通知。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。
  - 扫描时不看链接原来有没有标记，一律按当前的 href 重新判断：翻页、"换一批"、虚拟滚动这类列表会复用 `<a>`、只换 href；移出 DOM 之后再改的 href，observer 收不到，只能在插回来时判断；克隆出来的链接也带着原来的标记。
  - 结果没变时不写 DOM：用 `toggleAttribute(name, force)`，状态没变就不产生变化记录；`setAttribute` 即使值没变，页面上的 MutationObserver 也会收到一次。
- **激活一次，释放一次。** `activate` 里的监听器共用一个 AbortController；observer、订阅、样式、标记都在它返回的 dispose 里释放。
- **对话框只有一份 draft、一个保存。** 打开时取 `getSettings()` 作快照，`toDraft` 出一份副本给各个 tab 编辑；有没有改动看 `diffSettings(快照, draft)` 是不是空的，保存就是把这份差别交给 `saveSettings`，之后快照、副本都换成存储里的最新值。只有关闭按钮会关，没保存的修改跟着丢掉。
- **界面单文件、按需执行。** 没打开过设置、也没弹过通知的页面上，没有宿主元素，Vue 和 Element Plus 的代码不执行，宿主页面上只多一段染色样式；只有设置对话框开着时，`<head>` 里多一份给取色面板用的 Element Plus 样式（见「构建与发布」）。

写法：

- 注释写"为什么现在是这样"；以前是怎么写的、修过什么 bug，写进提交信息。不写 `// ====== 模块 ======` 这类横幅。
- 只有 shared/ 会在 Node 里执行，别的模块不为 Node 给浏览器全局对象判空。

## 约束（重构时不能变）

要守的兼容都来自已有的用户数据和其他设备上的旧版本，写干净之后代价都很小。

### 用户数据

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
- **`lastSyncTime`**：上次同步成功的时间，只有同步会写它。加载页面时距它不到 10 分钟就不自动同步；所有标签页共用这个键，所以是整个浏览器合起来 10 分钟最多一次。同步失败不更新它；设置页的"立即同步"不受这个限制。
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
- **已经定了的界面技术**：布局和装饰用 Tailwind（D7）；设置界面和通知用 Element Plus（D9），按需执行；取色器用 `el-color-picker`（D10），它的面板只能挂在 `document.body`。
  - 原因：Element Plus 的 click-outside 在 document 上监听 mousedown、mouseup，按 `event.target` 判断是不是点到了外面；shadow root 里的点击传到 document 时，`target` 已经换成了宿主元素。面板放进 shadow root 之后（open、closed 都一样），在面板里点一个预设色块，值变了，面板随即被当成点到外面而关掉，选的颜色也被重置（2026-10-16，Chrome 155，CDP 的真实鼠标事件）。
  - 代价：对话框开着时，宿主页面的 `<head>` 里要有一份 Element Plus 的样式，宿主网站自己也用 Element Plus 时两边会互相干扰。
- **界面的样式**（ui/root.ts）：shadow root 里先写 ui/style.css（Tailwind 和自己的样式），收集到的 Element Plus 样式把 `:root` 换成 `:host`、整段包进 `@layer components{…}`，接在后面；vite.config.ts 把 Tailwind 的 `@layer properties` 里那层 `@supports` 换成 `@media all`（`@property` 在 shadow root 里不生效）。
  - 不要另外声明层的顺序：比如先写一句 `@layer theme, base, element-plus, components, utilities;`，没列进去的 properties 层就排到了最后，放开的初始值会盖掉工具类设置的 `--tw-shadow`、`--tw-gradient-*`，阴影和渐变照样不显示。
  - 改动这几处，边框、阴影、渐变和写在 Element Plus 组件上的工具类会悄悄失效（以前的 B19）。test/bundle.test.ts 只查得到写进去的文本，效果要在浏览器里看。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

- **注入范围和激活范围。** 注入范围是管理器把脚本加载进哪些页面，由 `@include`、`@match` 决定，管理器只在整页加载时检查；激活范围是脚本在哪些页面上染色，由站点的 `pages` 在运行时判断，URL 一变就重新判断。
  - SPA 站点要写 `match` 覆盖整个 host：站内跳转不是整页加载，管理器不会补注入，否则从非激活页（比如从外部链接打开的帖子）站内跳到激活页，脚本一直不在。
  - 非 SPA 站点不写 `match`：每次注入，管理器都要把全部 GM 值交给页面（见「性能与数据规模」）。新增站点时，先在浏览器里从详情页点回列表页，看是整页跳转还是站内跳转。
- **SPA 跳转检测用 MutationObserver。** 隔离环境里 hook 不到页面的 `history.pushState`，只能在 MutationObserver 的回调里比较 `location.href`。这个检测在非激活页上也必须一直运行：v2.19.4 修过从非激活页跳到激活页时监听失效的问题。
- **注入环境。** Tampermonkey 不写 `@sandbox` 时默认是 `raw`，注入页面的 MAIN_WORLD；Violentmonkey 的 `@inject-into` 默认是 `auto`，也是先试页面环境。在页面环境里，脚本用到的全局对象和原型都和页面共享，`fetch` 和外链的资源都受页面 CSP 的限制。
  - 所以网络请求一律走 `GM_xmlhttpRequest`（只有 core/sync/github.ts 发请求）：Hacker News 的 CSP 是 `default-src 'self'`，页面的 `fetch` 连不了 api.github.com，请求根本发不出去。测试里全局的 `fetch` 被换成直接失败，哪里用了它，同步的测试就会失败。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，在旧版本上退回逐条写。
  - `GM_addValueChangeListener` 对本标签页自己的写入也可能回调（VM 文档写明了这一点），这时 `remote` 为 false。只想订阅其他标签页的写入时，要跳过这种回调。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块，注入页面时整份交给页面。所以键越多，每次注入就越慢（见 Q1）。

## 性能与数据规模

### 每次加载激活页，脚本自己的开销

2026-10-18，WSL 上的 chrome-headless-shell 146，渲染主线程的任务时间：

| 产物 | 体积 | 主线程 | CPU 降速 4 倍 |
|---|---|---|---|
| S9 之前：Vue、Element Plus 静态 import（SystemJS 格式） | 894 KB，另 `@require` SystemJS 13 KB | 约 49 ms | 约 188 ms |
| 现在：界面按需执行，单文件 | 939 KB | 约 25 ms | 约 100 ms |

- 测法：用 Node 自带的 WebSocket 走 CDP 驱动浏览器，Fetch 拦截返回一个模拟的 `https://www.v2ex.com/`（500 个帖子链接；GM 桩里 10 万条记录，一半链接访问过）。先把 GM 桩和要注入的源码（SystemJS 格式的产物还有它的两个 `@require`）作为字符串放进页面，再在页面里依次建 `<script>` 执行，取前后两次 `Performance.getMetrics` 的 `TaskDuration` 之差。每次新开浏览器，7 次（降速时 5 次）取中位数。
- 源码一定要先放进页面：经 DevTools 协议把 900 多 KB 的源码传进页面，光这一步就占主线程约 21 ms，体积带来的开销会被夸大一倍（v3 实测）。真实的管理器不走 DevTools 协议。
- 单文件比 SystemJS 格式多出的约 45 KB，是 IIFE 里每行多一层缩进和惰性初始化的包装；从不执行的代码只做预解析。
- 不含管理器把脚本源码和 GM 值交给页面的开销（见 Q1），Firefox 没测。数字只用来比较同一次测量里的几种产物，不当绝对值用。v3 在 Apple M4、Chrome 155 上量的比例相同（S9 之前约 32 ms，按需约 16 ms），开销各部分的拆分见 `git show c210e24:docs/plans/refactor-plan-v3.md` 的这一节。
- 按需执行把开销挪到第一次用到的时候：第一次打开设置约 96 ms（S9 之前对话框在启动时就挂好了，约 88 ms；降速 4 倍时约 336 → 约 397 ms）；批量标记 250 个链接加第一条通知约 30 ms（S9 之前约 23 ms）。

### 访问记录的规模

- 2026-10-10 的同步数据有 129,378 条记录，分布在 33 个 host。按一年的有效期，其中 44% 已经过期；上传时去掉过期记录后剩 71,916 条，Gist 文件约 680 KB，低于 1 MB，所以正常同步不走 raw_url。本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧的源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：点击一次只写一个键，页面主线程的开销约为 0；每次注入页面约 53 ms（没在真实的管理器里量过，见 Q1）；后台每次持久化约 25 ms，不在页面主线程上。
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的。

## 步骤

### S11 · 和宿主页面的 JS 环境隔开（v3 的 S6）

- 现状：两个管理器默认都把脚本注入页面环境（见「运行平台」），脚本的全局对象和各种原型都和宿主页面共享。脚本并不需要访问页面里的任何 JS 对象，却因此让页面能改写它用到的内置对象；令牌已经不经过页面的 `fetch`，但仍会经过 Vue 的响应式用到的 `Proxy`、`WeakMap` 这类页面能事先改写的全局对象。
- 做法：脚本头部加上 `@sandbox DOM`（TM：只要 DOM 访问，在隔离环境里运行）和 `@inject-into content`（VM：注入内容脚本的环境），vite-plugin-monkey 两个字段都支持。界面已经在 closed shadow root 里，`isTyping` 也认得它的宿主元素；产物里没有 SystemJS，不用再验证它。
- 验证（只能在真实的管理器里做）：
  - 在 TM + Chrome、VM + Firefox 上各跑一遍 test/runtime/ 的场景（每个文件开头一行写着场景，测试名就是要检查的项）；
  - 再测设置对话框（取色、录快捷键、在对话框的输入框里按批量快捷键不触发）、通知、同步。Firefox 的内容脚本环境里，要特别看同步的压缩、解压（`CompressionStream`、`Response`）是否正常。

### S12 · 收尾（v3 的 S7，D8）

- **ESLint 规则**（S11 之后）：Vue 那段配置只注册了插件，没有任何规则；TS 部分只启用了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`。加上 typescript-eslint 的 recommended 和 eslint-plugin-vue 的 `flat/recommended`，逐条修复。
- **配置清理**（随时可做）：
  - package.json：license 写的是 `ISC`，和脚本头部的 `GPL-3.0-only` 不一致，改成后者；去掉没有意义的 `main`；`description` 要么补上，要么去掉；版本号见 D8。
  - `typecheck` 脚本里，`tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事，只留后者。
  - tsconfig：`useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 在本项目里不起作用；`noImplicitAny` 已经包含在 `strict` 里了；include 里列了 `*.tsx`，但项目里没有这种文件。
- **文档**（S11 之后）：
  - AGENTS.md 补上架构说明：模块和职责、关键机制、新增站点怎么做，按 S11 之后的代码写。仓库只用 AGENTS.md 一份说明，不建 CLAUDE.md。
  - README、README_zh：「开发计划」里的「本地写入性能优化」（英文版是用 trie 优化存储那条）已经由逐条存储解决，删掉；「核心工作流程」「核心技术特性」按新架构改写。
  - AGENTS.md：D8 定下来之后，更新版本号规则。

## 调查

- [ ] **Q1 · 管理器把脚本源码和 GM 值交给页面的真实开销**
  - 背景：「性能与数据规模」里"每次注入约 53 ms"是按 VM 页面侧的源码建模、用 9.7 万条记录在 Node 里测的，TM 是闭源的。脚本自己每次只要 25 ms 左右，这笔开销可能成为每次加载页面最大的一项。它和记录条数成正比，而一年的有效期下，本地会长期保有七八万条以上。
  - 管理器把脚本源码交给页面也要时间，和脚本的体积成正比（约 940 KB），「性能与数据规模」的测法没有包含这一步。
  - 做法：在真实的 TM（Chrome）和 VM（Firefox）里，用一个临时脚本分别写入 0、5 万、13 万条记录，用 DevTools 的 Performance 面板录激活页的加载，看注入前后主线程上和注入有关的任务。另外，不写记录，分别装约 940 KB 的产物和只有内核的包，比较两者注入时的任务。
  - 怎么用结果：
    - 13 万条时在两个管理器里都不超过 20 ms：关掉这一条。
    - 明显更大：再评估按 host 分片存储（键从几万个降到几十个）。分片会把"多个标签页并发写同一个键"的问题带回来，要在写入前现读、现合并，并分析剩下的竞争窗口，还要做一次迁移。
    - 源码这一步明显花时间（比如约 940 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物，比如把 `el-form` 换成普通布局，少约 63 KB。取色器不换（D10）。

## 考虑过、不做的

- **设置改成即时生效，去掉"保存"按钮。** 能省掉 draft 和快照，但把过期时间改小是破坏性的操作（清理会删掉超出的记录，下次上传时云端也跟着少），需要显式保存这一步。
- **给访问记录的键加前缀，或者分片存储。** 加前缀要迁移好几万条记录，换来的只是去掉"其他键不能含冒号"这一条约定。分片看 Q1 的结果。
- **把设置拆成多个 GM 键。** 能彻底消除整块写回带来的竞争，但需要迁移。改成"只写改过的字段、合并到存储里的当前值上"之后，剩下的竞争窗口只有两个标签页几乎同时保存这一种情况。
- **用 Navigation API 检测 SPA 跳转。** 还得给不支持它的浏览器留一个 MutationObserver 的回退，两套机制不如一套。
- **把 URL 检测和链接的 MutationObserver 合成一个。** 省一个 observer，但 page.ts 要把变化转交给当前的激活，两者就耦合在一起了；多一个 observer 的开销可以忽略。
- **多个标签页同时自动同步时加锁。** 合并取最大值是幂等的，并发只是多发一轮请求。
- **把其他标签页记下的访问实时染到当前页上。** 做得到：storage 写访问记录时顺带写一个计数键，其他标签页监听它的变化，重新判断当前页面上的链接，`onLinksChange` 已经留好了接口。但这是新功能，不在重构的范围内。
- **改成 `document-start` 运行，消除"先显示、后变色"的闪烁。** 要先知道管理器在 `document-start` 注入全部 GM 值会不会推迟页面的解析（Q1 的数据可以帮助判断），而且这是行为上的变化。
- **给 shadow DOM 里的链接染色（比如新版 reddit）。** 这是新功能，不在重构的范围内。
- **用 SystemJS 拆块来按需加载**（v3 的方案）。和单文件方案一样快，却要多 3 个 `@require`（2 个来自 jsdelivr，1 个 data:），还多一个全局的 `System`。
- **用整份 Element Plus 样式（`element-plus/dist/index.css?inline`）代替按组件收集。** 能省掉 `cssSideEffects`、开发模式下的复制和 message.ts 里显式引入的样式，但产物要多约 260 KB（361 KB 对约 100 KB）。Q1 有结果之前不加体积。
- **Vitest 的 browser mode。** D11 已定不加。测试页面在 Vitest 自己的服务器上，`location` 改不了，`pushState` 也不能换域名，测不了 test/runtime/ 的场景；跑的是源码，验证不了产物的 CSS；用得上的只有"宿主页面有 `!important` 时链接还是我们的颜色"这一条，不值得为它多两个 devDependency、每次发版都在 CI 里装一次 Chromium。
- **去掉 Element Plus。** D9 已定保留。按需执行之后，每次加载页面的开销已经和去掉它相当；去掉要重写整个设置界面，外观也会变。换成别的组件库也不会更轻：同一组组件、同样不压缩、不含 Vue 时，Element Plus 约 600 KB 加约 100 KB 样式，Naive UI 约 820 KB（样式在 JS 里），无样式的 Reka UI 约 310 KB、样式还要全部自己写。
- **把取色器换成原生控件。** D10 已定保留 `el-color-picker`。原生的做法是预设色块（含透明）、文本框（失焦时用 `CSS.supports` 校验）加 `<input type="color">`：样式能全放进 shadow root，Element Plus 的部分少约 150 KB；代价是取色时没有透明度滑块，外观也会变。
- **靠构建配置缩小产物。** 压缩：Greasy Fork 不允许；删除死代码：默认已经开着；按需引入：已经生效（完整的 Element Plus 不压缩有 2.1 MB）。`externalGlobals` 从 CDN `@require` 的 Element Plus 只有完整版（压缩后 1.1 MB），更大，而且每次照样要解析。
- **去掉 Tailwind，或者为了体积去压它的产物。** v2 的 D7 已定保留。它的 CSS 约 18 KB；只扫描 ui/ 之后，文档、工作流里的单词误生成的类已经没有了。
