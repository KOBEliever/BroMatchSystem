import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Toast,Icon,Button,Tabbar, TabbarItem,NavBar } from 'vant'
import * as VueRouter from 'vue-router'
import routes from "./config/route.ts";

const app = createApp(App);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(Icon);
app.use(Toast);

// 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(router)


app.mount('#app')
