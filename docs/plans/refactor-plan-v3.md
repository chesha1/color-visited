# color-visited 重构计划 v3

> 基于提交 `9b226ca`（2026-10-14）的代码，从"这个脚本要做什么"重新推导，取代 v2。确认采用后删掉 v2，之后查它用 `git show 9b226ca:docs/plans/refactor-plan-v2.md`。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v3.md`，做 S2」。
- 编号：
  - **S** = 实施步骤，按「进度」里的顺序做；**B** = bug；**D** = 要你拍板的决策；**Q** = 先实测、再决定做不做的调查。
  - B、D 接着 v2 往下排（v2 用到 B21、D8）。S、Q 是新前缀，和以前用过的 A、C、E、P 不重名，`git log --grep` 不会查混。删掉的编号不复用。
- 本文只写还没做的事。每完成一步：
  - 从正文删掉这一步，更新「进度」；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录；
  - 只能在真实浏览器里验证的步骤列在对话里，能自动化的写成测试；
  - 「约束」因此变了的，一并更新。
- D 项由你决定，动手前先问。S4 要等 D10。
- 取舍原则：简单、干净优先；只为用户感觉得到的问题专门优化。
- 测试：`pnpm test`。纯逻辑在 Node 里跑；运行时的 DOM 行为在 jsdom 里跑（test/runtime/，只经过其中的 helpers.ts 碰实现）；样式层叠、对话框外观、真实的管理器只能在浏览器里验证。已知的 bug 先按期望的行为写成 `it.fails`，修的那一步改回 `it`。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度

| 步骤 | 内容 | 来自 v2 | 依赖 | 状态 |
|---|---|---|---|---|
| S2 | 站点表 | A9、B20、B21 | — | 未开始 |
| S3 | 运行时内核：存储、设置、页面、染色 | A10、A12、C15 | S2 | 未开始 |
| S4 | UI：按需加载、外壳、通知、设置对话框 | A8、A11、B19 | S3、D10 | 未开始 |
| S5 | 同步模块 | A13 | S3 | 未开始 |
| S6 | 和宿主页面的 JS 环境隔开 | A14 | S4、S5 | 未开始 |
| S7 | 收尾：lint 规则、配置、文档 | E12、E13、E14、D8 | S6（配置清理和 D8 随时可做） | 未开始 |

- S4、S5 互不依赖。
- Q1 不在实施顺序里，随时可做。

## 待决策

- [ ] **D10 · 取色器怎么放**
  - 背景：D9 定了保留 Element Plus，S4 要把它的样式只写进 shadow root。v2 A8 打算让 `el-color-picker` 的面板用 `append-to` 挂进 shadow root，实测行不通：Element Plus 判断"点到了外面"，看的是 document 上收到的 `event.target`，而 shadow root 里的点击传到 document 时，`target` 已经换成了宿主元素。面板放进 shadow root 之后（open、closed 都一样），在面板里点一个预设色块，值变了，面板随即被当成点到外面而关掉，选的颜色也被重置；面板留在 `document.body` 时正常（2026-10-16，Chrome 155，CDP 的真实鼠标事件）。对话框里的其他组件（tab、开关、输入框、数字框、按钮）放在 closed shadow root 里都正常。
  - 选项：
    1. **换成原生控件（推荐）。** 预设色块（含透明）、文本框（任意 CSS 颜色，失焦时用 `CSS.supports` 校验，不合法就退回原值），加上原生的 `<input type="color">`（不带透明度）。样式全在 shadow root 里；Element Plus 的部分少约 150 KB（取色面板、tooltip、弹层），每次加载页面要预解析的也跟着少。代价：取色时没有透明度滑块，透明要靠色块或文本框。
    2. 保留 `el-color-picker`，面板照旧挂到 `document.body`。打开设置时，把 Element Plus 的样式也写一份进宿主页面的 `<head>`（取色面板要用），关掉对话框时删掉。代价：对话框开着时宿主页面上有 Element Plus 的全局样式，宿主网站自己也用 Element Plus 时两边会互相干扰；样式要写两处。
  - S4 按选项 1 写；选 2 的话，S4 第 4 步（样式）和常规 tab 的取色器跟着改。

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

sync.ts 的 1132 行里，兼容旧格式的只占几十行，其余是诊断代码和重复的校验。

### v2 被以前的写法带偏的地方

v2 的目标架构（存储是唯一来源、`activate` 返回 dispose、没有事件总线、同步的行为不变量）站得住，v3 基本保留。偏的是这几处：

1. **沿着旧模块的边界渐进迁移。** A10 要先让马上就删的旧模块改读新设置，A13 要为旧运行时保留 `sync:completed` 事件，`ScriptState` 要留一半到 A12。这些过渡代码只为让中间状态能跑。v3 先用测试锁住运行时的行为（test/runtime/），再整块替换（S3）。过渡代码只剩两处：S2 里旧调用方改用新站点表的几处小改动，S3 里旧对话框的一个桥接（S4 删掉）。
2. **几个没核实过的前提：**
   - "依赖真实 DOM 的场景测不了"：jsdom 对 MutationObserver（含 `attributeFilter`）、`toggleAttribute` 状态不变时不产生变化记录、`<a>` 的 `hostname`（解析失败时为空字符串）、SVG 里的 `<a>`、open 和 closed shadow root 下的 `composedPath()`、`pushState` 都是按规范实现的（2026-10-15 用 jsdom 27 实测）。有两处例外（2026-10-16 实测 jsdom 27.4、30.1.3）：节点刚移出 DOM、observer 的回调还没跑时对它的修改，规范要求照样报告（2026-10-17 Chrome 146 实测也报告），jsdom 不报告；jsdom 的 `Blob` 没有 `stream()`。test/runtime/ 里的应对：移出 DOM 之后先等 observer 的回调跑过再改 href（dynamic.test.ts），同步的场景把 `Blob` 换回 Node 的（sync.test.ts）。只有样式层叠（`@layer`、`!important`）和对话框外观要真实浏览器。happy-dom 在 shadow root 的事件重定向、`toggleAttribute` 上有好几处不对，不用它。
   - "UI 用到时才创建"能省掉每个页面的开销：A8 只推迟了创建应用，Vue 和 Element Plus 仍是静态 import，它们的模块初始化（连同这部分代码的编译）照样在每次加载页面时执行。要用动态 `import()` 把它们整个留到用到时，见 S4。
   - "其他标签页记下的访问没法实时染色"：用一个计数键广播就做得到，只是这是新功能，见「考虑过、不做的」。
3. **漏掉的问题：** 右键点链接会被记成访问过（B22）；按住批量快捷键会反复标记；设置对话框点到外面就关掉，没保存的修改直接丢掉；启动、同步时无条件打日志。

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

- **设置只有一条更新路径。** `saveSettings(patch)` 把改动合并到存储里的当前值上，写回后通知订阅者。其他标签页写入后，storage 的订阅拿到新值，规范化之后同样通知。页面只订阅一次：`onSettingsChange(refresh)`。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：一是扫描新出现的、或 href 变了的链接；二是收到本标签页访问记录的增删通知。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。
  - 扫描时不看链接原来有没有标记，一律按当前的 href 重新判断。翻页、"换一批"、虚拟滚动这类列表会复用 `<a>`、只换 href；移出 DOM 之后再改的 href，observer 收不到，只能在插回来时判断；克隆出来的链接也带着原来的标记。
  - 重新判断的结果和现在一样时不写 DOM：每个新插入的链接都要判断一遍，而 `setAttribute` 即使值没变，页面上的 MutationObserver 也会收到一次变化。用 `toggleAttribute(name, force)`，状态没变时不产生变化记录（Chrome 146、jsdom 实测）。
- **激活一次，释放一次。** `activate` 里添加的监听器共用一个 AbortController；observer、订阅、样式、标记都在它返回的 dispose 里释放。没有全局的 handler 引用，也没有 observer 上下文。
- **界面按需加载。** vite-plugin-monkey 遇到动态 `import()` 就用 SystemJS 打包：所有块仍在同一个文件里，入口块只有内核，Vue、Element Plus 和界面在用到时才执行的块里。每次加载激活页从约 32 ms 降到约 16 ms，和"内核 + Vue"相当；代价是第一次打开设置多等约 20 ms（见「性能与数据规模」）。
- **宿主页面上只多一段染色样式。** 没打开过设置、也没弹过通知的页面上，没有宿主元素，Vue 和 Element Plus 的代码也不执行。打开之后，Element Plus 的样式也只写进 shadow root（取色器见 D10）。

写法：

- 纯逻辑写成纯函数，和读写存储、DOM、网络的代码分开：`parseSettings`、`diffSettings`、`normalizeUrl`、`findActiveSite`、codec 都不碰 GM 和 DOM，在 Node 里直接测。
- 错误只在边界接住、报告一次：`refresh`、`runSync`、启动时的各步。内部函数直接抛，不各打一遍日志。
- 注释写"为什么现在是这样"；以前是怎么写的、修过什么 bug，写进提交信息。去掉 `// ====== 模块 ======` 这类横幅，以及 ES 模块里多余的 `'use strict'`（现在共 32 处）。
- 只有 shared/ 会在 Node 里执行，别的模块不为 Node 给浏览器全局对象判空。
- 类型就近定义，不建公共的类型文件。types.ts 里没人用的类型和事件（`NotificationOptions`、`SyncDialogPayload`、`DataComparison`、`SyncError`、`menu:update`、`dialog:show-sync`）随所在的步骤删掉。

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
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

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
- 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的（见 S2 的 `match`）。

