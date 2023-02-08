import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入iconfont
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

import { Tab, Tabs } from 'vant';
// 引入组件样式
import 'vant/lib/index.css';
// 引入mockjs
import '@/mock/index'
const app = createApp(App)
app.use(router)
app.use(Tab)
app.use(Tabs)
app.mount('#app')
