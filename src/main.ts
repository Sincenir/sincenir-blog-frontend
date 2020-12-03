import Vue from 'vue';
import App from './App.vue';
import store from './store';
import {router} from './router';
import { api } from './api';
import './quasar';
import 'animate.css/animate.min.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);
Vue.config.productionTip = false;

Vue.prototype.$s = api;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
