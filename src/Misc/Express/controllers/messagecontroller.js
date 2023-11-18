function getMessages(req, res, next) {
  res.json({
    message: 'This is a message',
  })
}

function sendBadMessage(req, res, next) {
  res.json({
    err: 'This is a bad message',
  })
}

export { getMessages, sendBadMessage }
