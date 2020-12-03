<template>
  <div class="full-width">
    <div class="blogs-container q-my-xl">
      <blog-item v-for="item in blogs" :key="item.id" :data="item"></blog-item>
    </div>

    <q-btn
      class="fixed-bottom-right q-mb-xl q-mr-xl"
      style="z-index: 3"
      icon="add"
      round
      @click="handleCreateBlog"
    ></q-btn>
  </div>

</template>

<script>
// $store.state.blogs 获取 vuex
import BlogItem from './widgets/blogItem.vue';
import CreateBlog from './dialogs/createBlog.vue';
export default {
  async created() {
    this.groupId = Number(this.$route.query.id ?? -1);
    const res = await this.$s.getBlog([this.groupId]);
    this.blogs = res;
  },

  data() {
    return {
      blogs: [],
      groupId: -1,
    }
  },

  watch: {
    '$route.query.id': async function(val) {
      if (val === null) return;
      const res = await this.$s.getBlog([val]);
      this.groupId = Number(val);
      this.blogs = res;
    }  
  },

  methods: {
    handleCreateBlog() {
      this.$q
        .dialog({
          component: CreateBlog,
          id: -1,
          groupId: this.groupId,
          parent: this
        })
        .onOk(async (result) => {
          const res = await this.$s.createBlog(result);
          console.log(res);
          this.blogs.unshift(res[0]);
        });
    }
  },

  components: {
    BlogItem
  }
};
</script>

<style lang="stylus">
  .blogs-container
    display flex
    flex-flow column nowrap
    justify-content center
    align-items center
    margin auto
    width 100%
</style>