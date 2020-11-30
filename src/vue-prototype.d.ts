import { Api } from "@/api";

declare module "vue/types/vue" {
  interface Vue {
    $s: Api;
  }
}

