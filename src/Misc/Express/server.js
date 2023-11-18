import express from 'express'

import { friendsRouter } from './routes/friendsrouter.js'
import { messagesRouter } from './routes/messagesrouter.js'
import path from 'path'
import { fileURLToPath } from 'url'

let enableNext = true // Setting this to false, we not get anything back

const PORT = 5000
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Sets req body to be in json format
app.use(express.json())

// Templating Engine Setup
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// Middleware to calculate response time
app.use((req, res, next) => {
  const start = Date.now()

  // Notice, if you comment this out. Request times out
  // Why ? Because, the request cannot go to the next middleware / route handler
  // This will go to the next route which is (/)
  if (enableNext) {
    next()
  }

  const delta = Date.now() - start
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

// Express static files from the server
// This is where you can send html files for websites
app.use('/', express.static(path.join(__dirname, 'public')))

// Template Engine Example
app.get('/', (req, res, next) => {
  // res.send('Hello World !')
  res.render('index', {
    title: 'Hello wolrd',
    caption: 'Quote for the Day',
  })
})

// Routers
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

// Start Express
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
