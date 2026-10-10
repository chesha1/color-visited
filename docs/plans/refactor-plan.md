# color-visited 重构与优化计划

> 基于提交 `f7f543b`（2026-10-09）对全部代码的通读。
> 文中行号均指该提交。代码改动后行号会漂移，请以函数名定位；需要对照原文时用 `git show f7f543b:<路径>`。
> 2026-10-10 清理过一次 git 历史，那之后的提交号都已换成新的。

## 怎么使用这份文档

- 新会话开场可以直接说：「读 `docs/plans/refactor-plan.md`，继续做下一阶段」，或者「做 B7、B8」。
- 条目编号的含义：**B** = bug，**P** = 性能，**A** = 架构，**C** = 代码细节，**E** = 工程化，**D** = 需要你拍板的决策。
- 每完成一项：
  - 从正文删掉这一条，并在文末「会话记录」里追加一行，写上提交号；
  - 条目里仍然有用的内容挪到对应章节：要在真实浏览器里做的验证放进「待手动验证」，有意做出的取舍放进「已定的取舍」，可以写成测试的场景放进 E2。
- 新发现的问题按同样格式补进对应章节，编号顺延，删掉的编号不再复用。
- 仓库约定（包管理器、版本号位置、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度总览

| 阶段 | 内容 | 条目 | 状态 |
|---|---|---|---|
| 1 | 修 bug，加几个低风险的小优化 | B8、B9、P1、P3、A6 短期第 1 步 | 进行中 |
| 2 | 先搭安全网：测试 + 格式化 | E2、E1a | 未开始 |
| 3 | 统一存储层，清理死代码 | A1、B13、C7–C9 | 未开始 |
| 4 | 核心生命周期 + 规则模型 | A2、A7、C1 | 未开始 |
| 5 | 设置数据流 + 设置对话框 | A3、B10、A4、B12、C12 | 未开始 |
| 6 | 拆分 sync.ts | A5 | 未开始 |
| 7 | 视决策而定 | A6 长期（D3）、E5（D4） | 未开始 |
| 随时 | 零散小项 | C4–C6、C10、C11、C14、E1b、E3、E4、E6、E7 | 未开始 |

阶段之间的依赖：

- 阶段 6 要在阶段 2 的测试完成之后做；
- A3 依赖 A1；
- B10 和 A3 一起做；
- B12 和 A4 一起做，B13 和 A1 一起做。这两条都有单独的小修法，可以提前修。

## 待决策（需要你拍板）

- [ ] **D3 · 要不要去掉 Element Plus**（见 A6）
  - 收益：体积大幅下降，所有 CSS 隔离方面的 hack 一起消失。
  - 代价：要手写十来个小组件，取色器也得自己实现。
- [ ] **D4 · `dist/` 是否继续提交入库**（见 E5）。决定前要先确认 GreasyFork 目前是从哪里同步脚本的。
- [ ] **D6 · 再次点击已访问的链接时，要不要刷新时间戳**
  - 现在只在第一次点击时记录时间戳（storage.ts 的 `recordVisit`），所以过期是从首次访问开始算的。
  - 但合并云端数据时取的是最大时间戳（storage.ts 的 `mergeLinks`），两处语义不一致。

## 待手动验证

已完成的条目里，需要在真实浏览器里做、还没做的验证放在这里。B1–B5 的手动验证已在 2026-10-10 全部通过。

- **B6**（headless Chrome 里用内存版 GM API 跑通了，下面几条要在真实扩展里确认）：
  1. 开启同步，打开一个激活页，等同步完成后打开设置，"最后同步时间"应为刚才的时间。
  2. 改一项常规设置并保存，关掉设置再打开，时间不变。
  3. 设置开着，在另一个标签页打开一个激活页（会触发一次同步），这边的时间应自动更新。这一条依赖 `GM_addValueChangeListener`，Tampermonkey 和 Violentmonkey 各试一次。
- **B7**（Node 和 headless Chrome 里用真实的 v3 样本跑通了，下面几条要在真实扩展里确认）：
  - **不要为了验证把过期时间调短。** 这会真的删掉本地记录，下次上传时云端也会跟着删掉。要测短过期时间，请用新的浏览器配置和一个新建的空 Gist。
  - 第一次上传会删掉云端约 5.7 万条一年前的记录，这正是 B7 要的结果，脚本不会再把它们找回来。万一需要，删之前的数据还能从两处找回：Gist 的历史版本，以及本机的 `test/fixtures/local/visited-links.v3.json`（2026-10-10 的完整数据）。
  1. 保持默认的一年有效期。升级后点开一个没访问过的链接，再打开一个列表页触发同步。控制台应输出"数据已同步并上传到云端"。
  2. 到 Gist 里看文件：`itemCount` 应从约 12.9 万降到约 7.2 万（具体数字取决于哪天做，2026-10-10 是 71,916 条加上新点的链接），文件约 680 KB。
  3. 不点新链接，再打开一个列表页。控制台应输出"数据已同步，无需上传"。
  4. 有多台设备的话，在另一台还没升级的设备上打开列表页同步一次，云端条数不应回到 12.9 万。旧版本会先删掉本地的过期记录再合并，所以不会把它们传回去（Node 里实测）。例外是旧设备关掉了某个预设网站、又在那个网站的页面上同步：这时它不清理本地，会把过期记录传回去，等它升级后就不会了。
- **B11**（headless Chrome 里用构建产物跑通了，页面是冒充 v2ex 的激活页。下面几条要在真实扩展里确认，都不会删记录，可以放心在日常的浏览器里做）：
  1. 在激活页打开设置，清空"过期时间"，直接点"保存设置"。清空用全选删除、按退格一个个删各试一次。输入框应显示回原来的天数；只改了这一项的话按钮是灰的，点了没反应。
  2. 分别输入 0、-5、0.6、9.6，直接点"保存设置"，效果和第 1 条一样。
  3. 先把过期时间改成 30 天并保存。再改一下颜色、退格清空"过期时间"，点"保存设置"。颜色应保存下来，过期时间仍是 30 天（不是默认的一年），页面上的染色不变。

## 背景事实与约束

### 数据规模

以下数字来自两份真实的同步数据。估算"整份读写"的开销时，请按最新的量级来算。

