import { Api } from "@/api";
import { ToastType, ToastPosition } from "./components/toast.ts";

declare module "vue/types/vue" {
  interface Vue {
    $s: Api;
    $cyy: {
      toast: (
        message: string,
        type?: ToastType,
        position?: ToastPosition
      ) => Function;
      viewer: (vnode: Vue, urlList: string[], index: number) => Function;
    };
  }
}


