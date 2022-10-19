const express = require('express')
const { default: mongoose } = require('mongoose')
const router = new express.Router()
const multer = require('multer')
const users = require('../model/userSchema')
const moment = require('moment')

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads')
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`)
  }
})

//img filter

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true)
  } else {
    callback(new Error('only image is allowed'))
  }
}

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage
})

router.post('/register', upload.single('photo'), async (req, res) => {
  const { filename } = req.file
  const { author } = req.body
  const { location } = req.body
  const { description } = req.body

  if (!author || !location || !description || !filename) {
    res.status(401).json({ status: 401, message: 'fill all the fields' })
  }

  try {
    const date = moment(new Date()).format('YYYY-MM-DD')

    const userData = new users({
      author: author,
      location: location,
      description: description,
      imgpath: filename,
      date: date
    })
    const finalData = await userData.save()

    res.status(201).json({ status: 201, finalData })
  } catch (error) {
    res.status(401).json({ status: 401, error })
  }
})

// get data
router.get('/getdata', async (req, res) => {
  try {
    const getUser = await users.find()

    res.status(201).json({ status: 201, getUser })
  } catch (error) {
    res.status(401).json({ status: 401, error })
  }
})

module.exports = router