- **2026-10-10，v3：** `test/fixtures/local/visited-links.v3.json`，从同步用的 Gist 拉取。这个目录只在本机、不入库，说明见目录里的 README。
  - 129,378 条记录，33 个 host，最早一条是 2025-04-13。
  - 平铺 JSON 7.4 MB，v3 前缀差分后 3.6 MB，gzip 后 840 KB，base64 之后的文件 1,119,885 字节。
  - 文件超过 1 MB，GitHub API 返回的内容会被截断，同步时实际走的是 raw_url 那条路径（不变量 4）。
  - 按默认的一年有效期，其中 57,462 条（44%）已经过期（2026-10-10 晚上计算）。B7 之后第一次上传会去掉它们，剩下 71,916 条，文件 679,648 字节，低于 1 MB，以后同步不用再走 raw_url。
- **2026-04，v2：** `test/fixtures/local/visited-links.v2.json`，原先在仓库根目录，已从 git 历史中清除（见「已定的取舍」）。97,048 条记录，原始 JSON 5.4 MB，gzip 后 732 KB。

### 存储结构（必须兼容老用户的数据）

- 访问记录：每条单独存成一个 GM 值，键是归一化后的 URL，值是首次访问的时间戳（ms）。只有 `src/core/storage.ts` 读写它们。
  - storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**设置类的键不能含冒号**。
  - 旧版本（v2.21.0 及以前）把全部记录存在 `visitedLinks` 一个键里，结构是 `Record<URL, 时间戳>`。新版本启动时把它逐条合并进来再删掉，可以重复执行。
- `userSettings` 的结构如下：
  ```ts
  {
    general: { color: string; expirationTime: number /* ms */; debug: boolean },
    preset:  Record<规则 key, boolean>,   // 规则 key 会被持久化在这里，改 key 需要迁移
    batch:   { ctrlKey, shiftKey, altKey, metaKey: boolean; code: string /* KeyboardEvent.code，B3 之前是 key */ },
    sync:    { enabled: boolean; githubToken: string; gistId: string },
  }
  ```
  - B6 之前 `sync` 里还有 `lastSyncTime`。老用户的存储里会残留这个字段，但已经没有代码读它，下次保存同步设置时就会去掉。
- `lastSyncTime`：上次同步成功的时间戳（ms），没有这个键表示从未同步（B6）。
  - 只有 sync.ts 通过 storage.ts 的 `setLastSyncTime` 写它。
  - 设置页用 `getLastSyncTime` 读，再用 `onLastSyncTimeChange`（基于 `GM_addValueChangeListener`）跟着刷新。

### 构建与运行环境

- **规则文件会在 Node 中执行。** `vite.config.ts` 在 Node 中 import `src/shared/presetRules.ts` 来生成 `@include`。因此这个文件的顶层代码不能引用浏览器全局对象（写在函数体里没问题）。
- **体积只能靠减少依赖。** GreasyFork 不允许发布压缩过的代码。
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
9. 只有合并后的数据和云端不一致（两边都去掉过期记录后再比），或需要初始化时，才上传（`syncOnStartup`）。云端只是有记录到期，不单独触发上传（B7）。
10. 上传时一律写成 v3 格式：gzip + base64 + 按 host 分组的前缀差分。同步模块内部始终使用平铺的 map（由 `loadLinks()` 组装）。
11. 过期记录两个方向都不同步：合并云端数据前、上传前，都按本机的过期时间去掉，两边用同一个截止时间（B7）。

### 已定的取舍

已完成的条目里有意做出的选择，改动相关代码前先看一眼：

- **默认批量快捷键保持 Ctrl+Shift+V / ⌘⇧V（原 D5，2026-10-09）。**
  - 它和 Windows 下 Chrome 的"粘贴为纯文本"冲突，但后者只在可编辑元素里起作用，而快捷键在可编辑元素里已经不触发。
  - 换别的键代价更大：其他 Ctrl+Shift+字母大多已被浏览器或输入法整页占用（如 A、M、F、U），处理函数会 `preventDefault`，换过去等于抢走一个浏览器功能；Alt+Shift 是 Firefox 的 accesskey 组合，也是 Windows 切换输入语言的热键。
  - 改默认值只影响从没保存过设置的人，他们的快捷键会在升级后悄悄变掉。
  - 误按的根治办法是让批量标记可以撤销，见 B8。
- **旧的快捷键设置不迁移（B3，按要求）。** `batch.key` 改名为 `code` 后，保存过任意设置的老用户快捷键会失效，设置页只显示修饰键（如 "Ctrl + Shift"），要重新录入或点"重置"。
- **快捷键的已知局限：**
  - 按物理键位匹配，键名按 QWERTY 的位置显示：非 QWERTY 布局下，显示的键名可能和键帽不一致（比如 AZERTY 上印着 A 的键显示成 Q），但按同一个键照样能触发；主键盘的 1 和小键盘的 1 算两个键。
  - closed 模式的 shadow root 从外面看不到内部节点，在那里的输入框里按快捷键仍会触发。这种情况很少见。
- **真实的同步数据只放本机，不入库（原 D1，2026-10-10）。**
  - 两份样本都在 `test/fixtures/local/`，说明见那里的 README。
  - 根目录原来的 `visited-links.json` 已从 git 历史中清除：从 v3 那个提交（76b0291）起的 17 个提交改写过，提交号都变了；更早的提交、`refactor/v2` 分支和 tag 不受影响。
  - GitHub 上按旧提交号仍然能打开这些提交，要等 GitHub Support 清理。已经被 clone 或 fork 的副本收不回来。
- **`getBaseUrl` 读 `<a>` 的 `hostname`，不自己 `new URL`（B4）。**
  - 图的是 `getBaseUrl` 里没有会抛错的代码：href 解析失败或被删掉时，`hostname` 是空字符串，链接原样返回。性能只快 0.2–0.3 µs/个，不是理由。
  - 参数类型是 `Pick<URL, 'href' | 'hostname'>`，`<a>` 元素和 `URL` 对象都能传。
  - 不用 `URL.parse`：它要 Chrome 126+、Firefox 126+、Safari 18+，在内核更旧的浏览器上会直接报错，让整个脚本失效。
  - SVG 里的 `<a>` 直接跳过，不染色也不记录：它的 href 是 `SVGAnimatedString` 对象，不是字符串。
- **保存任何一类设置，都按新设置重新初始化页面（B5）。**
  - 以前只有常规设置和预设网站会重新初始化页面，快捷键和同步设置只写存储。现在四类设置走同一条路径，和 A3 的目标一致（`settings:changed` 之后调用 `refresh()`）。
  - 代价是保存快捷键或同步设置时，也要多跑一次 setupPage，多读一遍全量存储（见 P1）。保存是手动点的，这点耗时感觉不到。
