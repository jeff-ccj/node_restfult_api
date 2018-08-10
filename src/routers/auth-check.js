import apiConfig from './api.config'
import config from '../config'
import jwt from 'jsonwebtoken'

export default function (req, res, next) {
  let path = req.path
  let unLogin = apiConfig.unLogin
  let method = req.method.toLowerCase()

  // 设置跨域
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // if (method === 'options') {
  //   res.sendStatus(200)
  //   return
  // }

  // 处理参数统一方式
  Object.assign(req.body, req.query)

  // 测试暂时全部调过验证
  // return next()

  // console.log(path, method)
  //接口不需要登陆：直接next
  if ((unLogin[method] && unLogin[method].indexOf(path) !== -1)) {
    return next()
  }

  //接口需要登陆
  // const token = req.headers.token
  // if (!token) {
  //   return res.json({
  //     code: 401,
  //     msg: 'you need login:there is no token'
  //   })
  // }
  //
  // jwt.verify(token, config.tokenKey, (err, decoded) => {
  //   if (err) {
  //     return res.json({
  //       code: 401,
  //       msg: err.message
  //     })
  //   } else {
  //     req.staff = decoded
  //     return next()
  //   }
  // })
}
