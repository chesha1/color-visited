# color-visited 重构计划 v2

> 基于提交 `cc63a81`（2026-10-13）的代码从头梳理，取代旧版 [refactor-plan.md](refactor-plan.md)。旧版里没做完的条目都重新评估过，去向见文末附录。这一版确认后删掉旧版；需要查旧版内容（比如端到端测试的做法）时用 `git show cc63a81:docs/plans/refactor-plan.md`。
> 文中行号都指 `cc63a81`。代码改动后行号会漂移，请以函数名定位；需要对照原文时用 `git show cc63a81:<路径>`。

## 怎么使用这份文档

- 新会话开场可以直接说：「读 `docs/plans/refactor-plan-v2.md`，继续做下一阶段」，或者「做 A9」。
- 条目编号：**B** = bug，**A** = 架构，**C** = 代码细节，**E** = 工程化，**D** = 需要你拍板的决策。
  - 编号接着旧版往下排（旧版用到 B14、P4、A7、C14、E8、D6）。旧版编号在提交信息里出现过，新旧编号不重复，`git log --grep` 就不会查混。
  - 删掉的编号不再复用。目前用到 B21、A14、C15、E14、D8。
- 本文只记还没做的事，以及做这些事要知道的背景。每完成一项：
  - 从正文删掉这一条，并更新「进度总览」；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Xn」），不在本文留记录；
  - 要在真实浏览器里手动验证的步骤，列在对话里，不写进本文；能自动化的写成测试；
  - 「约束」里的内容因此变了的，一并更新。
- D 项由你决定，动手前先问。
- 仓库约定（pnpm、版本号、提交信息格式）见 [AGENTS.md](../../AGENTS.md)。

## 进度总览

| 阶段 | 内容 | 条目 | 状态 |
|---|---|---|---|
| 1 | 马上能修的 bug | B15、B17、B18 | 未开始 |
| 2 | 安全网：测试、格式、CI，顺带修 B16 | E9、B16、E10、E11 | 未开始 |
| 3 | UI 外壳 | A8（B19 看 D7） | 未开始 |
| 4 | 站点规则 | A9（含 B20、B21） | 未开始 |
| 5 | 存储与设置 | A10 | 未开始 |
| 6 | 设置对话框 | A11 | 未开始 |
| 7 | 页面生命周期、染色样式 | A12、C15 | 未开始 |
| 8 | 同步模块 | A13 | 未开始 |
| 9 | 和宿主页面的 JS 隔开 | A14 | 未开始 |
| 10 | 收尾 | E12、E13、E14 | 未开始 |

阶段之间的依赖：

- B16 和 E9 一起做：先写往返测试，看它失败，再修。
- A9、A13 要在 E9 之后，先用测试锁住归一化的输出和同步的行为。
- A11 依赖 A8、A10。A12 依赖 A9、A10、A11：A11 先去掉 UI 对事件总线的依赖，A12 才能把它整个删掉。
- A13 只依赖 E9，可以和阶段 3–7 交错着做。
- A14 依赖 A8（shadow root）、A12（`isTyping`）、A13（请求改走 `GM_xmlhttpRequest`）。
- E12、E14 放在 A12 之后，免得改了马上又被删掉的代码。

## 待决策（需要你拍板）

- [ ] **D7 · Tailwind 留不留**（做 A8 之前定）
  - 现状：
    - 设置界面同时用 Element Plus 和 Tailwind。组件里大约有 105 处 class 属性，一半在预设页的装饰卡片上。产物里的 Tailwind CSS 约 18 KB。
    - Tailwind v4 在 shadow root 里有 B19 的问题，边框、阴影、渐变都不显示。从 2025-07 改用 Tailwind 起就是这样，一直没被发现。
    - Tailwind 会扫描整个仓库找类名，文档、工作流里的普通单词也会生成工具类：`.contents` 来自 release.yml，`.inline` 来自计划文档。src 里 CSS 字符串和属性中的 `container`、`filter`、`shadow` 也生成了用不到的规则。
  - 选项 1（推荐）：去掉 Tailwind。
    - 布局改用 Element Plus 的组件，再给各组件写 scoped CSS（同样会经 A8 收进 shadow root）。
    - 删掉 `tailwindcss`、`@tailwindcss/vite` 和 tailwind.css。B19 和扫描问题一起消失。
    - 代价：要改写这大约 105 处 class，预设页的卡片样式要重做。卡片上的边框、阴影、渐变现在本来就没显示。
  - 选项 2：保留。
    - 注入 shadow root 时，去掉 `@layer properties` 外层的 `@supports` 条件，让变量的初始值无条件生效。
    - 把 `@import "tailwindcss";` 改成 `@import "tailwindcss" source("..");`，只扫描 src。
- [ ] **D8 · 版本号只留一个来源**
  - 现状：userscript 的版本号写在 vite.config.ts 里，package.json 的 `version` 一直是 1.0.0。AGENTS.md 规定发版时只改前者。
  - 建议：
    - 删掉 vite.config.ts 里的 `version`，vite-plugin-monkey 默认就读 package.json 的 `version`；
    - 以后只改 package.json，同时更新 AGENTS.md 里的版本号规则。
    - 不改也没有实际问题。

## 为什么重写

旧版计划是在修 bug 的过程中一条条加出来的，条目之间互相引用、互相打补丁。这一版直接从代码出发：先定目标架构，再倒推出步骤。现有代码的问题可以归结为下面几条根因，旧版的大部分条目和最近修过的 bug 都是它们的症状：

1. **状态没有唯一的来源，更新也没有唯一的路径。**
   - 设置同时存在于三处：存储、内存里的 `state`、对话框里的副本。本标签页保存和其他标签页保存走的是两条路。
   - 页面上的颜色有四条更新路径：初次扫描和 observer、点击后全量重扫、撤销时手动去色、同步完成的事件。
   - 最近修的几个设置类 bug（多标签页互相覆盖、对话框里的副本冲掉新值、保存后被改回旧值）都出在这里。
2. **资源的创建和释放不在同一个地方。**
   - 监听器在 eventManager 里添加，在 linkManager 里移除。observer 是全局单例，靠注入和清空上下文来开关。
   - 页面每变一次，都要先全部拆掉再重新装上（`removeScript` + `setupPage`）。
   - 这几个文件之间还有循环依赖。
3. **和运行环境之间的边界没守住。**
   - Element Plus 的样式泄漏到宿主页面。
   - 每个页面都要从 unpkg 加载一份 CSS，启动还依赖 jsdelivr 上的 SystemJS。
   - 脚本默认和宿主页面跑在同一个 JS 环境里，页面能触发脚本的监听器，也能 hook 同步时用的 `fetch`（B15、A14）。
4. **站点规则把三件事混在了一起。**
   - 注入范围（`@include`）、激活范围（`pages`）、链接归一化（`getBaseUrl`）本该分开声明。
   - 注入范围的粒度选错了：在 SPA 站点上，如果是从没被 include 的页面进来的，脚本根本不在（B20）。
   - 归一化和规则分开写，漏掉了 south-plus 的一个域名（B21）。
5. **同步模块的复杂度花在了诊断代码上**，编解码的正确性（逐字往返）反而没守住（B16）。
6. **没有测试，lint 没有配规则。**

## 目标架构

