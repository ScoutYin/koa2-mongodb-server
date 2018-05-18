'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  id: String,
  title: String,
  body: String,
  tags: Array,
  read_nums: Number,
  meta: {
    created_at: {
      type: Date,
      default: Date.now()
    },
    updated_at: {
      type: Date,
      default: Date.now()
    }
  }
})

const ArticleModel = mongoose.model('article', ArticleSchema)

module.exports = ArticleModel