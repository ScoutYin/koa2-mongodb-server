'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  age: Number,
  sex: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel