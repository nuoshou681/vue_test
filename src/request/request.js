// request.js
import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8080', // API的base_url
  timeout: 10000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如设置token
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;