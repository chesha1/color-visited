// ================== UI 组件模块 ==================

import { config } from '@/core/config';
import { getSyncSettings, saveSyncSettings, validateGitHubToken } from '@/core/sync';
import { eventBus, type BatchKeySettings } from '@/core/eventBus';

// ================== 通知组件 ==================

// 显示通知
export function showNotification(message: string): void {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = '#4CAF50';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '10001';
  notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

  document.body.appendChild(notification);

  setTimeout(function () {
    document.body.removeChild(notification);
  }, 2000);
}

// ================== 样式管理 ==================

// 在文档中注入一段自定义的 CSS 样式，针对这个类名的元素及其所有子元素，设置颜色样式，使用更高的选择器优先级和 !important
// 直接使用 link.style.color 会被后续的样式覆盖，所以这么做
export function injectCustomStyles(): void {
  if (document.querySelector('#color-visited-style')) return;

  const style = document.createElement('style');
  style.id = 'color-visited-style';
  style.innerHTML = `
    a.visited-link,
    a.visited-link *,
    a.visited-link *::before,
    a.visited-link *::after {
      color: ${config.color} !important;
    }
  `;
  document.head.appendChild(style);
}

// 移除注入的样式
export function removeCustomStyles(): void {
  const styleElement = document.querySelector('#color-visited-style');
  if (styleElement) {
    styleElement.remove();
  }
}

// ================== 快捷键设置对话框 ==================

// 显示批量记录快捷键设置弹窗
export function showBatchKeySettingsDialog(
  currentSettings: BatchKeySettings,
  defaultSettings: BatchKeySettings,
  isMac: boolean,
  onSave: (settings: BatchKeySettings) => void,
  onReset: () => void
): void {
  // 通过事件总线发送显示对话框事件
  eventBus.emit('showBatchKeyDialog', {
    currentSettings,
    defaultSettings,
    isMac,
    onSave,
    onReset
  });
}


// ================== 同步设置对话框 ==================