## Bug

- [ ] **B19 · 设置界面里有不少 Tailwind 类不生效**（S4 修）
  - Tailwind v4 的 `border`、`shadow-*`、渐变等工具类，依赖 `@property` 注册的变量初始值，而 `@property` 在 shadow root 里不生效。Tailwind 自带的回退块包在一个只针对旧版 Safari、Firefox 的 `@supports` 里，Chrome 用不上。所以卡片和分隔线的边框、阴影，预设页统计框的渐变，现在都没有显示（宿主网站自己也用 Tailwind v4 时例外，验证时别挑这种网站）。
  - 另外，写在 Element Plus 组件上的工具类在 `@layer utilities` 里，压不过不在任何 layer 里的 Element Plus 样式，有 4 处不生效。S4 把 Element Plus 的样式包进 `@layer components` 修好。
  - 细节和 Chrome 146 的实测见 v2 的 B19。
- [ ] **B20 · SPA 站点上，从没被 include 的页面进来后，站内跳到列表页也不染色**（S2 修）
  - `@include` 直接由各站点的 `pages` 生成（88 条），脚本只在这些 URL 整页加载时注入。比如从外部链接直接打开 linux.do 的帖子，再点左上角回到首页：首页是站内跳转过去的，脚本根本没有注入，一直不染色，只能手动刷新。
