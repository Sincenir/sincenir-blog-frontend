<template>
  <div class="full-width">
  <div class="column absolute-center">
    <blog-item v-for="item in blogs" :key="item.id" :data="item"></blog-item>
  </div>
  </div>

</template>

<script>
// $store.state.blogs 获取 vuex
import BlogItem from './widgets/blogItem.vue';
export default {
  async created() {
    const groupId = Number(this.$route.query.id ?? -1);
    const res = await this.$s.getBlog(groupId);
    this.blogs = res;
  },

  data() {
    return {
      blogs: []
    }
  },

  watch: {
    '$route.query.id': async function(val) {
      const res = await this.$s.getBlog(val);
      console.log(res);
      this.blogs = res;
    }  
  },

  components: {
    BlogItem
  }
};
</script>