# color-visited 重构计划 v4

> 基于提交 `c210e24`（2026-10-18，S1–S3 已完成）的代码，从"脚本要做什么"重新推导，取代 v3。v3 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v4.md`，做 S9」。
- 编号：
  - **S** = 实施步骤，按「进度」里的顺序做；**B** = bug；**D** = 要你拍板的决策；**Q** = 先实测、再决定做不做的调查。
  - 都接着以前的往下排，删掉的编号不复用：v3 的 S4–S7 作废，由 S8–S12 取代（对应关系见「进度」）；B19、D8、Q1 沿用。
- 本文只写还没做的事。每完成一步：
  - 从正文删掉这一步，更新「进度」，「约束」因此变了的一并改；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的项列在对话里，能自动化的写成测试。
- D 项由你决定，动手前先问。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。已知的 bug 先按期望的行为写成 `it.fails`，修的那一步改回 `it`。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 来自 v3 | 依赖 | 状态 |
|---|---|---|---|---|
| S9 | 界面外壳：单文件按需执行、closed shadow root、样式、通知（修 B19） | S4 前半 | — | 未开始 |
| S10 | 设置对话框：一份 draft、一个保存（修 B24） | S4 后半 | S9 | 未开始 |
| S11 | 和宿主页面的 JS 环境隔开 | S6 | S9、S10 | 未开始 |
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

内核（S1–S3 之后）已经是这个形状：storage.ts 是唯一碰 GM 存储的模块；设置只有 `saveSettings` 一条写入路径、`onSettingsChange` 一个通知；`activate` 返回 dispose；标记只跟着 `onLinksChange` 走；站点表和归一化在一个纯数据文件里。它的结构不用再动，只有几处跟着后面的步骤顺手改：`isTyping` 认得界面的宿主元素（S9），`changedFields` 不再导出（S10）。同步（core/sync/）也已经按格式、网络、流程分开，请求都走 `GM_xmlhttpRequest`。

剩下的问题都在内核外面：

| 地方 | 问题 | 违反了哪条 | 步骤 |
|---|---|---|---|
| 打包 | Vue、Element Plus 是静态 import 的，每个激活页都执行，还创建 shadow root 和 Vue 应用 | 只付内核的钱 | S9 |
| 样式 | Element Plus 的组件样式写进宿主页面的 `<head>`；shadow root 里另从 unpkg 加载一份没锁版本的完整 CSS；B19 | 只共享 DOM | S9 |
| 设置对话框 | 4 个 tab 各有一套表单状态，保存经过 emit、事件总线、桥接才到 `saveSettings`；会悄悄丢掉没保存的修改（B24） | 一条写入路径 | S10 |
| 注入环境 | 脚本和页面共享全局对象和原型 | 只共享 DOM | S11 |

### 和 v3 的不同

v3 的目标架构保留。改掉的是几处被以前的写法带偏、或者没核实过的地方：

1. **按需执行不需要 SystemJS。** v3 以为动态 `import()` 一定要拆块、靠 SystemJS 加载（脚本头部 2 个 jsdelivr 的 `@require`，加 1 个 data: 的 `@require`）。其实 Rolldown 在 `codeSplitting: false` 时，会把被动态 import 的模块包进用到时才执行的初始化函数（`__esmMin`），所有代码仍在一个 IIFE 里。只是 Rolldown 1.2.12 这时仍在 `chunk.dynamicImports` 里列出入口自己，vite-plugin-monkey 8.1.1 看到它就退回 SystemJS，几行配置就能绕开（S9）。实测两种方案每次加载一样快（见「性能与数据规模」）；单文件方案没有外部 `@require`，也没有全局的 `System`，S11 的隔离环境里少一样要验证的东西。
2. **界面拆成两步。** 外壳（S9：怎么加载、样式放在哪）和对话框（S10：对话框做什么）各自能验证。S9 只让现有的桥接改成第一次打开时挂到新外壳上，不新增过渡代码。
3. **对话框的状态只靠已经测过的函数。** 有没有改动就看 `diffSettings(快照, draft)` 是不是空的；tab 用设置的分组名命名，"重置为默认"对每个 tab 都是同一行；换算这类纯逻辑放进 .ts，在 Node 里测（S10）。
4. **新发现的 bug**：B24 把 v3 写在 S4"现状"里的两个对话框问题单列出来。

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
| `ui/notify.ts` | 启动时就在的一层壳：`notify()` 被调用时才 `import('./message')` |
| `ui/message.ts` | 用 Element Plus 的 `ElMessage` 显示通知 |
| `ui/root.ts` | 第一次用到时才创建宿主元素和 closed shadow root，把样式写进去 |
| `ui/dialog.ts`、`ui/*.vue` | `openSettings()`：每次打开都新建一个 Vue 应用，关掉就卸载 |

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
| 现在：Vue、Element Plus 静态 import（已经是 SystemJS 格式） | 923 KB，另 `@require` SystemJS 13 KB | 约 38 ms | 约 188 ms |
| 按需执行，SystemJS 拆块（v3 的方案） | 933 KB，另 13 KB | 约 20 ms | 约 96 ms |
| 按需执行，单文件（S9 的方案） | 971 KB | 约 20 ms | 约 91 ms |

- 测法：用 Node 自带的 WebSocket 走 CDP 驱动浏览器，Fetch 拦截返回一个模拟的 `https://www.v2ex.com/`（500 个帖子链接；GM 桩里 10 万条记录，一半链接访问过）。先把 GM 桩和要注入的源码（SystemJS 的两个 `@require`、产物）作为字符串放进页面，再在页面里依次建 `<script>` 执行，取前后两次 `Performance.getMetrics` 的 `TaskDuration` 之差。每次新开浏览器，7 次（降速时 5 次）取中位数。两种按需方案是在现在的代码上把设置界面和通知改成 `import()` 的临时构建。
- 源码一定要先放进页面：经 DevTools 协议把 900 多 KB 的源码传进页面，光这一步就占主线程约 21 ms，体积带来的开销会被夸大一倍（v3 实测）。真实的管理器不走 DevTools 协议。
- 单文件方案多出的约 40 KB，是 IIFE 里每行多一层缩进和惰性初始化的包装；耗时没有变，从不执行的代码只做预解析。
- 不含管理器把脚本源码和 GM 值交给页面的开销（见 Q1），Firefox 没测。数字只用来比较几种产物，不当绝对值用。v3 在 Apple M4、Chrome 155 上量的比例相同（现在约 32 ms，按需约 16 ms），开销各部分的拆分见 `git show c210e24:docs/plans/refactor-plan-v3.md` 的这一节。
- 按需执行把开销挪到第一次用到的时候：第一次打开设置多等约 20 ms（v3 量的 SystemJS 方案：约 73 → 约 91 ms），批量标记后的第一条通知在 40 ms 左右。

### 访问记录的规模

- 2026-10-10 的同步数据有 129,378 条记录，分布在 33 个 host。按一年的有效期，其中 44% 已经过期；上传时去掉过期记录后剩 71,916 条，Gist 文件约 680 KB，低于 1 MB，所以正常同步不走 raw_url。本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧的源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：点击一次只写一个键，页面主线程的开销约为 0；每次注入页面约 53 ms（没在真实的管理器里量过，见 Q1）；后台每次持久化约 25 ms，不在页面主线程上。
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的。

## Bug

- [ ] **B19 · 设置界面里有不少 Tailwind 类不生效**（S9 修）
  - Tailwind v4 的 `border`、`shadow-*`、渐变等工具类，依赖 `@property` 注册的变量初始值，而 `@property` 在 shadow root 里不生效。Tailwind 自带的回退块包在一个只针对旧版 Safari、Firefox 的 `@supports` 里，Chrome 用不上。所以卡片和分隔线的边框、阴影，预设页统计框的渐变，现在都没有显示（宿主网站自己也用 Tailwind v4 时例外，验证时别挑这种网站）。
  - 写在 Element Plus 组件上的工具类在 `@layer utilities` 里，压不过不在任何 layer 里的 Element Plus 样式，有 4 处不生效。
  - 细节和 Chrome 146 的实测见 docs/plans/refactor-plan-v2.md 的 B19。
- [ ] **B24 · 设置对话框会悄悄丢掉没保存的修改**（S10 修）
  - "保存设置"只保存当前 tab，按钮能不能点也只看当前 tab：在一个 tab 里改了，切到另一个 tab 再点保存，前一个 tab 的修改没存，也没有任何提示，关掉对话框就没了。
  - 点到对话框外面就会关掉（`close-on-click-modal`），没保存的修改随 `destroy-on-close` 一起丢掉。

## 步骤

### S9 · 界面外壳（v3 的 S4 前半；修 B19）

- 现状：
  - **每个激活页都会执行整份界面代码**：Vue、Element Plus 是静态 import 的，启动时就做完模块初始化，还会创建 shadow root 和 Vue 应用，即使用户从不打开设置（耗时见「性能与数据规模」）。因为 legacyDialog.ts 里两个 CSS 的 `import()`，产物已经是 SystemJS 格式，头部有 3 个 `@require`。
  - **样式**：
    - Element Plus 的组件样式经 `GM_addStyle` 写进了宿主页面的 `<head>`（18 段，约 97 KB，含 `:root{--el-*}`），宿主网站自己也用 Element Plus 时两边会互相干扰；
    - shadow root 里又从 unpkg 加载一份没锁版本的完整 CSS（361 KB）：每个页面都要请求一次，受页面 CSP 的 `style-src` 限制（HN 上就加载不了），unpkg 不可用时设置界面就没有样式；
    - styles/index.css 里手动补了一组 `--el-*` 变量；
    - Tailwind 扫描整个仓库，文档、工作流里的普通单词也会生成工具类（`.contents` 来自 release.yml），改文档就会改变产物；
    - B19。
  - unplugin-auto-import 没有用处：它生成的 auto-imports.d.ts 是空的。
- 做法：
  1. **单文件按需执行**（规则见「目标架构」的依赖规则）：
     - vite.config.ts 设 `build.rolldownOptions.output.codeSplitting: false`，再加一个很小的插件：`generateBundle`（`order: 'pre'`）里把每个 chunk 的 `dynamicImports` 清空，vite-plugin-monkey 才会打成 IIFE；`writeBundle` 里产物出现 `System.register` 就让构建失败，免得以后升级 Rolldown 或插件时悄悄退回 SystemJS。注释写明绕开的是 Rolldown 1.2 的哪个行为，它修了就删。
     - main.ts 在"设置"菜单的回调里 `import('@/ui/dialog')`，再调 `openSettings()`。ui/notify.ts 每次被调用都 `import('./message')`：模块只会初始化一次，不用自己缓存 Promise。这两处是边界，加载或执行出错时 `console.error`，不影响染色。
     - ESLint 对 main.ts、core/、shared/、ui/notify.ts 开 `no-restricted-imports`，禁止静态 import vue、element-plus、@element-plus/*、`*.vue` 和 ui/ 里别的模块。这条规则只管静态 import，不管 `import()`。
     - 去掉 unplugin-auto-import，删掉 auto-imports.d.ts。test/sync/helpers.ts 里换掉通知样式的那行 `vi.mock` 删掉，连同它上面说"测试文件要先引入这个文件"的注释。
  2. **ui/root.ts**：第一次打开设置或弹通知时，才创建宿主元素。
     - 宿主元素用自定义标签名 `<color-visited-ui>`，挂在 `document.documentElement` 下：页面写给 `div` 的样式碰不到它。
     - shadow root 建成 closed，引用只留在这个模块里。对话框里的 Element Plus 组件（tab、开关、输入框、数字框、按钮）放在 closed shadow root 里，用 CDP 的真实输入事件实测正常（2026-10-16，Chrome 155）。
     - closed 之后，挂在 document 上的 keydown 监听拿到的 `composedPath()` 从宿主元素开始，看不到里面的输入框。所以 `isTyping` 加一条：事件目标是宿主元素时，就当作用户在输入。标签名定义在 core/shortcut.ts，root.ts 从那里取。原来按输入框判断的那条留着：取色面板在 `document.body` 里，面板里的输入框不经过宿主元素。test/runtime/batch.test.ts 加一条：焦点在 closed shadow root 里的输入框上时不触发。
  3. **样式**：CSS 都写进 shadow root；只有取色面板要的那一份，在对话框开着时另写进宿主页面的 `<head>`（最后一条）。
     - `build.cssSideEffects` 把打包进来的 CSS（Element Plus 的组件样式）推进 `globalThis[Symbol.for('color-visited/css')]` 这个数组，不写进页面。这个函数会被 `toString()` 之后内联进产物，不能引用模块作用域。
     - CSS 跟着模块的初始化进来：先弹过通知、后打开设置时，对话框的样式是后来的。所以 root.ts 每次被调用时，把数组里还没写的追加进 shadow root：`:root` 换成 `:host`，整段包进 `@layer components{…}`（B19 的后一半）。
     - 通知用的 `ElMessage`、渲染"撤销"按钮的 `ElButton`，resolver 看不到，照旧在 message.ts 里显式 import 它们的 `style/css`。
     - Tailwind 和自己的样式合成一个 `ui/style.css`，在 root.ts 里用 `?inline` 静态 import，创建 shadow root 时最先写入。它不用换 `:root`：Tailwind 4.3 的变量和 preflight 已经写成 `:root,:host`、`html,:host`。写 `@import "tailwindcss" source(".");`，只扫描 ui/。不要另外声明层的顺序：Tailwind 已经按 properties、theme、base、components、utilities 声明好了。
     - B19 的前一半：vite.config.ts 里一个很小的 transform，把 Tailwind 输出的 `@layer properties` 里那层 `@supports (…)` 换成 `@media all`，让变量的初始值在 shadow root 里也无条件生效。找不到要换的文本时让构建失败，免得以后升级 Tailwind 时悄悄坏掉。开发和构建时 CSS 的空白不一样（构建时压缩过），匹配要容忍空白。
     - 删掉 unpkg 的 link，以及 styles/index.css 里手动补的 `--el-*` 变量：Element Plus 自己的 `:root` 变量换成 `:host` 之后就有了。
     - 开发模式（`pnpm dev`）下 `cssSideEffects` 不生效，CSS 由 Vite 插进 `document.head`。要在 `import.meta.env.DEV` 下把这些 `<style>` 复制进 shadow root，同样换 `:host`、分层。
     - 取色面板：打开对话框时，把收集到的 Element Plus 样式原样（不换 `:root`、不分层）写进 `<head>` 里的一个 `<style>`。这一步旧对话框一直挂着，样式第一次打开后就留着；S10 改成关掉对话框时删掉。
  4. **ui/message.ts**：沿用现在 `notify` 的实现，`appendTo` 指向 shadow root 里的元素。带操作按钮时显示 5 秒，否则 2 秒；鼠标停在上面时不消失；按钮只响应第一次点击（通知淡出的过程中按钮还点得到）；同样的通知正在显示时不叠加（`grouping`）。
  5. **旧对话框接到新外壳上**：桥接从 legacyDialog.ts 挪进 ui/dialog.ts，导出 `openSettings()`：第一次调用时才在 root.ts 给的挂载点上 `createApp(App)`、接上事件总线，之后每次调用都发出 `dialog:show-settings`；不再自己建容器、shadow root 和样式。这样 main.ts 从这一步起就只认 `openSettings()`，S10 只重写 ui/dialog.ts 的内部。
- 完成标准：
  - 产物头部没有 `@require`，产物里没有 `System.register`、`unpkg.com`、`GM_addStyle`；
  - 在 jsdom 里执行产物（GM API 换成内存版）：启动之后没有 `window.__VUE__`，收集到的样式是 0 段，链接照常标记，菜单注册了；
  - 没打开过设置、也没弹过通知的页面上，没有宿主元素；只弹过通知的页面上，宿主页面的 `<head>` 里也只有染色用的那一段样式；
  - 先弹通知再打开设置，以及反过来，对话框的各个 tab、取色面板、通知（含"撤销"按钮）的外观都和现在一样（截图对比），B19 的边框、阴影、渐变和那 4 处类都显示出来；在取色面板里点预设色块、拖透明度滑块，面板不会自己关掉，选的颜色留得住；在 HN 上、在 `pnpm dev` 下，设置界面的样式也正常；
  - 按「性能与数据规模」的方法量一次，每次加载激活页约 20 ms（现在约 38 ms）。把产物体积、每次加载的耗时和第一次打开设置的耗时写进提交信息。

### S10 · 设置对话框（v3 的 S4 后半；修 B24）

- 现状：
  - 打开要经过事件总线和 App.vue 的 props；保存要经过 4 种 emit、4 个 handler、`settings:save` 事件，再由桥接（S9 之后在 ui/dialog.ts 里）转成 `saveSettings`；"立即同步"发出 `sync:request` 事件，绕到桥接去调 `runSync`。
  - 4 个 tab 组件各有一套 `formData`、`savedSettings`、用 `JSON.stringify` 比较的 `hasChanges`、immediate + deep 的 watch 和 `defineExpose`，SettingsDialog 按 `activeTab` 走 4 个分支。
  - B24。ShortcutSettings.vue 还会无条件打 4 种 `console.log`。
- 做法：
  - **打开和关闭**：`openSettings()`（ui/dialog.ts）在对话框已经开着时什么都不做；否则在 root.ts 给的挂载点上新建一个 Vue 应用，用 `el-dialog`，关闭动画结束（`closed`）后 unmount，并删掉 `<head>` 里给取色面板的那份样式。每次打开都是新的，所以不再需要 App.vue、`destroy-on-close`、重置 `activeTab`，也不用 watch props。
    - 只有关闭按钮会关，丢弃没保存的修改。`close-on-click-modal`、`close-on-press-escape` 都是 false，录快捷键时要能录到 Esc。
  - **状态**：打开时 `saved = getSettings()`，`draft = toDraft(saved)`（`preset` 按站点表给每个站点补上 `isSiteEnabled` 的值）。`changes = diffSettings(saved, draft)`，不为空就是有改动。整个对话框只有一个"保存"：`saveSettings(changes)`，之后 `saved = getSettings()`、`draft = toDraft(saved)`，对话框不关，显示存储里的最新值。
    - tab 的 name 用设置的分组名（`general`、`preset`、`batch`、`sync`）。"重置为默认"只重置当前 tab，对每个 tab 都是 `draft[tab] = toDraft(defaults)[tab]`。
  - **tab**：每个 tab 一个组件，用 `v-model` 编辑 draft 里自己的那部分，不再 `defineExpose`。
    - 常规：颜色照旧用 `el-color-picker`（带透明度和预设色）加文本框；调试开关。过期天数：清空、0、负数、小数，都回到 `saved` 里的天数。`el-input-number` 每按一个键就更新一次 model（从 365 退格到空，中间会经过 3），所以只能看最后的值；也不能用组件的 `min`，它会把无效输入改成 1 天，保存后一天前的记录全被删掉。
    - 预设网站：按站点表列出 `name` 和开关；"已启用 x/y"按站点表来算；全部启用、全部禁用；点开看 `pages`、`links`。箭头的两个颜色类改成二选一（`expanded ? 'text-blue-500' : 'text-gray-400'`）。
    - 快捷键：这个 tab 显示时，在 document 上捕获 keydown 来录制（`preventDefault`；单独的修饰键、Tab、CapsLock 这类照旧不录），监听的添加和移除交给一个 `watchEffect`。显示用 `formatShortcut`。
    - 同步：Gist 输入框失焦时归一化成纯 ID；"测试连接"用 draft 里的值；"立即同步"直接调 `runSync({ manual: true })`，同步这部分有没保存的修改（`changes.sync` 存在）时不能点；最后同步时间跟着 `onLastSyncTimeChange` 刷新。
  - `toDraft`、过期天数的换算这类纯逻辑，放进 ui/ 下一个不含组件的 .ts，在 Node 里测；.vue 只负责显示和绑定。
  - 删掉 App.vue、components/、eventBus.ts 和 mitt；`changedFields` 不再导出。
- 完成标准：
  - 在两个 tab 里各改一项，点一次保存，两项都存下来；点背景、按 Esc 都不关；关掉再打开，没保存的修改不在了；
  - 对话框开着时，在其他标签页改一个别的字段，这边保存之后那个字段保留；
  - 关掉对话框之后，宿主页面的 `<head>` 里只剩染色用的那一段样式；
  - 各个 tab、取色面板的外观和 S9 之后一样（截图对比）。

### S11 · 和宿主页面的 JS 环境隔开（v3 的 S6）

- 现状：两个管理器默认都把脚本注入页面环境（见「运行平台」），脚本的全局对象和各种原型都和宿主页面共享。脚本并不需要访问页面里的任何 JS 对象，却因此让页面能改写它用到的内置对象；令牌已经不经过页面的 `fetch`，但仍会经过 Vue 的响应式用到的 `Proxy`、`WeakMap` 这类页面能事先改写的全局对象。
- 做法：脚本头部加上 `@sandbox DOM`（TM：只要 DOM 访问，在隔离环境里运行）和 `@inject-into content`（VM：注入内容脚本的环境），vite-plugin-monkey 两个字段都支持。closed shadow root 和 `isTyping` 的改动在 S9 已经做完；S9 去掉了 SystemJS，这里不用再验证它。
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
  - 背景：「性能与数据规模」里"每次注入约 53 ms"是按 VM 页面侧的源码建模、用 9.7 万条记录在 Node 里测的，TM 是闭源的。S9 做完之后，脚本自己每次只要 20 ms 左右，这笔开销可能成为每次加载页面最大的一项。它和记录条数成正比，而一年的有效期下，本地会长期保有七八万条以上。
  - 管理器把脚本源码交给页面也要时间，和脚本的体积成正比（S9 之后约 970 KB），「性能与数据规模」的测法没有包含这一步。
  - 做法：在真实的 TM（Chrome）和 VM（Firefox）里，用一个临时脚本分别写入 0、5 万、13 万条记录，用 DevTools 的 Performance 面板录激活页的加载，看注入前后主线程上和注入有关的任务。另外，不写记录，分别装约 970 KB 的产物和只有内核的包，比较两者注入时的任务。
  - 怎么用结果：
    - 13 万条时在两个管理器里都不超过 20 ms：关掉这一条。
    - 明显更大：再评估按 host 分片存储（键从几万个降到几十个）。分片会把"多个标签页并发写同一个键"的问题带回来，要在写入前现读、现合并，并分析剩下的竞争窗口，还要做一次迁移。
    - 源码这一步明显花时间（比如约 970 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物，比如把 `el-form` 换成普通布局，少约 63 KB。取色器不换（D10）。

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
- **去掉 Tailwind，或者为了体积去压它的产物。** v2 的 D7 已定保留。它的 CSS 约 18 KB；S9 改成只扫描 ui/ 之后，误生成的类会自然消失。
