console.log('\nPromise')
// What ?
// A Promise is technically a promise. Its a promise to do something when a task finishes
// Promises has three states: Pending, Resolved, Rejected

// Syntax is let promise = new Promise(function (resolve, reject){ ... })
// Resolve is called when the job finishes successfully.
// Reject is called when the job fails

// Promises object return new Promise constructor has these internal properties
// Promises contains state which initially is "pending" then moves to either resolved or reject
// Promises return another promise ...those can also resolve or reject. Hence promises can be chained together

// Note: The return on the promise is NOW the 'result' in the .then.
// Likewise: If the return on the promise is an error. Then "error" in the catch is the result

// Ex1: Resolved
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done'), 1000)
})

// Ex2: Reject. Commenting this out. Will throw and error
// let promise1 = new Promise(function (resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error('Whoops!')), 1000)
// })

// Then, catch
// syntax is: promise.then(function(result) {}, function(error) P{} )
// 1st argument of .then is run when the promise is resolved and receives the result
// 2nd argument of .then is a function when the promise is rejected and receives an error
console.log('\nPromise - then')

// Ex1: Resolve
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000)
})

// resolve runs the first function in .then
promise2.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console(error) // doesn't run
)

// Ex2: Rejected. Comment this out. Will throw error
// let promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject('error!'), 1000)
// })

// // resolve runs the first function in .then
// promise2.then(
//   (result) => console.log(result), // shows "done!" after 1 second
//   (error) => console(error) // shows error
// )

// Ex3: More streamlined solution
let promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('Doneeeee'), 1000)
})
promise4.then(console.log('Hello'))

// catch
// Will only catch errors
console.log('\nPromise - catch')

// // Ex1 - Need to comment this out since it create a error
// let promiseCatch = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Whoops!')), 1000)
// })
// promiseCatch.catch() // This will throw an error

// Promises Chaining
// Chaining works since every call to .then returns a new promise hence we can chain promises together
console.log('\nPromises Chaining')

// Ex1: Chaining
let promiseChaining = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
})
  .then(function (result) {
    // result is the result of the Promise
    console.log('current Result: ' + result)
    return result * 2
  })
  .then(function (result) {
    console.log('current Result: ' + result)
    return result * 2
  })
  .then(function (result) {
    console.log('current Result: ' + result)
    return result * 2
  })

// Ex2: This is NOT Chaining
// The handler creates seperate handlers to one promise. They dont pass the value to each other and process it independently
console.log('This is NOT chaining')
let promiseChaining1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
})

promiseChaining1.then(function (result) {
  // result is the result of the Promise
  console.log('current Result: ' + result)
  return result * 2
})
promiseChaining1.then(function (result) {
  // result is the result of the Promise
  console.log('current Result: ' + result)
  return result * 2
})
promiseChaining1.then(function (result) {
  // result is the result of the Promise
  console.log('current Result: ' + result)
  return result * 2
})

// Ex3: Handlers will wait for previous handlers to finish before proceeding
// Returning promises allows us to build chains of asynchronous action
let promiseChaining2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
})
  .then(function (result) {
    console.log('result: ' + result) // returns 1
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000)
    })
  })
  .then(function (result) {
    console.log('result: ' + result) // returns 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000)
    })
  })
  .then(function (result) {
    console.log('result: ' + result) // returns 4
  })

// Error Handling with promises
// When we reject a promise, we can attach a .catch() at the end of the .then() to catch the error message
console.log('\nError Handling with Promises')

// Ex1: Catch the error
// let promiseChaining3 = new Promise(function (resolve, reject) {
//   reject('Error whoops')
// })
//   .then(function (result) {
//     // result is the result of the Promise
//     console.log('current Result: ' + result)
//     return result * 2
//   })
//   .then(function (result) {
//     console.log('current Result: ' + result)
//     return result * 2
//   })
//   .catch(function (error) {
//     // This will get triggered instead of the other two .then handlers
//     console.log(error)
//   })

