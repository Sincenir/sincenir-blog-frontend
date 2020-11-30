import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/home/index.vue';
import Blog from '@/view/blog/index.vue';
import TestT from '@/view/test2/index.vue';

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/blog', component: Blog },
    { path: '/skill', component: Home },
    { path: '/software', component: TestT },
    { path: '/setting', component: Home },
];
export const router = new VueRouter({
    mode: 'hash',
    routes,
});
