# color-visited 重构与优化计划

> 基于提交 `1421605`（2026-10-09）对全部代码的通读。
> 文中行号均指该提交。代码改动后行号会漂移，请以函数名定位；需要对照原文时用 `git show 1421605:<路径>`。

## 怎么使用这份文档

- 新会话开场可以直接说：「读 `docs/plans/refactor-plan.md`，继续做下一阶段」，或者「做 B2、B3」。
- 条目编号的含义：**B** = bug，**P** = 性能，**A** = 架构，**C** = 代码细节，**E** = 工程化，**D** = 需要你拍板的决策。
- 每完成一项：
  - 把 `[ ]` 改成 `[x]`，并在条目末尾写上提交号；
  - 在文末「会话记录」里追加一行。
- 新发现的问题按同样格式补进对应章节，编号顺延。
- 仓库约定（包管理器、版本号位置、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度总览

| 阶段 | 内容 | 条目 | 状态 |
|---|---|---|---|
| 1 | 修 bug，加几个低风险的小优化 | B1–B8、P1、P3、A6 短期第 1 步 | 进行中（B1、B2、B3 已完成） |
| 2 | 先搭安全网：测试 + 格式化 | E2、E1a | 未开始 |
| 3 | 统一存储层，清理死代码 | A1、C7–C9 | 未开始 |
| 4 | 核心生命周期 + 规则模型 | A2、A7、C1–C3 | 未开始 |
| 5 | 设置数据流 + 设置对话框 | A3、A4、C12、C13 | 未开始 |
| 6 | 拆分 sync.ts | A5 | 未开始 |
| 7 | 视决策而定 | P4（D2）、A6 长期（D3）、E5（D4） | 未开始 |
| 随时 | 零散小项 | C4–C6、C10、C11、C14、E1b、E3、E4、E6、E7 | 未开始（C13 已随 B3 完成） |

阶段之间的依赖：

- 阶段 6 要在阶段 2 的测试完成之后做；
- A3 和 P4 都依赖 A1；
- B5 的代码会在 A3 中被整体删除。如果打算很快做 A3，B5 只需要最小限度的止血。

## 待决策（需要你拍板）

- [ ] **D1 · 根目录的 `visited-links.json` 怎么处理**
  - 这是一个 v2 同步包：97,048 条记录，`updatedAt` 是 2026-04-11（和引入它的提交 7b3ba07 同一天），没有任何代码引用。
  - 仓库是公开的，不登录也能直接访问这个文件。
  - 如果是真实浏览数据：删除文件，并用 `git filter-repo` 从历史里清除。这会改写提交号，需要 force push。
  - 如果是测试样本：挪到 `test/fixtures/`，在 E2 里当作大数据量样本使用。
- [ ] **D2 · 要不要按 host 分片存储**（见 P4）
  - 收益：页面只需要读写当前站点的数据，B1 的竞态窗口也会变小。
  - 代价：需要一次性迁移数据，同步时要把所有分片汇总起来。
  - **B1 之后建议直接关闭：** 访问记录已改为按 URL 逐条存储，粒度比按 host 分片更细，分片的收益已经全部拿到，迁移和同步汇总的代价也已经付过了。
- [ ] **D3 · 要不要去掉 Element Plus**（见 A6）
  - 收益：体积大幅下降，所有 CSS 隔离方面的 hack 一起消失。
  - 代价：要手写十来个小组件，取色器也得自己实现。
- [ ] **D4 · `dist/` 是否继续提交入库**（见 E5）。决定前要先确认 GreasyFork 目前是从哪里同步脚本的。
- [x] **D5 · 批量快捷键的默认值要不要换**（见 B2）。Windows 下的 Ctrl+Shift+V 和浏览器的"粘贴为纯文本"冲突。只改默认值的话，已经保存过设置的老用户不受影响。
  - **结论（2026-10-09）：不换**，保留 Ctrl+Shift+V / ⌘⇧V。理由：
    - "粘贴为纯文本"只在可编辑元素里起作用。B2 让快捷键在可编辑元素里不触发之后，在其余位置按这个键，浏览器本来就什么也不做，拦掉它没有代价。
    - 其他 Ctrl+Shift+字母大多已被浏览器或输入法占用，而且多数在整页都生效。处理函数会 `preventDefault`，换过去等于抢走一个浏览器功能。例如 A（Chrome 的搜索标签页、Firefox 的附加组件）、M（Chrome 的切换用户、Firefox 的响应式设计模式）、F（微软拼音和搜狗的简繁切换）、U（Linux 上 IBus 的 Unicode 输入）。
    - 带 Alt 的组合问题更多：Mac 的 Option 和部分键盘布局下的 AltGr 会改写 `event.key`（Mac 上 ⌥V 得到 `√`），按 `event.key` 匹配就认不出来（B3 之后改为按 `event.code` 匹配，这一条已不成立）；Alt+Shift 还是 Firefox 的 accesskey 组合，也是 Windows 切换输入语言的热键。
    - 改默认值只影响从没保存过设置的人。`saveUserSettings` 和 `saveSyncSettings` 都把设置整份写回，保存过任何一项设置的老用户，存储里已经是旧键了。而从没打开过设置、一直在用默认键的人，升级后快捷键会悄悄变掉。
    - 剩下的风险是用户以为焦点在输入框里、其实不在时误按。换哪个键都避免不了，根治办法是让批量标记可以撤销，见 B8。
