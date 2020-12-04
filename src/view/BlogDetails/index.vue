<template>
  <div class="q-mx-auto q-my-xl q-pt-xl" style="width: 90vw">
    <q-bar dark class="bg-grey-5 text-white">
      <div class="col text-center text-weight-bold">
        {{ blogDetails.name }}
      </div>
      <q-btn dense flat icon="close" v-if="isEdit" @click="() => { isEdit = false }" />
    </q-bar>
    <mavon-editor
      v-if="!isEdit"
      style="z-index: 2"
      v-model="blogDetails.blog"
      :editable="false"
      :subfield="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      :scrollStyle="true"
    />
    <mavon-editor style="z-index: 2" v-else v-model="blogDetails.blog" @save="saveBlog" />
    <q-btn
      v-if="!isEdit"
      class="fixed-bottom-right q-mb-xl q-mr-xl"
      style="z-index: 3"
      icon="edit"
      round
      @click="() => isEdit = true"
    ></q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogDetails: {},
      markdownOption: {},
      isEdit: false
    };
  },

  async created() {
    const blogId = Number(this.$route.query.id ?? -1);
    const res = await this.$s.getBlogDetails(blogId);
    this.blogDetails = res;
  },

  methods: {
    saveBlog(value, render) {
      this.$s.updateBlog(this.blogDetails)
      .then((result) => {
        if (result.status === 1) {
          this.$cyy.toast("保存成功");
        }
      }).catch((err) => {
        this.$cyy.toast(err.message, 'error')
      });
    }
  },
};
</script>