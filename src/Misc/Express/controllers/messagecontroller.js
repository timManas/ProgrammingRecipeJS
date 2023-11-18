import path from 'path'
import { fileURLToPath } from 'url'

function getMessages(req, res, next) {
  res.json({
    message: 'This is a message',
  })
}

function getMotivation(req, res, next) {
  // 1st get the __filename and then __dirname
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  // path.join() will join all the names under a single path
  const fullPath = path.join(__dirname, '..', 'public', 'Yesterday.png')
  console.log('fullPath: ' + fullPath)
  res.sendFile(fullPath)
}

function sendBadMessage(req, res, next) {
  res.json({
    err: 'This is a bad message',
  })
}

export { getMessages, sendBadMessage, getMotivation }
