'use strict'

const Router = require('koa-router')
const ArticleCtrl = require('../controller/article')
const UserCtrl = require('../controller/user')
const App = require('../app')

module.exports = () => {
  const router = new Router()

  router.get('/api/v1/articles', ArticleCtrl.getArticles)
  router.get('/api/v1/users', UserCtrl.getUsers)

  return router
}

