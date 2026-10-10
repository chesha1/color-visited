# 本地测试数据

这里放的是真实的同步数据，**只留在本机，不入库**：仓库是公开的，而这些是真实的浏览记录。除了这份说明，目录里的文件都被 .gitignore 排除了，新 clone 和 CI 里都没有。

| 文件 | 格式 | 记录数 | 数据截至 | 来源 |
|---|---|---|---|---|
| `visited-links.v3.json` | v3 同步包 | 129,378 | 2026-10-10 | 从同步用的 Gist 下载 |
| `visited-links.v2.json` | v2 同步包 | 97,048 | 2026-04-11 | 原先在仓库根目录（7b3ba07 引入，2026-10-10 移到这里） |

- 两种格式的外层都是 `{ syncVersion, encoding, payload, itemCount, updatedAt, originalBytes, compressedBytes }`，`payload` 是 gzip 之后再 base64 的 JSON。v2 里是平铺的「URL → 首次访问时间戳」；v3 先按 host 分组，组内路径排序后再做前缀差分。
- 两份都能被当前的 sync.ts 完整解码，条数和 `itemCount` 一致（2026-10-10 验证）。
- v2 里有 1 条以空 `#` 结尾的记录，按 v3 编码再解码会丢掉这个 `#`，往返测试在修好 B9 之前会失败（见[重构计划](../../../docs/plans/refactor-plan.md)）。

## 用途

- 大数据量下的性能测试，以及同步编解码的往返测试；
- v2 是旧格式样本，用来确认新版本仍然能读旧数据；
- v3 文件超过 1 MB，可以用来测 GitHub API 截断内容后改走 `raw_url` 的那条路径。

用到这些文件的测试，要在文件不存在时跳过。

## 更新 v3 文件

用脚本设置里的 GitHub token 和 Gist ID 调用 `GET https://api.github.com/gists/{id}`。文件超过 1 MB 时，返回的 `content` 会被截断，要改用 `files["visited-links.json"].raw_url` 下载完整内容。

不要把 token 或 Gist ID 写进仓库：私密 Gist 只是不公开列出，知道地址的人都能打开。
