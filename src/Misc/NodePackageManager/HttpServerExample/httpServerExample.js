/**
 * Notes:
 * - This implementation is not using EXPRESS
 * - We use res.end to send data back to the browser
 * - Need to stringify the object to be sent back
 */

import http from 'http'
const PORT = 3000

const server = http.createServer((req, res) => {
  let id = 0
  let name = ''

  if (req.url === '/') {
    id = 1234
    name = 'homepage'
  } else if (req.url === '/endpoint1') {
    id = 3434
    name = 'endpoint1'
  } else {
    res.statusCode = 404
    res.end()
    return
  }

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(
    JSON.stringify({
      id,
      name,
    })
  )
})

// Activate server
server.listen(PORT, () => {
  console.log(`listening to post ${PORT}...`)
})
