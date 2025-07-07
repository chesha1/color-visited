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
            customStyles.textContent = stylesModule.default;

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