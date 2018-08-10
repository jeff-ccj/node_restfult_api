import Express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import api from './routers/api'
import {SYSTEM as systemConfig} from './config'

let app = Express()
//中间件设置
app.use(cookieParser('sessionCaptcha'))
app.use(session({
  secret: 'sessionCaptcha', // 与cookieParser中的一致
  resave: true,
  saveUninitialized: true,
  name: 'USER_INFO_ID'
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 路由
app.use('/', api)
// 启动
app.listen(systemConfig.port, '127.0.0.1', (req, res) => {
    console.log(new Date(), 'server running http://127.0.0.1:' + systemConfig.port)
})