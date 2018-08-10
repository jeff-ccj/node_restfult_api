import moment from 'moment'
export default {
  /**
   * 时间格式化
   * @param val
   * @param format
   * @returns {string}
   */
  datetime (val = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(val).format(format)
  },
  /**
   * 处理返回数据
   * @param resData
   * @param code
   * @returns {{code: number}}
   */
  responseDataFormat (resData = {}, code = 10001) {
    let res = {
      code: 200
    }
    if (!resData) {
      res = {
        code: code,
        msg: '参数错误'
      }
    } else if (resData.msg || (!resData.data && resData.data !== 0)) {
      res = {
        code: resData.code || code,
        msg: resData.msg || '参数错误'
      }
    } else {
      Object.assign(res, resData)
    }
    return res
  },
  /**
   * 请求函数统一处理
   * @param promise
   * @param res
   * @param next
   */
  customPromise (promise, res, next) {
    try {
      let newP = null
      // 参数判断
      if (promise && res) {
        if (Object.prototype.toString.call(promise) !== "[object Promise]") {
          // res.json(this.responseDataFormat({msg: "'customPromise'函数传参必须为promise"}))
          newP = Promise.resolve(promise => promise)
        } else {
          newP = promise
        }
        newP.then((data) => {
          // if (typeof data !== 'object' || (!data.data && !data.msg)) {
          //   data = {data: data}
          // }
          res.json(this.responseDataFormat({data: data}))
        }).catch(err => {
          res.json(this.responseDataFormat({msg:err.message}))
          console.log(err.stack || '参数错误')
        })
      } else {
        res.json("'customPromise'函数传参有误，请检查")
      }
    } catch (err) {
      res.json(this.responseDataFormat({msg:err.message}))
      console.log(err.stack||'参数错误')
    }
  }
}