- [ ] **B21 · south-plus 的镜像域名 bbs.imoutolove.me 上的链接没有归一化**（S2 修）
  - south-plus 的规则包含这个域名，但 `getBaseUrl` 里 south-plus 的归一化只匹配 `www.*-plus.net`。同一个帖子在不同列表页上的链接带着不同的分页后缀，被存成不同的键：在一处点过，换一页再看就不染色。
  - 修了之后，这个域名上已有的、带分页后缀的记录对不上，不再染色。影响只限这一个镜像域名。
- [ ] **B22 · 右键点链接也会被记成访问过**（S3 修）
  - 点击监听同时挂在 `click` 和 `auxclick` 上（`createLinkClickHandler`），没看 `event.button`。`auxclick` 对中键和右键都会触发。Chrome 155 里用 CDP 的真实输入事件实测：右键依次触发 mousedown、contextmenu、mouseup、auxclick（`button` 为 2）。
  - 后果：在松开右键之后才弹出系统菜单的平台上（Windows），右键点一下链接，哪怕只是为了复制链接地址，也会被记下并染色。macOS 在按下右键时就弹出菜单，页面收不到 mouseup，不受影响。README 写的是只记录左键、中键、Ctrl+点击。
  - 修法：`auxclick` 只认 `button === 1`。修之前在 Windows 的真实 Chrome 上确认一次现状（headless 不弹系统菜单）。

## 步骤

### S2 · 站点表（v2 的 A9；修 B20、B21）

- 现状：
  - 每个站点只有 `pages` 和 `patterns` 两个字段。`pages` 既是激活范围，又直接用来生成 `@include`，注入范围因此和激活范围一样窄（B20）。
  - 归一化写在 utils.ts 的 `getBaseUrl` 里，是一串按链接 hostname 分派的 if，和规则表分开放。新增站点有时要改两个文件，而且容易漏掉（B21）。
  - 规则的 key 既是显示名，又是持久化的键（比如 `'The Economist'`、`'美卡论坛'`、`'Hacker News'`），一改名用户的开关就会被重置。
  - 有冗余的正则，每条都多生成一条 `@include`：bloomberg、economist、一亩三分地里的 `/?$`，已被 `/.*` 覆盖；HN 的 newest、front、show，已被 `/.*` 覆盖；pixiv 的 `novel/ranking`，已被 `novel.*` 覆盖；ehentai 和 exhentai 的规则成对重复。没有站点用到 `description` 字段。
