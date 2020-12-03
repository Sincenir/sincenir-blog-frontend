<template>
  <q-dialog
    persistent
    ref="dialog"
    :transition-show="id === -1 ? 'scale' : 'flip-down'"
    :transition-hide="id === -1 ? 'scale' : 'flip-up'"
    @hide="onDialogHide"
  >
    <q-card :style="{ 'width': '90vw' }">
      <q-card-section
        class="scroll q-gutter-y-md q-px-lg q-mt-none"
        align="center"
        :style="{ 'max-height': '70vh' }"
      >
        <!-- 描述 -->
        <q-input
          dense
          v-model="blogItem.name"
          type="textarea"
          autogrow
          label="博文名称"
          maxlength="255"
        />

        <!-- 描述 -->
        <q-input
          dense
          v-model="blogItem.title"
          type="textarea"
          autogrow
          label="博文描述"
          maxlength="255"
        />
      </q-card-section>

      <q-card-actions align="right">
        <!-- <q-btn v-if="id !== -1" color="negative" label="删除" @click="handleDelete" /> -->

        <q-space />

        <q-btn outline color="cancel" label="取消" @click="handleCancel" />
        <q-btn color="primary" label="确定" @click="handleOk" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default{
  name: "PwTaskInfo",

  props: {
    groupId: {
      type: Number,
      required: true
    },
    id: {
      type: Number
    }
  },

  async created() {
    this.$q.loading.show();

    this.$q.loading.hide();
  },

  data() {
    return {
      blogItem: {
        id: -1,
        name: "",
        title: "",
      }
    };
  },

  methods: {
    handleOk() {
      this.$emit("ok", {
        name: this.blogItem.name,
        title: this.blogItem.title,
        groupId: this.groupId,
      });

      this.hide();
    },

    show() {
      this.$refs.dialog.show();
    },

    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      this.$emit("hide");
    },

    handleCancel() {
      // 我们只需要隐藏对话框
      this.hide();
    }
  },

  components: {}
};
</script>

<style lang="stylus" scoped></style>
