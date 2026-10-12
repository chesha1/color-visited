# color-visited 重构与优化计划

> 基于提交 `f7f543b`（2026-10-09）对全部代码的通读。
> 文中行号均指该提交。代码改动后行号会漂移，请以函数名定位；需要对照原文时用 `git show f7f543b:<路径>`。

## 怎么使用这份文档

- 新会话开场可以直接说：「读 `docs/plans/refactor-plan.md`，继续做下一阶段」，或者「做 B9、P1」。
- 条目编号的含义：**B** = bug，**P** = 性能，**A** = 架构，**C** = 代码细节，**E** = 工程化，**D** = 需要你拍板的决策。
- 本文只记还没做的事，以及做这些事要知道的背景。每完成一项：
  - 从正文删掉这一条，并更新「进度总览」；
  - 做了什么、为什么这样取舍，写进提交信息，不在本文留记录。已完成的条目可以用 `git log --grep` 按编号查到提交；
  - 要在真实浏览器里手动验证的步骤，在对话里列给你，不写进本文；
  - 可以写成测试的场景放进 E2；「背景事实与约束」里的内容因此变了的，一并更新。
- 新发现的问题按同样格式补进对应章节。编号顺延，删掉的编号不再复用，目前已用到 B13、P4、A7、C14、E8、D6。
- 仓库约定（包管理器、版本号位置、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度总览

| 阶段 | 内容 | 条目 | 状态 |
|---|---|---|---|
| 1 | 修 bug，加几个低风险的小优化 | B9、P1、P3、A6 第 1 步 | 进行中 |
| 2 | 先搭安全网：测试 + 格式化 | E2、E1a | 未开始 |
| 3 | 统一存储层，清理死代码 | A1、B13、C7–C9 | 未开始 |
| 4 | 核心生命周期 + 规则模型 | A2、A7 | 未开始 |
| 5 | 设置数据流 + 设置对话框 | A3、B10、A4、B12、C12 | 未开始 |
| 6 | 拆分 sync.ts | A5 | 未开始 |
| 7 | UI 样式隔离 + 懒挂载 | A6 第 2–4 步 | 未开始 |
| 随时 | 零散小项 | C4–C6、C10、C11、C14、E1b、E3、E4、E6–E8 | 未开始 |

阶段之间的依赖：

- 阶段 6 要在阶段 2 的测试完成之后做；
- A3 依赖 A1；
- B10 和 A3 一起做；
- B12 和 A4 一起做，B13 和 A1 一起做。这两条都有单独的小修法，可以提前修。

## 待决策（需要你拍板）

目前没有。

## 背景事实与约束

### 数据规模

以下数字来自两份真实的同步数据。估算"整份读写"的开销时，请按最新的量级来算。

- **2026-10-10，v3：** `test/fixtures/local/visited-links.v3.json`，从同步用的 Gist 拉取。这个目录只在本机、不入库，说明见目录里的 README。
  - 129,378 条记录，33 个 host，最早一条是 2025-04-13。
  - 平铺 JSON 7.4 MB，v3 前缀差分后 3.6 MB，gzip 后 840 KB，base64 之后的文件 1,119,885 字节。
  - 文件超过 1 MB，GitHub API 返回的内容会被截断，同步时实际走的是 raw_url 那条路径（不变量 4）。
  - 按默认的一年有效期，其中 57,462 条（44%）已经过期（2026-10-10 晚上计算）。上传时会去掉过期记录，去掉后剩 71,916 条，文件 679,648 字节，低于 1 MB，以后同步不用再走 raw_url。
- **2026-04，v2：** `test/fixtures/local/visited-links.v2.json`。97,048 条记录，原始 JSON 5.4 MB，gzip 后 732 KB。

### 存储结构（必须兼容老用户的数据）

- 访问记录：每条单独存成一个 GM 值，键是归一化后的 URL，值是最近一次访问的时间戳（ms），过期从这个时间算起。只有 `src/core/storage.ts` 读写它们。
  - 所有写入（点击、批量标记、同步合并、迁移）都经过 `mergeLinks`，只会把时间戳改大。再次点击已访问的链接会刷新时间戳；批量标记只新增记录，不碰已有的。新增写入路径时也要保持"只改大"：同步合并取较大的时间戳，改小的值下次同步就会被改回去。
  - 删除记录的只有两处：过期清理，和批量标记的撤销。撤销只删时间戳还等于那次标记时间的记录（`deleteLinksIfUnchanged`），靠的正是上一条里的两点：批量标记不碰已有的记录，点开会刷新时间戳。改这两点中的任何一个，都要连撤销一起看。
  - storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**设置类的键不能含冒号**。
  - 旧版本（v2.21.0 及以前）把全部记录存在 `visitedLinks` 一个键里，结构是 `Record<URL, 时间戳>`。新版本启动时把它逐条合并进来再删掉，可以重复执行。
