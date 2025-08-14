# color-visited

[🇺🇸 English Version](README.md)

> 把已访问过的链接染色，方便阅读时快速过滤已读信息

[![安装脚本](https://img.shields.io/badge/安装-GreasyFork-blue)](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2)
[![GitHub](https://img.shields.io/badge/源码-GitHub-green)](https://github.com/chesha1/color-visited)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/chesha1/color-visited)


## ✨ 特性

- 🎯 **智能染色** - 自动记录已访问链接，染成浅色便于识别
- 🌐 **广泛支持** - 支持 20+ 个网站（V2EX、知乎、B站、Reddit 等）
- ⚙️ **高度自定义** - 可调节染色颜色、过期时间、启用网站
- ⌨️ **快捷操作** - 支持快捷键批量标记当前页面链接
- ☁️ **跨设备同步** - 通过 GitHub Gist 实现数据同步
- 🎨 **完美适配** - 使用透明色默认值，适配各种主题

## 💡 解决的问题

很多论坛网站缺乏推荐算法，用户需要自行分辨内容是否已读。决策疲劳会消耗宝贵的注意力资源，通过视觉标记已读内容可以显著提升浏览效率。

## 🚀 使用说明

### 基本使用
1. 安装脚本后，在支持的网站上正常浏览
2. 脚本会自动记录以下点击方式：**左键点击**、**中键点击**、**Ctrl+点击**
3. 已访问的链接会自动染色为设定颜色（默认透明色）

> ⚠️ **注意**：右键菜单的"在新标签页中打开"不会被记录，建议使用中键点击或 Ctrl+点击

### 设置面板
通过油猴脚本菜单中的"设置"选项打开设置面板，可调整以下选项：

| 设置项 | 说明 |
|--------|------|
| 🎨 **链接颜色** | 自定义已访问链接的颜色，默认为透明色适配暗色主题 |
| ⏰ **过期时间** | 设置链接记录保留时间（默认365天） |
| 🐛 **调试模式** | 在控制台显示详细调试信息，方便排查问题 |
| 🌐 **预设网站** | 选择脚本生效的网站，支持 20+ 个热门网站 |
| ⌨️ **快捷键** | 自定义批量标记快捷键（默认 Shift+V / Cmd+Shift+V） |
| ☁️ **数据同步** | 通过 GitHub Gist 实现多设备间数据同步 |

## 🔧 技术原理

基于 **油猴脚本框架** + **Vue 3** + **TypeScript** 构建，采用现代化模块架构。

### 为什么不使用 CSS `:visited` 伪类？

很多人会问：为什么不直接使用 CSS 的 `:visited` 伪类来标记已访问链接？原因如下：

1. **安全限制严重** - 浏览器为防止隐私泄露，严格限制 `:visited` 样式属性（只能修改颜色，不能修改字体大小、背景等）
2. **样式覆盖困难** - 网站自定义的链接样式会覆盖 `:visited` 样式，无法保证染色效果
3. **跨域不生效** - `:visited` 只对浏览器真实访问过的 URL 生效，无法跨设备同步
4. **无法自定义** - 无法设置过期时间、排除特定链接、批量操作等高级功能
5. **检测不准确** - 通过 JavaScript 跳转、AJAX 请求等方式"访问"的内容不会触发 `:visited`

因此，本脚本采用 **主动记录 + 样式注入** 的方案，提供更强大的自定义能力和跨设备同步功能。

<details>
<summary>📋 <strong>核心工作流程</strong></summary>

1. **页面检测** → 通过预设规则判断是否激活脚本
2. **链接监听** → 事件委托监听链接点击（左键/中键/Ctrl+点击）
3. **状态记录** → URL和时间戳存储到GM本地存储
4. **样式染色** → 动态注入CSS + 添加类名实现视觉标记
5. **动态更新** → MutationObserver监听DOM变化处理新增链接

</details>

<details>
<summary>⚙️ <strong>预设规则系统</strong></summary>

- 每个网站定义 `pages`（运行页面）和 `patterns`（染色链接）正则规则
- 构建时从配置自动生成 `@include` 规则
- 运行时二次检查URL匹配（处理SPA路由）
- 支持用户动态启用/禁用网站

</details>

<details>
<summary>🛠️ <strong>核心技术特性</strong></summary>

- **Shadow DOM隔离** - Vue应用完全独立，不干扰页面样式
- **事件委托** - document级监听，完美处理动态内容
- **URL标准化** - 智能去除查询参数，提高匹配准确性
- **GM API集成** - 可靠的本地持久化存储
- **跨设备同步** - GitHub Gist云端同步 + 冲突自动合并

</details>

## 📞 反馈 & 支持

遇到问题或有功能建议？欢迎通过以下方式反馈：

- 🐛 **Bug 报告** → [GitHub Issues](https://github.com/chesha1/color-visited/issues)
- 💡 **功能建议** → [GitHub Issues](https://github.com/chesha1/color-visited/issues)
- 💬 **使用交流** → [脚本反馈区](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2/feedback)

**推荐使用 GitHub Issues**，响应更及时 ⚡

## 🗺️ 开发计划

### 🚧 开发中
- [ ] **精细化控制** - 支持页面内排除特定链接（如B站稍后再看）
- [ ] **性能优化** - 使用字典树优化存储结构
- [ ] 智能控制染色范围，比如 pixiv 中染色标题的同时，对所属的系列名也进行染色
- [ ] 添加自定义预设

### ❌ 不支持的范围

| 范围 | 原因 |
|------|------|
| Quora | 链接非独占，染色会影响其他回答 |
| Stack Overflow | 同一问题多个回答共享链接 |
| Pixiv用户页 | 无法区分自己的用户页和外部用户的用户页，自己的用户页通常不需要染色 |
| Medium | 链接没有固定的格式，无法准确区分需要染色的范围 |

---

<div align="center">

**如果这个脚本对你有帮助，请考虑给个 ⭐ Star！**

</div>
