// 站点表：脚本在哪些页面上运行、染哪些链接，以及链接的归一化。新增站点只改这个文件。
// vite.config.ts 在 Node 里 import 它来生成脚本头部，所以顶层不能引用浏览器全局对象，也不 import 别的 src 模块

export interface Site {
  /** userSettings.preset 里的键，一改用户的开关就被重置，所以不能改 */
  id: string
  /** 设置界面里显示的名字 */
  name: string
  /** 激活范围：在哪些页面上染色。脚本在运行时按当前 URL 判断，URL 一变就重新判断 */
  pages: RegExp[]
  /** 染哪些链接，对归一化之后的 URL 判断 */
  links: RegExp[]
  /**
   * 注入范围（@match）：管理器把脚本加载进哪些页面。写了就只按它生成 @match；不写就按 pages 生成 @include，和激活范围一样。
   * 管理器只在整页加载时检查注入范围。SPA 站点的站内跳转不是整页加载，从没注入的页面跳到激活页，脚本也不会补上来，
   * 所以 SPA 站点要覆盖整个 host。别的站点不写：每次注入，管理器都要把全部 GM 值交给页面
   */
  match?: string[]
}

export const SITES: Site[] = [
  {
    id: '36kr',
    name: '36氪',
    pages: [
      /^https:\/\/36kr\.com\/$/, // 首页
      /^https:\/\/36kr\.com\/motif\/\d+$/, // 主题页
      /^https:\/\/36kr\.com\/newsflashes\/$/, // 快讯页
      /^https:\/\/36kr\.com\/information\/.*/, // 资讯页
      /^https:\/\/36kr\.com\/topics\/\d+$/, // 专题页
    ],
    links: [
      /^https:\/\/36kr\.com\/p\/\d+$/, // 文章页
      /^https:\/\/36kr\.com\/newsflashes\/\d+$/, // 快讯详情页
    ],
  },
  {
    id: 'bahamut',
    name: '巴哈姆特',
    pages: [
      /^https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/, // 各个板块首页
    ],
    links: [
      /^https:\/\/forum\.gamer\.com\.tw\/C\.php\?bsn=.*/, // 帖子
    ],
  },
  {
    id: 'bilibili',
    name: '哔哩哔哩',
    pages: [
      // TODO: 动态页挂载不上，以后再研究研究
      // /https:\/\/t\.bilibili\.com.*/,
      /^https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
      /^https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
      /^https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
      /^https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
      /^https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/, // 稍后再看中的视频详情页
    ],
    links: [
      /^https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
    ],
    // 个人空间是 SPA，整个注入；www 上只注入激活页
    match: ['https://space.bilibili.com/*', 'https://www.bilibili.com/video/*', 'https://www.bilibili.com/list/watchlater*'],
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    pages: [
      /^https:\/\/www\.bloomberg\.com\/.*/, // 任意页面
    ],
    links: [
      /^https:\/\/www\.bloomberg\.com\/news\/articles.*/, // 文章页
    ],
  },
  {
    id: 'The Economist',
    name: 'The Economist',
    pages: [
      /^https:\/\/www\.economist\.com\/.*/, // 任意页面
    ],
    links: [
      /^https:\/\/www\.economist\.com\/.+\/\d{4}\/\d{2}\/\d{2}\/.*$/, // 日期型文章页
    ],
  },
  {
    id: 'chiphell',
    name: 'Chiphell',
    pages: [
      /^https:\/\/www\.chiphell\.com\/forum-.*/,
    ],
    links: [
      /^https:\/\/www\.chiphell\.com\/thread-.*/,
    ],
  },
  {
    id: 'douban',
    name: '豆瓣小组',
    pages: [
      /^https:\/\/www\.douban\.com\/group\/.*/, // 小组首页
    ],
    links: [
      /^https:\/\/www\.douban\.com\/group\/topic\/\d+\//, // 小组帖子
    ],
  },
  {
    id: 'e-hentai-forums',
    name: 'E-Hentai 论坛',
    pages: [
      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/, // 论坛版块页面
    ],
    links: [
      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/, // 帖子页面
    ],
  },
  {
    id: 'ehentai',
    name: 'E-Hentai',
    pages: [
      /^https:\/\/(e-|ex)hentai\.org\/?$/, // 首页
      /^https:\/\/(e-|ex)hentai\.org\/toplist\.php\?tl=\d+/, // 排行榜
      /^https:\/\/(e-|ex)hentai\.org\/\?f_search=.*/, // 首页搜索页
      /^https:\/\/(e-|ex)hentai\.org\/popular/, // 热门页面
      /^https:\/\/(e-|ex)hentai\.org\/watched.*/, // 关注页面
      /^https:\/\/(e-|ex)hentai\.org\/tag\/.*/, // 标签页面
    ],
    links: [
      /^https:\/\/(e-|ex)hentai\.org\/g\/\d+\/\w+\//, // 画廊页面
    ],
  },
  // TODO: 很纯粹的网站，纯静态资源，暂时无能为力，后续研究一下
  {
    id: 'hacg',
    name: '琉璃神社',
    pages: [
      /^https:\/\/www\.hacg\.me\/wp\/$/, // 首页
      /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/, // 分类目录页
    ],
    links: [
      /^https:\/\/www\.hacg\.me\/wp\/\d+\.html/, // 文章页
    ],
  },
  {
    id: 'hanime1',
    name: 'Hanime1',
    pages: [
      /^https:\/\/hanime1\.me\/$/, // 首页
      /^https:\/\/hanime1\.me\/search.*/, // 搜索页
    ],
    links: [
      /^https:\/\/hanime1\.me\/watch\?v=\d+/, // 视频页
    ],
  },
  {
    id: 'Hacker News',
    name: 'Hacker News',
    pages: [
      /^https:\/\/news\.ycombinator\.com\/.*/, // 任意内容
    ],
    links: [
      /^(?!https:\/\/news\.ycombinator\.com).*/, // 任意链接，除了 news.ycombinator.com 域名
    ],
  },
  {
    id: 'hostloc',
    name: 'HostLoc',
    pages: [
      /^https:\/\/hostloc\.com\/forum-.*/, // 板块首页
    ],
    links: [
      /^https:\/\/hostloc\.com\/thread.*/, // 帖子
    ],
  },
  {
    id: 'hupu',
    name: '虎扑',
    pages: [
      /^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/, // 各个板块首页
    ],
    links: [
      /^https:\/\/bbs\.hupu\.com\/\d+\.html/, // 帖子
    ],
  },
  {
    id: 'juejin',
    name: '掘金',
    pages: [
      /^https:\/\/juejin\.cn\/(\?sort=.*)?$/, // 首页（含排序参数）
      /^https:\/\/juejin\.cn\/(hot|following|backend|frontend|android|ios|ai|freebie|career|article).*/, // 各分类页面
    ],
    links: [
      /^https:\/\/juejin\.cn\/post\/.*/, // 文章页
    ],
  },
  {
    id: 'linuxdo',
    name: 'LINUX DO',
    pages: [
      /^https:\/\/linux\.do\/?$/, // 首页
      /^https:\/\/linux\.do\/(latest|new|top|hot|categories)/, // 首页的几个页签
      /^https:\/\/linux\.do\/c\/.*/,
    ],
    links: [
      /^https:\/\/linux\.do\/t\/topic\/.*/,
    ],
    match: ['https://linux.do/*'], // Discourse，从帖子点回列表是站内跳转
  },
  {
    id: '美卡论坛',
    name: '美卡论坛',
    pages: [
      /^https:\/\/www\.uscardforum\.com\/?$/, // 首页
      /^https:\/\/www\.uscardforum\.com\/c\/.*/, // 分类页
    ],
    links: [
      /^https:\/\/www\.uscardforum\.com\/t\/topic\/\d+/, // 帖子
    ],
    match: ['https://www.uscardforum.com/*'], // Discourse，从帖子点回列表是站内跳转
  },
  {
    id: 'nga',
    name: 'NGA',
    pages: [
      /^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
      /^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
      /^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/,
    ],
    links: [
      /^https:\/\/bbs\.nga\.cn\/read\.php\?tid.*/,
      /^https:\/\/ngabbs\.com\/read\.php\?tid.*/,
      /^https:\/\/nga\.178\.com\/read\.php\?tid.*/,
    ],
  },
  {
    id: 'nodeseek',
    name: 'NodeSeek',
    pages: [
      /^https:\/\/www\.nodeseek\.com\/?$/, // 首页
      /^https:\/\/www\.nodeseek\.com\/categories\/.*/, // 各个板块
      /^https:\/\/www\.nodeseek\.com\/page-\d+/, // 分页
    ],
    links: [
      /^https:\/\/www\.nodeseek\.com\/post-.*/, // 帖子
    ],
  },
  {
    id: 'pixiv',
    name: 'pixiv',
    pages: [
      /^https:\/\/www\.pixiv\.net\/$/, // 首页
      /^https:\/\/www\.pixiv\.net\/illustration.*/, // 插画页面
      /^https:\/\/www\.pixiv\.net\/manga.*/, // 漫画页面
      /^https:\/\/www\.pixiv\.net\/novel.*/, // 小说页面，含排行榜
      /^https:\/\/www\.pixiv\.net\/tags\/.*/, // 标签页面
      /^https:\/\/www\.pixiv\.net\/new_illust(_r18)?\.php.*/, // 新作品页面（包括R18版本）
      /^https:\/\/www\.pixiv\.net\/bookmark_new_illust(_r18)?\.php.*/, // 已关注用户的作品（包括R18版本）
      /^https:\/\/www\.pixiv\.net\/following\/watchlist\/.*/, // 追更列表中的作品
      /^https:\/\/www\.pixiv\.net\/mypixiv_new_illust\.php.*/, // 好P友的作品
    ],
    links: [
      /^https:\/\/www\.pixiv\.net\/artworks\/\d+/, // 作品详情页
      /^https:\/\/www\.pixiv\.net\/novel\/show\.php\?id=\d+/, // 小说详情页
    ],
    match: ['https://www.pixiv.net/*'], // 从作品页点标签是站内跳转
  },
  {
    id: 'pornhub',
    name: 'Pornhub',
    pages: [
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/, // 模特主页与相关页面（支持语言子域，长度不限，如 cn、de、zh-cn）
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/, // Pornstar 主页与相关页面（支持语言子域，长度不限，如 cn、de、zh-cn）
    ],
    links: [
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/view_video\.php\?viewkey=.*/, // 视频详情页（支持语言子域，长度不限，如 cn、de、zh-cn）
    ],
  },
  {
    id: 'reddit',
    name: 'Reddit',
    pages: [
      /^https:\/\/www\.reddit\.com\/r\/[^/]+\/?$/, // 板块首页
    ],
    links: [
      /^https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/.*/, // 帖子
    ],
    match: ['https://www.reddit.com/*'], // 从帖子点回板块是站内跳转
  },
  {
    id: 'sankaku',
    name: 'Sankaku Channel',
    pages: [
      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/?)?([?#].*)?$/, // 首页、标签搜索页（如 /?tags=xxx，可带语言前缀 /cn、/en 等）
      /^https:\/\/chan\.sankakucomplex\.com\/([a-z]{2}\/)?posts\/?([?#].*)?$/, // 帖子列表、标签搜索页（如 /cn/posts?tags=xxx）
    ],
    links: [
      /^https:\/\/chan\.sankakucomplex\.com\/posts\/[A-Za-z0-9]{11}$/, // 帖子详情页（语言前缀和查询参数在归一化时已经去掉）
    ],
  },
  {
    id: 'Seeking Alpha',
    name: 'Seeking Alpha',
    pages: [
      /^https:\/\/seekingalpha\.com\/$/, // 首页
      /^https:\/\/seekingalpha\.com\/symbol\/.*/, // 股票符号页面
    ],
    links: [
      /^https:\/\/seekingalpha\.com\/article\/.*/, // 文章页面
      /^https:\/\/seekingalpha\.com\/news\/.*/, // 新闻页面
    ],
    match: ['https://seekingalpha.com/*'], // 从文章页点股票代码是站内跳转
  },
  {
    id: 'south-plus',
    name: 'South Plus',
    pages: [
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/, // 板块首页
      /^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/, // 板块首页
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/, // 个人主页
    ],
    links: [
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, // 帖子
      /^https:\/\/bbs\.imoutolove\.me\/read\.php\?tid-.*/, // 帖子
    ],
  },
  {
    id: 'techflow',
    name: '深潮 TechFlow',
    pages: [
      /^https:\/\/www\.techflowpost\.com\/$/, // 首页
    ],
    links: [
      /^https:\/\/www\.techflowpost\.com\/article\/.*/, // 文章页
    ],
    match: ['https://www.techflowpost.com/*'], // 从文章页点回首页是站内跳转
  },
  {
    id: 'tieba',
    name: '百度贴吧',
    pages: [
      /^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/, // 某个吧首页
      /^https:\/\/tieba\.baidu\.com\/hottopic.*/, // 热榜
    ],
    links: [
      /^https:\/\/tieba\.baidu\.com\/p\/\d+/, // 帖子
    ],
  },
  {
    id: '通信人家园',
    name: '通信人家园',
    pages: [
      /^https:\/\/www\.txrjy\.com\/forum.*/,
    ],
    links: [
      /^https:\/\/www\.txrjy\.com\/thread.*/,
    ],
  },
  {
    id: '51吃瓜网',
    name: '51吃瓜网',
    pages: [
      /^https:\/\/51cg1\.com\/?$/, // 首页
      /^https:\/\/51cg1\.com\/page\/\d+\/?$/, // 分页
    ],
    links: [
      /^https:\/\/51cg1\.com\/archives\/\d+\/?$/, // 文章页
    ],
  },
  {
    id: 'v2ex',
    name: 'V2EX',
    pages: [
      /^https:\/\/www\.v2ex\.com\/$/,
      /^https:\/\/www\.v2ex\.com\/\?tab.*/,
      /^https:\/\/www\.v2ex\.com\/go\/.*/,
    ],
    links: [
      /^https:\/\/www\.v2ex\.com\/t\/.*/,
    ],
  },
  {
    id: '一亩三分地',
    name: '一亩三分地',
    pages: [
      /^https:\/\/www\.1point3acres\.com\/.*/, // 任意页面
      /^https:\/\/1point3acres\.com\/.*/, // 任意页面（无 www）
    ],
    links: [
      /^https:\/\/www\.1point3acres\.com\/bbs\/thread-.*/, // 帖子页面
    ],
  },
  {
    id: 'zhihu',
    name: '知乎',
    pages: [
      /^https:\/\/www\.zhihu\.com\/$/, // 首页
      /^https:\/\/www\.zhihu\.com\/hot$/, // 热榜
      /^https:\/\/www\.zhihu\.com\/people\/.*/, // 个人
    ],
    links: [
      /^https:\/\/www\.zhihu\.com\/question\/\d+\/answer\/\d+$/, // 具体的回答页
      /^https:\/\/www\.zhihu\.com\/question\/\d+$/, // 问题页
      /^https:\/\/zhuanlan\.zhihu\.com\/p\/\d+/, // 专栏文章
    ],
  },
  // resources: https://rebang.today/
  // TODO: enshan 油猴脚本都加载不进去，之后再试试
  // TODO: reddit 第一次点击的时候不会变色，刷新后才会
]

// 链接的归一化：去掉查询参数、楼层号这类不影响是哪个帖子的部分。输出就是存储键，改了已有的记录就对不上。
// 按链接自己的 hostname 查，和链接出现在哪个站点的页面上无关：HN 上指向 v2ex 的链接，和 v2ex 页面上的同一个链接，必须得到同一个键
const stripQuery = (href: string) => href.split('?')[0]
const stripQueryAndHash = (href: string) => href.split(/[?#]/)[0]
const stripFromAmpersand = (href: string) => href.split('&')[0]

// 去掉末尾的 #a 和各种分页后缀
function normalizeSouthPlus(href: string): string {
  return href.replace(/#a$/, '').replace(/-fpage-\d+/, '').replace(/-page-(\d+|[ea])(\.html)?$/, '$2')
}

// 用 Map 而不是对象：hostname 可能是 constructor、__proto__ 这类原型上的名字
const NORMALIZERS = new Map<string, (href: string) => string>([
  ['www.v2ex.com', stripQueryAndHash],
  ['linux.do', (href) => href.replace(/(\/\d+)\/\d+$/, '$1')], // 去掉帖子 ID 后面的楼层号
  ['www.bilibili.com', stripQuery],
  ['tieba.baidu.com', stripQuery],
  ['www.douban.com', stripQuery],
  ['bbs.nga.cn', stripFromAmpersand],
  ['ngabbs.com', stripFromAmpersand],
  ['nga.178.com', stripFromAmpersand],
  // 帖子链接会带上语言前缀（如 /cn/posts/xxx、/en/posts/xxx），去掉后同一帖子在不同语言下是同一个键
  ['chan.sankakucomplex.com', (href) => stripQueryAndHash(href).replace(/\.com\/[a-z]{2}\/posts\//, '.com/posts/')],
  ['www.south-plus.net', normalizeSouthPlus],
  ['www.north-plus.net', normalizeSouthPlus],
  ['www.blue-plus.net', normalizeSouthPlus],
  ['www.white-plus.net', normalizeSouthPlus],
  ['www.level-plus.net', normalizeSouthPlus],
  ['www.snow-plus.net', normalizeSouthPlus],
  ['www.spring-plus.net', normalizeSouthPlus],
  ['www.summer-plus.net', normalizeSouthPlus],
  ['bbs.imoutolove.me', normalizeSouthPlus],
])

// 直接传 <a> 元素，读它的 href 和 hostname，不为每个链接 new URL。
// href 解析失败时 hostname 是空字符串，查不到，原样返回
export function normalizeUrl(link: { href: string, hostname: string }): string {
  return NORMALIZERS.get(link.hostname)?.(link.href) ?? link.href
}

// preset 里没有的站点算启用：新加的站点默认启用
export function isSiteEnabled(preset: Record<string, boolean>, id: string): boolean {
  return preset[id] !== false
}

// 页面属于哪个启用了的站点。一个页面最多属于一个站点（test/sites.test.ts 检查）
export function findActiveSite(url: string, preset: Record<string, boolean>): Site | undefined {
  return SITES.find((site) => isSiteEnabled(preset, site.id) && site.pages.some((page) => page.test(url)))
}
