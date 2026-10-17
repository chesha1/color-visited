type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    platform?: string
  }
}

const browserNavigator: NavigatorWithUserAgentData | undefined
  = typeof navigator === 'undefined' ? undefined : navigator

// 检测当前操作系统
export const isMac = (() => {
  if (!browserNavigator) {
    return false
  }

  // 优先使用现代 API
  if (browserNavigator.userAgentData) {
    return browserNavigator.userAgentData.platform === 'macOS'
  }

  // 降级到 userAgent 检测
  return /Mac|iPod|iPhone|iPad/.test(browserNavigator.userAgent)
})()

// ================== 设置工具 ==================

// 挑出 draft 里和 base 不一样的字段。设置对话框保存时只交出这些字段：表单是打开对话框时的副本，
// 没改过的字段在对话框开着时可能已经被其他标签页改掉了，拿副本里的旧值写回去会把那边的修改冲掉
export function changedFields<T extends object>(draft: T, base: T): Partial<T> {
  const changes: Partial<T> = {}
  for (const key in draft) {
    if (draft[key] !== base[key]) changes[key] = draft[key]
  }
  return changes
}

// ================== 存储信息工具 ==================

// 计算存储信息的大小并显示到控制台
export function logStorageInfo(visitedLinks: Record<string, number>): void {
  const serializedData = JSON.stringify(visitedLinks)
  const sizeInBytes = new TextEncoder().encode(serializedData).length
  const sizeInKB = (sizeInBytes / 1024).toFixed(2)
  const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2)

  let sizeText
  if (sizeInBytes < 1024) {
    sizeText = `${sizeInBytes} bytes`
  } else if (sizeInBytes < 1024 * 1024) {
    sizeText = `${sizeInKB} KB`
  } else {
    sizeText = `${sizeInMB} MB`
  }

  const itemCount = Object.keys(visitedLinks).length
  console.log(`visitedLinks storage size: ${itemCount} items, ${sizeText}`)
}
