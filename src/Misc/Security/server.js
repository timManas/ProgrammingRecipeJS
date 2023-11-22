const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
// const dotenv = require('dotenv')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')

const PORT = 3000

// Allow dotenv to fetch environmental variables
require('dotenv').config()

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google Profile', profile)
  done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

const app = express()

app.use(helmet()) // Sets up   helmet which secures our endpoint by encryption
app.use(passport.initialize()) // Sets up passport which helps authenticate users

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true //TODO
  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must be logged in...' })
  }

  next() // Grant access to other API's
}

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email'],
  })
)

// This is the callback once google authorizes our credentials
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: false,
  }),
  (req, res) => {
    console.log('Google called us back')
  }
)

// Logout
app.get('/auth/logout', (req, res) => {})

// Checks Login Credentials First before allowing access to secret API
app.get('/secret', checkLoggedIn, (req, res) => {
  res.send(`Secret value is 42`)
})

app.get('/failure', (req, res) => {
  return res.send('Failed to log in...')
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
