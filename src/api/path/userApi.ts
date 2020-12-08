import { get, post } from '@/api/server';
import { LocalStorage, SessionStorage } from "quasar";

function Login(data: any) {
  return post(`/api/user/login`, data);
}

function Logout(data: any) {
  return post(`/api/user/logout`, data);
}

// // 获取自己的信息
// export function GetSelfInfo() {
//   return get(`/api/user/info?username=${LocalStorage.getItem('username')}`);
// }

// // 获取头像
// export function GetAvatar(username: string) {
//   return get(`/api/user/avatar?username=${username}`);
// }

// export function CheckPwd(pwd: string) {
//   return post("/api/user/check-pwd", {
//     id: SessionStorage.getItem(vars.keys.userId),
//     username: LocalStorage.getItem(vars.keys.username),
//     password: pwd
//   });
// }

// export function UpdateInfo(info: UserUpdateInfo) {
//   return put(
//     `/api/user/update-info?id=${SessionStorage.getItem(vars.keys.userId)}`,
//     info
//   );
// }

// export function UpdatePwd(oldPwd: string, newPwd: string) {
//   return put("/api/user/update-pwd", {
//     id: SessionStorage.getItem(vars.keys.userId),
//     username: LocalStorage.getItem(vars.keys.username),
//     oldPassword: oldPwd,
//     newPassword: newPwd
//   });
// }

// export function refreshToken() {
//   return post(
//     `/api/user/refresh_token?refreshToken=${SessionStorage.getItem()}`
//   );
// }

export const userApi = {
  Login,
  Logout,
};

export interface UserApi {
  Login: (data: any) => any;
  Logout: (data: any) => any;
}
