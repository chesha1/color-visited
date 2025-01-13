# color-visited
对已访问过的链接染色

如果需要修改设置，可以在开头的 `config` 里修改

有三个参数：
- color：被染成的颜色
- urlPatterns：需要扫描，是否需要标记成已读染色的链接，需要提供正则表达式
- presets：一堆已经写好的预设，每一个预设对应了多条具体规则，预设的详情在 `PRESET_RULES` 中
