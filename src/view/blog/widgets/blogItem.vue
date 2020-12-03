<template>
  <q-card dark bordered class="bg-grey-9 q-mt-md my-card" :style="{'width': '70vw'}" @click="handleBlogItemClick(data.id)">
    <q-card-section>
      <div class="text-h6">{{ data.name }}</div>
      <div class="text-subtitle2">{{ `by${data.creator}` }}</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section>
      <!-- {{ data.markdown }} -->
      <div>{{ data.title }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"],
  
  data() {
    return {
      html: ''
    }
  },

  methods: {
    handleBlogItemClick(id: number) {
      this.$router.push({
        path: '/blogDetails',
        query: { id: String(id) }
      });
    }
  },
})
</script>