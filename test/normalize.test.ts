import { describe, expect, it } from 'vitest'
import { normalizeUrl } from '@/shared/sites'

// 归一化的黄金表：左边是 <a> 的 href，右边是现在归一化的结果，也就是存进存储的键。
// 结果一变，已经存下的记录就对不上了，所以这张表只能加行，不能改已有的行
function normalize(href: string): string {
  return normalizeUrl(new URL(href))
}

describe('归一化黄金表', () => {
  it.each([
    // v2ex：去掉查询参数和锚点
    ['https://www.v2ex.com/t/1045327', 'https://www.v2ex.com/t/1045327'],
    ['https://www.v2ex.com/t/1045327?p=2', 'https://www.v2ex.com/t/1045327'],
    ['https://www.v2ex.com/t/1045327#reply23', 'https://www.v2ex.com/t/1045327'],
    ['https://www.v2ex.com/t/1045327?p=2#reply123', 'https://www.v2ex.com/t/1045327'],
    ['https://v2ex.com/t/1045327?p=2', 'https://v2ex.com/t/1045327?p=2'], // 只认 www

    // linux.do：去掉帖子 ID 后面的楼层号，只在它是 URL 的最后一段时
    ['https://linux.do/t/topic/647305', 'https://linux.do/t/topic/647305'],
    ['https://linux.do/t/topic/647305/49', 'https://linux.do/t/topic/647305'],
    ['https://linux.do/t/some-slug/647305/12', 'https://linux.do/t/some-slug/647305'],
    ['https://linux.do/t/topic/647305/49#', 'https://linux.do/t/topic/647305/49#'],
    ['https://linux.do/t/topic/647305/49?u=someone', 'https://linux.do/t/topic/647305/49?u=someone'],

    // bilibili：去掉查询参数，锚点留着
    ['https://www.bilibili.com/video/BV1GJ411x7h7', 'https://www.bilibili.com/video/BV1GJ411x7h7'],
    ['https://www.bilibili.com/video/BV1GJ411x7h7?spm_id_from=333.1007.tianma.1-1-1.click', 'https://www.bilibili.com/video/BV1GJ411x7h7'],
    ['https://www.bilibili.com/video/BV1GJ411x7h7/?p=2&share_source=copy_web', 'https://www.bilibili.com/video/BV1GJ411x7h7/'],
    ['https://www.bilibili.com/video/BV1GJ411x7h7#reply123', 'https://www.bilibili.com/video/BV1GJ411x7h7#reply123'],
    ['https://m.bilibili.com/video/BV1GJ411x7h7?share=1', 'https://m.bilibili.com/video/BV1GJ411x7h7?share=1'],

    // 贴吧：去掉查询参数（连带后面的锚点），只有锚点时留着
    ['https://tieba.baidu.com/p/9123456789', 'https://tieba.baidu.com/p/9123456789'],
    ['https://tieba.baidu.com/p/9123456789?pid=150123456789&cid=0#150123456789', 'https://tieba.baidu.com/p/9123456789'],
    ['https://tieba.baidu.com/p/9123456789#reply', 'https://tieba.baidu.com/p/9123456789#reply'],

    // 豆瓣：去掉查询参数
    ['https://www.douban.com/group/topic/312345678/', 'https://www.douban.com/group/topic/312345678/'],
    ['https://www.douban.com/group/topic/312345678/?_i=8123456abc&_spm_id=xyz', 'https://www.douban.com/group/topic/312345678/'],

    // NGA 的三个域名：去掉第一个 & 及之后的部分
    ['https://bbs.nga.cn/read.php?tid=41234567', 'https://bbs.nga.cn/read.php?tid=41234567'],
    ['https://bbs.nga.cn/read.php?tid=41234567&page=3', 'https://bbs.nga.cn/read.php?tid=41234567'],
    ['https://bbs.nga.cn/read.php?tid=41234567#pid123Anchor', 'https://bbs.nga.cn/read.php?tid=41234567#pid123Anchor'],
    ['https://ngabbs.com/read.php?tid=41234567&_ff=-7', 'https://ngabbs.com/read.php?tid=41234567'],
    ['https://nga.178.com/read.php?tid=41234567&page=2', 'https://nga.178.com/read.php?tid=41234567'],

    // sankaku：去掉查询参数、锚点和语言前缀
    ['https://chan.sankakucomplex.com/posts/AbCdEfGhIjK', 'https://chan.sankakucomplex.com/posts/AbCdEfGhIjK'],
    ['https://chan.sankakucomplex.com/cn/posts/AbCdEfGhIjK?tags=landscape', 'https://chan.sankakucomplex.com/posts/AbCdEfGhIjK'],
    ['https://chan.sankakucomplex.com/en/posts/AbCdEfGhIjK', 'https://chan.sankakucomplex.com/posts/AbCdEfGhIjK'],
    ['https://chan.sankakucomplex.com/posts/AbCdEfGhIjK#comments', 'https://chan.sankakucomplex.com/posts/AbCdEfGhIjK'],

    // south-plus 的各个镜像：去掉末尾的 #a 和分页后缀
    ['https://www.south-plus.net/read.php?tid-2412345.html', 'https://www.south-plus.net/read.php?tid-2412345.html'],
    ['https://www.south-plus.net/read.php?tid-2412345-fpage-2.html', 'https://www.south-plus.net/read.php?tid-2412345.html'],
    ['https://www.south-plus.net/read.php?tid-2412345-page-3.html', 'https://www.south-plus.net/read.php?tid-2412345.html'],
    ['https://www.south-plus.net/read.php?tid-2412345-page-e.html#a', 'https://www.south-plus.net/read.php?tid-2412345.html'],
    ['https://www.south-plus.net/read.php?tid-2412345-fpage-3-page-2.html', 'https://www.south-plus.net/read.php?tid-2412345.html'],
    ['https://www.white-plus.net/read.php?tid-2412345-fpage-2.html', 'https://www.white-plus.net/read.php?tid-2412345.html'],
    ['https://www.summer-plus.net/read.php?tid-2412345-page-a.html', 'https://www.summer-plus.net/read.php?tid-2412345.html'],
    ['https://bbs.imoutolove.me/read.php?tid-2412345-fpage-2.html', 'https://bbs.imoutolove.me/read.php?tid-2412345.html'],

    // 其他站点的链接原样返回，查询参数、锚点都留着
    ['https://36kr.com/p/3012345678901234', 'https://36kr.com/p/3012345678901234'],
    ['https://36kr.com/newsflashes/3012345678901234?channel=wechat', 'https://36kr.com/newsflashes/3012345678901234?channel=wechat'],
    ['https://forum.gamer.com.tw/C.php?bsn=60076&snA=8401234&tnum=12', 'https://forum.gamer.com.tw/C.php?bsn=60076&snA=8401234&tnum=12'],
    ['https://www.bloomberg.com/news/articles/2026-10-13/some-headline?srnd=homepage', 'https://www.bloomberg.com/news/articles/2026-10-13/some-headline?srnd=homepage'],
    ['https://www.economist.com/finance-and-economics/2026/10/09/some-title', 'https://www.economist.com/finance-and-economics/2026/10/09/some-title'],
    ['https://www.chiphell.com/thread-2612345-1-1.html', 'https://www.chiphell.com/thread-2612345-1-1.html'],
    ['https://forums.e-hentai.org/index.php?showtopic=123456&st=20', 'https://forums.e-hentai.org/index.php?showtopic=123456&st=20'],
    ['https://e-hentai.org/g/2712345/abcdef1234/', 'https://e-hentai.org/g/2712345/abcdef1234/'],
    ['https://exhentai.org/g/2712345/abcdef1234/?p=1', 'https://exhentai.org/g/2712345/abcdef1234/?p=1'],
    ['https://www.hacg.me/wp/123456.html', 'https://www.hacg.me/wp/123456.html'],
    ['https://hanime1.me/watch?v=12345', 'https://hanime1.me/watch?v=12345'],
    ['https://news.ycombinator.com/item?id=41234567', 'https://news.ycombinator.com/item?id=41234567'],
    ['https://github.com/user/repo?tab=readme-ov-file#install', 'https://github.com/user/repo?tab=readme-ov-file#install'],
    ['https://hostloc.com/thread-1234567-1-1.html', 'https://hostloc.com/thread-1234567-1-1.html'],
    ['https://bbs.hupu.com/628123456.html', 'https://bbs.hupu.com/628123456.html'],
    ['https://juejin.cn/post/7412345678901234567?searchId=20261014', 'https://juejin.cn/post/7412345678901234567?searchId=20261014'],
    ['https://www.uscardforum.com/t/topic/123456/78', 'https://www.uscardforum.com/t/topic/123456/78'], // 和 linux.do 一样是 Discourse，但没有去楼层号
    ['https://www.nodeseek.com/post-123456-1', 'https://www.nodeseek.com/post-123456-1'],
    ['https://www.pixiv.net/artworks/123456789', 'https://www.pixiv.net/artworks/123456789'],
    ['https://www.pixiv.net/novel/show.php?id=12345678', 'https://www.pixiv.net/novel/show.php?id=12345678'],
    ['https://cn.pornhub.com/view_video.php?viewkey=ph5f1234567890', 'https://cn.pornhub.com/view_video.php?viewkey=ph5f1234567890'],
    ['https://www.reddit.com/r/programming/comments/1abcdef/some_title/', 'https://www.reddit.com/r/programming/comments/1abcdef/some_title/'],
    ['https://seekingalpha.com/article/4712345-some-title?source=feed', 'https://seekingalpha.com/article/4712345-some-title?source=feed'],
    ['https://www.techflowpost.com/article/detail_12345.html', 'https://www.techflowpost.com/article/detail_12345.html'],
    ['https://www.txrjy.com/thread-1312345-1-1.html', 'https://www.txrjy.com/thread-1312345-1-1.html'],
    ['https://51cg1.com/archives/123456/', 'https://51cg1.com/archives/123456/'],
    ['https://www.1point3acres.com/bbs/thread-1012345-1-1.html', 'https://www.1point3acres.com/bbs/thread-1012345-1-1.html'],
    ['https://www.zhihu.com/question/12345678/answer/987654321', 'https://www.zhihu.com/question/12345678/answer/987654321'],
    ['https://zhuanlan.zhihu.com/p/123456789?utm_source=wechat', 'https://zhuanlan.zhihu.com/p/123456789?utm_source=wechat'],
    ['mailto:hn@ycombinator.com', 'mailto:hn@ycombinator.com'],
  ])('%s', (href, expected) => {
    expect(new URL(href).href, '左边要写成浏览器给出的 <a>.href 的样子').toBe(href)
    expect(normalize(href)).toBe(expected)
  })

  it('href 解析不了时（<a> 的 hostname 是空字符串）原样返回', () => {
    expect(normalizeUrl({ href: 'http://exa mple.com/t/1?p=2', hostname: '' })).toBe('http://exa mple.com/t/1?p=2')
  })
})
