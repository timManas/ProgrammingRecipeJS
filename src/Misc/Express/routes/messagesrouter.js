import express from 'express'
import * as msgController from '../controllers/messagecontroller.js'

const messagesRouter = express.Router()
messagesRouter.get('/', msgController.getMessages)

export { messagesRouter }
