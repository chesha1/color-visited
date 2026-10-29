import { GM_registerMenuCommand } from 'vite-plugin-monkey/dist/client'
import { startPage } from '@/core/page'
import { DAY, getSettings } from '@/core/settings'
import { deleteExpiredLinks, migrateLegacyLinks, takeTurn } from '@/core/storage'
import { autoSync } from '@/core/sync'

// 启动的各步互不依赖：一步出错只报告这一步，后面的照常执行
function run(step: () => void): void {
  try {
    step()
  } catch (error) {
    console.error('[color-visited] 启动失败', error)
  }
}

// 设置界面（Vue、Element Plus）到第一次打开时才执行。加载或执行出错只报告，不影响染色
function openSettings(): void {
  import('@/ui/dialog')
    .then((dialog) => dialog.openSettings())
    .catch((error) => console.error('[color-visited] 打开设置失败', error))
}

// 菜单最先注册：后面哪一步出错，设置都还能打开。只注册这一次：不带 id 重复注册时，Tampermonkey 会在菜单里再加一个同名项
run(() => GM_registerMenuCommand('设置', openSettings))
// 读访问记录之前，先把旧版本的整块记录迁移成逐条存储
run(migrateLegacyLinks)
// 所有标签页合起来一天最多清理一次。染色不依赖它：过期的记录读的时候就当作没有，晚点删只是多占些存储
run(() => {
  if (takeTurn('cleanup', DAY)) deleteExpiredLinks(getSettings().general.expirationTime)
})
run(autoSync)
run(startPage)
