'use strict'

const Koa = require('koa')
const mongoose = require('mongoose')
const config = require('./config')

const app = new Koa()

const dbUrl = config.db.url
mongoose.Promise = require('bluebird')
mongoose.connect(dbUrl)
const db = mongoose.connection

db.once('open', () => {
  console.log('数据库连接成功...')
})
db.on('error', () => {
  console.log('数据库连接失败...')
})

// 错误处理
const errHandle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.body = err.message
    console.log('错误为：', err, err.statusCode)
  }
}
const router = require('./router')()
app.use(errHandle)
app.use(router.routes())

app.listen(config.port)

console.log(`listening to port${config.port}...`)