- 做法：
  ```ts
  // shared/sites.ts：vite.config.ts 会在 Node 里 import 它，顶层不能引用浏览器全局对象，也不 import 别的 src 模块
  export interface Site {
    id: string        // 沿用现有的 key：它是 userSettings.preset 里的键，不能改
    name: string      // 设置界面里显示的名字
    pages: RegExp[]   // 激活范围：在哪些页面上染色
    links: RegExp[]   // 染哪些链接，对归一化之后的 URL 判断（即原来的 patterns）
    match?: string[]  // 注入范围（@match）；不写就按 pages 生成 @include
  }
  // 归一化按链接自己的 hostname 查表，和链接出现在哪个站点的页面上无关：
  // HN 上指向 v2ex 的链接，和 v2ex 页面上的同一个链接，必须得到同一个键
  const NORMALIZERS: Record<string, (href: string) => string> = { … }
  export function normalizeUrl(link: { href: string, hostname: string }): string
  export function isSiteEnabled(preset: Record<string, boolean>, id: string): boolean // preset[id] !== false
  export function findActiveSite(url: string, preset: Record<string, boolean>): Site | undefined
  ```
  - 归一化单独成表，不挂在站点上：它是 URL 自己的性质，而像 HN 这样的站点要染的是任意 host 的链接。表和站点放在同一个文件里，新增站点只改这一个文件。B21 在这里修：把 bbs.imoutolove.me 加进 south-plus 那一项。
  - `normalizeUrl` 照旧直接接收 `<a>` 元素（读它的 `href`、`hostname`），不为每个链接 `new URL`；`hostname` 是空字符串时原样返回。
  - SPA 站点写 `match`，覆盖整个 host（比如 `https://linux.do/*`）；是否激活，仍在运行时按 `pages` 判断。B20 在这里修。
    - 哪些站点是 SPA，要逐个确认。已知 linux.do 和美卡论坛（都是 Discourse）是。
    - 注入范围不是越大越好：每次整页加载都要把全部 GM 值交给页面（见「性能与数据规模」），所以非 SPA 站点不加 `match`。
  - vite.config.ts 里，没有 `match` 的站点按 `pages` 生成 `@include`，有 `match` 的生成 `@match`。
  - 站点是否启用只在 `isSiteEnabled` 里判断。sites.ts 不能 import settings.ts（Node 会执行它），所以 `findActiveSite` 直接接收 preset 表。
  - 去掉冗余的正则和 `description` 字段。
  - 旧的调用方（pageDetector、linkManager、eventManager、state、config、PresetSettings.vue）只做让它们继续工作的最小改动，S3、S4 会整体替换。设置页显示 `name`。
- 完成标准：
  - test/normalize.test.ts、test/sites.test.ts 只改开头调用的函数，表里的行不动；黄金表里只有 B21 那一行（bbs.imoutolove.me）的期望值改成归一化之后的。
  - `@include` 和 `@match` 加起来比现在的 88 条少。

### S3 · 运行时内核：存储、设置、页面、染色（v2 的 A10、A12、C15；修 B22）

- 现状：
  - **设置有三份**：存储、内存里的 `state`、对话框里的副本。本标签页保存（`settings:save` 事件 → script.ts 合并 → `saveUserSettings` → `setupPage`）和其他标签页保存（`followUserSettings` → 替换 `state` → `setupPage`）走两条路。`userSettings` 由 state.ts 直接调 GM API 读写，其他键在 storage.ts 里。
  - **读设置时几乎不做规范化**：只补新站点的 key（还要写回存储）、只校验过期时间。`preset` 是 null 时，`initializeScriptState` 执行 `key in null` 抛错，脚本在所有站点上都起不来，"设置"菜单也不会注册。`DEFAULT_SETTINGS` 里一部分字段是 getter，另一部分是共享对象，会被直接当作 `GM_getValue` 的默认值返回出去。"所有站点默认启用"写了两遍：config.ts 和 PresetSettings.vue。
  - **页面颜色有四条更新路径**：初次扫描和 observer；点击后全量重扫（`updateAllLinksStatus`）；撤销时手动去色；收到 `sync:completed` 事件后全量重扫。
  - **资源的创建和释放不在一处**：keydown、click 监听在 eventManager 里添加，却在 linkManager 的 `removeScript` 里移除，handler 引用存在 `ScriptState` 里；observer 是全局单例，靠 `provideLinkContext`、`clearLinkContext` 开关染色。linkManager 和 domObserver 互相 import，`activateLinkFeatures` 为了避开另一处循环依赖，把函数当参数传进来。
  - **页面匹配写了两遍**（`isPageActive`、`getCurrentPagePreset`），`getEnabledPresets` 把 `getActivePresets` 的结果又过滤一遍；缓存只按 URL 记，不随设置变化失效。
  - **标记用的是没有命名空间的 class `visited-link`**：宿主页面可能有同名的 class；React、Vue 更新 class 绑定时会整体改写 `className`，把它冲掉，而 observer 只看 href 的变化。
  - **染色样式靠堆特异性**（`generateStyleContent`）想压过网站自己的 `!important`，网站规则的特异性更高时照样会输：Chrome 146 实测，宿主页面有 `#app .list a{color:red!important}` 时，链接还是红色。用户填的颜色值直接拼进 CSS，再用 `innerHTML` 写入。
  - **其他**：B22；按住批量快捷键时 keydown 会重复触发，每次都重新跑一遍批量标记、弹一条"没有找到新的…链接"；启动时无条件打日志，开启调试后每个链接要打 7–9 行。
