import Index from "D:\\桌面\\BroMatchSystem\\src\\pages\\Index.vue";
import Team from "D:\\桌面\\BroMatchSystem\\src\\pages\\Team.vue";
import User from "D:\\桌面\\BroMatchSystem\\src\\pages\\User.vue";
import Search from "D:\\桌面\\BroMatchSystem\\src\\pages\\Search.vue";
import userEdit from "D:\\桌面\\BroMatchSystem\\src\\pages\\userEdit.vue";

// 定义一些路由
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User},
    { path: '/search', component: Search},
    { path: '/user/edit', component: userEdit}
]

export default routes;