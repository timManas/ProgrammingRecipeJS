const fs = require('fs')
const https = require('https')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const cookieSession = require('cookie-session')

// Allow dotenv to fetch environmental variables
require('dotenv').config()

const PORT = 3000

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
}

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google Profile here: ', profile)
  done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

// Save the session to cookie
passport.serializeUser((user, done) => {
  console.log('Started serialized')
  console.log('user.id: ' + JSON.stringify(user))

  done(null, user.id) // Store only the user.id
  console.log('Finished serialized\n')
})

// Read the cookie to get user data
passport.deserializeUser((id, done) => {
  console.log('Started deserialized')
  console.log('id: ' + id)
  done(null, id)
  console.log('Finished deserialized\n')
})

const app = express()

app.use(helmet()) // Sets up   helmet which secures our endpoint by encryption

app.use(
  cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
)

app.use(passport.initialize()) // Sets up passport which helps authenticate users
app.use(passport.session()) // Authenticates the session in the client browser

function checkLoggedIn(req, res, next) {
  console.log('Current user is:', req.user)
  const isLoggedIn = req.isAuthenticated() && req.user
  if (!isLoggedIn) {
    return res.status(401).json({ error: 'You must be logged in...' })
  }

  next() // Grant access to other API's
}

// This is the first step in the login process
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email '], // Scope specifies which data we are requesting from google
  })
)

// This is the callback once google authorizes our credentials
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back')
  }
)

// Logout
app.get('/auth/logout', (req, res, next) => {
  req.logout()
  // removes req.user and terminates session
  return res.redirect('/')
})

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
