# color-visited

[🇨🇳 中文版](README_zh.md)

> Color visited links to help you quickly filter read content while browsing

[![Install Script](https://img.shields.io/badge/Install-GreasyFork-blue)](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2)
[![GitHub](https://img.shields.io/badge/Source-GitHub-green)](https://github.com/chesha1/color-visited)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/chesha1/color-visited)


## ✨ Features

- 🎯 **Smart Coloring** - Automatically tracks visited links and colors them light for easy identification
- 🌐 **Wide Support** - Supports 20+ websites (V2EX, Zhihu, Bilibili, Reddit, etc.)
- ⚙️ **Highly Customizable** - Adjustable coloring, expiration time, and enabled websites
- ⌨️ **Quick Operations** - Keyboard shortcuts for batch marking links on current page
- ☁️ **Cross-device Sync** - Data synchronization via GitHub Gist
- 🎨 **Perfect Adaptation** - Uses transparent color by default, compatible with various themes

## 💡 Problem It Solves

Many forum websites lack recommendation algorithms, requiring users to manually distinguish between read and unread content. Decision fatigue consumes valuable attention resources. Visual marking of read content can significantly improve browsing efficiency.

## 🚀 Usage Guide

### Basic Usage
1. After installing the script, browse normally on supported websites
2. The script will automatically record the following click methods: **Left click**, **Middle click**, **Ctrl+click**
3. Visited links will be automatically colored with the set color (transparent by default)

> ⚠️ **Note**: "Open in new tab" from right-click menu won't be recorded. Use middle click or Ctrl+click instead.

### Settings Panel
Open the settings panel through the "Settings" option in the userscript menu to adjust the following options:

| Setting | Description |
|---------|-------------|
| 🎨 **Link Color** | Customize the color of visited links, default transparent for dark theme compatibility |
| ⏰ **Expiration Time** | Set retention time for link records (default 365 days) |
| 🐛 **Debug Mode** | Show detailed debug info in console for troubleshooting |
| 🌐 **Preset Websites** | Select websites where the script takes effect, supports 20+ popular websites |
| ⌨️ **Shortcuts** | Customize batch marking shortcuts (default Shift+V / Cmd+Shift+V) |
| ☁️ **Data Sync** | Achieve cross-device data synchronization via GitHub Gist |

## 🔧 Technical Principles

Built on **Userscript Framework** + **Vue 3** + **TypeScript** with modern modular architecture.

### Why not use CSS `:visited` pseudo-class?

Many ask why not directly use CSS `:visited` to mark visited links. Reasons:

1. **Severe security restrictions** — Browsers limit `:visited` styles for privacy (only color changes are allowed; font size, background, etc., are restricted)
2. **Hard to override site styles** — Site-specific link styles can override `:visited`, making coloring unreliable
3. **No cross‑device effect** — `:visited` only applies to URLs actually visited on the local browser, so it cannot sync across devices
4. **Lacks customization** — Cannot set expiration, exclude specific links, or perform batch operations
5. **Inaccurate detection** — Navigations via JavaScript or AJAX won't trigger `:visited`

Therefore, this script adopts a **proactive recording + style injection** approach to provide stronger customization and cross‑device synchronization.

<details>
<summary>📋 <strong>Core Workflow</strong></summary>

1. **Page Detection** → Determine script activation through preset rules
2. **Link Monitoring** → Event delegation listens for link clicks (left/middle/Ctrl+click)
3. **State Recording** → Store URL and timestamp to GM local storage
4. **Style Coloring** → Dynamic CSS injection + class name addition for visual marking
5. **Dynamic Updates** → MutationObserver monitors DOM changes to handle new links

</details>

<details>
<summary>⚙️ <strong>Preset Rules System</strong></summary>

- Each website defines `pages` (running pages) and `patterns` (coloring links) regex rules
- Auto-generates `@include` rules from configuration during build
- Secondary URL matching check at runtime (handles SPA routing)
- Supports user dynamic enable/disable of websites

</details>

<details>
<summary>🛠️ <strong>Core Technical Features</strong></summary>

- **Shadow DOM Isolation** - Vue app completely independent, doesn't interfere with page styles
- **Event Delegation** - Document-level listening, perfectly handles dynamic content
- **URL Normalization** - Intelligently removes query parameters for better matching accuracy
- **GM API Integration** - Reliable local persistent storage
- **Cross-device Sync** - GitHub Gist cloud sync + automatic conflict resolution

</details>

## 📞 Feedback & Support

Having issues or feature suggestions? Feel free to provide feedback through:

- 🐛 **Bug Reports** → [GitHub Issues](https://github.com/chesha1/color-visited/issues)
- 💡 **Feature Requests** → [GitHub Issues](https://github.com/chesha1/color-visited/issues)
- 💬 **Usage Discussion** → [Script Feedback Area](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2/feedback)

**GitHub Issues recommended** for faster response ⚡

## 🗺️ Development Roadmap

### 🚧 In Development
- [ ] **Fine-grained Control** - Support excluding specific links within pages (e.g., Bilibili Watch Later)
- [ ] **Performance Optimization** - Use trie structure to optimize storage
- [ ] **Smarter Coloring Scope** - For example, on Pixiv, while coloring titles, also color the corresponding series name
- [ ] **Custom Presets** - Add user-defined presets

### ❌ Unsupported Websites

| Website | Reason |
|---------|--------|
| Quora | Links are not exclusive, coloring affects other answers |
| Stack Overflow | Multiple answers share links for the same question |
| Pixiv User Pages | Cannot distinguish your own user page from others; your own page usually doesn't need coloring |
| Medium | Links don't have a consistent pattern, making it hard to accurately scope what needs coloring |

---

<div align="center">

**If this script helps you, please consider giving it a ⭐ Star!**

</div>