const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')

const PORT = 3000

const app = express()

app.use(helmet())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/secret', (req, res) => {
  res.send(`Secret value is 42`)
})

// Add certificate and key to server
https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Listening to port: ${PORT}...`)
  })