- **`lastSyncTime` 不算设置，单独存一个键（B6）。**
  - 它是同步写下的状态，只有 sync.ts 写。保存设置时会把 `userSettings` 整块写回，所以它只要还在 `userSettings` 里，就总有机会被设置页手里的旧值覆盖。
  - 原先计划的止血做法是处理 `sync:completed` 时刷新 `state.syncSettings`，有三处管不到：
    - 它只刷新本标签页。别的标签页同步之后，在这里保存任何设置，照样会写回旧值。每打开一个列表页都会同步一次（见 P3），所以这是最常见的情况。
    - 在同步页点"重置为默认"再保存，会把时间写成 0。
    - 对话框开着时同步完成，显示不会更新。如果是原地修改 `state.syncSettings`，重新打开也还是旧值：对话框第一次打开后就一直挂载着，察觉不到对原始对象的修改。
  - 设置页不再从 props 读这个时间，而是直接读存储，并用 `GM_addValueChangeListener` 跟着刷新。所以设置开着的时候，不论本标签页还是其他标签页同步完，显示都会更新。产物因此多了 `GM_addValueChangeListener` 和 `GM_removeValueChangeListener` 两个 `@grant`。
  - sync.ts 不再自己读写 `userSettings`：`syncOnStartup(settings)` 由 script.ts 传入同步设置，`getDefaultUserSettings`、`getSyncSettings`、`saveSyncSettings` 都已删除。
  - 旧值不迁移（按要求）。老用户升级后，第一次同步完成之前，设置页会显示"从未同步"。开着同步的话，下次打开列表页就会同步，基本看不到这个状态。
- **同步时两个方向都去掉过期记录；云端的过期记录只在有别的原因上传时顺带清掉（B7）。**
  - 不为清理单独上传，原因有两个：
    - 记录每天都在到期，按真实数据，接下来几个月平均每天 200–250 条。云端一有记录到期就上传的话，几乎每次同步都要把整份数据传一遍。到期的记录留在云端没有影响，读的一方会先去掉它们，等下次有新记录要上传时再一并清掉。
    - 过期时间是每台设备各自的设置，不同步。按到期上传的话，过期时间短的设备每次同步都会删掉云端的旧记录，长的设备每次同步又传回去，两边会一直来回上传。
  - 清理云端时，按上传方的过期时间算。比如一台设成 30 天、一台设成一年：30 天的那台上传后，云端只剩 30 天内的记录；一年的那台下次同步时会补回去。之后每次 30 天那台上传，一年那台都要跟着补传一次，不会无限反复（Node 里实测）。
  - 去掉了同步开始时读的本地快照，以及"本地有变化就上传"这个条件。合并后的数据已经包含云端的全部有效记录，和云端一致就说明没有要上传的。原来的条件会让"只有云端有新数据"的同步把同样的内容再传一遍。那次快照读取也是在页面加载时同步执行的（9.7 万条约 37 ms，见 P1）。
  - 过期时间为 0 或负数时，所有记录都算过期，合并后的数据总是空的，所以不会上传，云端保持不变。云端需要初始化时除外，那时云端本来就不是同步数据。
- **过期时间只接受至少 1 天的整数；无效的输入回到保存的天数。这条规则由 setter 把关，不交给 el-input-number 的 `min`（B11）。**
  - 清空、0、负数、0.6、9.6 这类输入不算数，表单里的值回到保存的天数，失焦后输入框也会显示回来。"保存的天数"指打开对话框时或上次保存后的值，不是默认的一年。
  - 因为回到的是存储里已有的值，无效输入删掉的记录，不会比现在的设置本来就要删的更多（别的标签页改过设置的情况属于 B10）。
  - 是"回到保存的值"，不是"忽略这次输入"。输入是逐字生效的：从 365 退格到空，中间会经过 36 和 3，忽略的话表单里留下的是 3。第一版就是忽略，退格清空后直接保存会存成 3 天，后来实测发现才改掉。
  - 不用组件的 `min`，是因为它会把小于 `min` 的输入当场改成 `min` 再发出来，setter 分不出这个 1 是用户输入的，还是组件改出来的。清空时 setter 收到 `null`，以前按 0 算，同样会被改成 1。B11 就是这么来的。
  - 代价：天数是 1 时，"▼"按钮不显示为禁用；点它会得到 0，按无效输入处理，回到保存的天数。
  - 只拦错误的输入，不管有意的修改（按要求，2026-10-10）。用户自己输入了更短的天数，或者点了"重置为默认"，都照常保存，超出的记录照常删除，不弹确认框。曾经做过一版"保存前确认要删多少条"，把事情做复杂了，已经撤掉。
  - 小数也不算数。输入框按四舍五入显示整数天，以前输入 9.6 会存成 9.6 天、显示成 10 天，多删 9.6 到 10 天之间的记录。这是以前就有的问题，B11 时一并改掉。

### 结论的可信度

- **已核实：**
  - B4–B7、B11 涉及的代码路径，都逐行读过；
  - Element Plus 2.14.7 的 el-input-number（源码和 headless Chrome 里的构建产物都核对过）：
    - 输入时（`handleInput`）：每敲一个字都发一次 `update:modelValue`，比如从 365 退格到空，会依次发出 36、3、`null`；设了 `min` 时，小于 `min` 的数当场按 `min` 发出来，但输入框里仍显示用户敲的内容。父组件把 `null` 换算成 0 的话，组件在 `modelValue` 的 watch 里又会把 0 改成 `min` 发出来，B11 就是这么来的；
    - 失焦时（`handleInputChange`）：把输入的值再发一次，然后把显示值改回当前的 `modelValue`（`setCurrentValueToModelValue`）。所以父组件只要不把某个值写进 v-model，输入框失焦后就会显示回原来的值。清空、0、-5、0.6 都实测过；
  - Element Plus 2.14.7 在 Shadow DOM 里的两处行为（源码核对过，B11 时在 headless Chrome 里实测）：
    - 焦点陷阱（ElFocusTrap，el-dialog 和 ElMessageBox 都用它）打开时，用 `document.activeElement` 判断焦点有没有落到起始元素上。在 Shadow DOM 里它永远是宿主元素，所以总是判为没落上，改为挨个聚焦所有可聚焦元素，最后停在最后一个上；如果打开前焦点已经在 Shadow DOM 里，再把焦点移到容器本身。所以 `autofocus` 这类指定起始焦点的选项都不起作用；
    - 取色器的面板默认 `teleported`，挂在 document.body 下的 `#el-popper-container-*` 里，不在 Shadow DOM 里，靠注入宿主页面的那段样式显示（见 A6）；
  - B4 中各种链接的行为（Node 和 headless Chrome 155 实测）：
    - `new URL('http://')` 会抛 TypeError；`a.href` 解析失败时返回原始属性值，`a.hostname` 是空字符串；
    - `new URL('https://exa mple.com')` 只在 Node 中抛错，Chrome 会把空格转义成 `%20`；
    - `a[href]` 会选中 SVG 里的 `<a>`，它的 `.href` 是 `SVGAnimatedString`，交给 `new URL` 会抛错；
  - 构建产物的头部有 SystemJS 的 `@require`，产物中有 18 处 `_css(` 把样式注入宿主页面（grep 产物确认）；
  - vite-plugin-monkey 默认从 package.json 读取 `version`、`author` 等字段（8.1.1 源码，`dist/node/index.mjs` 第 2041 行）；
  - 仓库可以公开访问；
  - B1–B4 的手动验证在真实浏览器里全部通过（2026-10-10），包括两个标签页交替记录访问、旧数据迁移，以及 `instanceof HTMLAnchorElement` 在 Tampermonkey 和 Violentmonkey 的沙箱里都成立。
