# color-visited 重构计划 v7

> 基于提交 `34414b3`（2026-10-29，v6 的 S15 已完成）的代码，回看细节写法：去掉守着不会发生的状态的分支、接住了也不改变行为的 try/catch、两处守同一件事的检查，把一处编码写得更直接，再精简一轮注释。
> 取代 v6：v6 剩下的 Q1 不做了（见 AGENTS.md「已经定了的取舍」里分片存储那条），v6 和更早的版本只作历史参考，不再更新。
> 文中不写行号，用文件名和函数名定位。

## 怎么用这份文档

- 新会话可以直接说：「读 `docs/plans/refactor-plan-v7.md`，做 S21」。
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
| S21 | 去掉守着不会发生的状态的分支、不改变行为的 try/catch | 未开始 |
| S22 | 编码改成整条 URL 排一次序，修复 host 是 `__proto__` 的记录传不上去 | 未开始 |
| S23 | 构建配置去掉和 bundle 测试重复的 SystemJS 检查 | 未开始 |
| S24 | 注释精简：删掉复述代码的、和 AGENTS.md 重复的、过时的 | 未开始 |

- 四步互不依赖，每步一个提交，顺序随意。都不碰样式和界面外观，不需要在浏览器里验证。

## 结论

- 回看了 src/ 的全部代码和 vite.config.ts。细节写法整体已经比较干净，防御大多放在数据进来的地方。
- 要改的：5 处多余的防御，1 处可以更直接的编码写法（顺带修掉一个违反「逐字往返」的边界 bug），1 处和测试重复的构建检查，外加两处零碎；注释再精简一轮。
- 动手前已在当前代码上核对过：现在 558 个测试全过；S22 的新写法在本地 v3 样本（12.9 万条）上和现在的写法逐组比较过，每组的记录逐条相同，只有 `__proto__` 那组现在的写法会丢。

## 判断标准

S21 把这两条原样写进 AGENTS.md「写法」：

- 检查只放在数据进来的地方：存储里读出的值、云端数据、页面的 DOM 和事件、用户的输入。模块之间相信类型和已经守住的约束，不为不会发生的状态写分支，同一件事只守一处。
- 错误只在接住之后行为会变的地方接：后面的步骤照常执行、变成给用户的提示、走另一条分支；promise 都要有 catch。接住的地方报告一次。

## 步骤

### S21 · 去掉守着不会发生的状态的分支、不改变行为的 try/catch

逐项改，测试都不用改。

1. **core/page.ts `startPage` 的 `refresh`：去掉 try/catch 和它的注释。**
   - 注释说"要接住：不能让 URL 检测和设置订阅跟着失效"，这个前提不成立：MutationObserver、GM 值变化的回调抛错，只报告这一次，observer 和监听都还在。启动时那一次由 main.ts 的 `run` 接住，`watchUrl`、`onSettingsChange` 在 `refresh()` 之前就建好了。activate 里没有会按预期抛错的操作。
   - `dispose = null` 留着：不启用的那个分支要靠它清掉已经释放过的 dispose。
   - 行为上唯一的区别：activate 真有 bug 时，本标签页保存设置引发的异常会传到对话框的保存按钮，由 Vue 报告。
2. **core/sync/github.ts `readGist`：去掉"Gist 里没有文件"。** 直接写 `const [fileName, file] = Object.entries(gist.files)[0]`。GitHub 的 Gist 至少有一个文件；万一没有，解构 undefined 照样抛错，同步失败、不覆盖云端。
3. **core/sync/codec.ts `decode`：去掉"内容为空"那个分支。** `JSON.parse` 遇到空串、纯空白本来就抛错，落进"不是 JSON"，结果一样：当作空、需要初始化；文件被截断时照样抛错。只是提示里的原因换了个说法。
4. **core/shortcut.ts：**
   - `formatShortcut` 的 `mac = isMac` 参数没有调用方传过，删掉，直接用 `isMac`；`isMac` 只在本文件用，不再导出。
   - 去掉 `formatShortcut` 里的 `if (shortcut.code)` 和 `'未设置'`：快捷键只来自默认值和录制，`isRecordable` 已经挡掉了空的 code。只有手改存储才会是空的，那时显示成 "Ctrl + Shift + "，不值得一个分支。