- `userSettings` 的结构如下：
  ```ts
  {
    general: { color: string; expirationTime: number /* ms */; debug: boolean },
    preset:  Record<规则 key, boolean>,   // 规则 key 会被持久化在这里，改 key 需要迁移
    batch:   { ctrlKey, shiftKey, altKey, metaKey: boolean; code: string /* KeyboardEvent.code，v2.21.0 及以前是 key */ },
    sync:    { enabled: boolean; githubToken: string; gistId: string },
  }
  ```
  - v2.21.0 及以前 `sync` 里还有 `lastSyncTime`。老用户的存储里会残留这个字段，但已经没有代码读它，下次保存同步设置时就会去掉。
- `lastSyncTime`：上次同步成功的时间戳（ms），没有这个键表示从未同步。
  - 只有 sync.ts 通过 storage.ts 的 `setLastSyncTime` 写它。
  - 设置页用 `getLastSyncTime` 读，再用 `onLastSyncTimeChange`（基于 `GM_addValueChangeListener`）跟着刷新。

### 构建与运行环境

- **规则文件会在 Node 中执行。** `vite.config.ts` 在 Node 中 import `src/shared/presetRules.ts` 来生成 `@include`。因此这个文件的顶层代码不能引用浏览器全局对象（写在函数体里没问题）。
- **体积只能靠减少依赖。** Greasy Fork 不允许发布压缩过的代码。
- **发版由 CI 完成，构建产物不入库。** push 到 main 后，[release.yml](../../.github/workflows/release.yml) 执行 `pnpm build`，从产物头部读 `@version`。这个版本还没有 release 就发一个，Greasy Fork 通过 webhook 收到 release 事件后更新脚本。
  - Greasy Fork 的同步地址是 `https://github.com/chesha1/color-visited/releases/latest/download/color-visited.user.js`，所以产物文件名不能改，头部要保留 `@version`。
  - Greasy Fork 收到 release 事件时不下载附件，而是在仓库里执行 `git show <tag>:color-visited.user.js`。所以 CI 会在源码提交上再加一个放着构建产物的提交，tag 指向它，这个提交不进 main。
