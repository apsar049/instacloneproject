const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgpath: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }
})

const users = new mongoose.model('imgdata', userSchema)

module.exports = users
