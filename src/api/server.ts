import axios from 'axios';
import { toast } from '@/components/toast';
import { SessionStorage } from 'quasar';

axios.defaults.timeout = 50000;
// 这个空字符串必须给, 这个问题调整了两天, 问题出在这里, 这里给地址会因为同源策略导致跨域
axios.defaults.baseURL = '';
// axios.defaults.baseURL = '';  // 开着这个会导致跨域失效

// 请求拦截器
// http request interceptor
axios.interceptors.request.use(
  (config: any): any => {
    // 配置请求头
    if (!config.headers?.['Content-Type']) {
      // config.headers["Content-Type"] = "application/json;application/x-www-form-urlencoded;charset=UTF-8";
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
      config.headers.Authorization = SessionStorage.getItem('token');
      console.log(config.headers.Authorization);
      // 如果这里使用上面的请求头, 会导致后端只能接收空对象, 这里需要看完后端适配再做调整.
    }

    // 请求发送的数据在发送前更新为字符串
    config.data = JSON.stringify({
      ...config.data
    });

    return config;
  },

  (error: any): any => {
    return Promise.reject(error);
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response: any): any => {
    return response;
  },
  (err: any): any => {
    switch (err.response.status) {
      case 400:
        err.response.message = "400错误";
        break;
      case 401:
        err.response.message = "未授权，请重新登录";
        break;
      case 403:
        err.response.message = "拒绝访问";
        break;
      case 404:
        err.response.message = "请求错误,未找到该资源";
        break;
      case 405:
        err.response.message = "请求方法未允许";
        break;
      case 408:
        err.response.message = "请求超时";
        break;
      case 500:
        err.response.message = "服务器端出错";
        break;
      case 501:
        err.response.message = "网络未实现";
        break;
      case 502:
        err.response.message = "网络错误";
        break;
      case 503:
        err.response.message = "服务不可用";
        break;
      case 504:
        err.response.message = "网络超时";
        break;
      case 505:
        err.response.message = "http版本不支持该请求";
        break;
      default:
        err.response.message = `other连接错误${err.response.status}`;
    }
    toast(err.response.message);
    return Promise.reject(err.response);
  }
)

export function get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
    .then((result) => {
      resolve(result.data);
    }).catch((err) => {
      reject(err);
    });
  });
}

export function post(url: string, data?: {}) {
  return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        });
    }
  );
}
