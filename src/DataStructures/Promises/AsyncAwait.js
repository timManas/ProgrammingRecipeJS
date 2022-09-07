// Async keyword
// Placed on a function.
// Purpose is convert function to return a promise
// Also allows 'await' to work inside async functions
console.log('Async')

// Ex1: async function returns a Promise
async function f() {
  return Promise.resolve('Hello World')
}

let f1 = f()
f1.then((value) => console.log(value))
