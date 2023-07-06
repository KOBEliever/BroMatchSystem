import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Toast,Icon,Button,Tabbar, TabbarItem,NavBar } from 'vant'


const app = createApp(App);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(Icon);
app.use(Toast);
app.mount('#app')