- [ ] **D6 · 再次点击已访问的链接时，要不要刷新时间戳**
  - 现在只在第一次点击时记录时间戳（[eventManager.ts:80](../../src/core/eventManager.ts#L80)），所以过期是从首次访问开始算的。
  - 但同步合并时取的是最大时间戳（[sync.ts:1133](../../src/core/sync.ts#L1133)），两处语义不一致。

## 背景事实与约束

### 数据规模

以下数字来自 `visited-links.json` 的元信息（2026-04）：97,048 条记录，原始 JSON 5.4 MB，gzip 后 732 KB。估算"整份读写"的开销时，请按这个量级来算。

### 存储结构（必须兼容老用户的数据）

- 访问记录（B1 之后）：每条单独存成一个 GM 值，键是归一化后的 URL，值是首次访问的时间戳（ms）。只有 `src/core/storage.ts` 读写它们。
  - storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**设置类的键不能含冒号**。
  - 旧版本（v2.21.0 及以前）把全部记录存在 `visitedLinks` 一个键里，结构是 `Record<URL, 时间戳>`。新版本启动时把它逐条合并进来再删掉，可以重复执行。
- `userSettings` 的结构如下：
  ```ts
  {
    general: { color: string; expirationTime: number /* ms */; debug: boolean },
    preset:  Record<规则 key, boolean>,   // 规则 key 会被持久化在这里，改 key 需要迁移
    batch:   { ctrlKey, shiftKey, altKey, metaKey: boolean; code: string /* KeyboardEvent.code，B3 之前是 key */ },
    sync:    { enabled: boolean; githubToken: string; gistId: string; lastSyncTime: number },
  }
  ```

### 构建与运行环境

- **规则文件会在 Node 中执行。** `vite.config.ts` 在 Node 中 import `src/shared/presetRules.ts` 来生成 `@include`。因此这个文件的顶层代码不能引用浏览器全局对象（写在函数体里没问题）。
- **体积只能靠减少依赖。** GreasyFork 不允许发布压缩过的代码。
- **SPA 跳转检测的方式不能换。** 用户脚本运行在隔离环境里，没法 hook 页面的 `history.pushState`。所以现在的做法是在 MutationObserver 回调里比较 `location.href`（[domObserver.ts:90-97](../../src/core/domObserver.ts#L90-L97)）。这个检测在非激活页上也必须一直运行：v2.19.4 修过一个相关问题，即从非激活页跳到激活页时监听失效。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，storage.ts 在旧版本上退回逐条写。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块（[TM #1787](https://github.com/Tampermonkey/tampermonkey/issues/1787)、[VM #183](https://github.com/violentmonkey/violentmonkey/issues/183)）。页面侧会缓存全部值：VM 的 `GM_getValue` 每次都要把存的字符串解码一遍，对象值就是一次 `JSON.parse`；`GM_setValue` 每次都要 `JSON.stringify`，然后发一条消息。
  - 逐条存储的开销（B1 时按 VM 页面侧源码建模，在 Node 里实测，9.7 万条）：
    - 点击一次：页面主线程从约 41 ms 降到约 0，也不再给每个打开的标签页广播 5.6 MB 的消息。
    - 页面注入：要把 9.7 万个键逐个交给页面，从约 14 ms 涨到约 53 ms。旧布局用之前还要再花约 27 ms 解析大键，所以实际净增约 10–30 ms。
    - 后台每次持久化：从约 6 ms 涨到约 25 ms，不在页面主线程上。
    - 1 万条以内，以上差别都在几毫秒以内。TM 闭源，常数可能不同。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。如果要请求新的域名，需要在 `vite.config.ts` 的 `connect` 里加上。

### 同步模块的行为不变量（重构 sync 之前先用测试锁住）

下面这些都是刻意设计的安全行为，简化代码时不能丢：

1. HTTP 请求失败时必须抛错，不能当作"云端为空"。否则紧接着就会用本地数据覆盖云端（[sync.ts:1068-1071](../../src/core/sync.ts#L1068-L1071)）。
2. 遇到不认识的 `syncVersion`（通常来自更新版本的脚本）时抛错，不覆盖云端。
3. `syncVersion` 认识，但外层包的结构不对时，抛错，不覆盖云端。
4. 文件超过 1 MB 被截断时，改用 raw_url 获取完整内容。如果获取到的内容无法识别（比如代理或限流返回的 HTML），抛错，不覆盖云端（[sync.ts:830-837](../../src/core/sync.ts#L830-L837)）。
5. 不是同步数据的内容，按"空"处理，并标记 `needsInitialization`，本次同步会把它初始化成同步格式。这包括：空内容、不是 JSON、不是对象、没有同步特征的对象（含 `{}`）。这样新建 Gist 时内容可以随便填（v2.20.4 引入）。
6. 继续支持读取以下旧格式：v2 压缩包、带 `visitedLinks` 字段的对象、键是网址且值是数字的明文对象。
7. 自愈：剔除已知的同步包污染键（`syncVersion`、`encoding`、`payload` 等）和不是有限数字的时间戳，并打印日志。B1 之后这只针对云端数据：本地按键存储，不含冒号的键不会被读出来，`mergeLinks` 也拒绝写入这类键和非法时间戳，本地数据不会再被污染。
8. 合并时，每条 URL 取最大的时间戳，而且不能丢掉同步期间发生的点击。B1 之前靠"网络请求返回后重读一次本地再合并"（[sync.ts:1171-1181](../../src/core/sync.ts#L1171-L1181)）；B1 之后由 `mergeLinks` 直接和存储里的当前值逐条比较，本标签页和其他标签页在同步期间的写入都不会被覆盖。
9. 只有数据有变化，或需要初始化时，才上传（[sync.ts:1190](../../src/core/sync.ts#L1190)）。
10. 上传时一律写成 v3 格式：gzip + base64 + 按 host 分组的前缀差分。同步模块内部始终使用平铺的 map（由 `loadLinks()` 组装）。

### 结论的可信度

- **已核实：**
  - B1–B6 涉及的代码路径，都逐行读过；
  - `new URL('http://')` 和 `new URL('https://exa mple.com')` 会抛 TypeError（在 Node 中实测）；
  - 构建产物的头部有 SystemJS 的 `@require`，产物中有 18 处 `_css(` 把样式注入宿主页面（grep 产物确认）；
  - vite-plugin-monkey 默认从 package.json 读取 `version`、`author` 等字段（8.1.1 源码，`dist/node/index.mjs` 第 2041 行）；
  - 仓库可以公开访问。
- **依据规范或文档推断：**
  - `a.href` 解析失败时，返回的是原始属性值（HTML 规范）；
  - Tampermonkey 注册菜单时如果不传 id，会新建一个菜单项（TM 文档）。
- **未核实：**
  - Tailwind 的 `@property` 在 shadow root 中失效（见 A6）。
  - 按 URL 逐条存储（B1）后，Tampermonkey 和 Violentmonkey 在 10 万个键下的页面注入、`GM_listValues` 和逐条 `GM_getValue` 的耗时。存储语义只在 Node 里模拟过，没有在真实扩展里测过。
- 核实时，`pnpm typecheck` 和 eslint 都没有报错。但 eslint 几乎没有配置规则（见 E1），所以这不能说明代码没问题。

---

## 1. Bug

- [x] **B1 · 多个标签页会互相覆盖访问记录，导致数据丢失**（bc63d1f）
  - 位置：`createLinkClickHandler`，[eventManager.ts:80-83](../../src/core/eventManager.ts#L80-L83)。内存副本在 `activateLinkFeatures` 中载入（[linkManager.ts:222-223](../../src/core/linkManager.ts#L222-L223)），此后只有 `sync:completed` 和 `batchAddLinks` 会刷新它。
  - 问题：点击时，脚本把"页面加载时的内存副本 + 新增的一条"整份写回存储。如果两个标签页都开着列表页，后写入的一方会抹掉另一方在它加载之后记下的链接，以及其他标签页同步进来的记录。`syncOnStartup` 专门处理过同一类竞态，但点击这条路径没有处理。
  - 根因：访问记录彼此独立，却被打包成一个对象存在一个键里。记一条就要读出整块、改一条、再整块写回，而页面拿来改的是加载时缓存的旧副本。原来设想的两种修法都只能缩小竞态窗口，消除不了：写前重读也好，`GM_addValueChangeListener` 也好，整块写入在跨标签页传播的那几毫秒里仍然会互相覆盖。
  - 修法：每条记录单独存成一个 GM 值，键是 URL，值是首次访问时间。
    - 扩展后台按键应用各标签页的写入：不同 URL 互不影响；同一 URL 后写覆盖先写，只差几毫秒的时间戳，不会丢记录。
    - 页面不再缓存副本（删掉了 `ScriptState.visitedLinks`），读取直接查存储，也能看到其他标签页刚写的记录。所以点击后不论是否首次记录都重新染色。
    - 新增 `src/core/storage.ts`，它是唯一读写访问记录的模块：`isVisited`、`recordVisit`、`loadLinks`、`mergeLinks`（逐条取较大时间戳）、`deleteExpiredLinks`、`migrateLegacyLinks`。
    - 同步改为先 `mergeLinks(云端)`、再 `loadLinks()`，不再需要重读本地；删掉了 `mergeVisitedLinks`。
    - 启动时迁移旧的 `visitedLinks` 大键，见「存储结构」。
  - 验证：
    - 已做：在 Node 里模拟 GM 存储（后台串行应用写入、每个标签页一份缓存、异步广播），用真实的 storage.ts 跑了 11 个场景。覆盖了：旧实现能复现 B1；新实现在传播窗口内并发写也不丢；迁移可重复执行、能补进旧版本标签页写回的数据；同步期间的点击不丢；云端数据不能覆盖 `userSettings`；没有批量接口时的退回路径。模拟脚本没有入库，做 E2 时可以改写成 Vitest 用例。
    - 待做（需要真实浏览器）：打开两个 V2EX 列表页标签 A 和 B。在 A 中点击链接 x，再在 B 中点击链接 y，然后刷新 A。x 和 y 都应该保持染色。
    - 待做：用 97,048 条的真实数据升级一次，看控制台是否打印 `已把 N 条访问记录迁移为逐条存储`，迁移和之后的页面加载是否明显变慢。

- [x] **B2 · 在输入框里按批量快捷键也会触发**（ae4ead1）
  - 位置：`setupBatchKeyListener`，[eventManager.ts:20-35](../../src/core/eventManager.ts#L20-L35)。默认值在 [config.ts:11-19](../../src/core/config.ts#L11-L19)。
  - 问题：代码没有检查事件目标。Windows 下默认快捷键是 Ctrl+Shift+V，正好是 Chrome 的"粘贴为纯文本"。在页面搜索框里按下它，会发生两件事：
    - 粘贴被 `preventDefault` 拦掉；
    - 整页链接被批量标记为已访问，而且没法撤销（见 B8）。
  - 修法：新增 `isTyping(event)`，处理函数开头遇到以下情况直接 return：
    - 事件目标是 `input`、`textarea`、`select`，或 `isContentEditable` 为真；
    - `event.isComposing` 为真。
    - 事件目标从 `event.composedPath()[0]` 取，而不是 `event.target`：监听器挂在 document 上，shadow root 里的输入框会被重定向成宿主元素，用 `event.target` 会漏判。closed 模式的 shadow root 从外面看不到内部节点，那里的输入框仍会触发，这种情况很少见。
    - 默认键不换，见 D5。
    - README 里写的默认键是 "Shift+V"，和代码不一致，已一并改正。
  - 验证：
    - 已做：用 esbuild 打包真实的 eventManager.ts（依赖换成桩），在 headless Chrome 146 里派发合成的 Ctrl+Shift+V keydown，新旧代码对照。
      - 旧代码在所有场景下都触发，并拦掉默认行为。
      - 新代码在以下场景都不触发，也不拦默认行为：input、textarea、select、contenteditable 及其子元素、open shadow root 里的 input 和 contenteditable、输入法组字中。
      - 新代码在 body 和 button 上照常触发；closed shadow root 里的 input 仍会触发（已知限制）。
      - 测试脚本没有入库，做 E2 时可以改写成 Vitest 用例。
    - 待做（需要真实浏览器）：在 V2EX 首页的搜索框里按 Ctrl+Shift+V，应能正常粘贴，并且不出现"已批量添加"的提示。

- [x] **B3 · 特殊键能录入，但按下后永远不会触发**（fe8cdbe）
  - 位置：录入在 [ShortcutSettings.vue:116-122](../../src/components/ShortcutSettings.vue#L116-L122)，匹配在 [eventManager.ts:27](../../src/core/eventManager.ts#L27)。
  - 问题：录入时，多字符的键名保持原样（`ArrowUp`、`Enter`、`Escape`、`Delete`、`Home` 等）。匹配时却先对 `event.key` 做了 `toUpperCase()`，于是 `'ARROWUP' !== 'ArrowUp'`。目前只有单字符键和 F1–F12 能正常工作，而 UI 里还专门为这些特殊键做了显示映射。
  - 原计划的修法：抽一个 `normalizeKey(key)`：单字符转大写，多字符保持原样，录入和匹配两边都用它。也可以改用 `event.code`，它不受键盘布局影响，但已保存的设置需要迁移。
  - 根因：`event.key` 是"这次按键产生的字符"，同一个键会因为大小写、Shift（1 → `!`）、Mac 的 Option（V → `√`）、输入法（`Process`）、死键（`Dead`）、键盘布局而不同。所以录入和匹配各自都得先归一化，两边一不一致就出 bug。补一个共用的 `normalizeKey` 只是把这两份归一化合成一份，归一化本身还在。
  - 修法：快捷键改为"修饰键 + 物理键位"，按 `event.code` 录入和匹配，完全不做转换。
    - `userSettings.batch` 的 `key` 字段改名为 `code`，存 `KeyV`、`ArrowUp` 这类键位名，默认值是 `KeyV`。
    - 新增 `src/core/shortcut.ts`：
      - `toShortcut(event)` 直接取事件上同名的五个字段：`ctrlKey`、`shiftKey`、`altKey`、`metaKey`、`code`；
      - `matchesShortcut(event, shortcut)` 定义为"`toShortcut(event)` 和设置逐字段相等"。录入和匹配用的是同一个函数，两边不可能再分歧。
    - 录入时修饰键按 `code` 识别（`ControlLeft` 等），`code` 为空（浏览器认不出的键）时不录入。
    - 显示时去掉 `Key`、`Digit` 前缀（`KeyV` → V），方向键等几个键换成符号。
    - 顺带删掉录入处什么也不做的 else 分支（C13）。
  - 取舍：
    - 键位按 QWERTY 命名。AZERTY、Dvorak 用户按下印着 A 的键会显示成 Q，但按同一个键照样能触发。
    - 主键盘的 1 和小键盘的 1 算两个键。
    - **不兼容旧设置（按要求不做迁移）：** 保存过任意设置的老用户，存储里的 `batch` 只有 `key` 没有 `code`。升级后快捷键不再触发，设置页只显示修饰键（如 "Ctrl + Shift"），要重新录入或点"重置"。D5 已经分析过，`saveUserSettings` 和 `saveSyncSettings` 都把设置整份写回，所以受影响的是所有保存过任意设置的人。C9 的 `deepMerge(defaults, stored)` 会给缺 `code` 的旧设置补上默认值。
  - 验证：
    - 已做：用 esbuild 打包真实的 eventManager.ts 和 shortcut.ts（其他依赖换成桩），在 headless Chrome 146 里派发合成的 keydown。录入直接调 `toShortcut`，旧代码按 HEAD 的录入逻辑存成设置，然后按下：
      - 15 组按键：Ctrl+↑、←、Enter、Escape、Delete、Home、PageDown、F1、Alt+F12、Space、Ctrl+Shift+V、Shift+1，录入 Ctrl+v 后开着大写锁定再按，录入时英文布局、按下时俄文布局，Mac 上 ⌥⇧V（key 是 `◊`）。新代码全部触发；旧代码在方向键、Enter、Escape、Delete、Home、PageDown 上不触发（复现 B3），换成俄文布局后也认不出。
      - 默认值：Ctrl+Shift+V 能触发。假设默认值是 ⌥⇧V，在 Mac 上按下（key 是 `◊`）也能触发，D5 里提到的这个问题也就没有了。
      - 不该触发的场景都不触发：Ctrl+↑ 对 Ctrl+↓、Ctrl+↑ 对 ↑、Ctrl+Shift+V 对 Ctrl+V、Enter 对 E、1 对小键盘 1。
      - 测试脚本没有入库，做 E2 时可以改写成 Vitest 用例。
    - 待做（需要真实浏览器）：把快捷键设为 Ctrl+↑ 并保存，在列表页按下后应触发批量染色；开着中文输入法录入一次字母组合，应显示成对应字母。

- [ ] **B4 · 一个无法解析的 href 就能让整页脚本失效**
  - 位置：`getBaseUrl`，[utils.ts:29](../../src/core/utils.ts#L29)。
  - 问题：`new URL(url)` 没有 try/catch。`a.href` 解析失败时会返回原始属性值，比如 `http://`、`https://exa mple.com`，这时 `new URL` 会抛错。
    - 页面加载时：异常沿 `updateAllLinksStatus → activateLinkFeatures → setupPage → startColorVisitedScript` 一路冒到 [main.ts:6](../../src/main.ts#L6) 的顶层。后面的 `createIsolatedApp()` 不会执行，连设置对话框都打不开。
    - 在 MutationObserver 回调中：异常会中断这一批变更的处理，URL 变化检测也会被跳过。
  - 修法：
    - 不再自己 `new URL`，直接用 `<a>` 元素上已经解析好的 `hostname`、`pathname`、`search`、`hash`。解析失败时，`hostname` 是空字符串。
    - 至少要用 try/catch 包住，出错时跳过这个链接。
    - 和 C2 一起做。
    - 另外在 `setupPage` 外层再包一层 try/catch，保证无论如何 UI 都能挂载。
  - 验证：
    - 单元测试：`getBaseUrl('http://')` 不应抛错。
    - 手动测试：在页面里插入 `<a href="http://">x</a>` 并触发一次扫描，脚本的其他功能应保持正常。

- [ ] **B5 · 设置对话框的监听器泄漏，菜单被重复注册**
  - 位置：
    - `showSettingsDialog`，[ui.ts:140-191](../../src/core/ui.ts#L140-L191)：在 179-180 行注册监听；184-190 行返回清理函数，但这个返回值在 [menuManager.ts:89](../../src/core/menuManager.ts#L89) 被直接丢弃。
    - 重复注册菜单发生在 [menuManager.ts:72](../../src/core/menuManager.ts#L72) 和 [78](../../src/core/menuManager.ts#L78)。
  - 问题：
    - 每点一次"设置"，就会多注册一组 `settings:save` 和 `settings:reset` 监听。打开 N 次之后，保存一次会执行 N 次 `saveUserSettings` 和 N 次 `setupPage`，每一次都要全量读写存储。
    - 保存或重置同步设置时，代码会再次调用 `GM_registerMenuCommand('设置')`。Tampermonkey 在不传 id 时会新建菜单项，于是菜单里会出现重复的"设置"。
  - 修法：监听器只在启动时注册一次；删掉两处重新注册菜单的代码，因为菜单文字固定是"设置"，没有需要更新的状态。A3 会把这整条链路删掉。
  - 验证：
    - 在同一页面打开设置 3 次，再保存常规设置。`saveUserSettings` 应该只执行 1 次（可以打断点确认）。
    - 保存同步设置后，菜单里只有一个"设置"。

- [ ] **B6 · `lastSyncTime` 会被旧值写回**
  - 位置：
    - `syncOnStartup` 在 [sync.ts:1199-1201](../../src/core/sync.ts#L1199-L1201) 直接写存储，经由 `getSyncSettings` 和 `saveSyncSettings`，绕过了 state；
    - 旧值通过 `saveUserSettings`（[state.ts:47-55](../../src/core/state.ts#L47-L55)）写回。
  - 问题：同步完成后，`state.syncSettings.lastSyncTime` 没有更新。结果有两个：
    - 设置页显示的是旧时间；
    - 之后任意一次 `saveUserSettings(state)`，都会把旧值写回存储。
  - 修法（先止血）：处理 `sync:completed` 时，同时刷新 `state.syncSettings`。根治见 A1。
  - 验证：开启同步，等同步完成后打开设置，"最后同步时间"应为刚才的时间；再保存一次常规设置，这个时间不应被改回旧值。

- [ ] **B7 · 开启同步后，过期记录永远删不干净**（B1 时发现，问题早于 B1）
  - 位置：`syncOnStartup`（sync.ts）、`deleteExpiredLinks`（storage.ts）。
  - 问题：同步时，云端的过期记录会被合并回本地，上传时又原样带回云端。云端从不清理过期记录，于是每次同步都把它们写回本地，下次激活页面再删掉，来回折腾；在这期间它们还会让过期的链接重新染色。B1 之前更糟：同步会把开始时的本地快照整份写回，连刚被清理掉的过期记录也一起复活。
  - 修法：合并云端数据前、上传前，都按 `expirationTime` 过滤掉过期条目。可以把过期时间传给 `syncOnStartup`，也可以让 `mergeLinks` 统一拒绝过期条目。
  - 验证：把过期时间临时调成 1 分钟，同步一次，等 1 分钟后再同步，云端的 `itemCount` 应该下降。

- [ ] **B8 · 批量标记之后无法撤销**（D5 讨论时提出）
  - 位置：`batchAddLinks`（linkManager.ts）、`showNotification`（ui.ts）。
  - 问题：按下快捷键后，页面上所有符合规则、还没访问过的链接会一次性写进存储，之后没有办法撤回：
    - 设置里没有删除记录的入口，这些记录只能等过期，默认要一年；
    - 开了同步的话，下次同步会把它们传到 Gist，带到所有设备上。

    B2 之后，在输入框里按快捷键已经不会触发，但焦点其实不在输入框时误按，仍然会触发。换哪个默认键都避免不了这种误按（见 D5）。
  - 修法：在"已批量添加 N 个链接"的通知上加一个"撤销"按钮，显示时间从 2 秒延长到 5 秒左右。点击后删掉这次新增的记录，并去掉对应链接的颜色；之前就访问过的链接不受影响。
    - 这次新增的 URL 就是 `batchAddLinks` 里的 `newLinks`。storage.ts 里已经有私有的 `deleteLinks(urls)`（优先用 `GM_deleteValues`，旧版扩展退回逐条删），导出即可。
    - `updateAllLinksStatus` 只加颜色、不去颜色，要单独去掉这些 URL 对应的所有链接上的 `visited-link` 类。同一个 URL 在页面上可能有好几个链接。
    - 通知现在是纯文本的 ElMessage，要改成带按钮的内容（ElMessage 的 `message` 可以传 VNode）。
    - 可以和 C1 一起做：先把 `batchAddLinks` 简化成一个循环，再加撤销。
  - 已知局限（影响都很小）：
    - 撤销只在通知显示的那几秒内有效。
    - 如果这几秒里恰好有别的标签页加载页面、触发了同步，这批记录会先传到 Gist。同步是把两边的记录合在一起，本地删掉后，下次同步又会合并回来。
    - `recordVisit` 不会改已有记录（见 D6），所以撤销窗口内真正点开过的链接，也会被一起删掉。
  - 验证：在 V2EX 首页按快捷键批量标记，再点通知上的"撤销"。刚染色的链接应恢复原色，刷新后仍是原色；之前点过的链接保持染色。

## 2. 性能

- [ ] **P1 · 每次 setupPage 都全量读写存储**
  - 位置：`activateLinkFeatures`（[linkManager.ts:220-225](../../src/core/linkManager.ts#L220-L225)）、`deleteExpiredLinks`（[linkManager.ts:13-22](../../src/core/linkManager.ts#L13-L22)，B1 后移到 storage.ts）、`logStorageInfo`（[utils.ts:59-78](../../src/core/utils.ts#L59-L78)）。
  - 问题：页面加载、SPA 跳转、每次保存设置时，都会依次执行：
    1. 读取全部数据；
    2. 删除过期记录，而且不管有没有删掉东西，都整份写回；
    3. 再读一次全部数据；
    4. 再把全部数据 stringify 一遍算大小。这一步只是为了打一行日志，而且不受 debug 开关控制。
  - B1 之后的现状：第 2、3 步没有了。过期清理只在确实有过期条目时才删，而且只删那几个键；染色直接按链接查存储，不再整份读取。剩下两次全量枚举（`GM_listValues` 加逐条 `GM_getValue`）：一次在过期清理里，一次给 `logStorageInfo` 打日志。9.7 万条时两次合计约 75 ms（模型实测，见「GM 存储的语义」），是逐条存储后页面加载里最大的一块，所以 P1 适合紧接着 B1 做。
  - 修法：
    - 降低过期清理的频率，比如每天一次，用一个时间戳记录上次清理的时间（这个键名不能含冒号，见「存储结构」）；
    - `logStorageInfo` 只在 debug 模式下执行。
  - 验证：关闭 debug 后，控制台不再出现 `visitedLinks storage size`；在 Performance 面板里对比修改前后 setupPage 的耗时。

- [x] **P2 · 每次点击都把全部数据写回**（随 B1 完成，bc63d1f）
  - 位置：[eventManager.ts:83](../../src/core/eventManager.ts#L83)。
  - 问题：每点一次链接，就 `GM_setValue` 写入 5.4 MB 的数据，油猴还要把这次变更同步给其他标签页。
  - 修法：根治要靠 P4。
  - 结果：B1 之后每次点击只写一个键。

- [ ] **P3 · 开启同步后，每次页面加载都会完整同步一次**
  - 位置：`initializeSync`（[script.ts:17-31](../../src/core/script.ts#L17-L31)）、`syncOnStartup`（[sync.ts:1147-1213](../../src/core/sync.ts#L1147-L1213)）、`updateGist`（[sync.ts:1013-1056](../../src/core/sync.ts#L1013-L1056)）。
  - 问题：
    - 每个列表页加载时，都会 GET 整个 Gist，合并后只要有变化就调用 `updateGist`；
    - `updateGist` 为了拿到文件名，又 GET 一次整个 Gist，然后 PATCH 整份数据；
    - 一次同步中，数据要经过 3 次 `requireVisitedLinksData` 的校验和复制（第 714、1152、1173 行）；
    - `lastSyncTime` 已经存下来了，却没有用来控制同步频率。
  - 修法：
    1. 用 `lastSyncTime` 节流，比如 10 分钟内跳过同步；在设置里另外提供一个"立即同步"按钮。
    2. 把第一次 GET 拿到的文件名传给更新步骤，省掉第二次 GET。
    3. 用 ETag 加 `If-None-Match` 做条件请求。GitHub 返回 304 时不消耗限流额度。
    4. 本地数据只校验一次。
  - 验证：节流窗口内加载页面时，不发任何 GitHub 请求；一次上传只有 1 个 GET 和 1 个 PATCH。

- [ ] **P4 · 按 host 分片存储**（依赖 D2 和 A1）
  - **已被 B1 取代，建议和 D2 一起关闭：** 按 URL 逐条存储的粒度更细，下面列的收益都已拿到。
  - 思路：每个站点单独一个 key，比如 `visited:<host>`。页面只读写当前站点的那一份；同步时用 `GM_listValues()` 汇总所有分片。
  - 迁移：一次性把旧的 `visitedLinks` 大 key 拆成分片，拆完后删除旧 key。迁移必须可以重复执行，中途关闭页面也不能丢数据。
  - 收益：P1 和 P2 的读写量都降到单个站点的规模，B1 的竞态窗口也随之变小。

## 3. 架构

- [ ] **A1 · 统一存储层 `storage.ts`**
  - 进度：访问记录这一半已在 B1 完成。storage.ts 已经存在，并且是唯一读写访问记录的模块。下面的「现状」写于 B1 之前，剩下要做的是 `userSettings` 那一半。
  - 现状：
    - 同一份数据存在两处：内存里的 `state` 和 GM 存储。
    - `'visitedLinks'` 和 `'userSettings'` 在 6 个文件里被直接调用 GM API，共约 18 处。
    - sync.ts 自己又写了一套 `getDefaultUserSettings`、`getSyncSettings`、`saveSyncSettings`（[sync.ts:49-56](../../src/core/sync.ts#L49-L56)、[911-921](../../src/core/sync.ts#L911-L921)），B6 就是这么产生的。
    - "所有预设默认启用"的逻辑写了 3 遍：[config.ts:20-25](../../src/core/config.ts#L20-L25)、[menuManager.ts:58-61](../../src/core/menuManager.ts#L58-L61)、[PresetSettings.vue:182-186](../../src/components/PresetSettings.vue#L182-L186)。
  - 目标：让 `storage.ts` 成为唯一调用 GM 存储 API 的模块，对外提供：
    - key 常量；
    - `loadSettings()`：用 deepMerge 合并默认值，补上缺失的规则 key，清掉已经不存在的规则 key；
    - `saveSettings()`；
    - `loadLinks()`；
    - `recordVisit(url)`：先读最新值，合并，再写回；
    - `addVisits(urls)`；
    - `pruneExpired()`。
  - 完成标准：`grep -rn "GM_getValue\|GM_setValue" src` 只匹配到 storage.ts。

- [ ] **A2 · 核心生命周期改成"激活 → dispose"**
  - 现状：
    - **监听器的添加和移除分在两个文件里。** keydown 和 click 监听在 eventManager 中添加，却在 linkManager 的 `removeScript` 中移除。
    - **observer 上下文的设置和清空也分开了。** 设置时经 eventManager 转到 domObserver，清空时又经 linkManager 转到 domObserver。
    - **模块之间有循环依赖。** linkManager 和 domObserver 互相 import；`activateLinkFeatures` 为了避开另一处循环依赖，改成把函数当参数传进去（[linkManager.ts:215-219](../../src/core/linkManager.ts#L215-L219)）。
    - **`ScriptState` 里存了 handler 引用**，唯一的用途是之后把它们移除。
    - **页面匹配逻辑有重复：**
      - `getActivePresets`（state.ts）和 `getEnabledPresets`（pageDetector.ts）对同一个列表过滤了两遍；
      - `isPageActive` 和 `getCurrentPagePreset` 写了两遍同样的循环；
      - 缓存永远不会命中结果为 null 的情况（[pageDetector.ts:37](../../src/core/pageDetector.ts#L37)），和第 62 行的注释说法相反。
  - 目标结构（示意）：
    ```ts
    // colorizer.ts —— 激活一次，返回 dispose；所有监听器共用一个 AbortController
    export function activate(rule: PresetRule, settings: Settings): () => void {
      const ac = new AbortController();
      const style = injectStyle(settings.general.color);
      colorAll(rule);
      const observer = observeNewLinks(rule);
      document.addEventListener('click', e => onLinkClick(e, rule), { capture: true, signal: ac.signal });
      document.addEventListener('auxclick', e => onLinkClick(e, rule), { capture: true, signal: ac.signal });
      document.addEventListener('keydown', e => onHotkey(e, rule, settings), { signal: ac.signal });
      return () => { ac.abort(); observer.disconnect(); style.remove(); uncolorAll(); };
    }

    // app.ts —— 编排层：当前页面命中哪条规则只在这里算一次，因此不需要缓存
    let dispose: (() => void) | null = null;
    function refresh() {
      dispose?.();
      const rule = findActiveRule(location.href, settings.presets);
      dispose = rule ? activate(rule, settings) : null;
    }
    onUrlChange(refresh);         // navigation.ts：常驻的轻量 observer，非激活页上也一直运行
    onSettingsChanged(refresh);
    refresh();
    ```
  - 完成标准：
    - linkManager、eventManager、pageDetector、domObserver 四个文件合并为 `matcher.ts`、`colorizer.ts`、`navigation.ts`、`app.ts`；
    - `ScriptState` 里不再有 handler 字段；
    - 模块之间没有循环依赖。

- [ ] **A3 · 设置数据流改用 settings store**（依赖 A1）
  - 现状：
    - **保存一个设置要绕很长一条链路：**
      1. 子组件 emit；
      2. SettingsDialog 转发成 8 个事件；
      3. App.vue 里的 8 个 handler 接收；
      4. 再通过 mitt 发出 `settings:save`；
      5. ui.ts 用 switch 分发，中间还要 `as` 断言；
      6. 交给 MenuManager 的回调；
      7. 最后修改 state、保存，并调用 `setupPage`。
    - **4 条 reset 通道里只有快捷键那一条在用**（只有 ShortcutSettings 会 `emit('reset')`）。general、preset、sync 三条在 SettingsDialog、App.vue、menuManager、ui.ts 四处都是死代码。
    - `{ current: X }` 这层包装没有作用（[ui.ts:110-137](../../src/core/ui.ts#L110-L137)）。
    - 常量 `isMac` 被当作 prop 一层层往下传。
  - 目标：
    - `settings.ts` 导出一个 reactive store 和 `save(next)`。`save` 通过 A1 持久化，然后发出 `settings:changed`，core 收到后调用 `refresh()`。
    - 菜单回调只负责打开对话框，并触发 UI 懒挂载（见 A6）。
    - 删除 MenuManager 类、`SettingsDialogConfig`、`SettingsDialogPayload`、App.vue 的 8 个 handler，以及 `settings:save` 和 `settings:reset` 两个事件。
    - 组件直接 `import { isMac }`，不再通过 prop 传递。
  - 注意：把 Vue 响应式对象存进 GM 存储之前，要先 `toRaw`，再拷贝成普通对象。

- [ ] **A4 · 设置对话框改为共用一份完整草稿**
  - 现状：
    - **4 个设置组件是同一套模板代码：**
      - 都维护 `formData` 和 `savedSettings` 两份数据；
      - 都用 `JSON.stringify` 比较来判断 `hasChanges`；
      - 都有一个 immediate + deep 的 watch，导致初始化时的那次赋值多余；
      - 都 expose 了一个从未被调用的 `getFormData`。
    - **父组件靠 ref 调用子组件的方法**，并按当前 tab 走四个分支（[SettingsDialog.vue:129-172](../../src/components/SettingsDialog.vue#L129-L172)）。
    - **"保存设置"只保存当前 tab，在其他 tab 里做的修改会被悄悄丢掉。**
  - 目标：
    - SettingsDialog 打开时，从 store 拷贝出一份完整的 draft；
    - 各个 tab 组件只接收 draft 中属于自己的那一部分，用 v-model 编辑；
    - 整个对话框只有一个 `hasChanges`，"保存"按钮一次保存所有 tab；
    - ShortcutSettings 现在用 3 个 ref 和 2 个 flag 管理状态，改为直接编辑 `draft.shortcut`。
  - 完成标准：组件里不再有 `defineExpose`，也不再按 activeTab 分支处理。

- [ ] **A5 · 拆分 sync.ts**（依赖 E2：先用测试锁住上面的「同步模块的行为不变量」）
  - 现状：文件共 1213 行，其中约一半是校验和诊断代码，问题包括：
    - **同样的检查写了两套：** `isXxx` 一套、`describeXxx` 一套，比如 `isV3PathRecordValue` 和 `describeV3PathRecord`，`isCompressedSyncEnvelope` 和 `describeCompressedEnvelopeShape`。
    - **用哨兵字符串表示"校验通过"：** [第 250 行](../../src/core/sync.ts#L250)返回这个字符串，[第 271 行](../../src/core/sync.ts#L271)再拿它做比较。
    - **"取出 visitedLinks"有 7 个职责重叠的函数：** `isVisitedLinksData`、`extractVisitedLinksFromUnknown`、`isSyncData`、`tryRepairVisitedLinksData`、`requireVisitedLinksData`、`extractVisitedLinksFromV2Payload`、`extractVisitedLinks`。
    - **类型过宽：** 写入相关的 API 接受 `SyncData | VisitedLinksData`，但所有调用方传的都是普通 map。
    - **zstd 分支是死代码：** 从引入压缩的 c3461a8 开始，写入一直用 gzip。
    - **HTTP 请求方式不统一：** 有 5 处用 `fetch`，各自拼请求头，认证用 `token`；另有 1 处用 `GM_xmlhttpRequest`，认证用 `Bearer`。
  - 目标：拆成 4 个文件。
    - `sync/github.ts`：只提供一个 `githubRequest()`。建议全部改用 `GM_xmlhttpRequest`，它不受页面 CORS/CSP 限制，但需要在 `connect` 里加上 `api.github.com`。
    - `sync/codec.ts`：v2/v3 编解码、压缩、base64。
    - `sync/validate.ts`：校验函数统一返回 `string | null`，null 表示通过；类型守卫直接写成 `validate(x) === null`。
    - `sync/index.ts`：负责编排。
  - 同时删除 zstd 分支和 `SyncData` 的写入路径。预计能压到 500 行左右。

- [ ] **A6 · UI 技术栈与 CSS 隔离**
  - 现状：
    - **体积：** 构建产物 936 KB。GreasyFork 不允许发布压缩过的代码，没法靠 minify 缩小。
    - **整个包被 SystemJS 包了一层：** [main.ts:32](../../src/main.ts#L32) 和 [38](../../src/main.ts#L38) 用了动态 `import('...css?inline')`，导致 vite-plugin-monkey 改用 SystemJS 打包，并在脚本头部多加了 2 个 jsdelivr 的 `@require` 和 1 个 data: 形式的 `@require`。
    - **CSS 有三个来源：**
      1. **组件样式泄漏到宿主页面。** ElementPlusResolver 默认 `importStyle: 'css'`，于是 18 段组件样式通过 `GM_addStyle` 注入到**宿主页面**的 `<head>`，其中包括 `:root{--el-*}` 和 `.el-overlay`。这违背了隔离的初衷；如果宿主网站本身也用 Element Plus，还会产生冲突。此外 [ui.ts:7](../../src/core/ui.ts#L7) 又单独 import 了 message 组件的样式。
      2. **从 unpkg 加载未锁版本的完整 CSS。** [main.ts:27](../../src/main.ts#L27) 每次页面加载都往 shadow root 里插入一个 unpkg 的 Element Plus CSS，没有锁版本，可能和打包进来的 2.14.7 对不上。
      3. **手动补的变量。** [index.css:19-30](../../src/styles/index.css#L19-L30) 里手动补了一部分 `--el-*` 变量。

      shadow root 里的 Element Plus 之所以能正常显示，部分原因是第 1 条泄漏出去的 `:root` 变量又跨过边界被继承了回来。
    - **（未核实）Tailwind 的部分样式在 shadow root 里可能不生效。**
      - Tailwind v4 的产物包含 51 条 `@property`，而浏览器在 shadow root 中会忽略 `@property`。这是 Tailwind v4 的已知问题，`border`、`shadow-sm`、渐变等样式可能因此失效。
      - Tailwind 自带一个 `@layer properties` 回退块，但它被包在一个只针对旧版 Safari/Firefox 的 `@supports` 里，在 Chrome 中不生效。
      - 验证方法：打开设置，在 DevTools 中查看带 `.border` 的元素，看它计算后的 `border-style` 是不是 `none`。
    - **不用也会初始化：** 每个匹配到的页面都会创建 Vue 应用和 shadow root，即使用户从不打开设置。
  - 短期修法（风险低，按顺序做）：
    1. **把 main.ts 的动态 import 改成静态 `import css from '...?inline'`。** 验证：构建后，dist 头部不再有 systemjs 的 `@require`。
    2. **让 Element Plus 的样式只进 shadow root。**
       - AutoImport 和 Components 两处都改为 `ElementPlusResolver({ importStyle: false })`，并删掉 ui.ts 第 7 行的样式 import。
       - 把样式以 inline 方式注入 shadow root，并把其中的 `:root` 替换成 `:host`。完整的 `element-plus/dist/index.css` 有 361 KB，会让产物明显变大；更省的做法是只 inline 用到的组件：`element-plus/theme-chalk/base.css`，加上 `el-dialog.css`、`el-button.css` 等。
       - 删掉 unpkg 的 link，以及 index.css 里手动补的变量。
       - 验证：`grep -c '_css(' dist/color-visited.user.js` 的结果为 0，宿主页面 head 里没有 el- 样式，对话框外观不变。
    3. **懒挂载 UI。** 第一次点击"设置"时才创建 shadow root 和 Vue 应用。通知（ElMessage）也需要这个容器，可以在第一次弹通知时一并创建。
    4. **如果 Tailwind 的问题确实存在：** 注入 shadow root 时，去掉 `@layer properties` 外层的 `@supports` 条件，让变量的初始值无条件生效。
  - 长期方案（见 D3）：去掉 Element Plus。对话框只用到了 dialog、tabs、switch、input、input-number、button、alert、tag、card、form、color-picker 和 message。除了取色器，其余组件都很容易用 Tailwind 手写；取色器可以用原生 `<input type="color">` 加透明度滑块或文本输入来替代。

- [ ] **A7 · 站点规则模型**
  - 现状：
    - **归一化逻辑和规则分开放。** URL 归一化写在 `getBaseUrl` 的一串 if 里（[utils.ts:28-54](../../src/core/utils.ts#L28-L54)），和规则表是分开的。新增一个站点，有时要同时改两个文件。
    - **域名列表重复。** south-plus 的域名列表写了 4 遍：presetRules.ts 第 260、262、265 行，以及 utils.ts 第 42 行。
    - **规则 key 身兼两职。** 它既是显示名，又是持久化 key（比如 `'The Economist'`、`'美卡论坛'`、`'Hacker News'`）。一旦改名：
      - 用户的开关设置会被重置；
      - 存储里会残留旧 key。而"已启用 x/y"统计的是存储里的 key（[PresetSettings.vue:18](../../src/components/PresetSettings.vue#L18)），计数就会出错。
    - **有冗余的正则：**
      - bloomberg、economist、一亩三分地里的 `/?$` 已被 `/.*` 覆盖；
      - HN 的 newest、front、show 已被 `/.*` 覆盖；
      - pixiv 的 `novel/ranking` 已被 `novel.*` 覆盖；
      - ehentai 和 exhentai 的规则成对重复。

      每条 pages 正则都会生成一条 `@include`，目前共有 88 条。
    - **未使用的字段。** 没有任何规则用到 `description` 字段。
  - 目标：
    - 规则结构改为 `{ id, name, pages, patterns, normalize?: (url: URL) => string }`。id 直接沿用现有的 key，这样就不用迁移数据；name 另外填写显示名。
    - 归一化逻辑跟着规则走。`getBaseUrl` 变成：先找到对应的规则，再调用它的 `normalize`。
  - 约束：规则文件会在 Node 中被 import，见「构建与运行环境」。

## 4. 代码细节

- [ ] **C1 · 简化 `batchAddLinks`**（[linkManager.ts:25-140](../../src/core/linkManager.ts#L25-L140)）
  - 现在的问题：
    - 两个分支的收尾代码是复制粘贴的；
    - 超过 1000 条时才启用的时间分片属于过度设计，给 1000 个元素加 class 大约只要 1 ms；
    - 刚写完存储，紧接着又读一遍（B1 已去掉）；
    - 最后还要整页重新扫描一次，只是为了补上 URL 重复的那些链接。
  - 改法：只用一个循环——计算 URL，不匹配就跳过，没有记录就新增一条，然后加上 class。大约 20 行就够。
- [ ] **C2 · `getBaseUrl` 不再对每个链接重新 `new URL`**，改用 `<a>` 元素上已经解析好的属性。和 B4 一起做。
- [x] **C3 · 点击后不再重新解析整页的链接。**（随 B1 完成，bc63d1f） [eventManager.ts:87-92](../../src/core/eventManager.ts#L87-L92) 为了找出 URL 相同的链接，把整页链接都解析了一遍。改为复用 `updateAllLinksStatus`（做完 A2 后就是 `colorAll`）。
- [ ] **C4 · 整理 debug 日志**
  - 现在有 18 处 `if (state.generalSettings.debug) console.log(...)`。开启 debug 后，每个链接会打出 7–9 行日志。统一改用一个 `log.debug()`。
  - 还有几处日志不受 debug 开关控制：[ShortcutSettings.vue:124-131](../../src/components/ShortcutSettings.vue#L124-L131)、[184-190](../../src/components/ShortcutSettings.vue#L184-L190)、[script.ts:54](../../src/core/script.ts#L54)、[91](../../src/core/script.ts#L91)。
- [ ] **C5 · 通知类型由调用方显式传入。** 现在 `showNotification` 是用正则匹配消息文字来猜类型的（[ui.ts:14](../../src/core/ui.ts#L14)）。
- [ ] **C6 · 样式注入**
  - 用户填写的颜色值被直接拼进 CSS（[ui.ts:63](../../src/core/ui.ts#L63)），应先用 `CSS.supports('color', v)` 校验。
  - `innerHTML` 改为 `textContent`（[ui.ts:44](../../src/core/ui.ts#L44)、[51](../../src/core/ui.ts#L51)）。
  - 堆叠的选择器可以用 `:is()` 合并。注意 `:is()` 的特异性取的是参数中最高的那个。
- [ ] **C7 · 删除死代码**
  - `preset-states-updated` 监听（[script.ts:36-44](../../src/core/script.ts#L36-L44)）：没有任何地方触发这个事件；而且它挂在 window 上，宿主页面能借它改写设置。
  - `disconnectDOMObserver`（[domObserver.ts:108-114](../../src/core/domObserver.ts#L108-L114)）。
  - 4 个组件里的 `getFormData`。
  - `PresetRule.description`，以及模板中对应的两个分支（[PresetSettings.vue:56-58](../../src/components/PresetSettings.vue#L56-L58)、[81-86](../../src/components/PresetSettings.vue#L81-L86)）。
  - types.ts 中的 `SyncDialogPayload`、`NotificationOptions`、`DataComparison`、`SyncError`，以及 `dialog:show-sync`、`menu:update` 两个事件。
  - zstd 分支（如果在 A5 之前做的话）。
  - `createLinkClickHandler` 不需要导出。
- [ ] **C8 · 类型整理**
  - `VisitedLinksData` 和 `VisitedLinks` 是同一个类型，合并成一个。
  - 只在 sync 内部使用的类型，移出全局的 types.ts。
  - 如果做完 A3 后 `settings:save` 仍然存在，把它改成可辨识联合类型，去掉 `as` 断言（[ui.ts:154-163](../../src/core/ui.ts#L154-L163)）。
- [ ] **C9 · 默认值改用工厂函数**
  - 现状：`DEFAULT_SETTINGS` 里有些字段是 getter，每次返回新副本；有些是共享对象，被直接当作 `GM_getValue` 的默认值（[state.ts:12-17](../../src/core/state.ts#L12-L17)），有被意外修改的风险。
  - 改法：
    - 改为 `createDefaultSettings()` 工厂函数；
    - 加载时执行一次 `deepMerge(defaults, stored)`。以后新增字段时，就不用再单独写迁移代码。
- [ ] **C10 · 统一命名**
  - 快捷键在不同地方分别叫 batchKeySettings、batch、batch-key、shortcut；SettingsDialog 的 `currentSettings` prop 其实也是快捷键设置。
  - 预设分别叫 presetSettings、presetStates、preset、states。
  - `removeScript` 实际做的是"停用"。
  - `startScript`、`startColorVisitedScript`、`setupPage`、`activateLinkFeatures` 这几个函数的分工从名字上看不清楚。
  - 注意：只改代码里的名字不影响数据；但如果要改持久化的字段名（比如 `userSettings.batch`），就需要迁移。
- [ ] **C11 · 代码风格**
  - 缩进和分号不统一：main.ts 和 domObserver.ts 用 4 空格，其他文件用 2 空格；有的文件写分号，有的不写。交给 E1a 统一。
  - ES 模块里写了多余的 `'use strict'`（[script.ts:89](../../src/core/script.ts#L89)）。
  - 同一个模块分两行 import（[script.ts:4](../../src/core/script.ts#L4)、[10](../../src/core/script.ts#L10)）。
  - 删掉只是复述代码的注释，以及记录改动历史的注释（例如 [pageDetector.ts:8](../../src/core/pageDetector.ts#L8)、[PresetSettings.vue:79](../../src/components/PresetSettings.vue#L79)）。解释"为什么"的注释要保留。
- [ ] **C12 · PresetSettings 组件**
  - `v-model` 和 `@change` 重复写入同一个值（[PresetSettings.vue:65-66](../../src/components/PresetSettings.vue#L65-L66)）。
  - `formatRegex` 处理了参数为 string 的情况，但实际不会传入 string。
  - 模板里内联的统计逻辑改成 computed。
- [x] **C13 · ShortcutSettings 组件：** [ShortcutSettings.vue:116-122](../../src/components/ShortcutSettings.vue#L116-L122) 的 if/else 中，else 分支什么也没做。（随 B3 完成，fe8cdbe）做完 A4 后，这个组件会大幅简化。
- [ ] **C14 · 去掉 isMac 检测里对 navigator 的判空**（[utils.ts:7-8](../../src/core/utils.ts#L7-L8)）。这个判空是为 Node 环境准备的，但规则文件挪到 shared/ 之后，utils.ts 已经不会在 Node 中执行了。

## 5. 工程化

- [ ] **E1 · ESLint 基本等于没配**
  - 现状：
    - Vue 那段配置只注册了插件，没有任何规则（[eslint.config.mjs:35-51](../../eslint.config.mjs#L35-L51)）；
    - `@stylistic` 同样只注册了插件，没有规则；
    - TS 部分只启用了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`。
  - E1a（阶段 2）：用 `stylistic.configs.customize({ indent: 2, quotes: 'single', semi: … })` 只做格式化，单独作为一次提交。
  - E1b（重构完成后）：加上 typescript-eslint 的 recommended 和 `eslint-plugin-vue` 的 `flat/recommended`，逐条修复。
  - 注意：`pnpm lint` 自带 `--fix`，第一次运行会改动大量文件。
- [ ] **E2 · 引入 Vitest**
  - 优先覆盖：
    - sync：
      - v3 往返测试，即 `decode(encode(x))` 应等于 `x`；
      - v2 格式和旧明文格式的读取；
      - 自愈逻辑；
      - 「同步模块的行为不变量」中的每一个分支；
      - 合并逻辑。
    - `getBaseUrl`：包括 B4 中的那些非法输入。
    - 规则匹配：写成表格驱动的测试，列出"URL → 应命中哪条规则、是否应该染色"。
  - 提示：
    - sync.ts 是从 `vite-plugin-monkey/dist/client` import GM API 的，测试里需要用 `vi.mock` 替换掉；
    - 本机 Node 是 v26，原生支持 `CompressionStream`、`Blob`、`Response`。
    - storage.ts 的多标签页语义可以沿用 B1 时的模拟思路：mock 一个 GM 存储，后台按到达顺序应用写入，每个标签页一份缓存，`flush()` 时再广播。用不同的 query 导入 storage.ts，就能得到多个互相独立的"标签页"实例。
- [ ] **E3 · 整理 package.json**
  - license 写的是 `ISC`，而 userscript 头部写的是 `GPL-3.0-only`，两者不一致。
  - `main` 和 `description` 两个字段没有意义。
  - 版本号只保留一个来源：vite-plugin-monkey 默认读取 package.json 的 `version`，删掉 vite.config.ts 里的 `version` 即可。改完后要同步更新 AGENTS.md 中关于版本号的规则。
- [ ] **E4 · 去掉重复的类型检查。** `typecheck` 脚本中的 `tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事。
- [ ] **E5 · `dist/` 是否继续提交入库**（见 D4）
  - 现状：每次发版都会多出一个接近 1 MB 的文件改动。
  - 改法：可以改为在 CI 中构建并发布，GreasyFork 从 release 同步。
- [ ] **E6 · 更新过时的 CLAUDE.md**（该文件被 .gitignore 忽略，只存在于本地）
  - 文中说 `PRESET_RULES` 在 `core/config.ts`，实际在 `shared/presetRules.ts`。
  - 文中说 build 用的是 tsc，实际是 vue-tsc。
  - 漏掉了 domObserver.ts 和 utils.ts。
  - 没有提到新增站点时可能还要改 `getBaseUrl`。不过做完 A7 后就不需要改了。
- [ ] **E7 · 清理 tsconfig**（可选）
  - `useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 这三项在本项目里不起作用。
  - `noImplicitAny` 已经包含在 `strict` 里了。

## 会话记录

| 日期 | 完成的条目 | 提交 | 备注 |
|---|---|---|---|
| 2026-10-09 | 完成全部代码的分析，写出本文档 | — | 基于提交 1421605 |
| 2026-10-09 | B1（顺带完成 P2、C3） | bc63d1f | 访问记录改为按 URL 逐条存储，新增 storage.ts，启动时迁移旧的 `visitedLinks` 键；建议关闭 D2 和 P4；新发现 B7 |
| 2026-10-09 | D5 关闭；B2 | ae4ead1 | 默认快捷键不换；快捷键在输入框、可编辑区域（含 open shadow root 里的）和输入法组字时不触发；README 改正默认键；新增 B8（批量标记可撤销），待实施 |
| 2026-10-10 | B3（顺带完成 C13） | fe8cdbe | 快捷键改为按 `event.code` 录入和匹配，`batch.key` 改名为 `code`，新增 shortcut.ts；按要求不迁移旧设置，老用户需要重新录入 |
