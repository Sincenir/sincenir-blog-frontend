<template>
  <div class="sincenir-setting-continer">
    <q-card>
      <q-tab-panels v-model="tab" animated class="q-px-xl" style="flex-grow: 1; width: 90vh">
        <q-tab-panel name="group">
          <div class="text-h6">Mails</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="blog">
          <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="user">
          <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />

      <q-tabs v-model="tab" dense class="bg-grey-3 absolute-bottom" align="justify" narrow-indicator>
        <q-tab name="group" label="Group" />
        <q-tab name="blog" label="Blog" />
        <q-tab name="user" label="User" />
      </q-tabs>
    </q-card>
  </div>
  <!-- <div style="height: 100vh">
    <q-tabs v-model="tab" class="text-teal">
      <q-tab name="group" icon="mail" label="组" />
      <q-tab name="blog" icon="alarm" label="博客" />
      <q-tab name="user" icon="movie" label="用户" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated class="shadow-2 rounded-borders">
      <q-tab-panel name="group">
        <div class="text-h6" v-for="(item, index) in 100" :key="index">Mails</div>
      </q-tab-panel>

      <q-tab-panel name="blog">
        <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="user">
        <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      tab: "group"
    };
  }
};
</script>

<style lang="stylus">
.sincenir-setting-continer {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
</style>