- 做法：
  - **storage.ts** 成为唯一调用 GM 存储 API 的模块。所有键名都定义在这里：`userSettings`、`lastSyncTime`、`lastCleanupTime`，以及旧版的 `visitedLinks`。注释里写明：不是访问记录的键，不能含冒号。
    - 访问记录的接口照旧（`isVisited`、`recordVisit`、`mergeLinks`、`deleteLinksIfUnchanged`、`loadLinks`、`deleteExpiredLinks`、`migrateLegacyLinks`）。写入或删除之后通知本标签页：`onLinksChange(listener: (urls: string[]) => void)`。只通知本标签页自己的写入：记录是逐键存储的，没法订阅全部的键。
    - 设置这一块，只提供原始的读写，以及订阅其他标签页的写入（`remote` 为 false 的回调跳过）。
  - **settings.ts**，不依赖 Vue：
    ```ts
    createDefaultSettings(): Settings
    parseSettings(raw: unknown): Settings          // 纯函数
    getSettings(): Settings                        // 读存储、规范化，不缓存
    saveSettings(patch: SettingsPatch): void       // 合并到存储里的当前值上，写回，再通知
    onSettingsChange(listener): () => void         // 本标签页保存后、其他标签页写入后，各回调一次
    diffSettings(base: Settings, draft: Settings): SettingsPatch // 只交出改过的字段，快捷键有任何不同就整个交出
    ```
    - 规范化以 `createDefaultSettings()` 为底，只接受默认值里有、而且类型相同的字段。这样 `sync.lastSyncTime` 这类残留字段自然就去掉了，缺 `code` 的旧快捷键也会换成默认值。另外：`preset` 只保留布尔值；`expirationTime` 不到 1 天时换成一年。
    - 代码里的字段名和存储保持一致（`general`、`preset`、`batch`、`sync`），不再用 `batchKeySettings`、`presetStates` 这些别名。
  - **shortcut.ts** 收进 `isMac`（去掉对 `navigator` 的判空，那是给 Node 准备的，utils.ts 早就不在 Node 里执行了）、默认快捷键、`formatShortcut`（从 ShortcutSettings.vue 挪过来）和 `isTyping`（从 eventManager 挪过来）。
  - **log.ts**：`log.debug()` 只在调试开关打开时打印。每批变化打一行汇总，不再逐个链接打；开启调试时，照旧打印一次存储的大小。警告和错误照常用 `console.warn`、`console.error`。
  - **page.ts**：
    ```ts
    export function startPage(): void {
      let dispose: (() => void) | null = null
      const refresh = () => {
        dispose?.()
        dispose = null
        try {
          const settings = getSettings()
          const site = findActiveSite(location.href, settings.preset)
          if (site) dispose = activate(site, settings)
        } catch (error) {
          // 要接住：不能让 URL 检测和设置订阅跟着失效
          console.error('[color-visited] 激活页面失败', error)
        }
      }
      refresh()
      watchUrl(refresh)         // 常驻的 observer，只比较 location.href，在非激活页上也一直运行
      onSettingsChange(refresh)
    }
    ```
  - **colorizer.ts**：
    ```ts
    export function activate(site: Site, settings: Settings): () => void {
      const ac = new AbortController()
      const style = injectLinkStyle(settings.general.color)
      markAll()                                         // 页面上全部 a[href]，按当前 href 判断
      const observer = observeLinks()                   // 新出现的、href 变了的链接：不看现有标记，按当前 href 重新判断
      const unsubscribe = onLinksChange(updateMarks)    // 本标签页的记录增删 → 重新判断对应 URL 的所有链接
      document.addEventListener('click', onClick, { capture: true, signal: ac.signal })
      document.addEventListener('auxclick', onClick, { capture: true, signal: ac.signal })
      document.addEventListener('keydown', onKeydown, { signal: ac.signal })
      return () => { ac.abort(); observer.disconnect(); unsubscribe(); style.remove(); unmarkAll() }
    }
    ```
    - 标记改用带命名空间的 data 属性（比如 `data-color-visited`），写法见「关键机制」。
    - 两个 observer（page.ts 的 URL 检测、这里的链接）都观察 `document.documentElement`，不观察 `body`：有的站点会整个替换 `<body>`（比如用 Turbo 的站点），之后挂在旧 body 上的 observer 就收不到变化了。
    - 点击：`auxclick` 只认 `button === 1`（B22）。点击、批量标记、撤销都只写存储，颜色由 `onLinksChange` 跟着更新。
    - 快捷键：忽略 `event.repeat`；`isTyping` 时不响应。
    - 染色样式（C15）：
      - 规则放进 `@layer color-visited { … }`。CSS 规定：写在 layer 里的 `!important` 声明，优先于所有不在 layer 里的 `!important`，和特异性无关。Chrome 146 实测，上面那个例子里，layer 里只写一条 `a[…]{color:…!important}` 就赢了。
      - 规则只保留一组：链接及其后代（含 `::before`、`::after`）的颜色，以及后代里图片和背景图的半透明。
      - 网站自己在 layer 里写了 `!important` 时我们会输（先声明的 layer 优先），但现在的写法在这种情况下也会输，不会更差。
      - 颜色先用 `CSS.supports('color', c)` 校验，不合法就用默认值；写入时用 `textContent`。
  - **ui/notify.ts**：`notify(message, type, action?)`，`type` 必填，不再按文字猜。S3 里先把现有的 Element Plus 实现从 core/ui.ts 挪过来，S4 改成按需加载，调用方不用改。
  - **sync.ts**：带通知的 `runSync({ manual })` 和自动同步的间隔判断从 script.ts 挪进来，读 `getSettings()`，自动同步和"立即同步"共用。删掉 `sync:completed` 事件：合并写进存储时，`onLinksChange` 已经会通知。
  - **main.ts** 只负责组合（见「目标架构」），"设置"菜单最先注册。
  - **旧对话框的桥接**（S4 删掉）：打开设置时用 `getSettings()` 发出原来的 `dialog:show-settings`；`settings:save` 转成 `saveSettings`；`sync:request` 转成 `runSync({ manual: true })`。旧组件只改 import 路径这类让它们继续工作的地方；App.vue 照旧在启动时挂载，S4 改成用到时才创建。
  - 删掉 script.ts、state.ts、config.ts、linkManager.ts、eventManager.ts、domObserver.ts、pageDetector.ts、menuManager.ts、utils.ts、core/ui.ts。types.ts 只留同步相关的类型，S5 删。
