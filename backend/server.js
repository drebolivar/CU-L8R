const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use(cors())
app.use(logger('dev'))
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.post('/media', async (req, res) => {
  console.log('here is the body', req.body)
  let newMedia = await Media.create(req.body)
  res.send(newMedia)
})

app.put('/media/:id')
app.delete('/media/:id')

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
