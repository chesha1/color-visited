# color-visited 重构计划 v3

> 基于提交 `9b226ca`（2026-10-14）的代码，从"这个脚本要做什么"重新推导，取代 v2。确认采用后删掉 v2，之后查它用 `git show 9b226ca:docs/plans/refactor-plan-v2.md`。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v3.md`，做 S4」。
- 编号：
  - **S** = 实施步骤，按「进度」里的顺序做；**B** = bug；**D** = 要你拍板的决策；**Q** = 先实测、再决定做不做的调查。
  - B、D 接着 v2 往下排（v2 用到 B21、D8）。S、Q 是新前缀，和以前用过的 A、C、E、P 不重名，`git log --grep` 不会查混。删掉的编号不复用。
- 本文只写还没做的事。每完成一步：
  - 从正文删掉这一步，更新「进度」；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的步骤列在对话里，能自动化的写成测试；
  - 「约束」因此变了的，一并更新。
- D 项由你决定，动手前先问。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。已知的 bug 先按期望的行为写成 `it.fails`，修的那一步改回 `it`。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 来自 v2 | 依赖 | 状态 |
|---|---|---|---|---|
| S4 | UI：按需加载、外壳、通知、设置对话框 | A8、A11、B19 | — | 未开始 |
| S5 | 同步模块 | A13 | — | 未开始 |
| S6 | 和宿主页面的 JS 环境隔开 | A14 | S4、S5 | 未开始 |
| S7 | 收尾：lint 规则、配置、文档 | E12、E13、E14、D8 | S6（配置清理和 D8 随时可做） | 未开始 |

- S4、S5 互不依赖。
- Q1 不在实施顺序里，随时可做。

## 待决策

- [ ] **D8 · 版本号只留一个来源**（v2 留下的）
  - 现状：userscript 的版本号写在 vite.config.ts 里，package.json 的 `version` 一直是 1.0.0，AGENTS.md 规定发版时只改前者。
  - 建议：删掉 vite.config.ts 里的 `version`（vite-plugin-monkey 默认读 package.json 的），以后只改 package.json，同时改 AGENTS.md 的版本号规则。不改也没有实际问题。

## 从头推一遍

### 脚本要做的事

1. 判断当前页面要不要染色：站点表，加上用户的开关。
2. 给链接上色：链接 → 归一化 → 符不符合站点规则 → 存储里有没有还没过期的记录。
3. 记录访问：点击、批量标记、同步合并，都只是往存储里写时间戳；撤销只是按条件删除。

页面上的颜色只是（存储，设置，当前 URL）的函数。整个设计由此推出：

- **存储是唯一的事实来源。** 所有写入只改存储，颜色跟着存储的变化通知走。设置也一样：一条保存路径，一个变化通知。
- **每次激活是一个整体。** 按（站点，设置）创建；URL 或设置一变，就整个释放、重建，不做增量修补。
- **运行时和设置界面的成本分开看。** 前者每次加载页面都要跑，要尽量轻；后者几乎不用，打开时能用就行。所以设置界面和通知都按需加载：没用到时，Vue 和 Element Plus 的代码不执行。

### 兼容：真正要守的都很便宜

逐条看下来，真要守的兼容都来自已有的用户数据和其他设备上的旧版本；写干净之后，代价都很小：

| 兼容项 | 为什么要守 | 代价 |
|---|---|---|
| 访问记录逐条存储，其他键不能含冒号 | 已有好几万条记录，换布局就要迁移（见 Q1） | 一条约定 |
| 归一化的输出、站点 id | 它们就是存储键和设置里的键 | 测试里的两张表 |
| `userSettings` 里的残留字段、缺字段、异常的过期时间 | 老用户的存储里真有这些值 | 统一的规范化，不需要专门的代码 |
| 读 v2 压缩包和旧明文格式的云端数据 | 去掉的话，这类数据会被当作"不是同步数据"直接覆盖 | 几十行 |
| 写满外层包的 7 个字段 | 其他设备上的旧版本读取时会全部校验 | 几行 |
| 旧版整块记录的迁移 | v2.21.0 及以前的用户 | 约 10 行，每次启动一次 `GM_getValue` |
| 没有批量读写接口的旧管理器 | Tampermonkey 5.3、Violentmonkey 2.19.1 以前 | 4 行 |

sync.ts 的 1151 行里，兼容旧格式的只占几十行，其余是诊断代码和重复的校验。

### v2 被以前的写法带偏的地方

v2 的目标架构（存储是唯一来源、`activate` 返回 dispose、没有事件总线、同步的行为不变量）站得住，v3 基本保留。偏的是这几处：

1. **沿着旧模块的边界渐进迁移。** A10 要先让马上就删的旧模块改读新设置，A13 要为旧运行时保留 `sync:completed` 事件，`ScriptState` 要留一半到 A12。这些过渡代码只为让中间状态能跑。v3 先用测试锁住运行时的行为（test/runtime/），再整块替换。过渡代码只剩旧对话框的桥接（ui/legacyDialog.ts，S4 删掉）。
2. **几个没核实过的前提：**
   - "依赖真实 DOM 的场景测不了"：jsdom 对 MutationObserver（含 `attributeFilter`）、`toggleAttribute` 状态不变时不产生变化记录、`<a>` 的 `hostname`（解析失败时为空字符串）、SVG 里的 `<a>`、open 和 closed shadow root 下的 `composedPath()`、`pushState` 都是按规范实现的（2026-10-15 用 jsdom 27 实测）。有两处例外（2026-10-16 实测 jsdom 27.4、30.1.3）：节点刚移出 DOM、observer 的回调还没跑时对它的修改，规范要求照样报告（2026-10-17 Chrome 146 实测也报告），jsdom 不报告；jsdom 的 `Blob` 没有 `stream()`。test/runtime/ 里的应对：移出 DOM 之后先等 observer 的回调跑过再改 href（dynamic.test.ts），同步的场景把 `Blob` 换回 Node 的（sync.test.ts）。只有样式层叠（`@layer`、`!important`）和对话框外观要真实浏览器。happy-dom 在 shadow root 的事件重定向、`toggleAttribute` 上有好几处不对，不用它。
   - "UI 用到时才创建"能省掉每个页面的开销：A8 只推迟了创建应用，Vue 和 Element Plus 仍是静态 import，它们的模块初始化（连同这部分代码的编译）照样在每次加载页面时执行。要用动态 `import()` 把它们整个留到用到时，见 S4。
   - "其他标签页记下的访问没法实时染色"：用一个计数键广播就做得到，只是这是新功能，见「考虑过、不做的」。
3. **漏掉的问题：** 设置对话框点到外面就关掉，没保存的修改直接丢掉（S4）。

## 目标架构

| 模块 | 职责 |
|---|---|
| `main.ts` | 组合根。按顺序：注册"设置"菜单 → 迁移旧数据 → 清理过期记录（一天一次）→ 自动同步（10 分钟一次）→ `startPage()`。菜单最先注册，后面哪一步出错，设置都还能打开；菜单的回调里才 `import()` ui/dialog.ts |
| `shared/sites.ts` | 站点表、按链接的 hostname 查表的 `normalizeUrl`、`isSiteEnabled`、`findActiveSite`。Node 也会执行它，所以不 import 任何别的 src 模块 |
| `core/storage.ts` | 唯一调用 GM 存储 API 的模块，所有键名都定义在这里：访问记录的读写，以及写入后通知本标签页（`onLinksChange`）；设置的原始读写，以及订阅其他标签页的写入；`lastSyncTime`、`lastCleanupTime`；旧数据迁移 |
| `core/settings.ts` | 默认值、`parseSettings`、`getSettings` / `saveSettings` / `onSettingsChange`，以及对话框保存时用的 `diffSettings`。不依赖 Vue |
| `core/page.ts` | 常驻的 URL 变化检测；`refresh()` 先释放上一次的激活，再按当前 URL 和设置重新激活 |
| `core/colorizer.ts` | `activate(site, settings)` 返回 dispose，管染色样式、标记、observer、点击、批量标记和撤销 |
| `core/shortcut.ts` | `isMac`、默认快捷键、`toShortcut`、`matchesShortcut`、`formatShortcut`、`isTyping` |
| `core/log.ts` | 调试开关打开时的日志 |
| `core/sync/` | `github.ts` 是唯一发网络请求的地方；`codec.ts` 管同步格式；`index.ts` 管同步流程、测试连接、自动同步，以及带通知的 `runSync` |
| `ui/root.ts` | 只有按需加载的模块 import 它。第一次用到时才创建宿主元素和 closed shadow root；写入 Tailwind 的 CSS，以及按需加载的块带来的 CSS |
| `ui/notify.ts` | `notify(message, type, action?)`。只是一层壳：第一次调用时才 `import()` ui/message.ts |
| `ui/message.ts` | 按需加载。用 Element Plus 的 `ElMessage` 显示通知 |
| `ui/dialog.ts`、`ui/*.vue` | 按需加载。`openSettings()`：每次打开都新建一个 Vue 应用，用 `el-dialog`，关掉后卸载 |

依赖规则：

- core 只通过 `ui/notify.ts` 使用 UI。UI 不 import page 和 colorizer。
- 启动时执行的模块（main.ts、core/、shared/、ui/notify.ts）不静态 import vue、element-plus、@element-plus/*、`.vue`，也不静态 import ui/notify.ts 以外的 ui/ 模块。Vue、Element Plus 和界面只经 `import()` 进来：ui/notify.ts 第一次通知时 import ui/message.ts，main.ts 在菜单回调里 import ui/dialog.ts。
- 没有事件总线。跨模块的变化只有两个订阅点：设置（`onSettingsChange`）和本标签页的访问记录（`onLinksChange`），其余都是直接调用。
- 类型跟着它所属的模块走，删掉 types.ts。

关键机制：

- **设置只有一条更新路径。** `saveSettings(patch)` 把改动合并到存储里的当前值上，写回后通知订阅者；其他标签页写入后，storage 的订阅同样通知。订阅者用 `getSettings()` 读新值，读的时候规范化。页面只订阅一次：`onSettingsChange(refresh)`。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：一是扫描新出现的、或 href 变了的链接；二是收到本标签页访问记录的增删通知。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。
  - 扫描时不看链接原来有没有标记，一律按当前的 href 重新判断。翻页、"换一批"、虚拟滚动这类列表会复用 `<a>`、只换 href；移出 DOM 之后再改的 href，observer 收不到，只能在插回来时判断；克隆出来的链接也带着原来的标记。
  - 重新判断的结果和现在一样时不写 DOM：每个新插入的链接都要判断一遍，而 `setAttribute` 即使值没变，页面上的 MutationObserver 也会收到一次变化。用 `toggleAttribute(name, force)`，状态没变时不产生变化记录（Chrome 146、jsdom 实测）。
- **激活一次，释放一次。** `activate` 里添加的监听器共用一个 AbortController；observer、订阅、样式、标记都在它返回的 dispose 里释放。没有全局的 handler 引用，也没有 observer 上下文。
- **界面按需加载。** vite-plugin-monkey 遇到动态 `import()` 就用 SystemJS 打包：所有块仍在同一个文件里，入口块只有内核，Vue、Element Plus 和界面在用到时才执行的块里。每次加载激活页从约 32 ms 降到约 16 ms，和"内核 + Vue"相当；代价是第一次打开设置多等约 20 ms（见「性能与数据规模」）。
- **宿主页面上平时只多一段染色样式。** 没打开过设置、也没弹过通知的页面上，没有宿主元素，Vue 和 Element Plus 的代码也不执行。打开之后，样式都写进 shadow root；只有设置对话框开着的时候，宿主页面的 `<head>` 里多一份 Element Plus 的样式，给挂在 `document.body` 上的取色面板用，关掉对话框就删掉（见「约束」）。

写法：

- 纯逻辑写成纯函数，和读写存储、DOM、网络的代码分开：`parseSettings`、`diffSettings`、`normalizeUrl`、`findActiveSite`、codec 都不碰 GM 和 DOM，在 Node 里直接测。
- 错误只在边界接住、报告一次：`refresh`、`runSync`、启动时的各步。内部函数直接抛，不各打一遍日志。
- 注释写"为什么现在是这样"；以前是怎么写的、修过什么 bug，写进提交信息。去掉 `// ====== 模块 ======` 这类横幅，以及 ES 模块里多余的 `'use strict'`（现在只剩 sync.ts 里的 3 处）。
- 只有 shared/ 会在 Node 里执行，别的模块不为 Node 给浏览器全局对象判空。
- 类型就近定义，不建公共的类型文件。types.ts 现在只剩同步用的类型，其中 `DataComparison`、`SyncError` 没人用，S5 删掉。

## 约束（重构时不能变）

### 用户数据

- **访问记录**：每条单独存成一个 GM 值，键是归一化后的 URL，值是最近一次访问的时间戳（ms），过期从这个时间算起。
  - 只有 storage.ts 读写它们。storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**其他键都不能含冒号**。
  - 所有写入（点击、批量标记、同步合并、迁移）都经过 `mergeLinks`，只会把时间戳改大。同步合并取较大的值，改小的值下次同步又会被改回去。
  - 过期的记录在读的时候就当作没有（`isVisited` 按当前的过期时间判断），不依赖清理。
  - 删除记录的只有两处：
    - 过期清理：要把全部记录读一遍，所以所有标签页合起来一天最多一次，时间记在 `lastCleanupTime`。不要把它放回每次初始化页面的路径上。
    - 批量标记的撤销：只删时间戳仍等于那次标记时间的记录（`deleteLinksIfUnchanged`）。这依赖两点：批量标记不碰还没过期的记录；点击会刷新时间戳。改其中任何一点，都要连撤销一起看。
  - v2.21.0 及以前把全部记录存在 `visitedLinks` 一个键里。启动时把它逐条合并进来再删掉，可以重复执行。
- **归一化的输出就是存储键，站点 id 就是 `userSettings.preset` 的键。** 改了哪一个，已有的数据就对不上。归一化的输出由 test/normalize.test.ts 的黄金表锁住，站点 id 由 test/sites.test.ts 锁住。
- **`userSettings`**：存在一个 GM 值里，字段名都已经持久化了，不能改：
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
- **`lastSyncTime`**：上次同步成功的时间，只有同步会写它。
  - 加载页面时距它不到 10 分钟就不自动同步。所有标签页共用这个键，所以是整个浏览器合起来 10 分钟最多一次。
  - 同步失败不更新它。设置页的"立即同步"不受这个限制。
- **云端（Gist）的格式**：其他设备上可能还跑着旧版本的脚本。
  - 读：v3 和 v2 压缩包（压缩算法只有 gzip），以及旧的明文格式（键是网址、值是数字的对象，或者带 `visitedLinks` 字段的对象）。
  - 写：一律写 v3。外层包的 7 个字段都要写（`syncVersion`、`encoding`、`payload`、`itemCount`、`updatedAt`、`originalBytes`、`compressedBytes`），因为旧版本读取时会校验全部字段。`payload` 是先按 host 分组、组内再做前缀差分的 JSON，gzip 之后再 base64。

### 同步的行为不变量（每一条都有 test/sync/ 里的测试锁住）

1. HTTP 请求失败时必须抛错，不能当作"云端为空"，否则紧接着就会用本地数据覆盖云端。
2. 遇到不认识的 `syncVersion`（通常来自更新版本的脚本）时抛错，不覆盖云端。
3. `syncVersion` 认识，但解码要用的字段（`encoding`、`payload`）不对，或者解出来的结构不对，也抛错，不覆盖云端。
4. 文件超过 1 MB 被截断时，改用 raw_url 获取完整内容。获取到的内容认不出来（比如代理或限流返回的 HTML）时抛错，不覆盖云端。
5. 不是同步数据的内容按"空"处理，并标记需要初始化，本次同步会把它写成同步格式。这包括：空内容、不是 JSON、不是对象、没有同步特征的对象（含 `{}`）。这样新建 Gist 时内容可以随便填。
6. 自愈：丢掉键不含冒号、或值不是有限数字的条目（比如旧脚本混进来的同步包字段），并打一行日志。
7. 合并时每条 URL 取较大的时间戳，而且直接和存储里的当前值比较，所以同步期间本标签页或其他标签页的写入不会被覆盖。
8. 只有合并后的数据和云端不一致（两边都去掉过期记录后再比），或者需要初始化时，才上传。云端只是有记录到期，不单独触发上传：否则几乎每次同步都要传一遍整份数据，过期时间不同的设备还会来回上传。
9. 过期记录两个方向都不同步：合并云端数据前、上传前，都按本机的过期时间去掉，两边用同一个截止时间。
10. 编码必须逐字往返：`decode(encode(x))` 的每个键都和原来完全一样。
    - 所以组内存的是从原字符串上截掉 origin 之后的部分，不能用 `new URL` 拆开再拼：`pathname + search + hash` 会丢掉末尾空的 `?`、`#`。
    - 不以 `<分组的 origin>/` 开头的 URL（`mailto:` 这类没有 host 的、解析失败的），整条放进 `@raw` 分组。否则解码时路径不以 `/` 开头会报错，整批同步都失败。
11. 请求次数：和云端一致时只有 1 个 GET；要上传时是 GET 加 PATCH，PATCH 用 GET 拿到的文件名；文件被截断时再多一个 raw_url 的 GET。

### 构建与发布

- **站点表会在 Node 中执行。** vite.config.ts 在 Node 里 import 它来生成脚本头部，所以它的顶层不能引用浏览器全局对象，也不能 import 别的 src 模块。
- **体积只能靠减少依赖。** Greasy Fork 不允许发布压缩过的代码。
- **发版由 CI 完成**（[release.yml](../../.github/workflows/release.yml)），构建产物不入库。
  - 构建前先跑 `pnpm test` 和不带 `--fix` 的 eslint，任何一步失败都不发版。所以提交前要让这两项都通过。
  - 产物文件名 `color-visited.user.js` 不能改，头部要保留 `@version`。
  - tag 指向 CI 另加的、放着构建产物的提交：Greasy Fork 收到 release 事件后，是用 `git show <tag>:color-visited.user.js` 取脚本的。
- **设置界面的布局和装饰用 Tailwind**（v2 的 D7 已定）。
- **设置界面和通知用 Element Plus，按需加载**（D9 已定保留）。
  - 按需加载靠动态 `import()`，vite-plugin-monkey 遇到它就用 SystemJS 打包。SystemJS 本身只能从 jsdelivr `@require`（Greasy Fork 不允许内联压缩过的代码），所以脚本头部有 2 个 jsdelivr 的 `@require` 和 1 个 data: 形式的 `@require`。
  - 启动时执行的模块不能静态 import Vue、Element Plus 和界面（见「目标架构」的依赖规则），否则它们又会在每次加载页面时执行。
  - 取色器用 `el-color-picker`（D10 已定保留，不换成原生控件），它的面板只能挂在 `document.body`。Element Plus 判断"点到了外面"，看的是 document 上收到的 `event.target`，而 shadow root 里的点击传到 document 时，`target` 已经换成了宿主元素。所以面板放进 shadow root 之后（open、closed 都一样），在面板里点一个预设色块，值变了，面板随即被当成点到外面而关掉，选的颜色也被重置；面板留在 `document.body` 时正常（2026-10-16，Chrome 155，CDP 的真实鼠标事件）。代价：对话框开着时，宿主页面上要有一份 Element Plus 的全局样式，宿主网站自己也用 Element Plus 时两边会互相干扰。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

- **注入范围和激活范围。** 注入范围是管理器把脚本加载进哪些页面，由脚本头部的 `@include`、`@match` 决定，管理器只在整页加载时检查；激活范围是脚本加载之后在哪些页面上染色，由站点的 `pages` 在运行时判断，URL 一变就重新判断。
  - 站点不写 `match` 时，按 `pages` 生成 `@include`，两个范围一样。
  - SPA 站点的站内跳转不是整页加载，管理器不会补注入，所以要写 `match` 覆盖整个 host。否则从非激活页（比如从外部链接打开的帖子）进来，再站内跳到激活页，脚本一直不在。
  - 非 SPA 站点不写 `match`：每次注入，管理器都要把全部 GM 值交给页面（见「性能与数据规模」）。新增站点时，先在浏览器里从详情页点回列表页，看是整页跳转还是站内跳转。
- **SPA 跳转检测用 MutationObserver。** 隔离环境（S6）里 hook 不到页面的 `history.pushState`，SPA 跳转只能在 MutationObserver 的回调里比较 `location.href` 来发现。这个检测在非激活页上也必须一直运行：v2.19.4 修过从非激活页跳到激活页时监听失效的问题。
- **注入环境。** Tampermonkey 不写 `@sandbox` 时默认是 `raw`，注入页面的 MAIN_WORLD；Violentmonkey 的 `@inject-into` 默认是 `auto`，也是先试页面环境。在页面环境里，脚本用到的全局对象和原型都和页面共享（见 S6）。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，在旧版本上退回逐条写。
  - `GM_addValueChangeListener` 对本标签页自己的写入也可能回调（VM 文档写明了这一点），这时 `remote` 为 false。只想订阅其他标签页的写入时，要跳过这种回调。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块，注入页面时整份交给页面。所以键越多，每次注入就越慢（见 Q1）。

## 性能与数据规模

### 每次加载激活页，脚本自己的开销

2026-10-16，Apple M4，Chrome 155，渲染主线程上的任务时间：

| 产物 | 合计 | 最长的任务 | CPU 降速 4 倍：合计 / 最长的任务 |
|---|---|---|---|
| 现在的产物（932 KB，含 Element Plus、Vue；连同 SystemJS 的 `@require`） | 约 32 ms | 约 22 ms | 约 130 ms / 约 94 ms |
| 按需加载（942 KB：入口块只有内核，Element Plus、Vue 和界面在用到时才执行的块里） | 约 16 ms | 约 12 ms | 约 64 ms / 约 51 ms |
| 内核 + Vue（215 KB） | 约 15 ms | 约 11 ms | 约 55 ms / 约 42 ms |
| 内核，外加整份现在的产物、但从不执行 | 约 13 ms | 约 10 ms | 约 53 ms / 约 40 ms |
| 只有内核（58 KB） | 约 9 ms | 约 5 ms | 约 28 ms / 约 17 ms |

- 测法：puppeteer-core 驱动本机 Chrome，请求拦截返回一个模拟的 v2ex 首页（500 个帖子链接，GM 桩里 10 万条记录，一半链接访问过），unpkg 的 CSS 用本地文件回应。录制之前，先把要注入的几段源码（GM 桩、SystemJS 的两个 `@require`、产物）作为字符串放进页面；录制期间只在页面里依次建 `<script>` 执行，统计 trace 里渲染主线程 `RunTask` 的时长。每次新开浏览器，7 次取中位数（降速时 5 次）。
- 源码一定要先放进页面。用 `page.addScriptTag({ content })` 注入的话，源码要经 DevTools 协议传进页面，932 KB 光这一步就占主线程约 21 ms（把同样的文本放进注释里注入，也是这么多），体积带来的开销会被夸大一倍。真实的管理器不走 DevTools 协议。
- 对比用的包都是临时构建的：内核包把 core/ui.ts 换成只打日志的桩；"内核 + Vue"再挂一个最简单的组件，让 Vue 的运行时都打进来；"按需加载"是在现在的代码上，把设置界面和通知改成动态 `import()`（约 20 行改动）。
- 不含管理器把脚本源码和 GM 值交给页面的开销（见下一节和 Q1），Firefox 没测。数字用来比较几种产物，不当绝对值用。
- 现在的产物比"内核 + Vue"多出约 16 ms，拆开是：V8 解析、编译约 7 ms；执行（模块初始化、创建并挂载应用）约 3 ms；样式约 5 ms（解析 unpkg 那份 CSS，以及 Element Plus 的样式写进宿主页面后整页重算样式、布局）。从不执行的代码只做预解析：整份 932 KB 约 4 ms（降速 4 倍约 25 ms）。
- 按需加载把开销挪到了第一次用到的时候：第一次打开设置从约 73 ms 变成约 91 ms（降速 4 倍从约 176 ms 变成约 245 ms）；批量标记后的第一条通知，两种产物都在 40 ms 左右。
- 体积：Element Plus 本体约 305 KB，它带进来的依赖约 220 KB（lodash-es 约 105 KB，async-validator、@ctrl/tinycolor、popper 各约 30 KB），打成字符串的 Element Plus 样式约 100 KB，Vue 约 190 KB，业务代码约 92 KB。按需引入已经生效（完整的 Element Plus 不压缩有 2.1 MB）。取色器一个组件就占 Element Plus 部分的约 150 KB，表单约 63 KB。
- 结论：业务代码本身很轻；开销主要花在执行到的 UI 库代码上，不执行的只付预解析。按需加载就能省掉大部分。

### 访问记录的规模

- 2026-10-10 的同步数据有 129,378 条记录，分布在 33 个 host。
  - 按一年的有效期，其中 44% 已经过期。上传时会去掉过期记录，去掉后剩 71,916 条，Gist 文件约 680 KB。低于 1 MB，所以正常同步不再走 raw_url。
  - 本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧的源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：
  - 点击一次只写一个键，页面主线程的开销约为 0；
  - 每次注入页面约 53 ms（没在真实的管理器里量过，见 Q1）；
  - 后台每次持久化约 25 ms，不在页面主线程上。
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的（见「约束」的「注入范围和激活范围」）。

## Bug

- [ ] **B19 · 设置界面里有不少 Tailwind 类不生效**（S4 修）
  - Tailwind v4 的 `border`、`shadow-*`、渐变等工具类，依赖 `@property` 注册的变量初始值，而 `@property` 在 shadow root 里不生效。Tailwind 自带的回退块包在一个只针对旧版 Safari、Firefox 的 `@supports` 里，Chrome 用不上。所以卡片和分隔线的边框、阴影，预设页统计框的渐变，现在都没有显示（宿主网站自己也用 Tailwind v4 时例外，验证时别挑这种网站）。
  - 另外，写在 Element Plus 组件上的工具类在 `@layer utilities` 里，压不过不在任何 layer 里的 Element Plus 样式，有 4 处不生效。S4 把 Element Plus 的样式包进 `@layer components` 修好。
  - 细节和 Chrome 146 的实测见 v2 的 B19。

## 步骤

### S4 · UI：按需加载、外壳、通知、设置对话框（v2 的 A8、A11；修 B19）

- 现状：
  - **每个匹配的页面都会执行整份 UI 代码**：Vue、Element Plus 是静态 import 的，启动时就做完模块初始化，还会创建 shadow root 和 Vue 应用，即使用户从不打开设置（耗时见「性能与数据规模」）。
  - **样式**：
    - Element Plus 的组件样式经 `GM_addStyle` 注入了宿主页面的 `<head>`（18 段，约 97 KB，含 `:root{--el-*}`），宿主网站自己也用 Element Plus 时两边会互相干扰；
    - shadow root 里又从 unpkg 加载一份没锁版本的完整 CSS（361 KB）：每个页面都要请求一次，受宿主页面 CSP 的 `style-src` 限制，unpkg 不可用时设置界面就没有样式；
    - 取色器的面板默认 teleport 到 `document.body`，全靠泄漏到宿主页面的样式显示；
    - B19。
  - **对话框**：
    - 打开要经过事件总线和 App.vue 的 props，保存要经过 4 种 emit、4 个 handler、`settings:save` 事件，再由桥接（ui/legacyDialog.ts）转成 `saveSettings`；
    - 4 个 tab 组件各有一套 `formData`、`savedSettings`、用 `JSON.stringify` 比较的 `hasChanges`、immediate + deep 的 watch 和 `defineExpose`，SettingsDialog 按 `activeTab` 走 4 个分支；
    - "保存设置"只保存当前 tab：在一个 tab 里改了，切到另一个 tab 再点保存，前一个 tab 的修改没存，也没有任何提示；
    - 点到对话框外面就会关掉（`close-on-click-modal`），没保存的修改随 `destroy-on-close` 直接丢掉；
    - "立即同步"发出 `sync:request` 事件，绕到桥接去调 `runSync`。
  - unplugin-auto-import 没有用处：它生成的 auto-imports.d.ts 是空的。
- 做法：
  1. 去掉 unplugin-auto-import 和 mitt；删掉 auto-imports.d.ts、eventBus.ts、App.vue 和旧对话框的桥接（ui/legacyDialog.ts）。Element Plus 的组件照旧由 unplugin-vue-components 的 resolver 按需引入。
  2. **按需加载**（规则见「目标架构」的依赖规则）：
     - main.ts 在"设置"菜单的回调里 `import('@/ui/dialog')`，再调 `openSettings()`。ui/notify.ts 第一次被调用时 `import('./message')`，之后复用同一个 Promise。
     - ui/notify.ts 不再静态 import Element Plus 之后，test/sync/helpers.ts 里换掉通知样式的那行 `vi.mock` 删掉（sync.ts 的 `runSync` 引入了 ui/notify.ts）。
     - 这两处是边界：加载或执行出错时 `console.error`，不影响染色。
     - ESLint 对 main.ts、core/、shared/、ui/notify.ts 开 `no-restricted-imports`，禁止静态 import vue、element-plus、@element-plus/*、`*.vue` 和 ui/ 里别的模块。这条规则只管静态 import，不管 `import()`。
  3. **ui/root.ts**：第一次打开设置或弹通知时，才创建宿主元素。
     - 宿主元素用自定义标签名（比如 `<color-visited-ui>`），挂在 `document.documentElement` 下：页面写给 `div` 的样式碰不到它。
     - shadow root 建成 closed，引用只留在这个模块里。对话框里的 Element Plus 组件（tab、开关、输入框、数字框、按钮）放在 closed shadow root 里，用 CDP 的真实输入事件实测正常（Chrome 155）；取色器的面板不行，照旧挂在 `document.body`（见「约束」）。
     - closed 之后，挂在 document 上的 keydown 监听拿到的 `composedPath()` 从宿主元素开始，看不到里面的输入框。所以 `isTyping` 加一条：事件目标是我们的宿主元素时，就当作用户在输入（Chrome 155、jsdom 实测）。原来按输入框判断的那条留着：取色面板在 `document.body` 里，面板里的输入框不经过宿主元素。
  4. **样式**：CSS 都写进 shadow root；只有取色面板要的 Element Plus 样式，在对话框开着时另写一份进宿主页面的 `<head>`（最后一条）。
     - 用 vite-plugin-monkey 的 `build.cssSideEffects`，把打包进来的 CSS（Element Plus 的组件样式、SFC 的 `<style>`）收集到 `globalThis` 上一个带命名空间的键里（比如 `Symbol.for('color-visited/css')`）。这个函数会被 `toString()` 之后内联进产物，不能引用模块作用域。
     - 每个块的 CSS 要到这个块执行时才进来：先弹过通知、后打开设置时，对话框的样式是后来的。所以 ui/root.ts 在每次 `import()` 完成后，把新收集到的 CSS 追加进 shadow root；写入时把 `:root` 换成 `:host`，整段包进 `@layer components{…}`（B19）。
     - 通知用的 `ElMessage`、渲染"撤销"按钮的 `ElButton`，resolver 看不到，照旧显式 import 它们的 `style/css`。
     - Tailwind 和自己的样式合成一个 `ui/style.css`，在 ui/root.ts 里用 `?inline` 静态 import，创建 shadow root 时最先写入（同样把 `:root` 换成 `:host`）。不要另外声明层的顺序：没列进去的 properties 层会排到最后，盖掉工具类设置的变量。
       - 写 `@import "tailwindcss" source(".");`，只扫描 ui/。现在它扫描整个仓库，文档、工作流里的普通单词也会生成工具类（`.contents` 来自 release.yml，`.inline` 来自计划文档），改文档就会改变产物。
       - B19：在 vite.config.ts 里加一个很小的 transform，把 `@layer properties` 里那层 `@supports (…)` 换成 `@media all`，让变量的初始值在 shadow root 里也无条件生效。找不到要换的文本时让构建失败，免得以后升级 Tailwind 时悄悄坏掉。Tailwind 自己没有这个开关。开发和构建时 CSS 的空白不一样（构建时压缩过），匹配要容忍空白。
     - 删掉 unpkg 的 link，以及 styles/index.css 里手动补的 `--el-*` 变量。
     - 开发模式（`pnpm dev`）下，CSS 由 Vite 插进 `document.head`，`cssSideEffects` 不生效。要在 `import.meta.env.DEV` 下把这些 `<style>` 复制进 shadow root，同样包进 `@layer components{…}`。
     - 取色面板：ui/dialog.ts 打开对话框时，把收集到的 Element Plus 样式原样（不换 `:root`、不分层，和现在 `GM_addStyle` 写进去的一样）写进 `<head>` 里的一个 `<style>`，unmount 时删掉。
  5. **ui/message.ts**：沿用现在的 `ElMessage` 实现，`appendTo` 指向 shadow root 里的元素。带操作按钮时显示 5 秒，否则 2 秒；鼠标停在上面时不消失；按钮只响应第一次点击（通知淡出的过程中按钮还点得到）；同样的通知正在显示时不叠加（`grouping`）。
  6. **设置对话框**（ui/dialog.ts 和 ui/*.vue）：
     - `openSettings()` 每次打开都新建一个 Vue 应用，挂进 shadow root，用 `el-dialog`，关闭后 unmount；对话框已经开着时什么都不做。这样就不再需要 App.vue、`destroy-on-close`、重置 `activeTab`，也不用 watch props。
     - 打开时从 `getSettings()` 拷贝出一份 draft，再留一份快照。整个对话框只有一个 `hasChanges`、一个"保存"按钮：`saveSettings(diffSettings(快照, draft))`。保存后对话框不关，快照换成刚保存的值。"重置为默认"只重置当前 tab 的 draft，和现在一样。
     - 关闭：只有关闭按钮会关，丢弃没保存的修改。点背景不关（`close-on-click-modal` 设为 false）；Esc 照旧不关（`close-on-press-escape` 为 false），这样录快捷键时能录到 Esc。
     - 各个 tab 组件用 v-model 编辑 draft 中属于自己的那部分，不再 `defineExpose`：
       - 常规：颜色照旧用 `el-color-picker`（带透明度和预设色）加文本框；调试开关。
       - 过期时间保留现在的规则：在 `change`（失焦、回车）时才取值，输入过程中的数不算（从 365 退格到空，中间会经过 3）；清空、0、负数、小数，都回到保存的天数。不能把无效输入改成 1 天：保存后一天前的记录会全被删掉。
       - 预设网站：按站点表列出 `name`，开关的值是 `isSiteEnabled(draft.preset, id)`；"已启用 x/y"按站点表来算；全部启用、全部禁用；点开看 `pages`、`links`。箭头的两个颜色类改成二选一（`expanded ? 'text-blue-500' : 'text-gray-400'`）。
       - 快捷键：录制时 `preventDefault`。显示用 `formatShortcut`。
       - 同步：保存时把 Gist 网址归一化成纯 ID。"测试连接"用表单里的值；"立即同步"调用 `runSync({ manual: true })`，同步这部分有没保存的修改时不能点。最后同步时间跟着 `onLastSyncTimeChange` 刷新。去掉 gzip 支持状态的卡片和提示。
- 完成标准：
  - 入口块（产物里 `./___monkey.entry.js` 那一段）没有 `_css(`；产物里没有 `unpkg.com`，也没有 `GM_addStyle`；
  - 没打开过设置、也没弹过通知的页面上，没有宿主元素；只弹过通知，或者关掉设置对话框之后，宿主页面的 `<head>` 里也只有染色用的那一段样式；
  - 在两个 tab 里各改一项，点一次保存，两项都存下来；
  - 先弹通知再打开设置，以及反过来，对话框的各个 tab、取色面板、通知（含"撤销"按钮）的外观都和现在一样（截图对比），B19 的边框、阴影、渐变和那 4 处类都显示出来；在取色面板里点预设色块、拖透明度滑块，面板不会自己关掉，选的颜色留得住；
  - 按「性能与数据规模」的方法量一次，每次加载激活页要和"内核 + Vue"相当；把产物体积、每次注入的耗时和第一次打开设置的耗时写进提交信息。

### S5 · 同步模块（v2 的 A13）

- 现状：sync.ts 共 1151 行，大约一半是校验和诊断代码。
  - **同样的检查写了两套**：`isXxx` 一套、`describeXxx` 一套（比如 `isV3PathRecordValue` 和 `describeV3PathRecord`），"校验通过"还是用哨兵字符串 `'[prefixLength, suffix, timestamp]'` 来表示的。
  - **"取出 visitedLinks"有 7 个职责重叠的函数。** 自愈规则（剔除同步包字段和不是数字的时间戳）和 storage.ts 过滤键值的规则其实是同一件事，写了两遍。
  - **外层包的 7 个字段全都校验**，其中 4 个（`itemCount`、`updatedAt`、`originalBytes`、`compressedBytes`）解码时根本用不到。
  - **有死代码和多余的检测**：zstd 分支是死代码，从引入压缩开始写入一直用的是 gzip；gzip 支持检测也没有必要（CompressionStream 从 2023 年起主流浏览器都支持，不支持时让同步直接报错就行），它还在设置页里占了一张状态卡片和一条提示。
  - **类型过宽**：写入相关的 API 接受 `SyncData | VisitedLinksData`，但所有调用方传的都是平铺的 map。
  - **请求方式不统一**：4 处用 `fetch`，各自拼请求头，认证用 `token`；读取截断文件的 1 处用 `GM_xmlhttpRequest`，认证用 `Bearer`。在页面环境里，`fetch` 就是页面的 `window.fetch`：受宿主页面 CSP 的 `connect-src` 限制；页面脚本 hook 它就能拿到令牌，而令牌有 gist 权限，能读写全部 Gist，包括私密的。
  - **同一个错误要打好几遍日志**：`getGist` / `updateGist`、`syncWithCloud`、`runSync` 各打一遍。
- 做法：拆成 3 个文件，预计合计 300 行左右。
  - `sync/github.ts`：唯一发网络请求的地方。
    - 全部改用 `GM_xmlhttpRequest`，`connect` 里加上 `api.github.com`。
    - HTTP 错误统一转成带原因说明的 Error，401、403、404 的提示照旧。
    - `GM_xmlhttpRequest` 的响应头是一整个字符串，测试连接读 `X-OAuth-Scopes` 时要自己解析。
  - `sync/codec.ts`：
    - `encode(links)` 写 v3，外层包的 7 个字段照旧全写。
    - `decode(text, truncated)` 返回 `{ links, needsInit, reason? }`，或者抛错。读取时只校验解码要用的字段；记录逐条过滤（键要含冒号、值要是有限数字，和 storage.ts 写入时共用同一个纯函数），丢掉了多少条，打一行警告；v3 的结构有错时，抛出一句带位置的错误。
  - `sync/index.ts`：`syncWithCloud`、`testConnection`、`runSync`、自动同步、`normalizeGistId`、`AUTO_SYNC_INTERVAL`。日志只在这一层打一次。
  - 删掉 zstd 分支、gzip 支持检测、`SyncData` 的写入路径和 types.ts。
- 完成标准：
  - test/sync/ 的测试全部照常通过（包括请求次数）。只改 test/sync/helpers.ts：`encode`、`decode` 改成直接调 codec.ts，sync.ts 为测试导出的 `serializeVisitedLinksForGist`、`deserializeGistContent` 跟着删掉。假的 GitHub 同时接管了 `fetch` 和 `GM_xmlhttpRequest`，请求方式换了，测试不用改。
  - 在真实的 Gist 上把"测试连接"和"立即同步"各试一次，覆盖令牌错误、Gist ID 错误和正常三种情况。

### S6 · 和宿主页面的 JS 环境隔开（v2 的 A14）

- 现状：两个管理器默认都把脚本注入页面环境（见「运行平台」），脚本的全局对象和各种原型都和宿主页面共享。脚本并不需要访问页面里的任何 JS 对象，却因此让页面脚本有机会拿到 GitHub 令牌：S5 之前，hook `fetch` 就行；请求都改走 `GM_xmlhttpRequest` 之后，令牌还会经过 Vue 的响应式（`Proxy`、`WeakMap`）这类页面能事先改写的全局对象。
- 做法：脚本头部加上 `@sandbox DOM`（TM：只要 DOM 访问，在隔离环境里运行）和 `@inject-into content`（VM：注入内容脚本的环境），vite-plugin-monkey 两个字段都支持。closed shadow root 和 `isTyping` 的改动已经在 S4 做完。
- 验证（只能在真实的管理器里做）：
  - 在 TM + Chrome、VM + Firefox 上各跑一遍 test/runtime/ 的场景（每个文件开头一行写着场景，测试名就是要检查的项）；
  - 再测设置对话框（取色、录快捷键、在对话框的输入框里按批量快捷键不触发）、通知、同步。对话框和通知都经 SystemJS 按需加载，要确认它在隔离环境里也正常。Firefox 的内容脚本环境里，要特别看同步的压缩、解压（`CompressionStream`、`Blob`、`Response`）是否正常。

### S7 · 收尾（v2 的 E12、E13、E14，D8）

- **ESLint 规则**（S6 之后）：Vue 那段配置只注册了插件，没有任何规则；TS 部分只启用了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`。加上 typescript-eslint 的 recommended 和 eslint-plugin-vue 的 `flat/recommended`，逐条修复。
- **配置清理**（随时可做）：
  - package.json：license 写的是 `ISC`，和脚本头部的 `GPL-3.0-only` 不一致，改成后者；去掉没有意义的 `main`；`description` 要么补上，要么去掉；版本号见 D8。
  - `typecheck` 脚本里，`tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事，只留后者。
  - tsconfig：`useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 在本项目里不起作用；`noImplicitAny` 已经包含在 `strict` 里了；include 里列了 `*.tsx`，但项目里没有这种文件。
- **文档**（S6 之后）：
  - CLAUDE.md（被 .gitignore 忽略，只存在于本地）说 build 用的是 tsc，架构一节也得每一步跟着改。把架构说明写进入库的 AGENTS.md，CLAUDE.md 只留一行 `@AGENTS.md`，免得两份各自过时。
  - README、README_zh：「开发计划」里的「本地写入性能优化」已经由逐条存储解决，删掉；「核心工作流程」按新架构改写。
  - AGENTS.md：D8 定下来之后，更新版本号规则。

## 调查

- [ ] **Q1 · 管理器把脚本源码和 GM 值交给页面的真实开销**
  - 背景：「性能与数据规模」里"每次注入约 53 ms"是按 VM 页面侧的源码建模、用 9.7 万条记录在 Node 里测的，TM 是闭源的。S4 做完按需加载之后，脚本自己每次只要 16 ms 左右，这笔开销可能成为每次加载页面最大的一项。它和记录条数成正比，而一年的有效期下，本地会长期保有七八万条以上。
  - 管理器把脚本源码交给页面也要时间，和脚本的体积成正比。保留 Element Plus 后产物约 940 KB，「性能与数据规模」的测法没有包含这一步。
  - 做法：在真实的 TM（Chrome）和 VM（Firefox）里，用一个临时脚本分别写入 0、5 万、13 万条记录，用 DevTools 的 Performance 面板录激活页的加载，看注入前后主线程上和注入有关的任务。另外，不写记录，分别装约 940 KB 的产物和只有内核的包，比较两者注入时的任务。
  - 怎么用结果：
    - 13 万条时在两个管理器里都不超过 20 ms：关掉这一条。
    - 明显更大：再评估按 host 分片存储（键从几万个降到几十个）。分片会把"多个标签页并发写同一个键"的问题带回来，要在写入前现读、现合并，并分析剩下的竞争窗口，还要做一次迁移。
    - 源码这一步明显花时间（比如 940 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物，比如把 `el-form` 换成普通布局，少约 63 KB。取色器不换（D10 已定保留）。

## 考虑过、不做的

- **设置改成即时生效，去掉"保存"按钮。** 能省掉 draft 和快照，但把过期时间改小是破坏性的操作（清理会删掉超出的记录，下次上传时云端也跟着少），需要显式保存这一步。
- **给访问记录的键加前缀，或者分片存储。** 加前缀要迁移好几万条记录，换来的只是去掉"其他键不能含冒号"这一条约定。分片看 Q1 的结果。
- **把设置拆成多个 GM 键。** 能彻底消除整块写回带来的竞争，但需要迁移。改成"只写改过的字段、合并到存储里的当前值上"之后，剩下的竞争窗口只有两个标签页几乎同时保存这一种情况。
- **用 Navigation API 检测 SPA 跳转。** 还得给不支持它的浏览器留一个 MutationObserver 的回退，两套机制不如一套。
- **多个标签页同时自动同步时加锁。** 合并取最大值是幂等的，并发只是多发一轮请求。
- **把其他标签页记下的访问实时染到当前页上。** 做得到：storage 写访问记录时顺带写一个计数键，其他标签页监听它的变化，重新判断当前页面上的链接，`onLinksChange` 已经留好了接口。但这是新功能，不在重构的范围内。
- **改成 `document-start` 运行，消除"先显示、后变色"的闪烁。** 要先知道管理器在 `document-start` 注入全部 GM 值会不会推迟页面的解析（Q1 的数据可以帮助判断），而且这是行为上的变化。
- **给 shadow DOM 里的链接染色（比如新版 reddit）。** 这是新功能，不在重构的范围内。
- **Vitest 的 browser mode。** D11 已定不加。jsdom 已经覆盖了运行时的行为；样式层叠和对话框外观要检查的次数不多，手动做。browser mode 能补上的也很少：
  - 测不了运行时的场景（test/runtime/）。测试页面在 Vitest 自己的服务器上（`http://localhost:63315/…`），`location` 改不了，`pushState` 也不能换域名，而运行时按 `location.href` 判断要不要激活、有没有 SPA 跳转。
  - 验证不了产物的 CSS（B19、对话框外观）。它跑的是源码，走 Vitest 自己的 Vite 流程，不是 vite-plugin-monkey 的打包。
  - 用得上的只有 C15（宿主页面有 `!important` 时链接还是我们的颜色）。为这一条多两个 devDependency（`@vitest/browser-playwright` 的版本还要和 vitest 完全一致），每次发版都在 CI 里装一次 Chromium，不划算；只在本地跑、不进 CI，迟早没人跑。以后有更多只能在真浏览器里验证、又容易改坏的行为，再重新考虑。
- **去掉 Element Plus。** D9 已定保留。按需加载之后，每次加载页面的开销已经和去掉它（只剩内核 + Vue）相当；去掉要重写整个设置界面，外观也会变。保留的代价：产物约 940 KB，要靠 SystemJS 的 `@require`，样式要收集进 shadow root 并分层。换成别的组件库也不会更轻：同一组组件、同样不压缩、不含 Vue 时，Element Plus 约 600 KB 加约 100 KB 样式，Naive UI 约 820 KB（样式在 JS 里），无样式的 Reka UI 约 310 KB、样式还要全部自己写。
- **把取色器换成原生控件。** D10 已定保留 `el-color-picker`。原生的做法是预设色块（含透明）、文本框（失焦时用 `CSS.supports` 校验）加 `<input type="color">`：样式能全放进 shadow root，Element Plus 的部分少约 150 KB（取色面板、tooltip、弹层）；代价是取色时没有透明度滑块，透明只能靠色块或文本框，外观也会变。
- **靠构建配置缩小产物。** 压缩：Greasy Fork 不允许；删除死代码：默认已经开着，产物里没有残留的开发分支；按需引入：已经生效。`externalGlobals` 从 CDN `@require` 的 Element Plus 只有完整版（压缩后 1.1 MB），更大，而且每次照样要解析。
- **去掉 Tailwind。** v2 的 D7 已定保留。按 2026-10-14 的构建，它的 CSS 约 18 KB，B19 在保留它的前提下就能修好。
- **为了体积去压 Tailwind 的产物**（比如排掉误生成的类、去掉 preflight）。最多从 18 KB 压到 12.6 KB，却要维护一张词表，还得重新检查整个界面。S4 改成只扫描 ui/ 之后，从业务代码里误生成的类会自然消失。
