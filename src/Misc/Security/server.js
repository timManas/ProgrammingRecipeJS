const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const dotenv = require('dotenv')

const PORT = 3000

// Allow dotenv to fetch environmental variables
dotenv.config()

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const app = express()

app.use(helmet())

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true //TODO
  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must be logged in...' })
  }

  next() // Grant access to other API's
}

app.get('/auth/google', (req, res) => {})

// This is the callback once google authorizes our credentials
app.get('/auth/google/callback', (req, res) => {})

// Logout
app.get('/auth/logout', (req, res) => {})

// Checks Login Credentials First before allowing access to secret API
app.get('/secret', checkLoggedIn, (req, res) => {
  res.send(`Secret value is 42`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
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
