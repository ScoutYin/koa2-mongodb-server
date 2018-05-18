'use strict'

const mongoose = require('mongoose')
// const ArticleModel = mongoose.model('Article')
const ArticleModel = require('../models/article')

class ArticleController {
  constructor () {

  }
  static async getArticles (ctx, next) {
    const articles = await ArticleModel.find({})
    ctx.body = JSON.stringify(articles)

  }
  static async addArticle (ctx, next) {
    
  }
}

module.exports = ArticleController