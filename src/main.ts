import { createApp } from 'vue';
import App from '@/App.vue';
import { startColorVisitedScript } from '@/core/script';

// 启动脚本核心功能
startColorVisitedScript();

const app = createApp(App);
app.mount(
    (() => {
        const app = document.createElement('div');
        document.body.append(app);
        return app;
    })(),
);