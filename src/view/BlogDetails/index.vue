<template>
  <div class="q-mx-auto q-my-xl q-pt-xl" style="width: 90vw">
    <!-- <article v-html="blogDetails.blog" ></article> -->
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
    <!-- <mavon-editor
      class="md"
      :value="blogDetails.blog"
      :subfield = "false"
      :defaultOpen = "'preview'"
      :toolbarsFlag = "false"
      :editable="false"
      :scrollStyle="true"
      :ishljs = "true"
    ></mavon-editor>-->
    <q-btn
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
    console.log(res);
  },

  methods: {
    saveBlog(value, render) {
      console.log(this.blogDetails);
      this.$s.updateBlog(this.blogDetails)
      .then((result) => {
        if (result.status === 1) {
          console.log("保存成功")
        }
      }).catch((err) => {
        console.log(err);
        
      });
    }
  },
};
</script>