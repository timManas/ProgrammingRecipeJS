import express from 'express'
import {
  getFriends,
  getFriend,
  postFriend,
} from '../controllers/friendscontroller.js'

const friendsRouter = express.Router()

// Middleware here
friendsRouter.use((req, res, next) => {
  console.log(`ip: ${req.ip}`)
  next()
})

friendsRouter.post('/', postFriend)
friendsRouter.get('/', getFriends)
friendsRouter.get('/:friendId', getFriend) // Parameterized Route

export { friendsRouter }
