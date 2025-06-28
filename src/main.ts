import { createApp } from 'vue';
import App from '@/App.vue';
import { startColorVisitedScript } from '@/core/script';

// 启动脚本核心功能
startColorVisitedScript();

// 创建完全隔离的 Shadow DOM 容器
const createIsolatedApp = () => {
    // 创建容器元素
    const container = document.createElement('div');
    container.id = 'color-visited-root';
    
    // 创建 Shadow DOM
    const shadowRoot = container.attachShadow({ mode: 'open' });
    
    // 创建 Vue 应用挂载点
    const appMountPoint = document.createElement('div');
    shadowRoot.appendChild(appMountPoint);
    
    // 动态注入样式到 Shadow DOM
    const injectStyles = async () => {
        try {
            // 注入 Element Plus 样式
            const elementPlusLink = document.createElement('link');
            elementPlusLink.rel = 'stylesheet';
            elementPlusLink.href = 'https://unpkg.com/element-plus/dist/index.css';
            shadowRoot.appendChild(elementPlusLink);
            
            // 注入自定义样式 (从 index.css 获取)
            const customStyles = document.createElement('style');
            
            // 由于在 Shadow DOM 中，需要将样式内容直接嵌入
            const stylesModule = await import('@/styles/index.css?inline');
            customStyles.textContent = stylesModule.default || `
                /* 基础样式重置，仅在 Shadow DOM 内生效 */
                :host {
                    all: initial;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 14px;
                    line-height: 1.5;
                    color: #303133;
                }
                
                * {
                    box-sizing: border-box;
                }
                
                /* Element Plus 变量定义 */
                :host {
                    --el-color-primary: #409eff;
                    --el-input-border-color: #dcdfe6;
                    --el-input-hover-border-color: #c0c4cc;
                    --el-input-focus-border-color: var(--el-color-primary);
                    --el-border-color: #dcdfe6;
                    --el-border-color-hover: #c0c4cc;
                    --el-disabled-bg-color: #f5f7fa;
                    --el-disabled-border-color: #e4e7ed;
                    --el-color-danger: #f56c6c;
                    --el-transition-duration: 0.3s;
                }
                
                /* Element Plus 组件样式修复 */
                .el-input__wrapper {
                    box-shadow: 0 0 0 1px var(--el-input-border-color) inset;
                    border: none;
                    transition: box-shadow var(--el-transition-duration);
                }
                
                .el-input__inner {
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    line-height: normal !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-align: center !important;
                    vertical-align: middle !important;
                }
                
                .el-input__wrapper:hover {
                    box-shadow: 0 0 0 1px var(--el-input-hover-border-color) inset;
                }
                
                .el-input__wrapper:focus,
                .el-input__wrapper:focus-within,
                .el-input.is-focus .el-input__wrapper {
                    box-shadow: 0 0 0 1px var(--el-color-primary) inset !important;
                }
                
                .el-input.is-disabled .el-input__wrapper {
                    box-shadow: 0 0 0 1px var(--el-disabled-border-color) inset;
                    background-color: var(--el-disabled-bg-color);
                    cursor: not-allowed;
                }
                
                .el-input__wrapper.is-error,
                .el-form-item.is-error .el-input__wrapper {
                    box-shadow: 0 0 0 1px var(--el-color-danger) inset !important;
                }
                
                .el-textarea__inner {
                    border: none !important;
                    box-shadow: 0 0 0 1px var(--el-input-border-color) inset !important;
                    transition: box-shadow var(--el-transition-duration);
                }
                
                .el-textarea__inner:hover {
                    box-shadow: 0 0 0 1px var(--el-input-hover-border-color) inset !important;
                }
                
                .el-textarea__inner:focus {
                    box-shadow: 0 0 0 1px var(--el-color-primary) inset !important;
                }
            `;
            
            shadowRoot.appendChild(customStyles);
        } catch (error) {
            console.warn('Failed to inject styles:', error);
        }
    };
    
    // 注入样式
    injectStyles();
    
    // 创建并挂载 Vue 应用
    const app = createApp(App);
    app.mount(appMountPoint);
    
    // 添加容器到页面
    document.body.appendChild(container);
    
    return container;
};

// 创建隔离的应用
createIsolatedApp();