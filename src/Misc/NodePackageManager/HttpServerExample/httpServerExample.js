/**
 * Notes:
 * - This implementation is not using EXPRESS
 * - We use res.end to send data back to the browser
 * - Need to stringify the object to be sent back
 */

import http from 'http'
const PORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  // Send response back to the browser
  res.end(
    JSON.stringify({
      id: 1234,
      name: 'Hello World',
    })
  )
})

// Activate server
server.listen(PORT, () => {
  console.log(`listening to post ${PORT}...`)
})