- **UI 继续用 Element Plus。** D3 已定：宁可体积大一点，也要实现简单，不手写组件替代它。所以减少依赖不包括去掉 Element Plus，A6 的修法就是最终方案。
- **SPA 跳转检测的方式不能换。** 用户脚本运行在隔离环境里，没法 hook 页面的 `history.pushState`。所以现在的做法是在 MutationObserver 回调里比较 `location.href`（[domObserver.ts:90-97](../../src/core/domObserver.ts#L90-L97)）。这个检测在非激活页上也必须一直运行：v2.19.4 修过一个相关问题，即从非激活页跳到激活页时监听失效。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，storage.ts 在旧版本上退回逐条写。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块（[TM #1787](https://github.com/Tampermonkey/tampermonkey/issues/1787)、[VM #183](https://github.com/violentmonkey/violentmonkey/issues/183)）。页面侧会缓存全部值：VM 的 `GM_getValue` 每次都要把存的字符串解码一遍，对象值就是一次 `JSON.parse`；`GM_setValue` 每次都要 `JSON.stringify`，然后发一条消息。
  - 逐条存储的开销（按 VM 页面侧源码建模，在 Node 里实测，9.7 万条；TM 闭源，常数可能不同）：
    - 点击一次只写一个键，页面主线程的开销约为 0。
    - 页面注入约 53 ms，要把 9.7 万个键逐个交给页面。比旧的单键布局净增约 10–30 ms。
    - 后台每次持久化约 25 ms，不在页面主线程上。
    - 1 万条以内，和旧布局的差别都在几毫秒以内。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。如果要请求新的域名，需要在 `vite.config.ts` 的 `connect` 里加上。

### 同步模块的行为不变量（重构 sync 之前先用测试锁住）

下面这些都是刻意设计的安全行为，简化代码时不能丢：

1. HTTP 请求失败时必须抛错，不能当作"云端为空"。否则紧接着就会用本地数据覆盖云端（[sync.ts:1068-1071](../../src/core/sync.ts#L1068-L1071)）。
2. 遇到不认识的 `syncVersion`（通常来自更新版本的脚本）时抛错，不覆盖云端。
3. `syncVersion` 认识，但外层包的结构不对时，抛错，不覆盖云端。
4. 文件超过 1 MB 被截断时，改用 raw_url 获取完整内容。如果获取到的内容无法识别（比如代理或限流返回的 HTML），抛错，不覆盖云端（[sync.ts:830-837](../../src/core/sync.ts#L830-L837)）。
5. 不是同步数据的内容，按"空"处理，并标记 `needsInitialization`，本次同步会把它初始化成同步格式。这包括：空内容、不是 JSON、不是对象、没有同步特征的对象（含 `{}`）。这样新建 Gist 时内容可以随便填（v2.20.4 引入）。
6. 继续支持读取以下旧格式：v2 压缩包、带 `visitedLinks` 字段的对象、键是网址且值是数字的明文对象。
7. 自愈：剔除云端数据里已知的同步包污染键（`syncVersion`、`encoding`、`payload` 等）和不是有限数字的时间戳，并打印日志。本地数据不会被污染：不含冒号的键不会被当作记录读出来，`mergeLinks` 也拒绝写入这类键和非法时间戳。
8. 合并时，每条 URL 取最大的时间戳，而且不能丢掉同步期间发生的点击：`mergeLinks` 直接和存储里的当前值逐条比较，本标签页和其他标签页在同步期间的写入都不会被覆盖。
9. 只有合并后的数据和云端不一致（两边都去掉过期记录后再比），或需要初始化时，才上传（`syncOnStartup`）。云端只是有记录到期，不单独触发上传：否则几乎每次同步都要传一遍整份数据，过期时间不同的设备还会来回上传。
10. 上传时一律写成 v3 格式：gzip + base64 + 按 host 分组的前缀差分。同步模块内部始终使用平铺的 map（由 `loadLinks()` 组装）。
11. 过期记录两个方向都不同步：合并云端数据前、上传前，都按本机的过期时间去掉，两边用同一个截止时间。

---

## 1. Bug

- [ ] **B9 · v3 编码会丢掉 URL 末尾空的 `#` 和 `?`**
  - 位置：`getV3GroupDescriptor`（sync.ts）。
  - 问题：它用 `pathname + search + hash` 拼回路径。URL 以空的 `#` 或 `?` 结尾时，`hash`、`search` 返回空字符串，这个字符就丢了。URL 里的用户名和密码（`user:pw@`）也会丢，因为 `host` 不包含这一部分。
    - 实际数据：v2 样本里有 1 条 linux.do 的链接以 `#` 结尾，云端存的是去掉 `#` 的版本，原样的那条只在本地。其他设备上这条记录对不上，影响很小。
  - 修法：拼出来的结果和原 URL 不一样时，改放进 raw 分组（`V3_RAW_GROUP_KEY`）原样保存。raw 分组是和 v3 一起引入的（76b0291），能读 v3 的版本都认识。
  - 验证：用 `test/fixtures/local/` 里的 v2 样本跑 v3 往返测试（见 E2），`decode(encode(x))` 应和 `x` 完全一致，条数和每条的时间戳都不变。

- [ ] **B10 · 两个标签页都保存过设置时，后保存的会冲掉先保存的**（和 A3 一起做）
  - 位置：`initializeScriptState`、`saveUserSettings`（state.ts），以及 script.ts 里对 `settings:save` 的处理。
  - 问题：每个标签页只在启动时把 `userSettings` 读进 `state`，之后不再更新。保存任何一类设置，都会把 `state` 里的四类设置整块写回。
    - 例：标签页 A 先打开。在标签页 B 里改了颜色并保存，再回到 A 改快捷键并保存，A 会把旧颜色一起写回去，B 的改动就丢了。在 headless Chrome 里用内存版 GM API 复现过。
    - 在刷新之前，A 的设置页显示的是旧值，页面也一直按旧设置染色。
    - 用户自己改的设置没法像 `lastSyncTime` 那样单独存一个键、只由一方写入，只能让内存里的设置跟着存储更新。
  - 修法：settings store 用 `GM_addValueChangeListener('userSettings', …)` 订阅变化。其他标签页保存后，本标签页更新 store 并调用 `refresh()`。storage.ts 的 `onLastSyncTimeChange` 用的是同一个机制。
    - 本标签页自己的写入也会触发回调，这时 `remote` 为 false。VM 文档写明了这一点，TM 文档只说 `remote` 表示改动是否来自其他实例。
  - 验证：开两个标签页 A、B。在 B 里改颜色并保存，A 的链接颜色应跟着变；再在 A 里改快捷键并保存，刷新 B，颜色仍是 B 改的那个。
  - 和数据有关的一种情况：B 把过期时间改长后，A 再保存任何设置，会把旧的、较短的过期时间写回去，A 重新初始化页面时就按它删记录。

- [ ] **B12 · 关掉设置对话框不会丢弃没保存的修改，之后保存别的设置时会一起存下**（最好和 A4 一起做）
  - 位置：ui.ts 的 `showSettingsDialog`、App.vue 的 `handleShowDialog`，以及四个设置组件里监听 `currentSettings` 的 watch。
  - 问题：对话框第一次打开后就一直挂载着，表单里没保存的修改会留在原处。重新打开时，传进去的还是同一个设置对象，组件里的 watch 不会触发，表单不会按存储重置。
    - 例：把过期时间改成 30 天，没保存就关掉。下次打开只想改颜色，表单里仍是 30 天，保存时会一起存下，30 天前的记录当场删掉。在 headless Chrome 里实测过。
    - 同一次打开里切换标签也是这样：在常规设置里改了没保存就切到别的标签，那里的保存不包括常规设置，但修改还留在常规设置的表单里。
  - 修法：每次打开对话框都按存储重建表单，这正是 A4 的目标（打开时拷贝一份完整的 draft）。只修这一条的话，`showSettingsDialog` 每次传设置的副本就行：传进去的是新对象，四个组件的 watch 都会触发，表单和"已保存"的基准会一起重置。
  - 验证：改过期时间，不保存就关掉再打开，应显示存储里的值，保存按钮是灰的。

- [ ] **B13 · 存储里的过期时间是异常值时，每次加载页面都会删光记录**（和 A1 一起做）
  - 位置：`initializeScriptState`（state.ts）、`deleteExpiredLinks`（storage.ts）。
  - 问题：读设置时不校验。`general.expirationTime` 是 null、0 或负数时，`deleteExpiredLinks` 会把所有记录都算作过期（比如 `now - t > null` 为 true），每次加载激活页都把本地记录删光，null 和 0 都实测过。同步不受影响：这时所有记录都算过期，合并后的数据是空的，不会上传。
    - 设置界面一直限制在 1–3650 天，正常使用写不出这种值，只可能来自手改存储或数据损坏。可能性很低，但一旦出现就会删光全部记录。
    - 缺了这个字段反而没事：和 undefined 比较总是 false，什么都不删。
  - 修法：A1 的 `loadSettings` 合并默认值时一起校验，过期时间不是正的有限数就用默认值。
  - 验证：把存储里的 `expirationTime` 改成 null，加载页面后记录一条不少，设置页显示一年。

## 2. 性能

- [ ] **P1 · 每次 setupPage 都全量读两遍存储**
  - 位置：`activateLinkFeatures`（[linkManager.ts:220-225](../../src/core/linkManager.ts#L220-L225)）、`deleteExpiredLinks`（storage.ts）、`logStorageInfo`（[utils.ts:59-78](../../src/core/utils.ts#L59-L78)）。
  - 问题：页面加载、SPA 跳转、每次保存设置时，都要全量枚举两遍存储（`GM_listValues` 加逐条 `GM_getValue`）：
    1. 过期清理一遍；
    2. `logStorageInfo` 一遍。这一遍只是为了打一行日志，还要把全部数据 stringify 一遍算大小，而且不受 debug 开关控制。

    9.7 万条时两遍合计约 75 ms（模型实测，见「GM 存储的语义」），是页面加载里最大的一块。开着同步时，同步在网络请求返回后还会再读一遍。
  - 修法：
    - 降低过期清理的频率，比如每天一次，用一个时间戳记录上次清理的时间（这个键名不能含冒号，见「存储结构」）。这样做之后，一天内到期的记录还会继续染色，因为 `isVisited` 只看有没有这条记录。同步不受影响，它自己会按过期时间过滤两边的数据；
    - `logStorageInfo` 只在 debug 模式下执行。
  - 验证：关闭 debug 后，控制台不再出现 `visitedLinks storage size`；在 Performance 面板里对比修改前后 setupPage 的耗时。

- [ ] **P3 · 开启同步后，每次页面加载都会完整同步一次**
  - 位置：`initializeSync`（[script.ts:17-31](../../src/core/script.ts#L17-L31)）、`syncOnStartup`（[sync.ts:1147-1213](../../src/core/sync.ts#L1147-L1213)）、`updateGist`（[sync.ts:1013-1056](../../src/core/sync.ts#L1013-L1056)）。
  - 问题：
    - 每个列表页加载时，都会 GET 整个 Gist，文件超过 1 MB 时还要从 raw_url 再下载一遍（真实数据去掉过期记录后约 680 KB，暂时不会超过）；
    - 合并后只要和云端不一致，就调用 `updateGist`；
    - `updateGist` 为了拿到文件名，又 GET 一次整个 Gist，然后 PATCH 整份数据；
    - `lastSyncTime` 已经存下来了，却没有用来控制同步频率。它单独存一个键，所有标签页共用，节流时直接用 `getLastSyncTime()` 读即可。
  - 修法：
    1. 用 `lastSyncTime` 节流，比如 10 分钟内跳过同步；在设置里另外提供一个"立即同步"按钮。设置页显示的同步时间会跟着存储自动刷新，按钮不用再手动更新它。
    2. 把第一次 GET 拿到的文件名传给更新步骤，省掉第二次 GET。
    3. 用 ETag 加 `If-None-Match` 做条件请求。GitHub 返回 304 时不消耗限流额度。
  - 验证：节流窗口内加载页面时，不发任何 GitHub 请求；一次上传只有 1 个 GET 和 1 个 PATCH。

## 3. 架构

- [ ] **A1 · 统一存储层 `storage.ts`**
  - 访问记录和 `lastSyncTime` 已经只由 storage.ts 读写，sync.ts 也不碰 `userSettings`（同步设置由 script.ts 传给 `syncOnStartup`）。剩下的是 `userSettings` 这一半。
  - 现状：
    - 同一份设置存在两处：内存里的 `state` 和 GM 存储。
    - `'userSettings'` 在 state.ts 里被直接调用 GM API，共 3 处。
    - "所有预设默认启用"的逻辑写了 2 遍：[config.ts:20-25](../../src/core/config.ts#L20-L25)、[PresetSettings.vue:182-186](../../src/components/PresetSettings.vue#L182-L186)。
  - 目标：让 `storage.ts` 成为唯一调用 GM 存储 API 的模块，再对外提供：
    - 设置的 key 常量；
    - `loadSettings()`：用 deepMerge 合并默认值，补上缺失的规则 key，清掉已经不存在的规则 key。如果 deepMerge 只保留默认值里有的字段，老用户 `userSettings.sync` 里残留的 `lastSyncTime` 也会顺带清掉；
    - `saveSettings()`。
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
    - **保存一个设置仍要绕一条链路：**
      1. 子组件 emit；
      2. SettingsDialog 转发成 4 个事件；
      3. App.vue 里的 4 个 handler 接收；
      4. 再通过 mitt 发出 `settings:save`；
      5. script.ts 在启动时订阅的 handler 按 `type` 修改 state、保存，并调用 `setupPage`。
    - 常量 `isMac` 被当作 prop 一层层往下传，`showSettingsDialog` 还把它放进了事件的 payload。
  - 目标：
    - `settings.ts` 导出一个 reactive store 和 `save(next)`。`save` 通过 A1 持久化，然后发出 `settings:changed`，core 收到后调用 `refresh()`。
    - store 订阅 `userSettings` 的变化，其他标签页保存后跟着更新（见 B10）。
    - 删除 `SettingsDialogPayload`、App.vue 的 4 个 handler，以及 `settings:save` 事件。
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

- [ ] **A6 · UI 的打包与 CSS 隔离**（保留 Element Plus，见「构建与运行环境」）
  - 现状：
    - **整个包被 SystemJS 包了一层：** [main.ts:32](../../src/main.ts#L32) 和 [38](../../src/main.ts#L38) 用了动态 `import('...css?inline')`，导致 vite-plugin-monkey 改用 SystemJS 打包，并在脚本头部多加了 2 个 jsdelivr 的 `@require` 和 1 个 data: 形式的 `@require`。
    - **CSS 有三个来源：**
      1. **组件样式泄漏到宿主页面。** ElementPlusResolver 默认 `importStyle: 'css'`，于是 18 段组件样式通过 `GM_addStyle` 注入到**宿主页面**的 `<head>`，其中包括 `:root{--el-*}` 和 `.el-overlay`。这违背了隔离的初衷；如果宿主网站本身也用 Element Plus，还会产生冲突。此外 [ui.ts:7](../../src/core/ui.ts#L7) 又单独 import 了 message 组件的样式。
      2. **从 unpkg 加载未锁版本的完整 CSS。** [main.ts:27](../../src/main.ts#L27) 每次页面加载都往 shadow root 里插入一个 unpkg 的 Element Plus CSS，没有锁版本，可能和打包进来的 2.14.7 对不上。
      3. **手动补的变量。** [index.css:19-30](../../src/styles/index.css#L19-L30) 里手动补了一部分 `--el-*` 变量。

      shadow root 里的 Element Plus 之所以能正常显示，部分原因是第 1 条泄漏出去的 `:root` 变量又跨过边界被继承了回来。
    - **取色器的面板不在 shadow root 里。** el-color-picker 默认 `teleported`，面板挂在 document.body 下的 `#el-popper-container-*` 里，完全靠第 1 条泄漏出去的样式显示（实测过）。
    - **焦点陷阱在 shadow root 里指定不了起始焦点。** el-dialog 和 ElMessageBox 打开时，焦点总是落在最后一个可聚焦元素或容器本身，`autofocus` 之类的选项不起作用。原因是它们用的 ElFocusTrap 拿 `document.activeElement` 判断焦点有没有落到起始元素上，而在 Shadow DOM 里这个值永远是宿主元素（2.14.7 源码核对过，也实测过）。以后要加 ElMessageBox，还要注意它的 `appendTo` 只认元素，传 ShadowRoot 会退回 document.body。
    - **（未核实）Tailwind 的部分样式在 shadow root 里可能不生效。**
      - Tailwind v4 的产物包含 41 条 `@property`（dac7453 的构建，数量随 Tailwind 扫到的类名变化，见 E8），而浏览器在 shadow root 中会忽略 `@property`。这是 Tailwind v4 的已知问题，`border`、`shadow-sm`、渐变等样式可能因此失效。
      - Tailwind 自带一个 `@layer properties` 回退块，但它被包在一个只针对旧版 Safari/Firefox 的 `@supports` 里，在 Chrome 中不生效。
      - 验证方法：打开设置，在 DevTools 中查看带 `.border` 的元素，看它计算后的 `border-style` 是不是 `none`。
    - **不用也会初始化：** 每个匹配到的页面都会创建 Vue 应用和 shadow root，即使用户从不打开设置。
  - 修法（风险低，按顺序做）：
    1. **把 main.ts 的动态 import 改成静态 `import css from '...?inline'`。** 验证：构建后，dist 头部不再有 systemjs 的 `@require`。
    2. **让 Element Plus 的样式只进 shadow root。**
       - AutoImport 和 Components 两处都改为 `ElementPlusResolver({ importStyle: false })`，并删掉 ui.ts 第 7 行的样式 import。
       - 把样式以 inline 方式注入 shadow root，并把其中的 `:root` 替换成 `:host`。完整的 `element-plus/dist/index.css` 有 361 KB，会让产物明显变大；更省的做法是只 inline 用到的组件：`element-plus/theme-chalk/base.css`，加上 `el-dialog.css`、`el-button.css` 等。别漏了 `el-message.css`：通知不是模板里的组件，是代码里调用的。通知上的"撤销"按钮也是在代码里渲染的 ElButton，靠的是 `el-button.css`。
       - 取色器加上 `:teleported="false"`，让面板留在 shadow root 里，否则宿主页面没有样式之后，面板就没有样式了。
       - 删掉 unpkg 的 link，以及 index.css 里手动补的变量。
       - 验证：`grep -c '_css(' dist/color-visited.user.js` 的结果为 0，宿主页面 head 里没有 el- 样式，对话框、取色器面板和通知的外观都不变。
    3. **懒挂载 UI。** 第一次点击"设置"时才创建 shadow root 和 Vue 应用。通知（ElMessage）也需要这个容器，可以在第一次弹通知时一并创建。
    4. **如果 Tailwind 的问题确实存在：** 注入 shadow root 时，去掉 `@layer properties` 外层的 `@supports` 条件，让变量的初始值无条件生效。

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
    - 规则结构改为 `{ id, name, pages, patterns, normalize?: (url) => string }`，`url` 和 `getBaseUrl` 的参数同类型（现在是 `Pick<URL, 'href' | 'hostname'>`，需要时再加字段），`<a>` 元素和 `URL` 对象都能传。id 直接沿用现有的 key，这样就不用迁移数据；name 另外填写显示名。
    - 归一化逻辑跟着规则走。`getBaseUrl` 变成：先找到对应的规则，再调用它的 `normalize`。
  - 约束：规则文件会在 Node 中被 import，见「构建与运行环境」。

## 4. 代码细节

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
- [ ] **C9 · 默认值改用工厂函数**
  - 现状：`DEFAULT_SETTINGS` 里有些字段是 getter，每次返回新副本；有些是共享对象，被直接当作 `GM_getValue` 的默认值（[state.ts:12-17](../../src/core/state.ts#L12-L17)），有被意外修改的风险。
  - 改法：
    - 改为 `createDefaultSettings()` 工厂函数；
    - 加载时执行一次 `deepMerge(defaults, stored)`。以后新增字段时，就不用再单独写迁移代码；v2.21.0 及以前保存的快捷键设置缺 `code`，也会因此补上默认的 `KeyV`。
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
      - v3 往返测试，即 `decode(encode(x))` 应等于 `x`，比较时不能看键的顺序（v3 会按 host 重新排序）；修好 B9 之前，v2 样本里会有 1 条过不了；
      - v2 格式和旧明文格式的读取；
      - 自愈逻辑；
      - 「同步模块的行为不变量」中的每一个分支；
      - 合并逻辑：每条取较大的时间戳；再次点击刷新的时间戳会上传，其他设备同步后也跟着刷新；
      - 过期记录：
        - 云端过期的记录不合并进本地，上传的数据里也没有过期记录；
        - 下面几种情况不上传：只是有记录到期、本地没有新的访问；只有云端有新数据；过期时间为 0；
        - 需要初始化时只上传有效记录；同步期间的点击照样上传；
        - 两台设备过期时间不同时，不会来回反复上传。
    - storage.ts 的多标签页语义：传播窗口内的并发写不丢；迁移可以重复执行，并能补进旧版本标签页写回的大键；同步期间的点击不丢；云端数据不能覆盖 `userSettings`；没有批量接口时退回逐条写。
    - 访问时间：再次点击会把时间戳刷新成这次点击的时间；存储里的时间比现在还晚时不改小；批量标记不改已有记录的时间戳。
    - 批量标记的撤销：只删时间戳还等于这次标记时间的记录，之前就有的、撤销前点开过的（本标签页中键点开，或其他标签页点开）都保留；同一个 URL 的所有链接都去掉颜色，刷新后仍是原色；按钮连点两下只撤销一次；没有批量接口时退回逐条删。
    - 批量快捷键：
      - 应触发：方向键、Enter、Escape、F1 等特殊键；开着大写锁定；录入和按下时键盘布局不同；Mac 上的 ⌥⇧V。
      - 不应触发：Ctrl+↑ 对 Ctrl+↓、Ctrl+Shift+V 对 Ctrl+V、1 对小键盘 1；焦点在 input、textarea、select、contenteditable（含其子元素，以及 open shadow root 里的这些元素）中；输入法正在组字。
    - `getBaseUrl`：各站点的归一化，用 `new URL(...)` 传入；`{ href: 'http://', hostname: '' }` 和 `{ href: '', hostname: '' }`（`<a>` 的 href 解析失败、被删掉时就是这样）应原样返回。调用方跳过 SVG 的 `<a>`，这一条要在 DOM 环境里测。
    - 规则匹配：写成表格驱动的测试，列出"URL → 应命中哪条规则、是否应该染色"。
    - 设置对话框（端到端）：
      - 打开 N 次再保存，`userSettings` 只写 1 次、setupPage 只跑 1 次；保存同步设置后，`GM_registerMenuCommand` 只被调用过 1 次；快捷键页"重置为默认"后保存，存下来的是默认快捷键，按下能批量标记。
      - "最后同步时间"：同步完成后打开设置，显示的是刚才的时间；保存其他设置不会改动 `lastSyncTime`；对话框开着时其他标签页同步，显示会更新；同步页"重置为默认"不影响它；反复开关对话框，值变化监听器始终只有 1 个。
      - "过期时间"。要在激活页上跑，保存时才会真的删记录：
        - 清空（全选删除、逐字退格两种）、0、-5、0.6、9.6、1.5、1e-5、非数字之后直接保存，过期时间和记录都不变，输入框显示回原值；
        - 点过"重置为默认"再清空，回到的是保存的天数，不是默认的一年；
        - 原来存的不是默认值（比如 30 天）时，回到的是 30 天；
        - 同时改了颜色的话，颜色照常保存，过期时间不变；
        - 1 及以上的输入照常保存，超出的记录照常删除；天数是 1 时点"▼"，回到保存的天数。
  - 测试接进 CI：在 release.yml 的 `pnpm build` 之前跑，测试不过就不发版。
  - 提示：
    - sync.ts 是从 `vite-plugin-monkey/dist/client` import GM API 的，测试里需要用 `vi.mock` 替换掉；
    - 本机 Node 是 v26，原生支持 `CompressionStream`、`Blob`、`Response`。
    - sync.ts 的编解码函数（`deserializeGistContent`、`encodeV3GroupedPayload`、`decodeV3GroupedPayload`）现在没有导出，测试前要先导出；A5 拆出 codec.ts 之后自然就有了。
    - 大数据量样本在 `test/fixtures/local/`，v2、v3 各一份真实数据（见「数据规模」和那里的 README）。它们不入库，CI 和新 clone 里都没有，依赖它们的用例要在文件不存在时跳过（`it.skipIf`）。
    - 上面的场景大多已经用临时脚本在 Node 和 headless Chrome 里验证过，脚本没有入库，要改写成 Vitest 用例。当时的做法如下。
    - storage.ts 的多标签页语义：mock 一个 GM 存储，后台按到达顺序应用写入，每个标签页一份缓存，`flush()` 时再广播。用不同的 query 导入 storage.ts，就能得到多个互相独立的"标签页"实例。
    - 在 Node 里直接跑 sync.ts 和 storage.ts：
      - 用 esbuild 打成 ESM，`vite-plugin-monkey/dist/client` 换成内存版 GM，`fetch` 换成桩，云端内容用真实的 v3 样本。
      - 按 script.ts 的顺序模拟页面加载：先调 `syncOnStartup`（不 await），接着调 `deleteExpiredLinks`，最后再 await。
      - 要和改动前对比时，新旧两版各打一份，旧版的源码用 `git archive HEAD src` 导出。
    - 在 headless Chrome 里端到端地跑构建产物：
      - 需要激活页的场景：Node 起一个本地 https 服务（自签证书），headless Chrome 加上 `--host-resolver-rules=MAP www.v2ex.com 127.0.0.1:8443` 和 `--ignore-certificate-errors`，打开的 `https://www.v2ex.com/` 就是这个本地页面，脚本按激活页运行。不需要激活页的场景（同步、设置对话框）直接用 `file://` 页面就行，不用起 https 服务。
      - 页面里依次放：一段内联脚本，写入初始存储（时间戳按当前时间现算）和场景名；内存版 GM API；SystemJS（取自 node_modules）；构建产物；驱动脚本。驱动脚本点菜单、操作对话框，把结果写进 `<pre>`，用 `--dump-dom --virtual-time-budget=60000` 取出。
      - 构建产物要等 HTML 解析完再执行（加 `defer`），否则 SystemJS 的自动导入会把入口模块再执行一遍。
      - 内存版 GM API 要实现 `GM_addValueChangeListener`：写入后异步回调，本标签页的写入 `remote` 为 false；另外提供一个 `remoteSet`，用来模拟其他标签页的写入。
      - `fetch` 换成桩。返回内容为空的 Gist 时，首次同步会走初始化流程，发出 GET、GET、PATCH 三个请求。要测超过 1 MB 的情况，Gist 桩返回截断的内容，`GM_xmlhttpRequest` 的桩再从本地服务取 raw_url 的完整内容。
      - 每个场景写成一张步骤表（输入、失焦、点 ▲▼、按方向键、改颜色、重置、切标签、关闭再打开、保存），驱动脚本逐步执行，每个场景开一次 Chrome。输入是改输入框的值并派发 input；失焦按真实点击的顺序派发 change、调用 `blur()`。
      - 初始存储可以直接写异常值（比如 `expirationTime` 为 null），用来测页面加载时的行为（见 B13）。
      - 要和改动前对比时，旧版产物用 `git archive` 导出的源码构建，`node_modules` 软链过去即可。
      - 有两个坑。一是 Chrome 要用异步的 `execFile` 启动：同步调用会卡住同一进程里的 https 服务，拿到的是空白页。二是 `--virtual-time-budget` 下 rAF 不触发，Vue 的离场过渡永远结束不了，对话框关不掉，要把 rAF 换成 setTimeout。
      - 看样式要截图：用 `--screenshot` 代替 `--dump-dom`，并把 unpkg.com 也映射到本地服务，返回 node_modules 里 2.14.7 的 `dist/index.css`。headless shell 没有中文字体：把 Windows 的 `/mnt/c/Windows/Fonts/msyh.ttc` 软链到一个单独的目录，写一份 fonts.conf 先 include 系统的 `/etc/fonts/fonts.conf`，再用 `<dir>` 加上这个目录，启动 Chrome 时把 `FONTCONFIG_FILE` 指向它。
      - 另一种驱动方式是 CDP（B8 的撤销就是这样验证的）：headless Chrome 加上 `--remote-debugging-port`，用 Node 自带的 WebSocket 连上，用 `Input.dispatchKeyEvent`、`Input.dispatchMouseEvent` 发真实的按键和点击，中键点击也会触发 auxclick。可以随时用 `Page.captureScreenshot` 截图。不用 virtual time，rAF 照常触发。macOS 上自带中文字体，不用配 fontconfig。
        - 内存版 GM API 可以存进页面的 localStorage，这样刷新后数据还在，能测"刷新后仍是原色"。
        - `GM_setValues`、`GM_deleteValues` 要整批只写一次 localStorage。逐键写的话，1500 条要 180 ms，测出来的就不是脚本自己的耗时。
- [ ] **E3 · 整理 package.json**
  - license 写的是 `ISC`，而 userscript 头部写的是 `GPL-3.0-only`，两者不一致。
  - `main` 和 `description` 两个字段没有意义。
  - 版本号只保留一个来源：vite-plugin-monkey 默认读取 package.json 的 `version`，删掉 vite.config.ts 里的 `version` 即可。改完后要同步更新 AGENTS.md 中关于版本号的规则。
- [ ] **E4 · 去掉重复的类型检查。** `typecheck` 脚本中的 `tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事。
- [ ] **E6 · 更新过时的 CLAUDE.md**（该文件被 .gitignore 忽略，只存在于本地）
  - 文中说 `PRESET_RULES` 在 `core/config.ts`，实际在 `shared/presetRules.ts`。
  - 文中说 build 用的是 tsc，实际是 vue-tsc。
  - 漏掉了 domObserver.ts 和 utils.ts。
  - 没有提到新增站点时可能还要改 `getBaseUrl`。不过做完 A7 后就不需要改了。
- [ ] **E7 · 清理 tsconfig**（可选）
  - `useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 这三项在本项目里不起作用。
  - `noImplicitAny` 已经包含在 `strict` 里了。
- [ ] **E8 · Tailwind 只扫描 src**
  - 现状：Tailwind v4 会自动扫描项目里所有没被 gitignore 的文件来找类名。所以文档、AGENTS.md、工作流文件里的普通词也会生成工具类，只改文档也会改变构建产物。
    - dac7453 的构建里有两条用不到的规则：`.contents` 来自 release.yml 里的 `contents: write`，`.inline` 来自本文里的 `?inline`。src 和打包进来的 Element Plus 渲染代码都没有用到这两个类。
    - D4 之前 dist 入库、没被忽略，每次构建还会把上一次的产物扫进去，多出 15 个用不到的工具类和 10 条 `@property`。dist 加进 .gitignore 后，这部分已经没有了。
  - 改法：把 `src/styles/tailwind.css` 里的 `@import "tailwindcss";` 改成 `@import "tailwindcss" source("..");`。路径相对这个 CSS 文件，也就是只扫描 src。在 dac7453 的副本上试过，CSS 只少了上面两条。
  - 验证：构建后 CSS 里没有 `.contents` 和 `.inline`；只改 docs 里的文字，重新构建的产物逐字节不变。