- **依据规范或文档推断：**
  - Tampermonkey 注册菜单时如果不传 id，会新建一个菜单项（TM 文档）。
  - `GM_addValueChangeListener` 对本标签页的写入也会回调，此时 `remote` 为 false。VM 文档写明了这一点；TM 文档只说 `remote` 表示改动是否来自其他实例。B6 在真实扩展里的验证见「待手动验证」。
- **未核实：**
  - Tailwind 的 `@property` 在 shadow root 中失效（见 A6）。
  - 按 URL 逐条存储后，Tampermonkey 和 Violentmonkey 在 10 万个键下页面注入、`GM_listValues` 和逐条 `GM_getValue` 的具体耗时。手动验证时页面加载没有明显变慢，但没有测过具体数字。
- 核实时，`pnpm typecheck` 和 eslint 都没有报错。但 eslint 几乎没有配置规则（见 E1），所以这不能说明代码没问题。

---

## 1. Bug

- [ ] **B8 · 批量标记之后无法撤销**
  - 位置：`batchAddLinks`（linkManager.ts）、`showNotification`（ui.ts）。
  - 问题：按下快捷键后，页面上所有符合规则、还没访问过的链接会一次性写进存储，之后没有办法撤回：
    - 设置里没有删除记录的入口，这些记录只能等过期，默认要一年；
    - 开了同步的话，下次同步会把它们传到 Gist，带到所有设备上。

    在输入框里按快捷键已经不会触发，但焦点其实不在输入框时误按，仍然会触发。换哪个默认键都避免不了这种误按（见「已定的取舍」）。
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

- [ ] **B9 · v3 编码会丢掉 URL 末尾空的 `#` 和 `?`**
  - 位置：`getV3GroupDescriptor`（sync.ts）。
  - 问题：它用 `pathname + search + hash` 拼回路径。URL 以空的 `#` 或 `?` 结尾时，`hash`、`search` 返回空字符串，这个字符就丢了。URL 里的用户名和密码（`user:pw@`）也会丢，因为 `host` 不包含这一部分。
    - 实际数据：v2 样本里有 1 条 linux.do 的链接以 `#` 结尾，云端存的是去掉 `#` 的版本，原样的那条只在本地。其他设备上这条记录对不上，影响很小。
  - 修法：拼出来的结果和原 URL 不一样时，改放进 raw 分组（`V3_RAW_GROUP_KEY`）原样保存。raw 分组是和 v3 一起引入的（76b0291），能读 v3 的版本都认识。
  - 验证：用 `test/fixtures/local/` 里的 v2 样本跑 v3 往返测试（见 E2），`decode(encode(x))` 应和 `x` 完全一致，条数和每条的时间戳都不变。

- [ ] **B10 · 两个标签页都保存过设置时，后保存的会冲掉先保存的**（和 A3 一起做）
  - 位置：`initializeScriptState`、`saveUserSettings`（state.ts），以及 script.ts 里对 `settings:save` 的处理。
  - 问题：每个标签页只在启动时把 `userSettings` 读进 `state`，之后不再更新。保存任何一类设置，都会把 `state` 里的四类设置整块写回。
    - 例：标签页 A 先打开。在标签页 B 里改了颜色并保存，再回到 A 改快捷键并保存，A 会把旧颜色一起写回去，B 的改动就丢了。B6 时在 headless Chrome 里用内存版 GM API 复现过，B6 前后的产物都一样。
    - 在刷新之前，A 的设置页显示的是旧值，页面也一直按旧设置染色。
    - B6 修的是这类问题里由同步引起的那一种。用户自己改的设置没法像 `lastSyncTime` 那样按写入方拆开，只能让内存里的设置跟着存储更新。
  - 修法：settings store 用 `GM_addValueChangeListener('userSettings', …)` 订阅变化。其他标签页保存后，本标签页更新 store 并调用 `refresh()`。B6 的 `onLastSyncTimeChange` 用的是同一个机制。
  - 验证：开两个标签页 A、B。在 B 里改颜色并保存，A 的链接颜色应跟着变；再在 A 里改快捷键并保存，刷新 B，颜色仍是 B 改的那个。
  - 和数据有关的一种情况：B 把过期时间改长后，A 再保存任何设置，会把旧的、较短的过期时间写回去，A 重新初始化页面时就按它删记录。

- [ ] **B12 · 关掉设置对话框不会丢弃没保存的修改，之后保存别的设置时会一起存下**（最好和 A4 一起做）
  - 位置：ui.ts 的 `showSettingsDialog`、App.vue 的 `handleShowDialog`，以及四个设置组件里监听 `currentSettings` 的 watch。
  - 问题：对话框第一次打开后就一直挂载着，表单里没保存的修改会留在原处。重新打开时，传进去的还是同一个设置对象，组件里的 watch 不会触发，表单不会按存储重置。
    - 例：把过期时间改成 30 天，没保存就关掉。下次打开只想改颜色，表单里仍是 30 天，保存时会一起存下，30 天前的记录当场删掉。B11 时在 headless Chrome 里实测，新旧产物都这样。
    - 同一次打开里切换标签也是这样：在常规设置里改了没保存就切到别的标签，那里的保存不包括常规设置，但修改还留在常规设置的表单里。
  - 修法：每次打开对话框都按存储重建表单，这正是 A4 的目标（打开时拷贝一份完整的 draft）。只修这一条的话，`showSettingsDialog` 每次传设置的副本就行：传进去的是新对象，四个组件的 watch 都会触发，表单和"已保存"的基准会一起重置。
  - 验证：改过期时间，不保存就关掉再打开，应显示存储里的值，保存按钮是灰的。

