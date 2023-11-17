import express from 'express'
// import { getMessages } from './controllers/messagecontroller.js'
import {
  getFriends,
  getFriend,
  postFriend,
} from './controllers/friendscontroller.js'

import * as msgController from './controllers/messagecontroller.js'

const app = express()
const PORT = 5000

let enableNext = true // Setting this to false, we not get anything back

// Example of middleware
app.use((req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url}`)

  // Notice, if you commend this out. Request times out
  // This will go to the next route which is (/)
  if (enableNext) {
    next()
  }

  const delta = Date.now() - start
  console.log('Delta: ' + delta + 'ms')
})

// Sets req body to be in json format
app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('Hello World !')
})

app.get('/friends', getFriends)
app.get('/friends/:friendId', getFriend) // Parameterized Route
app.post('/friends', postFriend)

app.get('/messages', msgController.getMessages)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
