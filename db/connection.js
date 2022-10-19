const mongoose = require('mongoose')

const DB =
  'mongodb+srv://root:10xacademy@cluster0.b0tyv80.mongodb.net/imageupload?retryWrites=true&w=majority'

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('DATABASE connected')
  })
  .catch(err => {
    console.log('error' + err.message)
  })