5. **core/colorizer.ts `batchMark`：** 去掉 `Object.hasOwn` 去重（循环里不写存储，同一个 URL 再判断一次结果一样；批量标记是手按的，不差这几次读）；条数直接用 `mergeLinks` 的返回值，不再另数一遍：
   ```ts
   for (const link of document.querySelectorAll('a[href]')) {
     if (!(link instanceof HTMLAnchorElement)) continue
     const url = normalizeUrl(link)
     // 还没过期的记录不改时间戳：链接只是显示在页面上，不算访问
     if (isTarget(url) && !isVisited(url, expirationTime)) newLinks[url] = now
   }
   const count = mergeLinks(newLinks)
   if (count === 0) notify('没有找到新的符合规则的链接可添加', 'info')
   else notify(`已批量添加 ${count} 个链接到已访问记录`, 'success', { text: '撤销', onClick: () => undoBatchMark(newLinks) })
   ```
6. **零碎：**
   - ui/root.ts `collectedCss` 的开发模式分支：`style.textContent ?? ''` 去掉 `?? ''`，元素的 textContent 类型就是 string。
   - core/storage.ts `migrateLegacyLinks` 的日志补上 `[color-visited]` 前缀，和别处一致。
7. **AGENTS.md「写法」：** 「纯逻辑和搬运分开」那条去掉末尾的"错误只在边界接住、报告一次"，后面接上「判断标准」的两条。

- 验证：`pnpm test`、`pnpm exec eslint`、`pnpm typecheck`。
- 提交：`refactor: 去掉守着不会发生的状态的分支和不改变行为的 try/catch`。提交信息里也列出「看过、保留」那几项和理由。

### S22 · 编码改成整条 URL 排一次序，修复 host 是 `__proto__` 的记录传不上去

- 现状：core/sync/codec.ts 的 `group` 先按分组键把 `[文本, 时间]` 收进 Map，再把分组按键排序、组内按文本排序（比较函数 `byFirst` 用了两次），最后用 `payload[key] = …` 写进普通对象。
- 问题：分组键是 host。`https://__proto__/x` 是合法 URL，在 Hacker News 上点到就会记下（那里的规则是任意外链）。`payload['__proto__'] = …` 调用的是原型的 setter，这一组不会写进 JSON：这条记录永远传不上去，之后每次同步都判为和云端不一致、整份上传，违反同步不变量 10。
- 做法：整条 URL 排一次序，一遍循环里分组、做前缀差分，删掉 `byFirst`；分组先放在 Map 里，最后用 `Object.fromEntries` 建成自有属性。同一组的 URL 都以同一个「origin + /」开头，组内的文本也就排好了序；@raw 组的文本就是 URL 本身。
  ```ts
  // v3 的 payload：{ 分组键: [[和上一条相同的前缀长度, 剩下的文本, 时间戳], …] }。
  // 整条 URL 排一次序：同一组的 URL 都以同一个「origin + /」开头，组内的文本也就排好了序，相邻两条的前缀多半相同。
  // 分组键是 host，可能是 __proto__：先放在 Map 里，最后用 Object.fromEntries 建成自有属性
  function group(links: VisitedLinks): Record<string, [number, string, number][]> {
    const groups = new Map<string, [number, string, number][]>()
    const previous = new Map<string, string>()
    for (const url of Object.keys(links).sort()) {
      const [key, text] = splitUrl(url)
      const last = previous.get(key) ?? ''
      let prefix = 0
      while (prefix < text.length && text[prefix] === last[prefix]) prefix++
      previous.set(key, text)
      const records = groups.get(key) ?? []
      records.push([prefix, text.slice(prefix), links[url]])
      groups.set(key, records)
    }
    return Object.fromEntries(groups)
  }
  ```
