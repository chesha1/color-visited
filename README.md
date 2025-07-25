# color-visited
[油猴脚本](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2)：把已访问过的链接染成浅灰色，方便阅读时过滤已读信息

## 背景
很多论坛性质的网站，没有推荐系统能自动不推送已读页面，所有页面都需要用户自行分辨是否已读

而决策是否点进去需要的意志力是一种宝贵的资源，所以希望快速标记出已读页面

## 使用说明
**脚本会自动记录点击（包括鼠标左键点击、中键点击、ctrl 点击），但不会记录“在新标签页中打开”和“在新窗口中打开”，所以建议使用前三种点击**

如果需要修改设置，可以在开头的 `config` 里修改

有两个参数：
- color：被染成的颜色
- presets：定义对哪些网站启用本脚本 
- expirationTime：被记录的已读链接多久后过期，单位为毫秒，默认为一年，链接过期后从记录中删除，变回未染色状态

`presets` 默认状态下是字符串 `'all'`，代表启用所有预设

`presets` 还可以是字符串组成的数组，比如 `['36kr', 'bilibili']`，代表对这些网站启用脚本，数组中可以填哪些值，可以参考 `PRESET_RULES` 的键

## 预设说明

对于 `PRESET_RULES` 中的每个对象，`pages` 定义了在哪些 URL 下启用脚本，`patterns` 定义了在 `pages` 页面上，哪些链接会被染色

例如：下面是 bilibili 的预设

```javascript
{
    pages: [
      /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
      /https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
      /https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
      /https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页

    ],
    patterns: [
      /www\.bilibili\.com\/video\/BV.*/, // 视频详情页
    ],
}
```

意思是对于 bilibili，在个人空间和视频详情页，对潜在的已读链接进行染色，而在其他页面（如动态、首页）不进行已读染色

而且对于视频详情页的链接才进行染色，不对其他链接（如个人空间的链接）进行已读染色

所以这里也是可以定制的，如果你不希望在视频详情页中进行染色，只需要删除 `pages` 数组中的这一条即可

## 原理
（待更新）

## 反馈

如果有问题，欢迎在 [GitHub Issues](https://github.com/chesha1/color-visited/issues) 或者[脚本反馈区](https://greasyfork.org/zh-CN/scripts/523600-color-visited-%E5%AF%B9%E5%B7%B2%E8%AE%BF%E9%97%AE%E8%BF%87%E7%9A%84%E9%93%BE%E6%8E%A5%E6%9F%93%E8%89%B2/feedback) 提出

建议使用 [GitHub Issues](https://github.com/chesha1/color-visited/issues)

## 未来工作
- [ ] 在页面中排除某些链接不染色，比如在 bilibili 稍后再看中，不对标题的视频详情链接染色，其他照染
- [ ] 正则表达式协议头，考虑速度差别
- [ ] `visitedLinks` 冗余程度过高，考虑使用字典树存储（之前先做一个 benchmark 确定是否是性能瓶颈），可以[参考](https://stackoverflow.com/questions/16823686/where-does-gm-setvalue-store-data)

## 不考虑染色的网站
- Quora：没有回答独享的链接，因为一个回答染色了某个问题，会影响其他回答的链接
- Stack Overflow：没有回答独享的链接，因为一个回答染色了某个问题，会影响其他回答的链接
