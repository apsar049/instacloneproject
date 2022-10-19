const express = require('express')
require('./db/connection')
require('dotenv').config()
const app = express()
const router = require('./routes/router')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(router)
app.use('/uploads', express.static('./uploads'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(process.env.PORT || 8080, () => {
  console.log(`port running on 8080`)
})