- 输出：每组的记录和现在逐条相同（已在本地 v3 样本上比较过，见「结论」），只有分组之间的先后变了。v3 从引入起就是遍历对象来读的，不看分组的顺序。
- 测试：test/sync/codec.test.ts 的往返表加一行「host 是 __proto__」（`https://__proto__/x`），先在改之前跑一次，确认失败；改完全过。本地有 v2、v3 样本，往返在真实数据上跑。
- 提交：`fix(sync): 编码改成整条 URL 排一次序，修复 host 是 __proto__ 的记录一直传不上去`。

### S23 · 构建配置去掉和 bundle 测试重复的 SystemJS 检查

- 现状：vite.config.ts 的 `singleFile` 在 `generateBundle` 里清空 `dynamicImports`，这是真正起作用的部分；另外还在 `writeBundle` 里查产物有没有 `System.register`，有就让构建失败。
- 做法：删掉 `writeBundle` 和它的注释；`singleFile` 上面的注释补半句：退回 SystemJS 时，test/bundle.test.ts 的第一条会失败。
- 为什么：bundle.test.ts 第一条查的就是同一件事（头部没有 `@require`、产物里没有 `System.register`）；CI 先跑 `pnpm test` 再构建，退回 SystemJS 的版本发不出去。
- 不动 `tailwindInShadowRoot` 里找不到 `@supports` 就报错的那句：它查的是替换有没有发生，测试只查结果，Tailwind 换一种包法时测试可能照样通过。
- 验证：在临时副本里去掉 `generateBundle` 那段，确认 bundle.test.ts 失败；再在仓库里跑三项检查。
- 提交：`chore: 构建配置去掉和 bundle 测试重复的 SystemJS 检查`。

### S24 · 注释精简：删掉复述代码的、和 AGENTS.md 重复的、过时的

- 规则：
  - 复述代码的删掉：名字、类型、紧接着那一行已经说清楚的。
  - 和 AGENTS.md 重复的删掉。在这个位置动手前非知道不可的约束留一句，写上"见 AGENTS.md「…」"。
  - 过时的改成现在的样子：以前怎么写、修过什么，属于提交信息。
  - 解释"为什么"的不动：原因、实测数字、浏览器和管理器的怪癖，这是大多数。站点表里每条规则后面的说明、颜色预设的色名也不动。
- 清单（S21 删掉的 page.ts 那段 try/catch、S22 重写的 `group` 和 `byFirst`，注释跟着各自那一步走）：
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

## 看过、保留

防御放在数据进来的地方，或者接住之后行为确实会变：

| 写法 | 为什么留 |
|---|---|
| main.ts 的 `run` | 一步出错，后面几步照常执行：迁移出错照样染色，菜单最先注册 |
| main.ts、ui/notify.ts 里 `import()` 的 `.catch` | promise 要有 catch |
| settings.ts 的 `isRecord`、`pick`、`hasAllFields`；过期时间不到 1 天换成默认值 | 读存储的边界；后者防止清理时删光记录 |
| storage.ts `mergeLinks` 里的 `isLinkEntry` | 所有写入的唯一入口，页面上的 href 也走这里：`<a>.href` 解析失败时原样返回属性值，可能不带冒号 |
| storage.ts 没有批量接口时逐条写 | AGENTS.md 里已定的取舍 |
| colorizer.ts 的几处 `instanceof` | 页面派发的事件、SVG 里的 `<a>`、文本节点都真会进来 |
| colorizer.ts `injectLinkStyle` 的 `CSS.supports` | 用户填的颜色要拼进样式 |
| codec.ts 的格式校验 | 同步不变量 1–6 |
| sync/index.ts 里令牌、Gist ID 的检查和 `errorMessage` | 给用户的提示；catch 到的是 unknown |
| ui/root.ts 收集样式时的 `?? []` | 数组是第一段样式进来时才建的 |
| settings.ts `diffSettings` 的四段相似代码 | 合成循环要绕开 TS 对联合类型的键赋值，反而更绕 |