| 模块 | 职责 |
|---|---|
| `main.ts` | 组合根。按顺序：注册"设置"菜单 → 迁移旧数据 → 清理过期记录（一天一次）→ 自动同步（10 分钟一次）→ `startPage()`。菜单放在最前面，后面哪一步出错，设置都还能打开 |
| `shared/sites.ts` | 站点表（`id`、`name`、`pages`、`links`、`match?`），按 host 查表的 `normalizeUrl`，`findActiveSite(url, preset)`。Node 也会执行它，所以不 import 任何 src 模块 |
| `core/storage.ts` | 唯一调用 GM 存储 API 的模块，所有键名都定义在这里。负责：访问记录的读写，写入后通知本标签页（`onLinksChange`）；设置的原始读写，以及订阅其他标签页的写入；`lastSyncTime`、`lastCleanupTime`；旧数据迁移 |
| `core/settings.ts` | 默认值、读取时的规范化，`getSettings` / `saveSettings` / `onSettingsChange`。不依赖 Vue |
| `core/page.ts` | 常驻的 URL 变化检测。`refresh()` 先释放上一次的激活，再按当前 URL 和设置重新激活 |
| `core/colorizer.ts` | `activate(site, settings)` 返回 dispose，管样式、标记、observer、点击、批量标记和撤销 |
| `core/shortcut.ts` | `isMac`、默认快捷键、`toShortcut`、`matchesShortcut`、`isTyping` |
| `core/log.ts` | 调试开关打开时的日志 |
| `core/sync/` | `github.ts` 是唯一发网络请求的地方；`codec.ts` 管同步格式；`index.ts` 管同步流程、测试连接，以及带通知的 `runSync` |
| `ui/root.ts` | 第一次需要时才创建宿主元素和 shadow root，并写入收集到的 CSS |
| `ui/notify.ts` | `notify(message, type, action?)` |
| `ui/dialog.ts` 和 `ui/*.vue` | `openSettings()`：每次打开都新建一个对话框应用，关掉后卸载。`.vue` 是对话框和 4 个 tab |

依赖规则：

- core 只通过 `ui/notify.ts` 使用 UI。`ui/root.ts`、`ui/notify.ts` 不 import 任何 `.vue`，所以哪个模块都能弹通知，不会形成循环依赖。UI 不 import page 和 colorizer。
- 没有全局事件总线。跨模块的变化只有两个订阅点：设置（`onSettingsChange`）和本标签页的访问记录（`onLinksChange`），其余都是直接调用。
- `types.ts` 拆散，类型跟着它所属的模块走。

关键机制：

- **设置只有一条更新路径。** 本标签页保存时，`saveSettings` 把改动合并到存储里的当前值上，写回后通知订阅者。其他标签页写入后，storage 的订阅拿到新值，规范化之后同样通知订阅者。页面只订阅一次：`onSettingsChange(refresh)`。
- **页面颜色只跟着存储走。** colorizer 只在两种时候改标记：一是扫描新出现的链接或 href 变了的链接，二是收到本标签页访问记录的增删通知。点击、批量标记、撤销、同步合并都只写存储，不碰 DOM。
- **激活一次，释放一次。** `activate` 里添加的监听器共用一个 AbortController，再加上 observer、订阅和样式，都在它返回的 dispose 里释放。不再有全局的 handler 引用，也不再有 observer 上下文。
- **UI 用到时才创建。** 没打开过设置、也没弹过通知的页面上，没有 shadow root，也没有 Vue 应用。打包进来的 CSS 都只进 shadow root，宿主页面上只有染色用的那一段样式。

## 约束（重构时不能变）

### 用户数据

- **访问记录**：每条单独存成一个 GM 值，键是归一化后的 URL，值是最近一次访问的时间戳（ms），过期从这个时间算起。
  - 只有 storage.ts 读写它们。storage.ts 把含冒号的键都当作访问记录（URL 一定带协议头），所以**其他键都不能含冒号**。
  - 所有写入（点击、批量标记、同步合并、迁移）都经过 `mergeLinks`，只会把时间戳改大。同步合并取的是较大的值，改小的值下次同步就会被改回去。
  - 过期的记录在读的时候就当作没有（`isVisited` 按当前的过期时间判断），不依赖清理。
  - 删除记录的只有两处：
    - 过期清理：要把全部记录读一遍，所以所有标签页合起来一天最多一次，时间记在 `lastCleanupTime`。不要把它放回每次初始化页面的路径上。
    - 批量标记的撤销：只删时间戳仍等于那次标记时间的记录（`deleteLinksIfUnchanged`）。这依赖两点：批量标记不碰还没过期的记录；点击会刷新时间戳。改其中任何一点，都要连撤销一起看。
  - v2.21.0 及以前把全部记录存在 `visitedLinks` 一个键里。新版本启动时把它逐条合并进来再删掉，可以重复执行。这段迁移保留。
- **归一化的输出就是存储键，站点 id 就是 `userSettings.preset` 的键。** 改了哪一个，已有的数据就对不上。A9 之前先用 E9 的黄金表把它们锁住。
- **`userSettings`**：存在一个 GM 值里，字段名都已经持久化了，不能改：
  ```ts
  {
    general: { color: string; expirationTime: number /* ms */; debug: boolean },
    preset:  Record<站点 id, boolean>,
    batch:   { ctrlKey, shiftKey, altKey, metaKey: boolean; code: string /* KeyboardEvent.code */ },
    sync:    { enabled: boolean; githubToken: string; gistId: string },
  }
  ```
  - 读取时要容忍这些情况：
    - 字段缺失或类型不对；
    - v2.21.0 及以前残留的 `sync.lastSyncTime`；
    - 快捷键缺 `code`：当时存的是 `key`，B3 已经接受让这些用户重录；
    - `expirationTime` 不到 1 天（含 null、0、负数）：换成默认的一年，否则所有记录都会被当作过期，清理时全部删掉。
  - 保存时只写改过的字段，合并到存储里的当前值上；快捷键改了就整个替换（按字段合并的话，会拼出一个谁都没设过的组合）。这样对话框开着时其他标签页做的修改不会被冲掉。
- **`lastSyncTime`**：上次同步成功的时间，只有同步会写它。
  - 加载页面时距它不到 10 分钟就不自动同步。所有标签页共用这个键，所以是整个浏览器合起来 10 分钟最多一次。
  - 同步失败不更新它。设置页的"立即同步"不受这个限制。
- **云端（Gist）的格式**：其他设备上可能还跑着旧版本的脚本。
  - 读：v3 和 v2 压缩包（压缩算法只有 gzip），以及旧的明文格式（键是网址、值是数字的对象，或者带 `visitedLinks` 字段的对象）。
  - 写：一律写 v3。外层包的 7 个字段都要写（`syncVersion`、`encoding`、`payload`、`itemCount`、`updatedAt`、`originalBytes`、`compressedBytes`），因为旧版本读取时会校验全部字段。`payload` 是先按 host 分组、组内再做前缀差分的 JSON，gzip 之后再 base64。

### 同步的行为不变量（A13 之前先用测试锁住）

1. HTTP 请求失败时必须抛错，不能当作"云端为空"，否则紧接着就会用本地数据覆盖云端。
2. 遇到不认识的 `syncVersion`（通常来自更新版本的脚本）时抛错，不覆盖云端。
3. `syncVersion` 认识，但解码要用的字段（`encoding`、`payload`）不对，或者解出来的结构不对，也抛错，不覆盖云端。
4. 文件超过 1 MB 被截断时，改用 raw_url 获取完整内容。获取到的内容认不出来（比如代理或限流返回的 HTML）时抛错，不覆盖云端。
5. 不是同步数据的内容按"空"处理，并标记需要初始化，本次同步会把它写成同步格式。这包括：空内容、不是 JSON、不是对象、没有同步特征的对象（含 `{}`）。这样新建 Gist 时内容可以随便填。
6. 自愈：丢掉键不含冒号、或值不是有限数字的条目（比如旧脚本混进来的同步包字段），并打一行日志。
7. 合并时每条 URL 取较大的时间戳，而且直接和存储里的当前值比较，所以同步期间本标签页或其他标签页的写入不会被覆盖。
8. 只有合并后的数据和云端不一致（两边都去掉过期记录后再比），或者需要初始化时，才上传。云端只是有记录到期，不单独触发上传：否则几乎每次同步都要传一遍整份数据，过期时间不同的设备还会来回上传。
9. 过期记录两个方向都不同步：合并云端数据前、上传前，都按本机的过期时间去掉，两边用同一个截止时间。
10. 编码必须逐字往返：`decode(encode(x))` 的每个键都和原来完全一样（B16 修完之后成立）。
11. 请求次数：和云端一致时只有 1 个 GET；要上传时是 GET 加 PATCH，PATCH 用 GET 拿到的文件名；文件被截断时再多一个 raw_url 的 GET。