// Promise API
// There are 6 static methods in the Promise class
console.log('\nPromise API')

// Promise.All
// Iterates through a list of promise and execute them in parallel and wait until all of them are ready
// Syntax: Promise.all()
// Note: If the iterable contains a non-Promise value, it will be ignored but still counted in the promise
// Promise.All rejects as a whole if any promise rejects. It implements AON
// Ex1
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then((values) => {
  console.log(values) // Allows us to get the values from the Promises
})

// Ex2: Note this will throw a reject. Comment this out
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)), // This should Faill All of the promises
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
// ]).then((values) => {
//   console.log(values) // Allows us to get the values from the Promises
// })

// Promise.allSettled
// Note - We use allSettled when one of the promises in the iterable can be rejected, we still keep moving forward
// In comparison .All(), it used AON. Either all of them pass or none of them do (reject)

console.log('\nPromise.allSettled')

// Ex
const promiseAllSettled1 = Promise.resolve(3)
const promiseAllSettled2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'foo')
})
const promiseAllSettledIterable = [promiseAllSettled1, promiseAllSettled2]
Promise.allSettled(promiseAllSettledIterable).then((results) => {
  results.forEach((result) => console.log(result.status)) // Should see FullFilled, Rejected
})

// Promise.race
// Similar to Promise.All but waits for first SETTLED promises in iterable to finish.
// Which ever one comes first will get returned.
// If Errors comes first, then that is returned
// Once the first promise is returned, all others are ignored
console.log('\nPromise.race')

// Ex1
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), // This finishees first. Everything else is ignored
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error found')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((value) => console.log('result: ' + value))

// Ex2
// Promise.race([
//   new Promise(
//     (resolve, reject) =>
//       setTimeout(() => reject(new Error('Error found')), 1000) // This finishees first. Everything else is ignored
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000)),
// ]).then((value) => console.log('result: ' + value))

// Promise.any
// Similar to Promise.all but returns the first RESOLVED promise result ...Not the first Settled Promise
console.log('\nPromise.any')

// Ex1
Promise.any([
  new Promise(
    (resolve, reject) =>
      setTimeout(() => reject(new Error('Error found')), 1000) // Ignored since this is a reject
  ),
  new Promise(
    (resolve, reject) =>
      setTimeout(() => reject(new Error('Error found')), 2000) // Ignored since this is a reject
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)), // This is returned
]).then((value) => console.log('result: ' + value))

// Ex2: All promise rejected. Should see Aggregate Error
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Ouch!')), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Error!')), 2000)
//   ),
// ]).catch((error) => {
//   console.log(error.constructor.name) // AggregateError
//   console.log(error.errors[0]) // Error: Ouch!
//   console.log(error.errors[1]) // Error: Error!
// })

// Promise.resolve
// Resolves a given Promise
// Works exactly the same way as .resolve()
console.log('\nPromise.resolve & Promise.reject')

// Ex1
const promiseResolve1 = Promise.resolve(1)
promiseResolve1.then((value) => {
  console.log('Value: ' + value)
})

// Ex2"
// const promiseResolve2 = Promise.reject(new Error('Error Found here'))
// promiseResolve2.then((value) => {
//   console.log('Error: ' + value)
// })

// Microtask queue
// Promise handlers .then, .catch, .finally are always asynchrounous
// Even when promomises are resolved, lines BELOW .then/catch/finally  will still execute before these handlers
console.log('\nMicroTask Queue')

// Ex:
let promiseQueue = Promise.resolve()
promiseQueue.then(() => console.log('Promise Done')) // You will see line executed after 'Code Finished'
console.log('Code Finished') // You will see this one executed first

// Why ? Because of the MicroTask Queue
// Because then/catch/finally are put into queue, they are not executed.
// Only when JS engine becomes free from the current code, will the task take from the queue/

// How do we Set up a queue then ?
// By doing this instead:
let promiseQueue1 = Promise.resolve()
promiseQueue1
  .then(() => console.log('Promise Done'))
  .then(() => console.log('Code Finished'))