// 显示同步设置对话框
export function showSyncSettingsDialog(onMenuUpdate: () => void): void {
  const syncSettings = getSyncSettings();

  // 创建设置弹窗
  const dialog = document.createElement('div');
  dialog.style.position = 'fixed';
  dialog.style.top = '50%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.backgroundColor = 'white';
  dialog.style.padding = '20px';
  dialog.style.borderRadius = '8px';
  dialog.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  dialog.style.zIndex = '10000';
  dialog.style.minWidth = '400px';
  dialog.style.maxWidth = '500px';

  // 创建标题
  const title = document.createElement('h2');
  title.textContent = '同步设置';
  title.style.marginTop = '0';
  title.style.marginBottom = '15px';
  dialog.appendChild(title);

  // 同步开关
  const enableLabel = document.createElement('label');
  enableLabel.style.display = 'block';
  enableLabel.style.marginBottom = '15px';
  enableLabel.innerHTML = '<input type="checkbox" id="syncEnabled"> 启用数据同步';
  const enableCheckbox = enableLabel.querySelector('#syncEnabled') as HTMLInputElement;
  enableCheckbox.checked = syncSettings.enabled;
  dialog.appendChild(enableLabel);

  // GitHub 令牌输入
  const tokenLabel = document.createElement('label');
  tokenLabel.style.display = 'block';
  tokenLabel.style.marginBottom = '15px';
  tokenLabel.innerHTML = 'GitHub 个人访问令牌:<br><input type="password" id="githubToken" style="width: 100%; padding: 5px; margin-top: 5px;">';
  const tokenInput = tokenLabel.querySelector('#githubToken') as HTMLInputElement;
  tokenInput.value = syncSettings.githubToken;
  dialog.appendChild(tokenLabel);

  // Gist ID 输入
  const gistLabel = document.createElement('label');
  gistLabel.style.display = 'block';
  gistLabel.style.marginBottom = '15px';
  gistLabel.innerHTML = 'Gist ID:<br><input type="text" id="gistId" style="width: 100%; padding: 5px; margin-top: 5px;" placeholder="请输入现有 Gist 的 ID">';
  const gistInput = gistLabel.querySelector('#gistId') as HTMLInputElement;
  gistInput.value = syncSettings.gistId;
  dialog.appendChild(gistLabel);

  // 帮助说明
  const helpText = document.createElement('p');
  helpText.style.fontSize = '12px';
  helpText.style.color = '#666';
  helpText.style.marginBottom = '15px';
  helpText.innerHTML = `
    <strong>设置步骤：</strong><br>
    1. 到 GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) 创建令牌，权限选择 "gist"<br>
    2. 手动创建一个 Gist（任意文件名和内容），复制 URL 中的 ID 部分<br>
    3. 将令牌和 Gist ID 填入上方输入框
  `;
  dialog.appendChild(helpText);

  // 同步状态显示
  const statusDiv = document.createElement('div');
  statusDiv.style.marginBottom = '15px';
  statusDiv.style.padding = '10px';
  statusDiv.style.backgroundColor = '#f5f5f5';
  statusDiv.style.borderRadius = '4px';
  const lastSyncTime = syncSettings.lastSyncTime ? new Date(syncSettings.lastSyncTime).toLocaleString() : '从未同步';
  statusDiv.innerHTML = `
    <div>当前 Gist ID: ${syncSettings.gistId || '未设置'}</div>
    <div>最后同步时间: ${lastSyncTime}</div>
  `;
  dialog.appendChild(statusDiv);

  // 按钮区域
  const buttonsDiv = document.createElement('div');
  buttonsDiv.style.display = 'flex';
  buttonsDiv.style.justifyContent = 'space-between';
  dialog.appendChild(buttonsDiv);

  // 测试连接按钮
  const testButton = document.createElement('button');
  testButton.textContent = '测试连接';
  testButton.style.padding = '8px 16px';
  testButton.style.backgroundColor = '#2196F3';
  testButton.style.color = 'white';
  testButton.style.border = 'none';
  testButton.style.borderRadius = '4px';
  testButton.style.cursor = 'pointer';
  buttonsDiv.appendChild(testButton);

  // 保存按钮
  const saveButton = document.createElement('button');
  saveButton.textContent = '保存';
  saveButton.style.padding = '8px 16px';
  saveButton.style.backgroundColor = '#4CAF50';
  saveButton.style.color = 'white';
  saveButton.style.border = 'none';
  saveButton.style.borderRadius = '4px';
  saveButton.style.cursor = 'pointer';
  buttonsDiv.appendChild(saveButton);

  // 取消按钮
  const cancelButton = document.createElement('button');
  cancelButton.textContent = '取消';
  cancelButton.style.padding = '8px 16px';
  cancelButton.style.backgroundColor = '#f44336';
  cancelButton.style.color = 'white';
  cancelButton.style.border = 'none';
  cancelButton.style.borderRadius = '4px';
  cancelButton.style.cursor = 'pointer';
  buttonsDiv.appendChild(cancelButton);

  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = '9999';

  // 添加遮罩和弹窗到页面
  document.body.appendChild(overlay);
  document.body.appendChild(dialog);

  // 测试连接按钮事件
  testButton.addEventListener('click', async function () {
    const token = tokenInput.value.trim();
    if (!token) {
      showNotification('请输入 GitHub 令牌');
      return;
    }

    testButton.textContent = '测试中...';
    testButton.disabled = true;

    try {
      const isValid = await validateGitHubToken(token);
      if (isValid) {
        showNotification('连接成功！');
      }
      else {
        showNotification('连接失败，请检查令牌是否正确');
      }
    }
    catch (error: any) {
      showNotification('连接失败: ' + error.message);
    }
    finally {
      testButton.textContent = '测试连接';
      testButton.disabled = false;
    }
  });

  // 保存按钮事件
  saveButton.addEventListener('click', async function () {
    const newSettings = {
      ...syncSettings,
      enabled: enableCheckbox.checked,
      githubToken: tokenInput.value.trim(),
      gistId: gistInput.value.trim(),
    };

    saveSyncSettings(newSettings);

    closeDialog();
    showNotification('同步设置已保存！');

    // 重新更新菜单以反映状态变化
    onMenuUpdate();
  });

  // 取消按钮事件
  cancelButton.addEventListener('click', closeDialog);

  // 关闭对话框
  function closeDialog() {
    document.body.removeChild(dialog);
    document.body.removeChild(overlay);
  }
}