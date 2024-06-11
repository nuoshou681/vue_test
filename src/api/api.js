// api.js
import request from '@/request/request';

// 登录接口
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  });
}

// 测试接口
export function getTest() {
  return request({
    url: '/user/test',
    method: 'get'
  });
}