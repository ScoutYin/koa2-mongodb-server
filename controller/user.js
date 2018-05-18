'use strict'

const mongoose = require('mongoose')
const userModel = require('../models/user')

class UserController {
  constructor () {

  }
  static async getUsers (ctx, next) {
    const users = await userModel.find({})
    ctx.body = {
      code: 0,
      msg: 'success',
      data: {
        users
      }
    }
    next()
  }
}

module.exports = UserController