### 构建与发布

- **规则文件会在 Node 中执行。** vite.config.ts 在 Node 里 import 它来生成脚本头部，所以它的顶层不能引用浏览器全局对象。
- **体积只能靠减少依赖。** Greasy Fork 不允许发布压缩过的代码。
- **发版由 CI 完成**（[release.yml](../../.github/workflows/release.yml)），构建产物不入库。
  - 产物文件名 `color-visited.user.js` 不能改，头部要保留 `@version`。
  - tag 指向 CI 另加的、放着构建产物的提交：Greasy Fork 收到 release 事件后，是用 `git show <tag>:color-visited.user.js` 取脚本的。
- **UI 继续用 Element Plus**（D3 已定）。不手写组件替代它，也不用原生的 confirm、alert。
- **GM 权限声明。** vite-plugin-monkey 会根据代码里 import 的 `GM_*` 自动生成 `@grant`。`GM_xmlhttpRequest` 要访问的域名，需要加进 `connect`。

### 运行平台

- **SPA 跳转检测的方式不能换。** 用户脚本没法 hook 页面的 `history.pushState`，SPA 跳转只能在 MutationObserver 的回调里比较 `location.href` 来发现。这个检测在非激活页上也必须一直运行：v2.19.4 修过从非激活页跳到激活页时监听失效的问题。
- **注入环境。** Tampermonkey 目前不写 `@sandbox` 时默认是 `raw`，注入页面的 MAIN_WORLD；Violentmonkey 的 `@inject-into` 默认是 `auto`，也是先试页面环境。在页面环境里，脚本用的 `window`、`fetch` 就是页面的那一份，页面脚本可以触发它们，也可以 hook 它们（见 B15、A14）。
- **GM 存储的语义。** `GM_getValue` 返回的是副本；GM 存储由所有标签页共享。
  - 每个标签页有一份同步读取用的缓存。写入先进本标签页的缓存，再发给扩展后台，由后台按到达顺序应用并广播给其他标签页。所以不同键的并发写入互不影响，同一个键是后写覆盖先写。
  - `GM_getValues`、`GM_setValues`、`GM_deleteValues` 需要 Tampermonkey 5.3+ 或 Violentmonkey 2.19.1+，storage.ts 在旧版本上退回逐条写。
  - `GM_addValueChangeListener` 对本标签页自己的写入也可能回调（VM 文档写明了这一点），这时 `remote` 为 false。只想订阅其他标签页的写入时，要跳过这种回调。
  - TM 和 VM 内部都把一个脚本的全部值存成一整块，注入页面时整份交给页面。所以键越多，每次注入就越慢（见下面的「数据规模」）。

### 数据规模

- 2026-10-10 的同步数据有 129,378 条记录，分布在 33 个 host。
  - 按一年的有效期，其中 44% 已经过期。上传时会去掉过期记录，去掉后剩 71,916 条，Gist 文件约 680 KB。低于 1 MB，所以正常同步不再走 raw_url。
  - 本地样本在 `test/fixtures/local/`，不入库，说明见那里的 README。
- 逐条存储的开销（按 VM 页面侧源码建模，用 9.7 万条在 Node 里实测；TM 闭源，常数可能不同）：
  - 点击一次只写一个键，页面主线程的开销约为 0；
  - 每次注入页面约 53 ms；
  - 后台每次持久化约 25 ms，不在页面主线程上。
  - 由此得出两点：初始化页面时不要全量读存储；扩大注入范围是有代价的（见 A9 的 `match`）。

---

## 1. Bug

