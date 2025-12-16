import type { PresetRules, BatchKeySettings } from '../types';
import { isMac } from './utils';

// ================== 默认设置集合 ==================

export const DEFAULT_SETTINGS = {
  general: {
    color: 'rgba(0,0,0,0)', // 链接颜色，默认为透明色以适配暗色模式
    expirationTime: 1000 * 60 * 60 * 24 * 365, // 链接染色的过期时间，毫秒为单位，默认为一年
    debug: false // 是否开启调试模式
  },

  get batchKey(): BatchKeySettings {
    return {
      ctrlKey: !isMac, // macOS 下为 false，Windows 下为 true
      shiftKey: true,
      altKey: false,
      metaKey: isMac, // macOS 下为 true，Windows 下为 false
      key: 'V'
    };
  },

  get presetStates(): Record<string, boolean> {
    return Object.keys(PRESET_RULES).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
  },


  sync: {
    enabled: false,
    githubToken: '',
    gistId: '',
    lastSyncTime: 0
  }
} as const;

// 预设规则集合
export const PRESET_RULES: PresetRules = {
  '36kr': {
    pages: [
      /^https:\/\/36kr\.com\/$/, // 首页
      /^https:\/\/36kr\.com\/motif\/\d+$/, // 主题页
      /^https:\/\/36kr\.com\/newsflashes\/$/, // 快讯页
      /^https:\/\/36kr\.com\/information\/.*/, // 资讯页
      /^https:\/\/36kr\.com\/topics\/\d+$/, // 专题页
    ],
    patterns: [
      /^https:\/\/36kr\.com\/p\/\d+$/, // 文章页
      /^https:\/\/36kr\.com\/newsflashes\/\d+$/, // 快讯详情页
    ],
  },
  'bahamut': {
    pages: [
      /^https:\/\/forum\.gamer\.com\.tw\/(A|B|G1)\.php\?bsn=.*/, // 各个板块首页
    ],
    patterns: [
      /^https:\/\/forum\.gamer\.com\.tw\/C\.php\?bsn=.*/, // 帖子
    ],
  },
  'bilibili': {
    pages: [
      // TODO: 动态页挂载不上，以后再研究研究
      // /https:\/\/t\.bilibili\.com.*/,
      /^https:\/\/space\.bilibili\.com\/\d+(\?.*)?$/, // 个人空间首页
      /^https:\/\/space\.bilibili\.com\/\d+\/video/, // 个人空间投稿（疑似已失效）
      /^https:\/\/space\.bilibili\.com\/\d+\/upload.*/, // 个人空间投稿
      /^https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
      /^https:\/\/www\.bilibili\.com\/list\/watchlater\?.*/, // 稍后再看中的视频详情页
    ],
    patterns: [
      /^https:\/\/www\.bilibili\.com\/video\/BV.*/, // 视频详情页
    ],
  },
  'bloomberg': {
    pages: [
      /^https:\/\/www\.bloomberg\.com\/?$/, // 首页
      /^https:\/\/www\.bloomberg\.com\/.*/, // 任意页面
    ],
    patterns: [
      /^https:\/\/www\.bloomberg\.com\/news\/articles.*/, // 文章页
    ],
  },
  'The Economist': {
    pages: [
      /^https:\/\/www\.economist\.com\/?$/, // 首页
      /^https:\/\/www\.economist\.com\/.*/, // 任意页面
    ],
    patterns: [
      /^https:\/\/www\.economist\.com\/.+\/\d{4}\/\d{2}\/\d{2}\/.*$/, // 日期型文章页
    ],
  },
  'chiphell': {
    pages: [
      /^https:\/\/www\.chiphell\.com\/forum-.*/,
    ],
    patterns: [
      /^https:\/\/www\.chiphell\.com\/thread-.*/,
    ],
  },
  'douban': {
    pages: [
      /^https:\/\/www\.douban\.com\/group\/.*/, // 小组首页
    ],
    patterns: [
      /^https:\/\/www\.douban\.com\/group\/topic\/\d+\//, // 小组帖子
    ],
  },
  'e-hentai-forums': {
    pages: [
      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showforum=\d+/, // 论坛版块页面
    ],
    patterns: [
      /^https:\/\/forums\.e-hentai\.org\/index\.php\?showtopic=\d+/, // 帖子页面
    ],
  },
  'ehentai': {
    pages: [
      /^https:\/\/e-hentai\.org\/?$/, // 首页
      /^https:\/\/exhentai\.org\/?$/, // 首页
      /^https:\/\/e-hentai\.org\/toplist\.php\?tl=\d+/, // 排行榜
      /^https:\/\/exhentai\.org\/toplist\.php\?tl=\d+/, // 排行榜
      /^https:\/\/e-hentai\.org\/\?f_search=.*/, // 首页搜索页
      /^https:\/\/exhentai\.org\/\?f_search=.*/, // 首页搜索页
      /^https:\/\/e-hentai\.org\/popular/, // 热门页面
      /^https:\/\/exhentai\.org\/popular/, // 热门页面
    ],
    patterns: [
      /^https:\/\/e-hentai\.org\/g\/\d+\/\w+\//, // 画廊页面
      /^https:\/\/exhentai\.org\/g\/\d+\/\w+\//, // 画廊页面
    ],
  },
  // TODO: 很纯粹的网站，纯静态资源，暂时无能为力，后续研究一下
  'hacg': {
    pages: [
      /^https:\/\/www\.hacg\.me\/wp\/$/, // 首页
      /^https:\/\/www\.hacg\.me\/wp\/[a-zA-Z].*/, // 分类目录页
    ],
    patterns: [
      /^https:\/\/www\.hacg\.me\/wp\/\d+\.html/, // 文章页
    ],
  },
  'Hacker News': {
    pages: [
      /^https:\/\/news\.ycombinator\.com\/.*/, // 任意内容
      /^https:\/\/news\.ycombinator\.com\/newest.*/, // newest任意内容
      /^https:\/\/news\.ycombinator\.com\/front.*/, // front任意内容
      /^https:\/\/news\.ycombinator\.com\/show.*/, // show任意内容
    ],
    patterns: [
      /^(?!https:\/\/news\.ycombinator\.com).*/, // 任意链接，除了 news.ycombinator.com 域名
    ],
  },
  'hostloc': {
    pages: [
      /^https:\/\/hostloc\.com\/forum-.*/, // 板块首页
    ],
    patterns: [
      /^https:\/\/hostloc\.com\/thread.*/, // 帖子
    ],
  },
  'hupu': {
    pages: [
      /^https:\/\/bbs\.hupu\.com\/[a-zA-Z].*/, // 各个板块首页
    ],
    patterns: [
      /^https:\/\/bbs\.hupu\.com\/\d+\.html/, // 帖子
    ],
  },
  'linuxdo': {
    pages: [
      /^https:\/\/linux\.do\/?$/, // 首页
      /^https:\/\/linux\.do\/(latest|new|top|hot|categories)/, // 首页的几个页签
      /^https:\/\/linux\.do\/c\/.*/,
    ],
    patterns: [
      /^https:\/\/linux\.do\/t\/topic\/.*/,
    ],
  },
  '美卡论坛': {
    pages: [
      /^https:\/\/www\.uscardforum\.com\/?$/, // 首页
      /^https:\/\/www\.uscardforum\.com\/c\/.*/, // 分类页
    ],
    patterns: [
      /^https:\/\/www\.uscardforum\.com\/t\/topic\/\d+/, // 帖子
    ],
  },
  'nga': {
    pages: [
      /^https:\/\/bbs\.nga\.cn\/thread\.php\?(fid|stid).*/,
      /^https:\/\/ngabbs\.com\/thread\.php\?(fid|stid).*/,
      /^https:\/\/nga\.178\.com\/thread\.php\?(fid|stid).*/,
    ],
    patterns: [
      /^https:\/\/bbs\.nga\.cn\/read\.php\?tid.*/,
      /^https:\/\/ngabbs\.com\/read\.php\?tid.*/,
      /^https:\/\/nga\.178\.com\/read\.php\?tid.*/,
    ],
  },
  'nodeseek': {
    pages: [
      /^https:\/\/www\.nodeseek\.com\/?$/, // 首页
      /^https:\/\/www\.nodeseek\.com\/categories\/.*/, // 各个板块
      /^https:\/\/www\.nodeseek\.com\/page-\d+/, // 分页
    ],
    patterns: [
      /^https:\/\/www\.nodeseek\.com\/post-.*/, // 帖子
    ],
  },
  'pixiv': {
    pages: [
      /^https:\/\/www\.pixiv\.net\/$/, // 首页
      /^https:\/\/www\.pixiv\.net\/illustration.*/, // 插画页面
      /^https:\/\/www\.pixiv\.net\/manga.*/, // 漫画页面
      /^https:\/\/www\.pixiv\.net\/novel.*/, // 小说页面
      /^https:\/\/www\.pixiv\.net\/novel\/ranking\.php.*/, // 排行榜
      /^https:\/\/www\.pixiv\.net\/tags\/.*/, // 标签页面
      /^https:\/\/www\.pixiv\.net\/new_illust(_r18)?\.php.*/, // 新作品页面（包括R18版本）
      /^https:\/\/www\.pixiv\.net\/bookmark_new_illust(_r18)?\.php.*/, // 已关注用户的作品（包括R18版本）
      /^https:\/\/www\.pixiv\.net\/following\/watchlist\/.*/, // 追更列表中的作品
      /^https:\/\/www\.pixiv\.net\/mypixiv_new_illust\.php.*/, // 好P友的作品
    ],
    patterns: [
      /^https:\/\/www\.pixiv\.net\/artworks\/\d+/, // 作品详情页
      /^https:\/\/www\.pixiv\.net\/novel\/show\.php\?id=\d+/, // 小说详情页
    ],
  },
  'pornhub': {
    pages: [
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/model\/.*/, // 模特主页与相关页面（支持语言子域，长度不限，如 cn、de、zh-cn）
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/pornstar\/.*/, // Pornstar 主页与相关页面（支持语言子域，长度不限，如 cn、de、zh-cn）
    ],
    patterns: [
      /^https:\/\/(?:[a-z-]+\.)?pornhub\.com\/view_video\.php\?viewkey=.*/, // 视频详情页（支持语言子域，长度不限，如 cn、de、zh-cn）
    ],
  },
  'reddit': {
    pages: [
      /^https:\/\/www\.reddit\.com\/r\/[^/]+\/?$/, // 板块首页
    ],
    patterns: [
      /^https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/.*/, // 帖子
    ],
  },
  'Seeking Alpha': {
    pages: [
      /^https:\/\/seekingalpha\.com\/$/, // 首页
      /^https:\/\/seekingalpha\.com\/symbol\/.*/, // 股票符号页面
    ],
    patterns: [
      /^https:\/\/seekingalpha\.com\/article\/.*/, // 文章页面
      /^https:\/\/seekingalpha\.com\/news\/.*/, // 新闻页面
    ],
  },
  'south-plus': {
    pages: [
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/thread\.php\?fid.*/, // 板块首页
      /^https:\/\/bbs\.imoutolove\.me\/thread\.php\?fid.*/, // 板块首页
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/u\.php\?action-topic-uid-.*/, // 个人主页
    ],
    patterns: [
      /^https:\/\/www\.(south|north|blue|white|level|snow|spring|summer)-plus\.net\/read\.php\?tid-.*/, // 帖子
      /^https:\/\/bbs\.imoutolove\.me\/read\.php\?tid-.*/, // 帖子

    ],
  },
  'techflow': {
    pages: [
      /^https:\/\/www\.techflowpost\.com\/$/, // 首页
    ],
    patterns: [
      /^https:\/\/www\.techflowpost\.com\/article\/.*/, // 文章页
    ],
  },
  'tieba': {
    pages: [
      /^https:\/\/tieba\.baidu\.com\/f\?[^#]*kw=.*/, // 某个吧首页
      /^https:\/\/tieba\.baidu\.com\/hottopic.*/, // 热榜
    ],
    patterns: [
      /^https:\/\/tieba\.baidu\.com\/p\/\d+/, // 帖子
    ],
  },
  '通信人家园': {
    pages: [
      /^https:\/\/www\.txrjy\.com\/forum.*/,
    ],
    patterns: [
      /^https:\/\/www\.txrjy\.com\/thread.*/,
    ],
  },
  'v2ex': {
    pages: [
      /^https:\/\/www\.v2ex\.com\/$/,
      /^https:\/\/www\.v2ex\.com\/\?tab.*/,
      /^https:\/\/www\.v2ex\.com\/go\/.*/,
    ],
    patterns: [
      /^https:\/\/www\.v2ex\.com\/t\/.*/,
    ],
  },
  '一亩三分地': {
    pages: [
      /^https:\/\/www\.1point3acres\.com\/?$/, // 首页
      /^https:\/\/www\.1point3acres\.com\/.*/, // 任意页面
      /^https:\/\/1point3acres\.com\/.*/, // 任意页面（无 www）
    ],
    patterns: [
      /^https:\/\/www\.1point3acres\.com\/bbs\/thread-.*/, // 帖子页面
    ],
  },
  'zhihu': {
    pages: [
      /^https:\/\/www\.zhihu\.com\/$/, // 首页
      /^https:\/\/www\.zhihu\.com\/hot$/, // 热榜
      /^https:\/\/www\.zhihu\.com\/people\/.*/, // 个人
    ],
    patterns: [
      /^https:\/\/www\.zhihu\.com\/question\/\d+\/answer\/\d+$/, // 具体的回答页
      /^https:\/\/www\.zhihu\.com\/question\/\d+$/, // 问题页
      /^https:\/\/zhuanlan\.zhihu\.com\/p\/\d+/, // 专栏文章
    ],
  },
  // resources: https://rebang.today/
  // TODO: enshan 油猴脚本都加载不进去，之后再试试
  // TODO: reddit 第一次点击的时候不会变色，刷新后才会
};