- [ ] **B13 · 存储里的过期时间是异常值时，每次加载页面都会删光记录**（和 A1 一起做）
  - 位置：`initializeScriptState`（state.ts）、`deleteExpiredLinks`（storage.ts）。
  - 问题：读设置时不校验。`general.expirationTime` 是 null、0 或负数时，`deleteExpiredLinks` 会把所有记录都算作过期（比如 `now - t > null` 为 true），每次加载激活页都把本地记录删光。B11 时实测了 null 和 0。同步不受影响：这时所有记录都算过期，合并后的数据是空的，不会上传（B7）。
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

    9.7 万条时两遍合计约 75 ms（模型实测，见「GM 存储的语义」），是页面加载里最大的一块。

    开着同步时还有两处开销，B7 已经去掉：同步开始时在页面加载过程中同步读一遍本地快照；每次加载都删掉、再从云端写回全部过期记录（真实数据是 5.7 万条）。现在同步只在网络请求返回后读一遍。
  - 修法：
    - 降低过期清理的频率，比如每天一次，用一个时间戳记录上次清理的时间（这个键名不能含冒号，见「存储结构」）。这样做之后，一天内到期的记录还会继续染色，因为 `isVisited` 只看有没有这条记录。同步不受影响，B7 之后它自己按过期时间过滤两边的数据；
    - `logStorageInfo` 只在 debug 模式下执行。
  - 验证：关闭 debug 后，控制台不再出现 `visitedLinks storage size`；在 Performance 面板里对比修改前后 setupPage 的耗时。