- 完成标准：
  - test/runtime/ 的测试全部通过：只改 helpers.ts（启动、保存设置、通知、标记和染色样式的读法），场景文件里只把 B22 那条从 `it.fails` 改回 `it`。jsdom 30 自带 `CSS.supports`，颜色校验不用补桩（2026-10-17 实测：`red`、`rgba(0,0,0,0)` 为 true，`notacolor`、`red;} body{x:y` 为 false）。
  - 新增测试：
    - `parseSettings`：空存储；`preset` 为 null；缺字段；类型不对；过期时间为 null、0、负数、365（把天数当毫秒填）、半天、缺字段时，都换成一年；1 天、9.6 天、3650 天原样保留。
    - `saveSettings` 只合并改过的字段，快捷键整个替换；本标签页保存、其他标签页写入（用 `setValueFromOtherTab` 模拟），各通知一次。
    - `diffSettings`；`onLinksChange` 在写入、删除之后通知，什么都没变时不通知。
  - `grep -rnE "GM_(get|set|delete|list)Values?|GM_(add|remove)ValueChangeListener" src` 只匹配到 storage.ts。
  - 没有 `ScriptState`；模块之间没有循环依赖。
- 浏览器里验证：构造一个带 `#app .list a{color:red!important}` 的页面，确认链接能染上色；在几个支持的站点上截图对比。

### S4 · UI：按需加载、外壳、通知、设置对话框（v2 的 A8、A11；修 B19）

- 现状：
  - **每个匹配的页面都会执行整份 UI 代码**：Vue、Element Plus 是静态 import 的，启动时就做完模块初始化，还会创建 shadow root 和 Vue 应用，即使用户从不打开设置（耗时见「性能与数据规模」）。
  - **样式**：
    - Element Plus 的组件样式经 `GM_addStyle` 注入了宿主页面的 `<head>`（18 段，约 97 KB，含 `:root{--el-*}`），宿主网站自己也用 Element Plus 时两边会互相干扰；
    - shadow root 里又从 unpkg 加载一份没锁版本的完整 CSS（361 KB）：每个页面都要请求一次，受宿主页面 CSP 的 `style-src` 限制，unpkg 不可用时设置界面就没有样式；
    - 取色器的面板默认 teleport 到 `document.body`，全靠泄漏到宿主页面的样式显示；
    - B19。
  - **对话框**：
    - 打开要经过事件总线和 App.vue 的 props，保存要经过 4 种 emit、4 个 handler、`settings:save` 事件；
    - 4 个 tab 组件各有一套 `formData`、`savedSettings`、用 `JSON.stringify` 比较的 `hasChanges`、immediate + deep 的 watch 和 `defineExpose`，SettingsDialog 按 `activeTab` 走 4 个分支；
    - "保存设置"只保存当前 tab：在一个 tab 里改了，切到另一个 tab 再点保存，前一个 tab 的修改没存，也没有任何提示；
    - 点到对话框外面就会关掉（`close-on-click-modal`），没保存的修改随 `destroy-on-close` 直接丢掉；
    - "立即同步"发出 `sync:request` 事件，绕到 script.ts 去执行。
  - **通知的类型是猜的**：没传类型时，用正则匹配 `失败|错误|error`，其余都当作成功。所以同步页的"请输入 GitHub 令牌"、批量标记的"没有找到新的…链接"都显示成绿色的成功。
  - unplugin-auto-import 没有用处：它生成的 auto-imports.d.ts 是空的。
