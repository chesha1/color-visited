// 配置参数
const config = {
  color: '#f1f5f9', // 链接颜色，默认为 slate-100
  presets: 'all', // 使用的预设规则
  debug: false, // 是否开启调试模式
  expirationTime: 1000 * 60 * 60 * 24 * 365, // 链接染色的过期时间，毫秒为单位，默认为一年
};

// 预设规则集合
const PRESET_RULES = {
  '36kr': {
    pages: [
      /https:\/\/36kr\.com\/$/, // 首页
      /https:\/\/36kr\.com\/motif\/\d+$/, // 主题页
      /https:\/\/36kr\.com\/newsflashes\/$/, // 快讯页
      /https:\/\/36kr\.com\/information\/.*/, // 资讯页
      /https:\/\/36kr\.com\/topics\/\d+$/, // 专题页
    ],
    patterns: [
      /36kr\.com\/p\/\d+$/, // 文章页
      /36kr\.com\/newsflashes\/\d+$/, // 快讯详情页
    ],
  },
  'bilibili': {
    pages: [
      // TODO: 动态页挂载不上，以后再研究研究
      // /https:\/\/t\.bilibili\.com.*/,
      /https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
      /https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
      /https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
      /https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
      /https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/, // 稍后再看中的视频详情页
    ],
    patterns: [
      /www\.bilibili\.com\/video\/BV.*/, // 视频详情页
    ],
  },
  'chiphell': {
    pages: [
      /https:\/\/www\.chiphell\.com\/forum-.*/,
    ],
    patterns: [
      /chiphell\.com\/thread-.*/,
    ],
  },
  'douban': {
    pages: [
      /https:\/\/www\.douban\.com\/group\/.*/, // 小组首页
    ],
    patterns: [
      /douban\.com\/group\/topic\/\d+\//, // 小组帖子
    ],
  },
  // TODO: 很纯粹的网站，纯静态资源，暂时无能为力，后续研究一下
  'hacg': {
    pages: [
      /https:\/\/www\.hacg\.me\/wp\/$/, // 首页
      /https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/, // 分类目录页
    ],
    patterns: [
      /hacg\.me\/wp\/\d+\.html/, // 文章页
    ],
  },
  'hostloc': {
    pages: [
      /https:\/\/hostloc\.com\/forum-.*/, // 板块首页
    ],
    patterns: [
      /hostloc\.com\/thread.*/, // 帖子
    ],
  },
  'hupu': {
    pages: [
      /https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/, // 各个板块首页
    ],
    patterns: [
      /bbs\.hupu\.com\/\d+\.html/, // 帖子
    ],
  },
  'linuxdo': {
    pages: [
      /https:\/\/linux\.do\/?$/,
      /https:\/\/linux\.do\/c\/.*/,
    ],
    patterns: [
      /linux\.do\/t\/topic\/.*/,
    ],
  },
  'nga': {
    pages: [
      /https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
      /https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
      /https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/,
    ],
    patterns: [
      /bbs\.nga\.cn\/read\.php\?tid.*/,
      /ngabbs\.com\/read\.php\?tid.*/,
      /nga\.178\.com\/read\.php\?tid.*/,
    ],
  },
  'reddit': {
    pages: [
      /https:\/\/www\.reddit\.com\/r\/[^\/]+\/?$/, // 板块首页
    ],
    patterns: [
      /reddit\.com\/r\/[^\/]+\/comments\/.*/, // 帖子
    ],
  },
  'south-plus': {
    pages: [
      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/, // 板块首页
      /https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/, // 板块首页
      /https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/, // 个人主页
    ],
    patterns: [
      /(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, // 帖子
      /bbs\.imoutolove\.me\/read\.php\?tid-.*/, // 帖子

    ],
  },
  'techflow': {
    pages: [
      /https:\/\/www\.techflowpost\.com\/$/, // 首页
    ],
    patterns: [
      /techflowpost\.com\/article\/.*/, // 文章页
    ],
  },
  'tieba': {
    pages: [
      /https:\/\/tieba\.baidu\.com\/f\?kw=.*/, // 某个吧首页
      /https:\/\/tieba\.baidu\.com\/hottopic.*/, // 热榜
    ],
    patterns: [
      /tieba\.baidu\.com\/p\/\d+/, // 帖子
    ],
  },
  'v2ex': {
    pages: [
      /https:\/\/www\.v2ex\.com\/$/,
      /https:\/\/www\.v2ex\.com\/\?tab.*/,
      /https:\/\/www\.v2ex\.com\/go\/.*/,
    ],
    patterns: [
      /v2ex\.com\/t\/.*/,
    ],
  },
  'zhihu': {
    pages: [
      /https:\/\/www\.zhihu\.com\/$/, // 首页
      /https:\/\/www\.zhihu\.com\/hot$/, // 热榜
      /https:\/\/www\.zhihu\.com\/people\/.*/, // 个人
    ],
    patterns: [
      /zhihu\.com\/question\/\d+\/answer\/\d+$/, // 具体的回答页
      /zhihu\.com\/question\/\d+$/, // 问题页
      /zhuanlan\.zhihu\.com\/p\/\d+/, // 专栏文章
    ],
  },
  // resources: https://rebang.today/
  // TODO: enshan 油猴脚本都加载不进去，之后再试试
  // TODO: reddit 第一次点击的时候不会变色，刷新后才会
  // TODO: 优化一下多次获取 patterns 的逻辑
  // TODO: 让 o1 优化一下
};
