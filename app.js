'use strict'

const Koa = require('koa')
const app = new Koa()

console.log('listening to localhost:8080...')

app.use(async function(ctx) {
  ctx.body = 'Hello world'
})

app.listen(8080)