import { createApp } from 'vue'
import { notification } from 'ant-design-vue';

const axios = require('axios');
import Antd from 'ant-design-vue'

import App from './App.vue'

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(Antd)
app.mount('#app');

// 检测后端状态
axios.get('api/status').then(res => {
    if (res.status !== 200) {
        ErrorDiaLog('错误', '后端状态错误！\nHTTP状态码：' + res.status);
    }
}).catch(() => {
    ErrorDiaLog('错误', '后端服务未启动！');
})

function ErrorDiaLog(Title, Message) {
    notification.open({
        message: Title,
        description: Message,
        style: {
            width: '600px',
            marginLeft: `${335 - 600}px`,
        },
        class: 'notification-custom-class',
    });
}
