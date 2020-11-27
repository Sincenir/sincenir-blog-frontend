import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [
      {
        id: 1,
        createUser: 1,
        createDate: 100000000,
        updateDate: 100000000,
        title: 'vue-cli起步',
        markdown: 'xxxxx',
      },
      {
        id: 2,
        createUser: 1,
        createDate: 100000000,
        updateDate: 100000000,
        title: 'vue-cli起步',
        markdown: '111111111111113432141sadajs;lafjaslfjasklfgfbcmvnlksdjfoiejf',
      },
      {
        id: 3,
        createUser: 1,
        createDate: 100000000,
        updateDate: 100000000,
        title: 'vue-cli起步',
        markdown: '111111111111113432141sadajs;lafjaslfjasklfgfbcmvnlksdjfoiejf',
      },
      {
        id: 4,
        createUser: 1,
        createDate: 100000000,
        updateDate: 100000000,
        title: 'vue-cli起步',
        markdown: '111111111111113432141sadajs;lafjaslfjasklfgfbcmvnlksdjfoiejf',
      },
      {
        id: 5,
        createUser: 1,
        createDate: 100000000,
        updateDate: 100000000,
        title: 'vue-cli起步',
        markdown: '111111111111113432141sadajs;lafjaslfjasklfgfbcmvnlksdjfoiejf',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
