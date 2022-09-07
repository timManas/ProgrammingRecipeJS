// Async keyword
// Placed on a function.
// Purpose is convert function to return a promise

const { rejects } = require('assert')
const { resolve } = require('path')

// Also allows 'await' to work inside async functions
console.log('Async')

// Ex1: async function returns a Promise
async function f() {
  return Promise.resolve('Hello World')
}

let f1 = f()
f1.then((value) => console.log(value))

// Await Keyword
// Makes JS wait until the promise settles and returns its result
console.log('\nAwait Keyword')

// Ex1
async function awaitFuncton() {
  let promise = Promise.resolve('Resolved')

  let result = await promise
  console.log('Waiting for result: ' + result) // Notice this waited for the Promise to get settled ...
  console.log('Finished running Function')
}

awaitFuncton()
console.log('Ex2 Done') // Notice this will get printed first before the awaitFunction contents. It is due to the current stack finishing first then the Promise Stack ...
