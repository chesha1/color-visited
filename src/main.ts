// 组合根：脚本在每个注入了的页面上从这里按顺序启动
import { GM_registerMenuCommand } from 'vite-plugin-monkey/dist/client'
import { startPage } from '@/core/page'
import { getSettings } from '@/core/settings'
import { deleteExpiredLinks, migrateLegacyLinks } from '@/core/storage'
import { autoSync } from '@/core/sync'
import { mountLegacyDialog, openLegacySettings } from '@/ui/legacyDialog'

// 启动的各步互不依赖：一步出错只报告这一步，后面的照常执行
function run(step: () => void): void {
  try {
    step()
  } catch (error) {
    console.error('[color-visited] 启动失败', error)
  }
}

// 菜单最先注册：后面哪一步出错，设置都还能打开。只注册这一次：不带 id 重复注册时，Tampermonkey 会在菜单里再加一个同名项
run(() => GM_registerMenuCommand('设置', openLegacySettings))
// 读访问记录之前，先把旧版本的整块记录迁移成逐条存储
run(migrateLegacyLinks)
// 所有标签页合起来一天最多清理一次。染色不依赖它：过期的记录读的时候就当作没有
run(() => deleteExpiredLinks(getSettings().general.expirationTime))
run(autoSync)
run(startPage)
run(mountLegacyDialog)