- [ ] **B15 · 宿主页面能改写设置，还能让脚本以后每次启动都失败**
  - 现状：
    - `setupGlobalEventListeners` 在 `window` 上监听 `preset-states-updated`（[script.ts:43-51](../../src/core/script.ts#L43-L51)），收到后就把 `detail.presetSettings` 写进 `userSettings` 并保存。
    - 代码里没有任何地方触发这个事件。但脚本默认和宿主页面跑在同一个 JS 环境里（见「运行平台」），页面脚本调一次 `window.dispatchEvent(new CustomEvent('preset-states-updated', { detail }))` 就能触发它：
      - 可以任意改写各站点的开关。改动写进了存储，所有站点都受影响。
      - 传入 `{ presetSettings: null }` 的话，下次启动时 `initializeScriptState` 会执行 `key in null` 并抛错（[state.ts:31](../../src/core/state.ts#L31)）。之后脚本在所有站点上都起不来，"设置"菜单也不会注册，只能去管理器里手改存储。
  - 修法：删掉这个监听。A10 让读取设置时做完整的规范化之后，存储里的坏值也不会再让启动失败。A14 再把脚本和页面的 JS 环境隔开。
  - 完成标准：`grep -rn "preset-states-updated" src` 没有结果。

- [ ] **B16 · 同步编码不能逐字往返，本地有末尾带 `#` 的记录时，每次同步都整份上传**（和 E9 一起做）
  - 现状：
    - v3 编码把 URL 拆成两部分：分组键（host），和 `pathname + search + hash`（`getV3GroupDescriptor`，[sync.ts:534-550](../../src/core/sync.ts#L534-L550)）。
    - URL 以一个空的 `#` 或 `?` 结尾时，对应的部分是空字符串，解码出来就少了这个字符。没有路径的 URL 则会多出一个 `/`。
    - 后果：本地有 `https://linux.do/t/topic/647305/49#` 这样的键时（v2 样本里就有这一条）：
      1. 上传后，云端存的是不带 `#` 的键；
      2. 下次同步把这个键合并回本地，本地两个键都有了，和云端比永远不一致；
      3. 于是之后**每次同步都整份上传一遍**（现在约 680 KB），本地还多出一个重复的键。
    - Node 里实测：本地两条记录、其中一条末尾带 `#`，云端为空，连续同步 4 次。第一次是初始化，本来就要上传；之后 3 次和云端比都不一致，也都发了 PATCH。
  - 修法：只改编码，解码不变。
    - URL 以 `<分组的 origin>/` 开头时，存去掉 origin 之后的整段字符串；
    - 否则（包括 `new URL` 解析失败的情况），放进已有的 `@raw` 分组，存完整的 URL。
    - 旧版本解码新数据，得到的结果和新版本一样，不影响兼容。已经多出来的重复键无害，不用清理。
  - 完成标准：
    - E9 的往返测试里，两份样本的所有键（含上面那条）都逐字相等；
    - 上面的场景从第二次同步起不再发 PATCH。

- [ ] **B17 · 已经染色的链接换了 href 后，不会重新判断**
  - 现状：observer 处理 href 变化时，会跳过已经带 `visited-link` 的链接（[domObserver.ts:73-79](../../src/core/domObserver.ts#L73-L79)），`updateLinkStatus` 开头也会跳过它们。翻页、"换一批"、虚拟滚动这类列表会复用 `<a>` 元素：把一个已访问的链接改成未访问的 href 之后，它还保持着颜色。
  - 修法：href 变化时不看现有的标记，先去掉，再按新的 href 判断。A12 重写 observer 时要保留这一点。
  - 完成标准：在 DOM 里测：把已染色链接的 href 改成未访问的地址，颜色去掉；改回已访问的地址，颜色又染上。

- [ ] **B18 · 预设网站页的展开箭头不显示**
  - 现状：PresetSettings.vue 的模板里用了 `<ArrowRight />`（[第 50 行](../../src/components/PresetSettings.vue#L50)），但它既没有被 import，也没有全局注册：ElementPlusResolver 只解析 `El` 开头的组件。构建产物里是 `resolveComponent("ArrowRight")`，运行时解析不到，渲染出来是一个空的 `<arrowright>` 元素。
  - 修法：`pnpm add @element-plus/icons-vue`，在组件里 import 这个图标。element-plus 本来就依赖这个包，产物里已经有这个图标，不会增加体积。

- [ ] **B19 · 设置界面里 Tailwind 的边框、阴影、渐变都不显示**
  - 现状：
    - Tailwind v4 的 `border`、`shadow-*`、渐变等工具类，依赖 `@property` 注册的变量初始值，比如 `.border{border-style:var(--tw-border-style)}`。而 `@property` 在 shadow root 里不生效。
    - Tailwind 自带一个回退块，但它包在一个只针对旧版 Safari/Firefox 的 `@supports` 里，Chrome 用不上。
    - Chrome 146 实测，同一份 CSS：放在 shadow root 里时，`.border` 的 `border-style` 是 `none`，`shadow-sm` 和渐变也都是 `none`；放在 document 里时是 `solid`。
    - 所以设置界面里各个卡片和分隔线的边框、阴影，以及预设页统计框的渐变，现在都没有显示。只有一个例外：宿主网站自己也用 Tailwind v4 时，它在 document 里注册的 `@property` 对 shadow root 也有效。验证时别挑这种网站。
  - 修法：看 D7。

- [ ] **B20 · SPA 站点上，从没被 include 的页面进来后，站内跳到列表页也不染色**
  - 现状：
    - `@include` 直接由每个站点的 `pages` 生成（共 88 条），脚本只在这些 URL 整页加载时才注入。
    - 在 SPA 站点（站内跳转不刷新页面）上，如果先打开的是别的页面，脚本就不在。比如从外部链接直接打开 linux.do 的帖子，再点左上角回到首页：首页是站内跳转过去的，脚本根本没有注入，一直不染色，只能手动刷新。
    - v2.19.4 修的是"脚本已经在，跳到非激活页再跳回来"的情况，管不到这里。
  - 修法：在 A9 里做。

- [ ] **B21 · south-plus 的镜像域名 bbs.imoutolove.me 上的链接没有归一化**
  - 现状：south-plus 的规则包含 `bbs.imoutolove.me`（presetRules.ts [第 261 行](../../src/shared/presetRules.ts#L261)、[第 266 行](../../src/shared/presetRules.ts#L266)），但 `getBaseUrl` 里 south-plus 的归一化只匹配 `www.*-plus.net`（[utils.ts:55](../../src/core/utils.ts#L55)）。在这个域名上，同一个帖子在不同列表页上的链接带着不同的分页后缀，被存成不同的键：在一处点过，换一页再看就不染色。
  - 修法：在 A9 里，把这个域名加进 south-plus 的归一化。
  - 后果：这个域名上已有的、带分页后缀的记录以后对不上，不再染色。影响只限这一个镜像域名。

## 2. 架构

- [ ] **A8 · UI 外壳：样式只进 shadow root，用到时才创建**
  - 现状：
    - **整个包被 SystemJS 包了一层。** [main.ts:32](../../src/main.ts#L32) 和 [38](../../src/main.ts#L38) 用了动态的 `import('…css?inline')`，vite-plugin-monkey 因此改用 SystemJS 打包，产物头部多了 2 个 jsdelivr 的 `@require` 和 1 个 data: 形式的 `@require`。
    - **Element Plus 的样式泄漏到宿主页面。** ElementPlusResolver 默认 `importStyle: 'css'`，组件样式经 `GM_addStyle` 注入了宿主页面的 `<head>`。这次构建是 18 段，共 97 KB，其中包括 `:root{--el-*}`。宿主网站自己也用 Element Plus 时，两边会互相干扰。
    - **shadow root 里又从 unpkg 加载了一份完整的 CSS。** [main.ts:27](../../src/main.ts#L27) 插入了 `https://unpkg.com/element-plus/dist/index.css`，没有锁版本：
      - 每个匹配的页面都要加载它，没命中缓存时，unpkg 还会从 Referer 里看到当前网站；
      - 受宿主页面 CSP 的 `style-src` 限制；
      - unpkg 不可用时，设置界面就没有样式。
      - [index.css](../../src/styles/index.css) 里又手动补了一部分 `--el-*` 变量。
    - **取色器的面板**默认 teleport 到 `document.body`，完全靠泄漏到宿主页面的样式显示。
    - **不用也会创建。** 每个匹配的页面都会创建 shadow root 和 Vue 应用，连同上面那次 unpkg 请求，即使用户从不打开设置。
    - **通知的类型是猜的。** `showNotification` 没传类型时，用正则匹配 `失败|错误|error`（[ui.ts:22](../../src/core/ui.ts#L22)），其余都当作成功。所以同步页的"请输入 GitHub 令牌"、批量标记的"没有找到新的…链接"都显示成绿色的成功。
    - unplugin-auto-import 没有用处：它生成的 auto-imports.d.ts 是空的。
  - 做法：
    1. 样式改成静态 import，产物不再用 SystemJS。
    2. 所有 CSS 只进 shadow root。
       - 用 vite-plugin-monkey 的 `build.cssSideEffects`，把打包进来的 CSS（Element Plus 的组件样式、SFC 的 `<style>`、自己的 CSS）收集到一个缓冲区里。创建 shadow root 时一次性写进去，并把 `:root` 换成 `:host`。组件用到哪些样式，仍由 resolver 自动决定，不用手列清单。
       - 这个函数会被 `toString()` 之后内联进产物，所以不能引用模块作用域，只能写到 `globalThis` 上一个带命名空间的键里（比如 `Symbol.for('color-visited/css')`）。
       - 代码里直接用的组件 resolver 看不到：通知用的 `ElMessage`，以及渲染"撤销"按钮的 `ElButton`。照旧显式 import 它们的 `style/css`，这些样式同样会进缓冲区。
       - 删掉 unpkg 的 link，以及 index.css 里手动补的变量。
       - 开发模式（`pnpm dev`）下，CSS 由 Vite 插进 `document.head`，`cssSideEffects` 不生效。要在 `import.meta.env.DEV` 下把这些 `<style>` 复制进 shadow root。
    3. 取色器用 `append-to` 指向 shadow root 里的一个元素（2.14.7 支持这个属性）。不要用 `:teleported="false"`：那样面板会留在 tab 的滚动容器里，可能被裁掉。
    4. 用到时才创建：
       - `ui/root.ts` 在第一次打开设置或弹通知时，才创建宿主元素和 shadow root。
       - `ui/notify.ts` 提供 `notify(message, type, action?)`，`type` 必填。
       - 这两个文件不 import 任何 `.vue`。Vue 应用要到打开设置时才创建。
    5. 删掉 AutoImport 插件和 auto-imports.d.ts。
    6. Tailwind 按 D7 的决定处理（B19）。
  - 完成标准：
    - 产物头部没有 `@require` 和 `GM_addStyle`，产物里没有 `unpkg.com`；
    - 没打开过设置、也没弹过通知的页面上，没有 `#color-visited-root`；宿主页面的 `<head>` 里没有 Element Plus 的样式；
    - 对话框、取色器面板、通知（含"撤销"按钮）里，Element Plus 组件的外观不变（截图对比）。

- [ ] **A9 · 站点规则：注入范围、激活范围、归一化分开声明**（依赖 E9 的归一化黄金表）
  - 现状：
    - 每个站点只有 `pages` 和 `patterns` 两个字段。`pages` 既是激活范围，又直接用来生成 `@include`。注入范围因此和激活范围一样窄，在 SPA 站点上，如果是从别的页面进来的，脚本就不在（B20）。
    - 归一化写在 utils.ts 的 `getBaseUrl` 里，是一串按链接 hostname 分派的 if，和规则表分开放。新增站点有时要改两个文件，而且容易漏掉（B21）。
    - 规则的 key 既是显示名，又是持久化的键（比如 `'The Economist'`、`'美卡论坛'`、`'Hacker News'`）。一旦改名，用户的开关就会被重置。
    - 有冗余的正则，每条都会多生成一条 `@include`：
      - bloomberg、economist、一亩三分地里的 `/?$`，已被 `/.*` 覆盖；
      - HN 的 newest、front、show，已被 `/.*` 覆盖；
      - pixiv 的 `novel/ranking`，已被 `novel.*` 覆盖；
      - ehentai 和 exhentai 的规则成对重复。
    - 没有任何站点用到 `description` 字段。
  - 做法：
    ```ts
    // shared/sites.ts：vite.config.ts 会在 Node 里 import 它，顶层不能引用浏览器全局对象
    interface Site {
      id: string        // 沿用现有的 key：它是 userSettings.preset 里的键，不能改
      name: string      // 设置界面里显示的名字
      pages: RegExp[]   // 激活范围：在哪些页面上染色
      links: RegExp[]   // 染哪些链接，对归一化之后的 URL 判断（即原来的 patterns）
      match?: string[]  // 注入范围（@match）；不写就按 pages 生成 @include
    }
    // 归一化按链接自己的 host 查表，和链接出现在哪个站点的页面上无关：
    // HN 上指向 v2ex 的链接，和 v2ex 页面上的同一个链接，必须得到同一个键
    const NORMALIZERS: Record<string, (href: string) => string> = { … }
    export function normalizeUrl(link: { href: string; hostname: string }): string
    ```
    - 归一化单独成表，不挂在站点上：它是 URL 自己的性质，同一个 host 的链接不管出现在哪里，都要按同样的方式归一化。而像 HN 这样的站点，要染的是任意 host 的链接。表和站点放在同一个文件里，新增站点只改这一个文件。B21 在这里修。
    - `normalizeUrl` 照旧直接接收 `<a>` 元素（读它的 `href`、`hostname`），不为每个链接 `new URL`；`hostname` 是空字符串时原样返回。
    - SPA 站点写 `match`，覆盖整个 host（比如 `https://linux.do/*`）；是否激活，仍在运行时按 `pages` 判断。B20 在这里修。
      - 哪些站点是 SPA，要逐个确认。已知 linux.do 和美卡论坛（都是 Discourse）是。
      - 注入范围不是越大越好：每次整页加载都要把全部访问记录交给页面（见「数据规模」），所以非 SPA 站点不要加 `match`。
    - vite.config.ts 里，没有 `match` 的站点按 `pages` 生成 `@include`，有 `match` 的生成 `@match`。
    - 站点是否启用由 `preset[id] !== false` 判断（见 A10），这个判断只写一处。sites.ts 不能 import settings.ts（Node 会执行它），所以 `findActiveSite` 直接接收 preset 表。
    - 去掉冗余的正则和 `description` 字段。
  - 完成标准：
    - E9 的归一化黄金表，除了 B21 那一行，逐字不变；站点匹配表照常通过；
    - 设置页显示的是 `name`；`@include` 和 `@match` 加起来比现在的 88 条少。

- [ ] **A10 · 存储与设置：设置只有一个来源、一条更新路径**
  - 现状：
    - `userSettings` 由 state.ts 直接调用 GM API 来读写和订阅，其他键则在 storage.ts 里。
    - 内存里有一份 `state`（和 handler 引用一起混在 `ScriptState` 里）。保存设置有两条路，做的是同一件事：
      - 本标签页保存：`settings:save` 事件 → script.ts 合并 → `saveUserSettings` → `setupPage`；
      - 其他标签页保存：`followUserSettings` → 替换 `state` → `setupPage`。
    - 读取时只补了新站点的 key（还要写回存储），并校验了过期时间。字段缺失或类型不对时没有兜底，比如 `preset` 是 `null` 时，启动会直接抛错（B15）。
    - `DEFAULT_SETTINGS` 里，一部分字段是 getter，每次返回新对象；另一部分是共享对象，会被直接当作 `GM_getValue` 的默认值返回出去，有被意外修改的风险。
    - "所有站点默认启用"的逻辑写了两遍：config.ts 和 PresetSettings.vue。
  - 做法：
    - storage.ts 成为唯一调用 GM 存储 API 的模块。
      - 所有键名都定义在这里：`userSettings`、`lastSyncTime`、`lastCleanupTime`，以及旧版的 `visitedLinks`。注释里写明：不是访问记录的键，不能含冒号。
      - 设置这一块，只提供原始的读写，以及订阅其他标签页的写入（`remote` 为 false 的回调跳过）。
    - 新建 settings.ts，不依赖 Vue：
      ```ts
      getSettings(): Settings                  // 当前值，已经规范化
      saveSettings(patch: SettingsPatch): void // patch 只含改过的字段，batch 整个替换；合并到存储里的当前值上，写回，再通知
      onSettingsChange(listener): () => void   // 本标签页保存后、其他标签页保存后，各回调一次，传出的值都经过规范化
      ```
      - 规范化以 `createDefaultSettings()` 为底，只接受默认值里有、而且类型相同的字段。这样 `sync.lastSyncTime` 这类残留字段自然就去掉了，缺 `code` 的旧快捷键也会换成默认值。另外：`preset` 只保留布尔值；`expirationTime` 不到 1 天时，换成默认的一年。
      - 站点是否启用 = `preset[id] !== false`：
        - 新站点默认启用，启动时不再需要补 key、写回存储；
        - 已经删掉的站点留在存储里的 key，不影响任何东西；
        - "已启用 x/y"按站点表来算，不按存储里的 key 算。
      - 代码里的字段名和存储保持一致（`general`、`preset`、`batch`、`sync`），不再用 `batchKeySettings`、`presetStates` 这些别名。
      - `isMac` 搬进 shortcut.ts，去掉对 `navigator` 的判空。那个判空是给 Node 准备的，而 utils.ts 早就不在 Node 里执行了。
    - 删掉 state.ts 和 config.ts。
      - 还没重写的代码改为读 `getSettings()`。
      - script.ts 里处理 `settings:save` 的代码改成调 `saveSettings`；`followUserSettings` 换成 `onSettingsChange(setupPage)`。
      - `ScriptState` 里只剩 handler 引用，留到 A12 删掉。
  - 完成标准：
    - `grep -rnE "GM_(get|set|delete|list)Values?|GM_(add|remove)ValueChangeListener" src` 只匹配到 storage.ts；
    - 测试覆盖：
      - 规范化：空存储；`preset` 为 null；缺字段；类型不对；过期时间为 null、0、负数、365（把天数当毫秒填）、半天、缺字段时，都换成一年；1 天、9.6 天、3650 天原样保留。
      - `saveSettings` 只合并改过的字段，快捷键整个替换。
      - 本标签页保存、其他标签页写入，各通知一次。

- [ ] **A11 · 设置对话框：每次打开都新建，一份草稿，一次保存**（依赖 A8、A10）
  - 现状：
    - **打开和保存都要绕一大圈。**
      - 打开：菜单 → `showSettingsDialog` 把四类设置和 `isMac` 塞进 `dialog:show-settings` 事件 → App.vue 存成 props → SettingsDialog → 4 个 tab 组件。
      - 保存：tab 组件 emit → SettingsDialog 转成 4 种事件 → App.vue 的 4 个 handler → `settings:save` 事件 → script.ts。
    - **4 个 tab 组件是同一套模板代码。** 每个都维护自己的 `formData` 和 `savedSettings`，用 `JSON.stringify` 比较来判断 `hasChanges`，有一个 immediate + deep 的 watch，还 `defineExpose` 了一组方法（其中的 `getFormData` 从来没被调用过）。SettingsDialog 再按 `activeTab` 走 4 个分支去调用子组件（[SettingsDialog.vue:123-166](../../src/components/SettingsDialog.vue#L123-L166)）。
    - **"保存设置"只保存当前 tab。** 在一个 tab 里改了，切到另一个 tab 再点保存，前一个 tab 的修改没有保存，关掉对话框就没了，也没有任何提示。
    - 丢弃未保存的修改，靠的是 `destroy-on-close` 销毁对话框内容；`activeTab` 靠 `@closed` 重置。
    - ShortcutSettings 用 3 个 ref 和 2 个 flag 管理录制状态，还有几处不受调试开关控制的 `console.log`。
    - PresetSettings 里：`v-model` 和 `@change` 重复写入同一个值；`formatRegex` 处理了实际不会传入的 string 参数；统计逻辑内联在模板里。
    - "立即同步"发出 `sync:request` 事件，绕到 script.ts 去执行，因为组件手里的设置只是打开时的副本。
  - 做法：
    - `openSettings()` 每次打开都新建一个 Vue 应用，挂到 shadow root 里，关闭动画结束（`closed`）后 unmount；对话框已经开着时什么都不做。
      - 打开时从 `getSettings()` 拷贝出一份完整的 draft，再留一份快照。
      - 这样就不再需要 App.vue、`destroy-on-close`、重置 `activeTab`，也不用 watch props。
    - 各个 tab 组件用 v-model 编辑 draft 中属于自己的那部分，不再 `defineExpose`。
    - 整个对话框只有一个 `hasChanges`、一个"保存"按钮：把各类设置中和快照不同的字段交给 `saveSettings`，快捷键只要有任何不同就整个交出。保存后对话框不关，快照换成刚保存的值。"重置为默认"只重置当前 tab 的 draft，和现在一样。
    - "立即同步"直接调用同步模块。同步模块读的是 `getSettings()`，也就是已经保存的最新设置。同步这部分有没保存的修改时，按钮不能点。
    - 过期时间输入框保留现在的规则（[GeneralSettings.vue:95-105](../../src/components/GeneralSettings.vue#L95-L105)）：清空、0、负数、小数，都回到保存的天数；不用组件的 `min`。
    - 组件直接 import `isMac`，不再通过 prop 传。
    - 删掉 `SettingsDialogPayload`，以及 `dialog:show-settings`、`settings:save`、`sync:request` 三个事件。
  - 完成标准：组件里没有 `defineExpose`，也没有按 `activeTab` 走的分支；事件总线上只剩 `sync:completed`（A12 删）。
  - 验证：
    - 旧版 E2 里「设置对话框」「多标签页的设置」「过期时间」三组端到端场景仍然适用，按它们回归。
    - 再加一个场景：在两个 tab 里各改一项，点一次保存，两项都存下来。

- [ ] **A12 · 页面生命周期：激活一次，返回 dispose**（依赖 A9、A10、A11）
  - 现状：
    - **启动和页面逻辑分散在七个文件里：** script.ts、linkManager、eventManager、domObserver、pageDetector、menuManager、ui。linkManager 和 domObserver 互相 import；`activateLinkFeatures` 为了避开另一处循环依赖，改成把函数当参数传进来。
    - **资源的创建和释放不在一处。** keydown 和 click 监听在 eventManager 里添加，却在 linkManager 的 `removeScript` 里移除，handler 引用存在 `ScriptState` 里。observer 是全局单例，靠 `provideLinkContext`、`clearLinkContext` 开关染色。
    - **页面匹配的逻辑有重复：**
      - `isPageActive` 和 `getCurrentPagePreset` 写了两遍同样的循环；
      - `getEnabledPresets` 把 `getActivePresets` 的结果又过滤了一遍；
      - 缓存只按 URL 记，不随设置变化失效，现在只是恰好没出错。
    - **页面颜色有 4 条更新路径：** 初次扫描和 observer；点击后全量重扫（`updateAllLinksStatus`）；撤销时手动去色；收到 `sync:completed` 事件后全量重扫。
    - **标记用的是 `visited-link` 这个 class。** 这个名字没有命名空间，宿主页面可能有同名的 class。另外，React、Vue 更新 class 绑定时会整体改写 `className`，把它冲掉，而 observer 只看 href 的变化，不会把它补回来。
    - **调试日志有 18 处 `if (debug) console.log`。** 开启调试后，每个链接要打 7–9 行。
  - 做法：
    ```ts
    // page.ts
    let dispose: (() => void) | null = null;
    function refresh() {
      dispose?.();
      const settings = getSettings();
      const site = findActiveSite(location.href, settings.preset);
      dispose = site ? activate(site, settings) : null;
    }
    export function startPage() {
      refresh();
      onUrlChange(refresh);      // 常驻的轻量 observer，只比较 location.href，在非激活页上也一直运行
      onSettingsChange(refresh);
    }

    // colorizer.ts
    export function activate(site: Site, settings: Settings): () => void {
      const ac = new AbortController();
      const style = injectStyle(settings.general.color);
      markAll();
      const observer = observeLinks(site);              // 新出现的链接；href 变化时不看现有标记，重新判断（B17）
      const unsubscribe = onLinksChange(updateMarks);   // 本标签页的记录增删 → 给对应 URL 的所有链接加上或去掉标记
      document.addEventListener('click', onClick, { capture: true, signal: ac.signal });
      document.addEventListener('auxclick', onClick, { capture: true, signal: ac.signal });
      document.addEventListener('keydown', onBatchKey, { signal: ac.signal });
      return () => { ac.abort(); observer.disconnect(); unsubscribe(); style.remove(); unmarkAll(); };
    }
    ```
    - storage.ts 在访问记录写入或删除之后，通知本标签页（`onLinksChange`）。只通知本标签页自己的写入：记录是逐键存储的，没法订阅全部的键。
      - 点击、批量标记、撤销、同步合并都只写存储，页面颜色由 colorizer 跟着更新。
      - 删掉 `sync:completed` 事件、eventBus.ts 和 mitt 依赖。
    - 标记改用带命名空间的 data 属性（比如 `data-color-visited`），样式见 C15。
    - `refresh` 里的错误要接住，不能让 URL 检测和设置订阅跟着失效。
    - 日志统一走 `log.debug()`。每批变化打一行汇总，不再逐个链接打；开启调试时，照旧打印一次存储的大小。
    - main.ts 只负责组合（见「目标架构」），"设置"菜单最先注册。
  - 完成标准：
    - linkManager、eventManager、domObserver、pageDetector、script.ts、menuManager、eventBus.ts 都删掉；core/ui.ts、core/utils.ts 拆散到各自的模块；types.ts 拆散，同步相关的类型在 A13 里拆；
    - 没有 `ScriptState`；
    - 模块之间没有循环依赖。
  - 验证（端到端）：
    - 激活页初次染色；
    - 左键点击、中键点击之后，同一个 URL 的所有链接都染上；
    - 批量标记，以及撤销；
    - SPA 跳转：激活页 → 非激活页 → 激活页；
    - 其他标签页改了设置后，按新设置重新染色；
    - 同步合并来的记录染上色；
    - href 改变后，标记跟着变；
    - 在输入框里按批量快捷键，不触发标记。

- [ ] **A13 · 拆分同步模块**（依赖 E9：先用测试锁住「同步的行为不变量」）
  - 现状：sync.ts 共 1139 行，大约一半是校验和诊断代码。
    - **同样的检查写了两套。** `isXxx` 一套、`describeXxx` 一套，比如 `isV3PathRecordValue` 和 `describeV3PathRecord`，`isCompressedSyncEnvelope` 和 `describeCompressedEnvelopeShape`。"校验通过"还是用哨兵字符串 `'[prefixLength, suffix, timestamp]'` 来表示的。
    - **"取出 visitedLinks"有 7 个职责重叠的函数。** 自愈规则（剔除同步包字段和非数字的时间戳）和 storage.ts 过滤键值的规则其实是同一件事，写了两遍。
    - **外层包的 7 个字段全都校验**，其中 4 个（`itemCount`、`updatedAt`、`originalBytes`、`compressedBytes`）解码时根本用不到。
    - **有死代码和多余的检测。**
      - zstd 分支是死代码：从引入压缩开始，写入一直用的是 gzip。
      - gzip 支持检测也没有必要：它带一个缓存，还在设置页里有一张状态卡片和一条提示（[SyncSettings.vue:78-94](../../src/components/SyncSettings.vue#L78-L94)）。CompressionStream 从 2023 年起主流浏览器都支持，不支持时让同步直接报错就行。
    - **类型过宽。** 写入相关的 API 接受 `SyncData | VisitedLinksData`，但所有调用方传的都是平铺的 map。
    - **请求方式不统一。** 有 4 处用 `fetch`，各自拼请求头，认证用 `token`；读取截断文件的那 1 处用 `GM_xmlhttpRequest`，认证用 `Bearer`。在页面环境里，`fetch` 就是页面的 `window.fetch`：
      - 受宿主页面 CSP 的 `connect-src` 限制；
      - 页面脚本 hook 它就能拿到令牌。令牌有 gist 权限，能读写全部 Gist，包括私密的。
    - **同一个错误要打好几遍日志：** `getGist`/`updateGist`、`syncWithCloud`、script.ts 的 `runSync` 各打一遍。
  - 做法：拆成 3 个文件，预计合计 300–400 行。
    - `sync/github.ts`：唯一发网络请求的地方。
      - 全部改用 `GM_xmlhttpRequest`，`connect` 里加上 `api.github.com`。
      - HTTP 错误统一转成带原因说明的 Error，401、403、404 的提示照旧。
    - `sync/codec.ts`：
      - `encode(links)` 写 v3。外层包的 7 个字段照旧全写，因为其他设备上的旧版本读取时会校验全部字段。
      - `decode(text, truncated)` 返回 `{ links, needsInit, reason? }`，或者抛错。
        - 读取时只校验解码要用的字段。
        - 记录逐条过滤：键要含冒号，值要是有限数字；丢掉了多少条，打一行警告。
        - v3 的结构有错时，抛出一句带位置的错误。
    - `sync/index.ts`：
      - 放 `syncWithCloud`、`testConnection`、`normalizeGistId`、`AUTO_SYNC_INTERVAL`；
      - 带通知的 `runSync({ manual })` 也放在这里：它读 `getSettings()`，自动同步和"立即同步"共用。
      - 日志只在这一层打一次。
    - 删掉 zstd 分支、gzip 支持检测、设置页里相关的显示、`SyncData` 的写入路径，以及 types.ts 里的同步类型。
    - 如果在 A12 之前做，`syncWithCloud` 结束后照旧发出 `sync:completed` 事件。
  - 完成标准：
    - E9 的同步测试全部照常通过，请求次数不变；
    - 在真实的 Gist 上把"测试连接"和"立即同步"各试一次，覆盖令牌错误、Gist ID 错误和正常三种情况。

- [ ] **A14 · 和宿主页面的 JS 环境隔开**（依赖 A8、A12、A13）
  - 现状：
    - 两个管理器默认都把脚本注入页面环境（见「运行平台」），脚本的 `window`、`fetch` 和各种原型都和宿主页面共享。
    - 脚本并不需要访问页面里的任何 JS 对象，却因此暴露了两件事：页面脚本能触发脚本的监听器（B15）；也能 hook 脚本发请求用的函数，拿到 GitHub 令牌。
    - 另外，shadow root 是 open 的：对话框开着时，页面脚本能读到令牌输入框里的值。
  - 做法：
    - 脚本头部加上 `@sandbox DOM`（TM：只要 DOM 访问，在隔离环境里运行）和 `@inject-into content`（VM：注入内容脚本的环境）。vite-plugin-monkey 两个字段都支持。
    - shadow root 改成 closed，引用只留在 ui/root.ts 里。
      - 改成 closed 之后，挂在 document 上的 keydown 监听拿到的 `composedPath()` 从宿主元素开始，看不到 shadow root 里面的输入框。
      - 所以 `isTyping` 改成：事件目标是我们自己的宿主元素时，就当作用户在输入。
  - 验证：
    - 在 TM + Chrome、VM + Firefox 上各跑一遍 A12 的端到端清单；
    - 再测设置对话框（取色器、快捷键录制、在对话框的输入框里按批量快捷键不触发）、通知、同步；
    - 这一条只能在真实的管理器里验证。

## 3. 代码细节

- [ ] **C15 · 染色样式：用 `@layer` 代替堆特异性**（和 A12 一起做：A12 会把样式代码搬进 colorizer）
  - 现状：
    - `generateStyleContent`（[ui.ts:80-121](../../src/core/ui.ts#L80-L121)）用一长串高特异性的选择器（`html body div a.visited-link`、`.topic-list a.visited-link`、`#main a.visited-link`……），想压过网站自己写的 `!important`。但网站规则的特异性更高时，照样会输。
    - Chrome 146 实测：宿主页面有 `#app .list a{color:red!important}` 时，用现在的写法，链接还是红色。
    - 用户填的颜色值直接拼进 CSS，再用 `innerHTML` 写入（[ui.ts:68](../../src/core/ui.ts#L68)、[75](../../src/core/ui.ts#L75)）。
  - 做法：
    - 规则放进 `@layer color-visited { … }`。CSS 规定：写在 layer 里的 `!important` 声明，优先于所有不在 layer 里的 `!important`，和特异性无关。
      - 同一个实测里，layer 里只写一条 `a.visited-link{color:…!important}` 就赢了。
      - 规则只保留一组：链接及其后代（含 `::before`、`::after`）的颜色，以及后代里图片和背景图的半透明。
      - 如果网站自己在 layer 里写了 `!important`，先声明的 layer 优先，我们会输。但现在的写法在这种情况下也会输，不会更差。
    - 颜色先用 `CSS.supports('color', c)` 校验，不合法就用默认值；写入时用 `textContent`。
  - 验证：在几个支持的站点上截图对比；再构造一个带上面那种高特异性 `!important` 规则的页面，确认链接能染上色。

## 4. 工程化

- [ ] **E9 · 引入 Vitest，先锁住和数据有关的行为**
  - 配置：
    - 单独写一个 `vitest.config.ts`，只配 `@` 别名，不加载 monkey 插件。
    - 用 `vi.mock('vite-plugin-monkey/dist/client')` 换成内存版的 GM：用 Map 实现，要带 `GM_addValueChangeListener`，再提供一个模拟其他标签页写入的 helper。`fetch` 和 `GM_xmlhttpRequest` 换成桩。
    - 测试放在 `test/` 下，加一个 `pnpm test` 脚本。
    - 依赖 `test/fixtures/local/` 里样本的用例，在文件不存在时跳过（`it.skipIf`）：CI 和新 clone 里都没有这些文件。
  - 按优先级：
    1. **同步编解码。**
       - 往返（不变量 10、B16）：两份样本，以及带末尾 `#`、带末尾 `?`、没有路径、不是 https、解析不了的键，`decode(encode(x))` 都逐字相等；
       - v2 格式和旧明文格式能读；
       - 「同步的行为不变量」1–6 的每个分支。
    2. **同步流程。**
       - 不变量 7、8、9、11 的每一条；
       - 不上传的几种情况：只有云端有新数据；只是有记录到期；过期时间不同的两台设备不来回上传；
       - 同步期间的写入不丢。
    3. **归一化黄金表。** 每个站点挑几条有代表性的原始 href，记下现在 `getBaseUrl` 的输出。A9 之后，这张表只能加行，不能改已有的行（B21 那一行除外）。
    4. **站点匹配表。** 页面 URL → 命中哪个站点；链接 URL → 要不要染色。
    5. **storage。**
       - `mergeLinks` 只把时间戳改大，并过滤掉非法的键和值；
       - `deleteLinksIfUnchanged`；
       - 清理一天最多一次；
       - 迁移可以重复执行；
       - 没有批量接口时退回逐条写。
    6. **快捷键匹配表。**
    - A10 之后补上设置的测试（见 A10）。
  - 依赖真实 DOM 的场景（染色、observer、`isTyping`、对话框、多标签页），沿用 headless Chrome 的做法，见旧版 E2 的「提示」。旧版 E2 里列出的端到端场景，仍是做 A10–A12 时的回归清单。以后如果要把这些也自动化，可以考虑 Vitest 的 browser mode，不在本计划内。

- [ ] **E10 · 统一代码格式**
  - 现状：main.ts 和 domObserver.ts 用 4 空格缩进，其他文件用 2 空格；有的文件写分号，有的不写。`@stylistic` 只注册了插件，没有配任何规则。
  - 做法：
    - 用 `stylistic.configs.customize({ indent: 2, quotes: 'single', semi: … })` 覆盖 .ts 和 .vue 文件，分号统一成一种（.ts 文件里多数写分号）。
    - 用 `pnpm lint` 一次改完，单独作为一次提交，只含格式变化。之后的新代码都按它写。
  - 注意：`pnpm lint` 自带 `--fix`，第一次运行会改动大量文件。

- [ ] **E11 · CI 跑测试和 lint**
  - 在 release.yml 的 `pnpm build` 之前，先跑 `pnpm test`，再跑不带 `--fix` 的 eslint。任何一步失败都不发版。
  - 可以加一个不带 `--fix` 的 `lint:check` 脚本，也可以在 CI 里直接调用 eslint。

- [ ] **E12 · ESLint 规则**（A12 之后）
  - 现状：Vue 那段配置只注册了插件，没有任何规则；TS 部分只启用了 `@eslint/js` 的 recommended，还关掉了 `no-unused-vars`。
  - 做法：加上 typescript-eslint 的 recommended 和 `eslint-plugin-vue` 的 `flat/recommended`，逐条修复。

- [ ] **E13 · 配置清理**
  - package.json：
    - license 写的是 `ISC`，和 userscript 头部的 `GPL-3.0-only` 不一致，改成后者；
    - 去掉没有意义的 `main`；`description` 要么补上，要么去掉；
    - 版本号见 D8。
  - `typecheck` 脚本里，`tsc -p tsconfig.app.json` 和 `vue-tsc --build` 做的是同一件事，只留后者。
  - tsconfig：
    - `useDefineForClassFields`、`jsx: preserve`、`exactOptionalPropertyTypes: false` 这三项在本项目里不起作用；
    - `noImplicitAny` 已经包含在 `strict` 里了；
    - include 里列了 `*.tsx`，但项目里没有这种文件。

- [ ] **E14 · 更新文档**（A12 之后）
  - CLAUDE.md（被 .gitignore 忽略，只存在于本地）：按新架构重写模块说明。
    - 现在的版本已经过时：说 `PRESET_RULES` 在 core/config.ts，说 build 用的是 tsc，还漏掉了 domObserver.ts 和 utils.ts。
    - 建议：把架构说明写进入库的 AGENTS.md，CLAUDE.md 只留一行 `@AGENTS.md`，免得两份各自过时。
  - README、README_zh：
    - 「开发计划」里的「本地写入性能优化」已经由逐条存储解决，删掉；
    - 「核心工作流程」按新架构改写。
  - AGENTS.md：D8 定下来之后，更新版本号规则。

## 考虑过、不做的

- **给访问记录的键加前缀，或者分片存储。** 要迁移十几万条记录，换来的只是去掉"其他键不能含冒号"这一条约定。
- **把设置拆成多个 GM 键。** 能彻底消除整块写回带来的竞争，但需要迁移。改成"只写改过的字段、合并到存储里的当前值上"之后，剩下的竞争窗口只有两个标签页几乎同时保存这一种情况。
- **用 Navigation API 检测 SPA 跳转。** 还得给不支持它的浏览器留一个 MutationObserver 的回退，两套机制不如一套。
- **多个标签页同时自动同步时加锁。** 合并取最大值是幂等的，并发只是多发一轮请求。
- **把其他标签页记下的访问实时染到当前页上。** 记录是逐键存储的，没法订阅全部的键；刷新页面就能看到。
- **给 shadow DOM 里的链接染色（比如新版 reddit）。** 这是新功能，不在重构的范围内。
- **去掉 Element Plus。** D3 已定。

## 附：旧版条目的去向

旧版删掉之后，这一节也一起删掉。

| 旧版 | 去向 |
|---|---|
| A1 统一存储层 | A10 |
| A2 核心生命周期 | A12 |
| A3 settings store | A10、A11。不再用 Vue 的响应式 store：对话框每次打开都拷贝一份草稿，core 只需要 `getSettings` 和 `onSettingsChange` |
| A4 对话框共用草稿 | A11，改成每次打开都新建一个应用，不再靠 `destroy-on-close` |
| A5 拆分 sync.ts | A13，另外补上了换用 `GM_xmlhttpRequest` 的安全理由，外层包只校验要用的字段，去掉 gzip 检测 |
| A6 UI 打包与样式隔离 | A8，用 `cssSideEffects` 收集样式，不再手列组件样式；取色器用 `append-to`，不用 `teleported=false`；第 4 步并入 B19、D7 |
| A7 站点规则模型 | A9，注入范围单独声明；归一化按 host 查表，不挂在站点上 |
| C4 debug 日志 | A12 |
| C5 通知类型 | A8 |
| C6 样式注入 | C15，改用 `@layer`，不用 `:is()` |
| C7 死代码 | `preset-states-updated` 并入 B15，其余随所在文件的重写一起删掉 |
| C8 类型整理 | 在 A10、A12、A13 里拆散 types.ts |
| C9 默认值工厂 | A10 |
| C10 统一命名 | 随重写解决：新模块按职责命名，代码里的设置字段名和存储保持一致 |
| C11 代码风格 | E10 |
| C12 PresetSettings | A11 |
| C14 isMac 判空 | A10 |
| E1 ESLint | E10（格式化）、E12（规则） |
| E2 Vitest | E9；端到端场景和测试做法仍引用旧版 |
| E3 package.json | E13、D8 |
| E4 重复的类型检查 | E13 |
| E6 CLAUDE.md | E14 |
| E7 tsconfig | E13 |
| E8 Tailwind 只扫描 src | D7 |