- 做法：
  1. 去掉 unplugin-auto-import 和 mitt；删掉 auto-imports.d.ts、eventBus.ts、App.vue 和旧对话框的桥接。Element Plus 的组件照旧由 unplugin-vue-components 的 resolver 按需引入。
  2. **按需加载**（规则见「目标架构」的依赖规则）：
     - main.ts 在"设置"菜单的回调里 `import('@/ui/dialog')`，再调 `openSettings()`。ui/notify.ts 第一次被调用时 `import('./message')`，之后复用同一个 Promise。
     - 这两处是边界：加载或执行出错时 `console.error`，不影响染色。
     - ESLint 对 main.ts、core/、shared/、ui/notify.ts 开 `no-restricted-imports`，禁止静态 import vue、element-plus、@element-plus/*、`*.vue` 和 ui/ 里别的模块。这条规则只管静态 import，不管 `import()`。
  3. **ui/root.ts**：第一次打开设置或弹通知时，才创建宿主元素。
     - 宿主元素用自定义标签名（比如 `<color-visited-ui>`），挂在 `document.documentElement` 下：页面写给 `div` 的样式碰不到它。
     - shadow root 建成 closed，引用只留在这个模块里。对话框里的 Element Plus 组件（tab、开关、输入框、数字框、按钮）放在 closed shadow root 里，用 CDP 的真实输入事件实测正常（Chrome 155）；取色器不行，见 D10。
     - closed 之后，挂在 document 上的 keydown 监听拿到的 `composedPath()` 从宿主元素开始，看不到里面的输入框。所以 `isTyping` 改成：事件目标是我们的宿主元素时，就当作用户在输入（Chrome 155、jsdom 实测）。
  4. **样式**：所有 CSS 只写进 shadow root（取色器按 D10 选项 1 换掉之后）。
     - 用 vite-plugin-monkey 的 `build.cssSideEffects`，把打包进来的 CSS（Element Plus 的组件样式、SFC 的 `<style>`）收集到 `globalThis` 上一个带命名空间的键里（比如 `Symbol.for('color-visited/css')`）。这个函数会被 `toString()` 之后内联进产物，不能引用模块作用域。
     - 每个块的 CSS 要到这个块执行时才进来：先弹过通知、后打开设置时，对话框的样式是后来的。所以 ui/root.ts 在每次 `import()` 完成后，把新收集到的 CSS 追加进 shadow root；写入时把 `:root` 换成 `:host`，整段包进 `@layer components{…}`（B19）。
     - 通知用的 `ElMessage`、渲染"撤销"按钮的 `ElButton`，resolver 看不到，照旧显式 import 它们的 `style/css`。
     - Tailwind 和自己的样式合成一个 `ui/style.css`，在 ui/root.ts 里用 `?inline` 静态 import，创建 shadow root 时最先写入（同样把 `:root` 换成 `:host`）。不要另外声明层的顺序：没列进去的 properties 层会排到最后，盖掉工具类设置的变量。
       - 写 `@import "tailwindcss" source(".");`，只扫描 ui/。现在它扫描整个仓库，文档、工作流里的普通单词也会生成工具类（`.contents` 来自 release.yml，`.inline` 来自计划文档），改文档就会改变产物。
       - B19：在 vite.config.ts 里加一个很小的 transform，把 `@layer properties` 里那层 `@supports (…)` 换成 `@media all`，让变量的初始值在 shadow root 里也无条件生效。找不到要换的文本时让构建失败，免得以后升级 Tailwind 时悄悄坏掉。Tailwind 自己没有这个开关。开发和构建时 CSS 的空白不一样（构建时压缩过），匹配要容忍空白。
     - 删掉 unpkg 的 link，以及 styles/index.css 里手动补的 `--el-*` 变量。
     - 开发模式（`pnpm dev`）下，CSS 由 Vite 插进 `document.head`，`cssSideEffects` 不生效。要在 `import.meta.env.DEV` 下把这些 `<style>` 复制进 shadow root，同样包进 `@layer components{…}`。
  5. **ui/message.ts**：沿用现在的 `ElMessage` 实现，`appendTo` 指向 shadow root 里的元素。带操作按钮时显示 5 秒，否则 2 秒；鼠标停在上面时不消失；按钮只响应第一次点击（通知淡出的过程中按钮还点得到）；同样的通知正在显示时不叠加（`grouping`）。
  6. **设置对话框**（ui/dialog.ts 和 ui/*.vue）：
     - `openSettings()` 每次打开都新建一个 Vue 应用，挂进 shadow root，用 `el-dialog`，关闭后 unmount；对话框已经开着时什么都不做。这样就不再需要 App.vue、`destroy-on-close`、重置 `activeTab`，也不用 watch props。
     - 打开时从 `getSettings()` 拷贝出一份 draft，再留一份快照。整个对话框只有一个 `hasChanges`、一个"保存"按钮：`saveSettings(diffSettings(快照, draft))`。保存后对话框不关，快照换成刚保存的值。"重置为默认"只重置当前 tab 的 draft，和现在一样。
     - 关闭：只有关闭按钮会关，丢弃没保存的修改。点背景不关（`close-on-click-modal` 设为 false）；Esc 照旧不关（`close-on-press-escape` 为 false），这样录快捷键时能录到 Esc。
     - 各个 tab 组件用 v-model 编辑 draft 中属于自己的那部分，不再 `defineExpose`：
       - 常规：颜色按 D10 选项 1，用预设色块（含透明）、文本框（失焦时用 `CSS.supports` 校验，不合法就退回原值）和原生取色器，去掉 `el-color-picker`；调试开关。
       - 过期时间保留现在的规则：在 `change`（失焦、回车）时才取值，输入过程中的数不算（从 365 退格到空，中间会经过 3）；清空、0、负数、小数，都回到保存的天数。不能把无效输入改成 1 天：保存后一天前的记录会全被删掉。
       - 预设网站：按站点表列出 `name`，开关的值是 `isSiteEnabled(draft.preset, id)`；"已启用 x/y"按站点表来算；全部启用、全部禁用；点开看 `pages`、`links`。箭头的两个颜色类改成二选一（`expanded ? 'text-blue-500' : 'text-gray-400'`）。
       - 快捷键：录制时 `preventDefault`。显示用 `formatShortcut`。
       - 同步：保存时把 Gist 网址归一化成纯 ID。"测试连接"用表单里的值；"立即同步"调用 `runSync({ manual: true })`，同步这部分有没保存的修改时不能点。最后同步时间跟着 `onLastSyncTimeChange` 刷新。去掉 gzip 支持状态的卡片和提示。
- 完成标准：
  - 入口块（产物里 `./___monkey.entry.js` 那一段）没有 `_css(`；产物里没有 `unpkg.com`，也没有 `GM_addStyle`；
  - 没打开过设置、也没弹过通知的页面上，没有宿主元素；打开设置、弹过通知之后，宿主页面的 `<head>` 里也只有染色用的那一段样式；
  - 在两个 tab 里各改一项，点一次保存，两项都存下来；
  - 先弹通知再打开设置，以及反过来，对话框的各个 tab、通知（含"撤销"按钮）的外观都和现在一样（截图对比），B19 的边框、阴影、渐变和那 4 处类都显示出来；
  - 按「性能与数据规模」的方法量一次，每次加载激活页要和"内核 + Vue"相当；把产物体积、每次注入的耗时和第一次打开设置的耗时写进提交信息。

### S5 · 同步模块（v2 的 A13）

- 现状：sync.ts 共 1132 行，大约一半是校验和诊断代码。
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
  - CLAUDE.md（被 .gitignore 忽略，只存在于本地）已经过时：说 `PRESET_RULES` 在 core/config.ts，说 build 用的是 tsc，还漏掉了好几个模块。把架构说明写进入库的 AGENTS.md，CLAUDE.md 只留一行 `@AGENTS.md`，免得两份各自过时。
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
    - 源码这一步明显花时间（比如 940 KB 的产物比只有内核的多出 10 ms 以上）：再评估缩小产物。取色器按 D10 选项 1 换掉后已经少了约 150 KB；还可以把 `el-form` 换成普通布局，再少约 63 KB。

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
- **靠构建配置缩小产物。** 压缩：Greasy Fork 不允许；删除死代码：默认已经开着，产物里没有残留的开发分支；按需引入：已经生效。`externalGlobals` 从 CDN `@require` 的 Element Plus 只有完整版（压缩后 1.1 MB），更大，而且每次照样要解析。
- **去掉 Tailwind。** v2 的 D7 已定保留。按 2026-10-14 的构建，它的 CSS 约 18 KB，B19 在保留它的前提下就能修好。
- **为了体积去压 Tailwind 的产物**（比如排掉误生成的类、去掉 preflight）。最多从 18 KB 压到 12.6 KB，却要维护一张词表，还得重新检查整个界面。S4 改成只扫描 ui/ 之后，从业务代码里误生成的类会自然消失。