- [ ] **P3 · 开启同步后，每次页面加载都会完整同步一次**
  - 位置：`initializeSync`（[script.ts:17-31](../../src/core/script.ts#L17-L31)）、`syncOnStartup`（[sync.ts:1147-1213](../../src/core/sync.ts#L1147-L1213)）、`updateGist`（[sync.ts:1013-1056](../../src/core/sync.ts#L1013-L1056)）。
  - 问题：
    - 每个列表页加载时，都会 GET 整个 Gist，文件超过 1 MB 时还要从 raw_url 再下载一遍（B7 清掉过期记录后，真实数据降到 680 KB，暂时不会超过）；
    - 合并后只要和云端不一致，就调用 `updateGist`（B7 之后，只有云端有新数据、本地没有新记录时，不再上传）；
    - `updateGist` 为了拿到文件名，又 GET 一次整个 Gist，然后 PATCH 整份数据；
    - `lastSyncTime` 已经存下来了，却没有用来控制同步频率。B6 之后它单独存一个键，所有标签页共用，节流时直接用 `getLastSyncTime()` 读即可。
  - 修法：
    1. 用 `lastSyncTime` 节流，比如 10 分钟内跳过同步；在设置里另外提供一个"立即同步"按钮。设置页显示的同步时间会跟着存储自动刷新，按钮不用再手动更新它。
    2. 把第一次 GET 拿到的文件名传给更新步骤，省掉第二次 GET。
    3. 用 ETag 加 `If-None-Match` 做条件请求。GitHub 返回 304 时不消耗限流额度。
  - 验证：节流窗口内加载页面时，不发任何 GitHub 请求；一次上传只有 1 个 GET 和 1 个 PATCH。

## 3. 架构

- [ ] **A1 · 统一存储层 `storage.ts`**
  - 访问记录这一半已随 B1 完成：storage.ts 是唯一读写访问记录的模块。剩下要做的是 `userSettings` 这一半。
  - B6 已经删掉了 sync.ts 自己的那套设置读写（`getDefaultUserSettings`、`getSyncSettings`、`saveSyncSettings`）。现在由 script.ts 把同步设置传给 `syncOnStartup`；`lastSyncTime` 也移出了 `userSettings`，改由 storage.ts 读写。
  - 现状：
    - 同一份设置存在两处：内存里的 `state` 和 GM 存储。
    - `'userSettings'` 在 state.ts 里被直接调用 GM API，共 3 处。
    - "所有预设默认启用"的逻辑写了 2 遍：[config.ts:20-25](../../src/core/config.ts#L20-L25)、[PresetSettings.vue:182-186](../../src/components/PresetSettings.vue#L182-L186)。menuManager.ts 里原来还有一份，已随 B5 删除。
  - 目标：让 `storage.ts` 成为唯一调用 GM 存储 API 的模块，再对外提供：
    - 设置的 key 常量；
    - `loadSettings()`：用 deepMerge 合并默认值，补上缺失的规则 key，清掉已经不存在的规则 key。如果 deepMerge 只保留默认值里有的字段，B6 之前残留在 `userSettings.sync` 里的 `lastSyncTime` 也会顺带清掉；
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
  - B5 已经完成了其中一部分：删掉了 MenuManager 类、`SettingsDialogConfig`、`{ current: X }` 包装和整条 reset 通道（重置只把表单填回默认值，再走保存），菜单回调现在只负责打开对话框。
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
    - 菜单回调在打开对话框时，触发 UI 懒挂载（见 A6）。
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

- [ ] **A6 · UI 技术栈与 CSS 隔离**
  - 现状：
    - **体积：** 构建产物 936 KB。GreasyFork 不允许发布压缩过的代码，没法靠 minify 缩小。
    - **整个包被 SystemJS 包了一层：** [main.ts:32](../../src/main.ts#L32) 和 [38](../../src/main.ts#L38) 用了动态 `import('...css?inline')`，导致 vite-plugin-monkey 改用 SystemJS 打包，并在脚本头部多加了 2 个 jsdelivr 的 `@require` 和 1 个 data: 形式的 `@require`。
    - **CSS 有三个来源：**
      1. **组件样式泄漏到宿主页面。** ElementPlusResolver 默认 `importStyle: 'css'`，于是 18 段组件样式通过 `GM_addStyle` 注入到**宿主页面**的 `<head>`，其中包括 `:root{--el-*}` 和 `.el-overlay`。这违背了隔离的初衷；如果宿主网站本身也用 Element Plus，还会产生冲突。此外 [ui.ts:7](../../src/core/ui.ts#L7) 又单独 import 了 message 组件的样式。
      2. **从 unpkg 加载未锁版本的完整 CSS。** [main.ts:27](../../src/main.ts#L27) 每次页面加载都往 shadow root 里插入一个 unpkg 的 Element Plus CSS，没有锁版本，可能和打包进来的 2.14.7 对不上。
      3. **手动补的变量。** [index.css:19-30](../../src/styles/index.css#L19-L30) 里手动补了一部分 `--el-*` 变量。

      shadow root 里的 Element Plus 之所以能正常显示，部分原因是第 1 条泄漏出去的 `:root` 变量又跨过边界被继承了回来。
    - **取色器的面板不在 shadow root 里。** el-color-picker 默认 `teleported`，面板挂在 document.body 下，完全靠第 1 条泄漏出去的样式显示（B11 时实测）。
    - **焦点陷阱在 shadow root 里指定不了起始焦点。** el-dialog 和 ElMessageBox 打开时，焦点总是落在最后一个可聚焦元素或容器本身，`autofocus` 之类的选项不起作用（原因见「结论的可信度」）。以后要加 ElMessageBox，还要注意它的 `appendTo` 只认元素，传 ShadowRoot 会退回 document.body。
    - **（未核实）Tailwind 的部分样式在 shadow root 里可能不生效。**
      - Tailwind v4 的产物包含 51 条 `@property`，而浏览器在 shadow root 中会忽略 `@property`。这是 Tailwind v4 的已知问题，`border`、`shadow-sm`、渐变等样式可能因此失效。
      - Tailwind 自带一个 `@layer properties` 回退块，但它被包在一个只针对旧版 Safari/Firefox 的 `@supports` 里，在 Chrome 中不生效。
      - 验证方法：打开设置，在 DevTools 中查看带 `.border` 的元素，看它计算后的 `border-style` 是不是 `none`。
    - **不用也会初始化：** 每个匹配到的页面都会创建 Vue 应用和 shadow root，即使用户从不打开设置。
  - 短期修法（风险低，按顺序做）：
    1. **把 main.ts 的动态 import 改成静态 `import css from '...?inline'`。** 验证：构建后，dist 头部不再有 systemjs 的 `@require`。
    2. **让 Element Plus 的样式只进 shadow root。**
       - AutoImport 和 Components 两处都改为 `ElementPlusResolver({ importStyle: false })`，并删掉 ui.ts 第 7 行的样式 import。
       - 把样式以 inline 方式注入 shadow root，并把其中的 `:root` 替换成 `:host`。完整的 `element-plus/dist/index.css` 有 361 KB，会让产物明显变大；更省的做法是只 inline 用到的组件：`element-plus/theme-chalk/base.css`，加上 `el-dialog.css`、`el-button.css` 等。别漏了 `el-message.css`：通知不是模板里的组件，是代码里调用的。
       - 取色器加上 `:teleported="false"`，让面板留在 shadow root 里，否则宿主页面没有样式之后，面板就没有样式了。
       - 删掉 unpkg 的 link，以及 index.css 里手动补的变量。
       - 验证：`grep -c '_css(' dist/color-visited.user.js` 的结果为 0，宿主页面 head 里没有 el- 样式，对话框、取色器面板和通知的外观都不变。
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
    - 规则结构改为 `{ id, name, pages, patterns, normalize?: (url) => string }`，`url` 和 `getBaseUrl` 的参数同类型（现在是 `Pick<URL, 'href' | 'hostname'>`，需要时再加字段），`<a>` 元素和 `URL` 对象都能传。id 直接沿用现有的 key，这样就不用迁移数据；name 另外填写显示名。
    - 归一化逻辑跟着规则走。`getBaseUrl` 变成：先找到对应的规则，再调用它的 `normalize`。
  - 约束：规则文件会在 Node 中被 import，见「构建与运行环境」。

## 4. 代码细节

- [ ] **C1 · 简化 `batchAddLinks`**（[linkManager.ts:25-140](../../src/core/linkManager.ts#L25-L140)）
  - 现在的问题：
    - 两个分支的收尾代码是复制粘贴的；
    - 超过 1000 条时才启用的时间分片属于过度设计，给 1000 个元素加 class 大约只要 1 ms；
    - 最后还要整页重新扫描一次，只是为了补上 URL 重复的那些链接。
  - 改法：只用一个循环——计算 URL，不匹配就跳过，没有记录就新增一条，然后加上 class。大约 20 行就够。
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
    - 加载时执行一次 `deepMerge(defaults, stored)`。以后新增字段时，就不用再单独写迁移代码；B3 之前保存的快捷键设置缺 `code`，也会因此补上默认的 `KeyV`。
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
      - 合并逻辑；
      - 过期记录（B7）：
        - 云端过期的记录不合并进本地，上传的数据里也没有过期记录；
        - 下面几种情况不上传：只是有记录到期、本地没有新记录；只有云端有新数据；过期时间为 0；
        - 需要初始化时只上传有效记录；同步期间的点击照样上传；
        - 两台设备过期时间不同时，不会来回反复上传。
    - storage.ts 的多标签页语义：传播窗口内的并发写不丢；迁移可以重复执行，并能补进旧版本标签页写回的大键；同步期间的点击不丢；云端数据不能覆盖 `userSettings`；没有批量接口时退回逐条写。
    - 批量快捷键：
      - 应触发：方向键、Enter、Escape、F1 等特殊键；开着大写锁定；录入和按下时键盘布局不同；Mac 上的 ⌥⇧V。
      - 不应触发：Ctrl+↑ 对 Ctrl+↓、Ctrl+Shift+V 对 Ctrl+V、1 对小键盘 1；焦点在 input、textarea、select、contenteditable（含其子元素，以及 open shadow root 里的这些元素）中；输入法正在组字。
    - `getBaseUrl`：各站点的归一化，用 `new URL(...)` 传入；`{ href: 'http://', hostname: '' }` 和 `{ href: '', hostname: '' }`（`<a>` 的 href 解析失败、被删掉时就是这样）应原样返回。调用方跳过 SVG 的 `<a>`，这一条要在 DOM 环境里测。
    - 规则匹配：写成表格驱动的测试，列出"URL → 应命中哪条规则、是否应该染色"。
    - 设置对话框（端到端）：
      - 打开 N 次再保存，`userSettings` 只写 1 次、setupPage 只跑 1 次；保存同步设置后，`GM_registerMenuCommand` 只被调用过 1 次；快捷键页"重置为默认"后保存，存下来的是默认快捷键，按下能批量标记。
      - "最后同步时间"（B6）：同步完成后打开设置，显示的是刚才的时间；保存其他设置不会改动 `lastSyncTime`；对话框开着时其他标签页同步，显示会更新；同步页"重置为默认"不影响它；反复开关对话框，值变化监听器始终只有 1 个。
      - "过期时间"（B11）。要在激活页上跑，保存时才会真的删记录：
        - 清空（全选删除、逐字退格两种）、0、-5、0.6、9.6、1.5、1e-5、非数字之后直接保存，过期时间和记录都不变，输入框显示回原值；
        - 点过"重置为默认"再清空，回到的是保存的天数，不是默认的一年；
        - 原来存的不是默认值（比如 30 天）时，回到的是 30 天；
        - 同时改了颜色的话，颜色照常保存，过期时间不变；
        - 1 及以上的输入照常保存，超出的记录照常删除；天数是 1 时点"▼"，回到保存的天数。
  - 提示：
    - sync.ts 是从 `vite-plugin-monkey/dist/client` import GM API 的，测试里需要用 `vi.mock` 替换掉；
    - 本机 Node 是 v26，原生支持 `CompressionStream`、`Blob`、`Response`。
    - sync.ts 的编解码函数（`deserializeGistContent`、`encodeV3GroupedPayload`、`decodeV3GroupedPayload`）现在没有导出，测试前要先导出；A5 拆出 codec.ts 之后自然就有了。
    - 大数据量样本在 `test/fixtures/local/`，v2、v3 各一份真实数据（见「数据规模」和那里的 README）。它们不入库，CI 和新 clone 里都没有，依赖它们的用例要在文件不存在时跳过（`it.skipIf`）。
    - storage.ts 的多标签页语义可以沿用 B1 时的模拟思路：mock 一个 GM 存储，后台按到达顺序应用写入，每个标签页一份缓存，`flush()` 时再广播。用不同的 query 导入 storage.ts，就能得到多个互相独立的"标签页"实例。
    - 上面 storage.ts 和快捷键的场景，B1–B3 时已经在 Node 和 headless Chrome 里用临时脚本验证过，脚本没有入库，需要改写成 Vitest 用例。
    - B4 时在 headless Chrome 里端到端地跑过构建产物：用 CDP 的 Fetch 拦截把 `https://www.v2ex.com` 的请求换成本地页面，GM API 用一个内存实现代替，SystemJS 取自 node_modules。脚本要等 HTML 解析完再注入（比如加 `defer`），否则 SystemJS 的自动导入会把入口模块再执行一遍。这套脚本同样没有入库。
    - B5 时换了一种不用 CDP 的端到端方式，脚本同样没有入库：
      - Node 起一个本地 https 服务（自签证书），headless Chrome 加上 `--host-resolver-rules=MAP www.v2ex.com 127.0.0.1:8443` 和 `--ignore-certificate-errors`，打开的 `https://www.v2ex.com/` 就是这个本地页面，脚本按激活页运行。
      - 页面里依次放内存版 GM API、SystemJS（取自 node_modules）和构建产物（加 `defer`），再由一个驱动脚本点菜单、操作对话框，把结果写进 `<pre>`，用 `--dump-dom --virtual-time-budget=60000` 取出。
      - 有两个坑。一是 Chrome 要用异步的 `execFile` 启动：同步调用会卡住同一进程里的 https 服务，拿到的是空白页。二是 `--virtual-time-budget` 下 rAF 不触发，Vue 的离场过渡永远结束不了，对话框关不掉，要把 rAF 换成 setTimeout。
    - B6 时发现，不需要激活页的场景（同步、设置对话框）直接用 `file://` 页面就行，不用起 https 服务，脚本同样没有入库：
      - 页面里放的东西和 B5 一样。内存版 GM API 要实现 `GM_addValueChangeListener`：写入后异步回调，本标签页的写入 `remote` 为 false；另外提供一个 `remoteSet`，用来模拟其他标签页的写入。
      - `fetch` 换成桩，返回一个内容为空的 Gist。这样首次同步会走初始化流程，发出 GET、GET、PATCH 三个请求。
    - B7 时在 Node 里直接跑 sync.ts 和 storage.ts，脚本同样没有入库：
      - 用 esbuild 打成 ESM，`vite-plugin-monkey/dist/client` 换成内存版 GM，`fetch` 换成桩，云端内容用真实的 v3 样本。新旧两版各打一份，旧版的源码用 `git archive HEAD src` 导出。
      - 按 script.ts 的顺序模拟页面加载：先调 `syncOnStartup`（不 await），接着调 `deleteExpiredLinks`，最后再 await。
      - 端到端沿用 B5 的 https 方式。v3 样本超过 1 MB，Gist 桩返回截断的内容，`GM_xmlhttpRequest` 的桩再从本地服务取 raw_url 的完整内容。旧版产物用导出的 HEAD 源码构建，`node_modules` 软链过去即可。
    - B11 时也沿用 B5 的 https 方式，脚本同样没有入库：
      - 页面开头先放一段内联脚本，写入初始存储（时间戳按当前时间现算）和场景名。后面和 B5 一样，依次放内存版 GM API、SystemJS、构建产物和驱动脚本。
      - 每个场景写成一张步骤表（输入、失焦、点 ▲▼、按方向键、改颜色、重置、切标签、关闭再打开、保存），驱动脚本逐步执行。输入是改输入框的值并派发 input；失焦按真实点击的顺序派发 change、调用 `blur()`。每个场景开一次 Chrome，新旧产物各跑一遍，B11 时共 34 个场景。
      - 场景的初始存储可以直接写异常值（比如 `expirationTime` 为 null），用来测页面加载时的行为（见 B13）。
      - 看样式要截图：用 `--screenshot` 代替 `--dump-dom`，并把 unpkg.com 也映射到本地服务，返回 node_modules 里 2.14.7 的 `dist/index.css`。headless shell 没有中文字体：把 Windows 的 `/mnt/c/Windows/Fonts/msyh.ttc` 软链到一个单独的目录，写一份 fonts.conf 先 include 系统的 `/etc/fonts/fonts.conf`，再用 `<dir>` 加上这个目录，启动 Chrome 时把 `FONTCONFIG_FILE` 指向它。
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
| 2026-10-09 | 完成全部代码的分析，写出本文档 | — | 基于提交 f7f543b |
| 2026-10-09 | B1（顺带完成 P2、C3） | 3296fb2 | 访问记录改为按 URL 逐条存储，新增 storage.ts，启动时迁移旧的 `visitedLinks` 键；建议关闭 D2 和 P4；新发现 B7 |
| 2026-10-09 | D5 关闭；B2 | 9f4b315 | 默认快捷键不换；快捷键在输入框、可编辑区域（含 open shadow root 里的）和输入法组字时不触发；README 改正默认键；新增 B8（批量标记可撤销），待实施 |
| 2026-10-10 | B3（顺带完成 C13） | 247ad2b | 快捷键改为按 `event.code` 录入和匹配，`batch.key` 改名为 `code`，新增 shortcut.ts；按要求不迁移旧设置，老用户需要重新录入 |
| 2026-10-10 | D2、P4 关闭 | — | 精简文档，删去已完成条目的正文；D2、P4 已被 B1 的逐条存储取代；核对代码时发现 P3 原来的第 4 步（本地数据只校验一次）已随 B1 完成 |
| 2026-10-10 | B4（顺带完成 C2） | 32d11de | `getBaseUrl` 改读 `<a>` 的 `hostname`，调用方跳过 SVG 里的 `<a>`，`setupPage` 出错不再影响设置界面挂载；顺带修好 href 被删掉时 `new URL('')` 抛错；97,048 条存储 URL 的归一化结果新旧一致 |
| 2026-10-10 | — | — | 从同步 Gist 拉取最新的 v3 包，放在 `test/fixtures/local/`（已加进 .gitignore，不入库），用 sync.ts 的解码器校验通过；数据显示云端 44% 的记录已过期，补进 B7 |
| 2026-10-10 | — | de7cf13 | 根目录的 `visited-links.json` 移到 `test/fixtures/local/visited-links.v2.json`，不再入库，目录里加 README 说明两份样本；D1 只剩是否清理 git 历史；用 v2 样本跑 v3 往返时新发现 B9 |
| 2026-10-10 | D1 关闭 | — | 用 git filter-branch 把 `visited-links.json` 从历史中删除，并 force push 了 main。只改写了从 76b0291 起的 17 个提交，提交号都变了，本文引用的已换成新的；更早的提交（包括唯一带签名的根提交）、`refactor/v2` 和 tag 不受影响。GitHub 上按旧提交号仍能访问，待联系 GitHub Support 清理 |
| 2026-10-10 | B1–B4 的手动验证 | — | 在真实浏览器里全部通过，清空「待手动验证」 |
| 2026-10-10 | B5（顺带完成 A3 的一部分和 C8 的一条） | 4ae9279 | 保存监听改为启动时在 script.ts 订阅一次，菜单只注册一次，删掉 MenuManager 类和 `SettingsDialogConfig`；删掉 reset 通道，快捷键页重置后也走保存；`settings:save` 改成可辨识联合类型；保存任何设置都重新初始化页面。headless Chrome 端到端对比新旧产物：打开 3 次后保存，旧版写 3 次存储、跑 3 次 setupPage，新版各 1 次；保存同步设置后，旧版菜单注册了 4 次，新版始终 1 次；手动验证在真实浏览器里通过 |
| 2026-10-10 | B6（顺带完成 A1 中 sync.ts 的部分） | ad2c174 | `lastSyncTime` 移出 `userSettings`，单独存一个键，只由同步写入；设置页直接读存储，并用 `GM_addValueChangeListener` 跟着刷新；sync.ts 不再自己读写 `userSettings`，同步设置由 script.ts 传入。headless Chrome（`file://` 页面）端到端对比新旧产物：同步后打开设置，旧版显示 1970 年的旧值，新版是刚才的时间；保存常规设置后，旧版把存储里的时间改回旧值，新版不变；其他标签页同步后，旧版不更新，新版在对话框开着时也会更新；同步页重置并保存后，旧版把时间写成 0，新版不变；对话框关开 3 次后，监听器仍只有 1 个。新发现 B10，新旧产物上都复现了 |
| 2026-10-10 | B7 | 7300073 | 同步时，合并云端数据前、上传前都按本机的过期时间去掉过期记录，两边用同一个截止时间；上传条件改为合并后的数据和云端（都去掉过期记录后）不一致，去掉同步开始时的本地快照。用真实 v3 样本（129,378 条，按一年有效期 57,462 条已过期）在 Node 里对比新旧版本：旧版每次加载都删掉 57,462 条、同步后再写回 57,462 条，上传 129,379 条（1.12 MB）；新版只在升级后第一次加载时删掉旧版留下的，之后不再写回，上传 71,917 条（680 KB，低于 1 MB）；只有云端有新数据时，旧版会把同样的内容再传一遍，新版不传；过期时间为 0 时新版不上传，云端不变。headless Chrome 端到端跑构建产物：云端过期的链接，旧版同步后被染色，新版不染；旧版产物和入库的 dist 逐字节一致。新发现 B11：清空过期时间后保存，会删掉一天前的全部记录，B7 之后还会影响云端 |
| 2026-10-10 | B11；版本号升到 2.21.1 | 待提交 | 过期时间只接受至少 1 天的整数，由 setter 把关：清空、0、负数、小数这类输入不算数，表单回到保存的天数，失焦后输入框也显示回来；去掉 el-input-number 的 `min`，因为它会把这些输入改成 1 天。源码只改了 GeneralSettings.vue 里的几行。headless Chrome 里在冒充 v2ex 的激活页上对比新旧产物，共 34 个场景：清空（全选删除、逐字退格）、0、-5、0.6、9.6、1.5、1e-5、非数字之后直接保存，旧版存成 1 天或小数天并删掉记录，新版过期时间和记录都不变；原来存 30 天时回到 30 天；"重置为默认"后再清空，回到保存的天数；有效输入、▲▼、方向键和"重置为默认"，新旧版行为一致，只有在 1 天时按 ▼ 会回到保存的天数。第一版是"忽略无效输入"，逐字退格清空时会留下中间的 3，保存成 3 天，后来实测发现，改成回到保存的值。中间还做过"保存前弹框确认要删多少条"的方案（先用原生 confirm，后来换成 ElMessageBox），太复杂，已经撤掉。新发现 B12（关掉对话框不丢弃没保存的修改，之后会被一起存下）、B13（存储里的过期时间是 null 或 0 时，每次加载都删光记录），都实测过，新旧产物一样；取色器面板挂在 shadow root 外面、Element Plus 的焦点陷阱在 shadow root 里指定不了起始焦点，这两条记进了 A6 |
