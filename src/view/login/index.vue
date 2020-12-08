<template>
  <div class="sincenir-login-page">

    <div class="absolute-bottom full-width">
      <div class="sincenir-login-area">
        <!-- 登录框 -->
        <q-form @submit="onSubmit" class="pw-login-form q-gutter-y-lg q-mx-auto">
          <q-input
            rounded
            outlined
            color="grey-1"
            clearable
            maxlength="30"
            v-model="loginInfo.username"
            :input-style="{ color: '#fff' }"
          >
            <template v-slot:prepend>
              <q-avatar>
                <img src="@/assets/login/login-user.png" />
              </q-avatar>
            </template>
          </q-input>

          <q-input
            rounded
            outlined
            color="grey-1"
            type="password"
            clearable
            autocomplete="off"
            maxlength="30"
            v-model="loginInfo.password"
            :input-style="{ color: '#fff' }"
          >
            <template v-slot:prepend>
              <q-avatar>
                <img src="@/assets/login/login-passwd.png" />
              </q-avatar>
            </template>
          </q-input>

          <div>
            <q-btn
              class="full-width"
              type="submit"
              color="green-14"
              label="登陆"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import {LocalStorage, SessionStorage } from 'quasar';
// import { Status } from "@/types/server";
export default {
  name: "PwLoginPage",

  props: {},

  // beforeCreate() {},

  async created() {
    this.$q.loading.show();

    // if (this.$q.localStorage.has(this.$v.keys.username)) {
    //   const username = this.$q.localStorage.getItem(this.$v.keys.username);
    //   this.loginInfo.username = username;

    //   if (username) {
    //     await this.setAvatar(username);
    //   }
    // }

    this.$q.loading.hide();
  },

  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },

  computed: {},

  watch: {},

  methods: {
    async onSubmit() {
      this.$q.loading.show();

      if (!this.loginInfo.username || !this.loginInfo.password) return;

      const result = await this.$s.Login(this.loginInfo);
      
      if (result && result.status === 1) {
        // 成功
        LocalStorage.set('username', result.data.username);
        LocalStorage.set('nickname', result.data.nickname);
        SessionStorage.set('token', result.token);
        this.$cyy.toast("欢迎回来，" + result.data.nickname, "success", "top");
        this.$router.push({ path: '/home' });
      } else {
        // 失败
        this.$cyy.toast("登录失败，" + (err.data?.data ?? "unknown"), "error");
      }

      this.$q.loading.hide();
    },

    async BlurUsername() {
      // this.loginInfo.username = this.loginInfo.username?.replace(/\s*/g, "");
      // this.loginInfo.username && this.setAvatar(this.loginInfo.username);
    }
  },

  components: {}
};
</script>

<style lang="stylus" scoped>
.sincenir-login-page
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: url('../../assets/home.webp') center center / cover no-repeat rgb(55, 34, 34);

.sincenir-login-area
  margin: 0 auto;
  // width 70%
  height 300px
  text-align center

.pw-login-form
  width 60%
  margin-top 50px
</style>
