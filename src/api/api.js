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

// 图书信息
export function getBooks() {
  return request({
    url: '/book/getAllBook',
    method: 'get'
  });
}

// 按照条件搜索图书
export function searchBook(data) {
  return request({
    url: '/book/searchBook',
    method: 'post',
    data
  });
}

// 用户借阅图书提交到后端
export function updateBorrowReturn(data) {
  return request({
    url: '/book/updateBorrowReturn',
    method: 'post',
    data
  });
}

// 获取用户借阅记录(已经归还的)
export function searchLentHistory(data) {
  return request({
    url: '/book/lentHistory',
    method: 'post',
    data
  });
}

// 获取用户借阅记录(未归还的)
export function searchUnReturnHistory(data) {
  return request({
    url: '/book/unReturnHistory',
    method: 'post',
    data
  });
}

// 用户归还图书
export function returnBook(data) {
  return request({
    url: '/book/returnBook',
    method: 'post',
    data
  });
}

// 获取所有课程信息
export function getAllCourse() {
  return request({
    url: '/course/getAllCourse',
    method: 'get'
  });
}

// 获取已选课程信息
export function getSelectedCourse(data) {
  return request({
    url: '/course/getChoosedCourse',
    method: 'post',
    data
  });
}

// 按照条件搜索课程
export function searchCourse(data) {
  return request({
    url: '/course/searchCourse',
    method: 'post',
    data
  });
}

// 用户选课
export function chooseCourse(data) {
  return request({
    url: '/course/chooseCourse',
    method: 'post',
    data
  });
}

// 用户退课
export function returnCourse(data) {
  return request({
    url: '/course/returnCourse',
    method: 'post',
    data
  });
}

// 获取书评信息
export function getAllReview(data) {
  return request({
    url: '/review/getAllReview',
    method: 'post',
    data
  });
}