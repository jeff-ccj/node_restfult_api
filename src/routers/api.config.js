/*
* 配置不需要token验证的路由
* */
export default {
  unLogin: {
    get: [
      '/user/exist'
    ],
    post: [
      '/session',
      '/staff',
      '/user'
    ],
    put: [
      '/user'
    ],
    delete: [
      '/user'
    ]
  }
}
