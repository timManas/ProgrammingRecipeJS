import express from 'express'

import { friendsRouter } from './routes/friendsrouter.js'
import { messagesRouter } from './routes/messagesrouter.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 5000

let enableNext = true // Setting this to false, we not get anything back

// Example of middleware
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
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use('/site', express.static(path.join(__dirname, 'public')))

// Sets req body to be in json format
app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('Hello World !')
})

// Routers
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

// Start Express
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
