const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
//const cors = require('cors')
//const morgan = require('morgan')


const app = express()
const port = 3000
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/status', (req, res) => {
    res.send('On est bien dans status')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})