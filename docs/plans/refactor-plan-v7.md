# color-visited 重构计划 v7

> 基于提交 `34414b3`（2026-10-29，v6 的 S15 已完成）的代码，回看细节写法：去掉守着不会发生的状态的分支、接住了也不改变行为的 try/catch、两处守同一件事的检查，把一处编码写得更直接，再精简一轮注释。
> 取代 v6：v6 剩下的 Q1 不做了（见 AGENTS.md「已经定了的取舍」里分片存储那条），v6 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v7.md`，做 S24」。
- 架构、约束和已经定了的取舍都在 [AGENTS.md](../../AGENTS.md)，只在那里维护；仓库约定（pnpm、测试、版本号、提交信息格式）也在那里。
- 编号接着 v6 往下排，删掉的编号不复用：**S** = 实施步骤，**D** = 要你拍板的决策。
- 每完成一步：
  - 从正文删掉这一步，更新「进度」；
  - 改了架构或约束的，在同一个提交里改 AGENTS.md；
  - 做了什么、为什么这样取舍，写进提交信息（列一行「重构计划文档：完成 Sn」），不在本文留记录。
- D 项由你决定，动手前先问。

## 进度

| 步骤 | 内容 | 状态 |
|---|---|---|
| S24 | 注释精简：删掉复述代码的、和 AGENTS.md 重复的、过时的 | 未开始 |

- 不碰样式和界面外观，不需要在浏览器里验证。

## 结论

- 回看了 src/ 的全部代码和 vite.config.ts。细节写法整体已经比较干净，防御大多放在数据进来的地方。
- 要改的：5 处多余的防御和两处零碎（S21，已完成，判断标准写进了 AGENTS.md「写法」），1 处可以更直接的编码写法（S22，已完成，顺带修掉一个违反「逐字往返」的边界 bug），1 处和测试重复的构建检查（S23，已完成）；注释再精简一轮。
- 动手前已在当前代码上核对过：558 个测试全过。

## 步骤

### S24 · 注释精简：删掉复述代码的、和 AGENTS.md 重复的、过时的

- 规则：
  - 复述代码的删掉：名字、类型、紧接着那一行已经说清楚的。
  - 和 AGENTS.md 重复的删掉。在这个位置动手前非知道不可的约束留一句，写上"见 AGENTS.md「…」"。
  - 过时的改成现在的样子：以前怎么写、修过什么，属于提交信息。
  - 解释"为什么"的不动：原因、实测数字、浏览器和管理器的怪癖，这是大多数。站点表里每条规则后面的说明、颜色预设的色名也不动。
- 清单：
  - 文件头：
    - 删掉：main.ts、core/page.ts、core/colorizer.ts、ui/dialog.ts、ui/draft.ts、ui/notify.ts、ui/message.ts。它们说的是模块做什么，AGENTS.md 的模块表和「关键机制」里都有。
    - 只留一句：
      - core/storage.ts：含冒号的键都当作访问记录，下面这些键都不能含冒号；
      - core/settings.ts：字段名都已经持久化了，不能改；
      - shared/sites.ts：vite.config.ts 在 Node 里 import 它，顶层不能引用浏览器全局对象，也不 import 别的 src 模块；
      - core/sync/codec.ts：纯函数，不知道网络，也不知道文件有没有被截断；
      - core/sync/index.ts：日志只在这一层打；
      - core/sync/github.ts：请求的域名都要写进 vite.config.ts 的 connect。原来的"页面改写一下 fetch，也就拿到了令牌"在隔离环境里已经不成立。
    - ui/root.ts：第一句删掉（模块表里有）；"宿主元素用自定义的标签名"那句挪到 `createRoot` 上，"样式为什么每次都补写"那两句挪到 `createMountPoint` 上。
  - 复述代码的：
    - ui/dialog.ts 的"对话框已经开着时什么都不做"，github.ts 的"常见错误状态码的原因"，settings.ts `changedFields` 的"draft 里和 base 不一样的字段"，`onSettingsChange`、`onLastSyncTimeChange` 末尾的"返回取消订阅（监听）的函数"；
    - storage.ts `loadLinks` 的注释：列出的用途已经漏了调试用的 `describeStorage`；
    - colorizer.ts `undoBatchMark` 的注释：和 `deleteLinksIfUnchanged` 的说的是一回事；
    - ui/PresetTab.vue 的"展开了详情的站点"和 `sections` 上的那句。
  - 同一件事写了两遍，留一处：
    - settings.ts：`diffSettings` 和 `saveSettings` 都在讲"其他标签页的修改会被冲掉"，留 `saveSettings` 的；
    - ui/SettingsDialog.vue：快照和 draft 的三行、`save` 上的前两句，和 AGENTS.md「对话框只有一份 draft」重复，只留"保存后对话框不关，显示存储里的最新值"；
    - ui/root.ts：`createRoot` 里拦按键的四行、`addPanelStyle` 上的前两句，和 AGENTS.md「界面的事件和层叠」「已经定了的界面技术」重复，各缩成一句加指向；
    - shared/sites.ts：`Site.match` 的四行和 AGENTS.md「注入范围和激活范围」重复，缩成一句加指向。
  - 过时的：storage.ts `lastSyncTime` 上的"放在 userSettings 里的话，保存设置时会连同页面里那份旧值整块写回去"，说的是以前整块保存设置的做法，现在保存只合并改过的字段。改成"0 表示从未同步"，不是用户设置、只有同步会写它，见 AGENTS.md「用户数据」。
- 验证：构建产物里没有源码的注释（模板里的也没有，已核对），所以产物应该逐字节不变，差一个字节就是误删了代码；再跑 `pnpm test`、`pnpm exec eslint`、`pnpm typecheck`。
- 提交：`refactor: 注释删掉复述代码的、和 AGENTS.md 重复的、过时的`。
