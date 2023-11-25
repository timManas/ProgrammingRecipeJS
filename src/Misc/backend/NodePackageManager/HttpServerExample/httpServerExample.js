/**
 * Notes:
 * - This implementation is not using EXPRESS
 * - We use res.end to send data back to the browser
 * - Need to stringify the object to be sent back
 */

import http from 'http'
const PORT = 3000

const dataArr = [
  { id: 1234, name: 'homepage' },
  { id: 3434, name: 'endpoint1' },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json')
  const items = req.url.split('/')

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200
    res.end(JSON.stringify(dataArr))
  } else if (req.method === 'GET' && items[1] === 'endpoint1') {
    res.statusCode = 200
    if (items.length === 3) {
      const data = Number(items[2])
      res.end(JSON.stringify(dataArr[data]))
    } else {
      res.end(JSON.stringify(dataArr))
    }
  } else if (req.method === 'POST' && items[1] == 'endpoint1') {
    req.on('data', (data) => {
      const dataToString = data.toString()
      dataArr.push(JSON.parse(dataToString))
      console.log('dataArr: ' + JSON.stringify(dataArr))
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

// Activate server
server.listen(PORT, () => {
  console.log(`listening to post ${PORT}...`)
})
