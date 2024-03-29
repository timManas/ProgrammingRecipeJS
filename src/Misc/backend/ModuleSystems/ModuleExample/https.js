/**
 * Notes:
 * This is CommonJS Notation.
 */
console.log('Example WITHOUT Destructuring')

const request = require('./request.js')
const response = require('./response.js')

function makeRequest(url, data) {
  console.log('timeout: ' + request.TIMEOUT_SEC)
  request.sendReq(url, data)
  return response.read()
}
console.log(makeRequest('https://www.google.com', 'hello') + '\n\n\n')

// DESTRUCTURING Example ----------------------------------------
/**
 Notice we can access the function names directly instead of using the '.' notation
 */
console.log('Example using Destructuring')
const { sendReq, TIMEOUT_SEC } = require('./request.js')
const { read } = require('./response.js')

function makeRequestDestructuring(url, data) {
  console.log('timeout: ' + TIMEOUT_SEC)
  sendReq(url, data)
  return read()
}

console.log(makeRequestDestructuring('https://www.google.com', 'hello'))
