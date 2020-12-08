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
    <mavon-editor ref="md" style="z-index: 2" v-else v-model="blogDetails.blog" @save="saveBlog" @imgAdd="handleUploadImage" />
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
import axios from 'axios';

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
    },

    handleUploadImage(pos, file) {
      // // 第一步.将图片上传到服务器.
      // let formdata = new FormData();
      // formdata.append('files', file);
      // this.$s.uploadFile(formdata)
      // .then((result) => {
      //   console.log(result);
      // }).catch((err) => {
      //   console.log(err);
      // });
      // axios({
      //     url: '/api/upload/blog/image',
      //     method: 'post',
      //     data: formdata,
      //     headers: { 'Content-Type': 'multipart/form-data' },
      // }).then((url) => {
      //   console.log(url);
      //     // $vm.$img2Url(pos, url);
      // })
    }
  },
};
</script>