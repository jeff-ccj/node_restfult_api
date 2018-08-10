/**
 * 基础数据提供
 */
import express from 'express'
// import basic from '../services/basic'
// import utils from '../utils'

let router = express.Router()

// 存储启动时的时间戳，用于判断是否需要更新vuex数据
let nowDate = +new Date()
router.get('/timestamp', (req, res, next) => {
  res.json({
    code: 200,
    data: nowDate
  })
})


module.exports = router