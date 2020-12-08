import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/home/index.vue';
import Blog from '@/view/blog/index.vue';
import BlogDetails from '@/view/BlogDetails/index.vue';
import Setting from '@/view/setting/index.vue';
import Login from '@/view/login/index.vue';

import { SessionStorage } from 'quasar';

// // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location: any) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    meta: {
      requireAuth: true,
    },
    component: Home,
  },
  {
    path: '/blog',
    meta: {
      requireAuth: true,
    },
    component: Blog,
  },
  {
    path: '/skill',
    meta: {
      requireAuth: true,
    },
    component: Home,
  },
  {
    path: '/software',
    meta: {
      requireAuth: true,
    },
    component: Home,
  },
  {
    path: '/setting',
    meta: {
      requireAuth: true,
    },
    component: Setting,
  },
  {
    path: '/blogDetails',
    meta: {
      requireAuth: true,
    },
    component: BlogDetails,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 预留拦截器
  if (to.meta.requireAuth) {
    // 需要验证
    if (SessionStorage.has('token')) {
      next();
    } else {
      next({ path: '/login' });
    }
    next()
  } else {
    next();
  }
});

export default router;
