<template>
  <div @click="handleMenu(false)">
    <q-btn
      class="sincenir-home-menu"
      outline
      icon="menu"
      size="md"
      color="grey-4"
      label="MENU"
      @click.stop="handleMenu"
    />
    <left-drawer v-show="leftDrawerOpen" @handle-menu="handleMenu"></left-drawer>
    <router-view @open-menu="handleMenu"></router-view>
  </div>
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";
// import HomePage from "./view/home/index.vue";
import LeftDrawer from "./components/LeftDrawer.vue";

export default Vue.extend({
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: false
    };
  },

  methods: {
    handleMenu(flag: boolean) {
      this.leftDrawerOpen = flag;
    }
  },

  components: {
    // HomePage,
    LeftDrawer
    // HelloWorld
  }
});
</script>

<style>
</style>

<style lang="stylus" scoped>
.sincenir-home-menu {
  position: fixed !important;
  left: 25px;
  top: 25px;
  z-index: 99;
}
</style>