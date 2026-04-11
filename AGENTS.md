# AGENTS 指南

## 语言

- 默认使用中文。
- 回复、说明、提交建议优先写中文，必要时保留少量英文技术词。

## 包管理器

- 强制使用 `pnpm`。
- 安装依赖、运行脚本、添加或移除依赖时，统一使用 `pnpm`，不要使用 `npm`、`yarn` 或其他包管理器。
- 常见示例：`pnpm install`、`pnpm build`、`pnpm add xxx`

## 版本号

- 发版或“把版本号加一”时，默认只修改 userscript 里的版本号，例如 `vite.config.ts` 中 `userscript.version`。
- `package.json` 的 `version` 默认不需要修改，除非用户明确要求。

## Git Commit Message

根据现有历史，仓库主流格式是：

```text
type: 中文摘要
type(scope): 中文摘要
```

- 常见 `type`：`feat`、`fix`、`refactor`、`chore`、`docs`、`perf`、`ui`
- `scope` 可选，常见有 `core`、`sync`、`ui`、`types`、`styles`、`settings`、`readme`
- 摘要通常是一行中文，直接说明改动，不写空话
- 只有明确对应发版时，才在末尾加版本号，如 ` (v2.19.0)`

推荐示例：

```text
feat: 新增 gzip 压缩同步存储
fix(sync): 修复同步期间点击链接丢失的问题
docs(readme): 更新同步存储说明
```

避免：

- `fix: 修点问题`
- `refactor: 调整代码`
- `feat: 加站点支持并重构设置页并升级依赖`
