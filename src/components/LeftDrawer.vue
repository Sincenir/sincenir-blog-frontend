<template>
  <transition name="left-drawer">
    <div @click.stop class="left-drawer">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 100vh; width: 330px;"
        class="q-pb-md cloumn"
      >
        <q-btn
          flat
          class="sincenir-btn-close"
          icon="close"
          size="md"
          color="grey-4"
          @click="$emit('handle-menu', false)"
        />

        <!-- 头像 -->
        <div class="sincenir-center" style="height: 150px">
          <q-avatar class="sincenir-avatar" color="primary" text-color="white" size="80px">
            <img :src="require('@/assets/avater.jpg')" />
          </q-avatar>
        </div>

        <!-- 菜单 -->
        <div>
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              v-ripple
              class="text-grey-1"
              :to="`/${menuItem.key}`"
              @click="$emit('handle-menu', false)"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-separator />

        <!-- 日期查看 -->
        <div class="sincenir-center q-pt-sm">
          <q-date v-model="date" minimal class="bg-grey-5" />
        </div>

        <!-- 语言分类 -->
        <div class="sincenir-left q-px-md q-gutter-sm">
          <!-- <q-tree
            class="text-grey-1"
            dark
            :nodes="groups"
            default-expand-all
            selected-color="primary"
            :selected.sync="selected"
            node-key="id"
            label-key="name"
            @update:selected="handleTreeClick"
          />-->
          <q-tree
            class="full-width"
            :nodes="groups"
            node-key="id"
            default-expand-all
            :selected.sync="selectedKey"
          >
            <template v-slot:default-header="prop">
              <div>
                <div class="text-weight-bold text-primary col-8">{{ prop.node.name }}</div>
                <q-icon
                  name="add"
                  color="grey-1"
                  size="20px"
                  class="q-mr-sm q-mt-xs absolute-right"
                  @click.stop
                >
                  <q-popup-edit v-model="createGroupName" content-class="bg-dark text-white">
                    <template v-slot="{ set }">
                      <q-input dark v-model="createGroupName" hint="新的组名" dense autofocus counter>
                        <template v-slot:append>
                          <q-icon
                            color="positive"
                            name="check_circle"
                            @click.stop="() => {set();handleCreateGroup(prop.node);}"
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </q-icon>
              </div>
            </template>
          </q-tree>
        </div>

        <!-- 技巧 -->
        <div></div>

        <!-- 月度查看 -->
        <div></div>
      </q-scroll-area>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { get } from "@/api/server.ts";

export default Vue.extend({
  data() {
    return {
      createGroupName: "",
      selectedKey: -1,
      date: "2019/02/01",
      menuList: [
        {
          key: "home",
          icon: "inbox",
          label: "首页"
        },
        {
          key: "syntax",
          icon: "send",
          label: "语法"
        },
        {
          key: "skill",
          icon: "delete",
          label: "技巧"
        },
        {
          key: "software",
          icon: "error",
          label: "软件"
        },
        {
          key: "setting",
          icon: "settings",
          label: "设置"
        }
      ],
      // 滚动条
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555"
      },

      contentActiveStyle: {
        // backgroundColor: "#eee",
        color: "black"
      },

      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#666",
        width: "5px",
        opacity: 0.75
      },

      // tree 数据
      simple: [
        {
          label: "前端",
          children: [
            {
              label: "JavaScript",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }
              ]
            },
            {
              label: "HTML",
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }
              ]
            },
            {
              label: "CSS",
              children: [
                {
                  label: "Happy atmosphere (with image)"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }
              ]
            }
          ]
        },
        {
          label: "后端",
          children: [
            {
              label: "Java"
            },
            {
              label: "Python"
            },
            {
              label: "C"
            },
            {
              label: "C++"
            },
            {
              label: "C#"
            },
            {
              label: "PHP"
            }
          ]
        }
      ],
      selected: "前端",

      groups: []
    };
  },

  async created() {
    let res = await this.$s.getGroups();
    this.groups = res;
  },

  watch: {
    selectedKey: function(val) {
      if (val == null) {
        return;
      }
      this.$router.push({
        path: "/blog",
        query: { id: String(val) }
      });
      this.$emit("handle-menu", false);
    }
  },

  methods: {
    handleMenuClick(val: any) {
      // console.log(val);
    },

    handleTreeClick(target: number | null) {
      this.$router.push({
        path: "/blog",
        query: { id: String(target) }
      });
      this.$emit("handle-menu", false);
    },

    handleCreateGroup(node: any) {
      this.$s.createBlogGroup({
        parent_id: node.id,
        level: node.level + 1,
        name: this.createGroupName
      })
      .then((result: any) => {
        // this.
        node.children.push(result[0]);
        this.$cyy.toast('创建成功');
      })
    }
  }
});
</script>


<style lang="stylus" scoped>
.left-drawer {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 330px;
  color: #fff;
  background-color: #000;
  z-index: 999;
  // background: url('../assets/home.webp') center center / cover no-repeat rgb(55, 34, 34);
  overflow-y: auto;

  .sincenir-btn-close {
    position: absolute;
    right: 15px;
    top: 15px;
  }
}

.left-drawer-enter, .left-drawer-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

.left-drawer-enter-active, .left-drawer-leave-active {
  transition: all 0.8s ease;
}

.sincenir-avatar {
  transition: all 0.8s ease;
  box-shadow: 2px 2px 5px #888888;

  // animation avatarOut 1s forwards
  // -webkit-animation avatarOut 1s forwards /*Safari and Chrome*/

  // @keyframes avatar {
  // 0% {
  // box-shadow 2px 2px 5px #888888
  // transform rotate(0) scale(1)
  // }

  // 100% {
  // box-shadow 2px 2px 5px #888888
  // transform rotate(360deg) scale(1.2)
  // }
  // }

  // @keyframes avatarOut {
  // 0% {
  // box-shadow 2px 2px 5px #888888
  // transform rotate(360deg) scale(1.2)

  // }

  // 100% {
  // box-shadow 2px 2px 5px #888888
  // transform rotate(0) scale(1)
  // }
  // }
  &:hover {
    // animation avatar 1s forwards
    // -webkit-animation avatar 1s forwards  /*Safari and Chrome*/
    transform: rotate(360deg) scale(1.2);
    box-shadow: 2px 2px 5px #888888;
  }
}
</style>
