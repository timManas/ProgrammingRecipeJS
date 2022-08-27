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
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject('error!'), 1000)
})

// resolve runs the first function in .then
promise2.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console(error) // shows error
)

// Ex3: More streamlined solution
let promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('Doneeeee'), 1000)
})

promise4.then(console.log('Hello'))

// catch
// Will only catch errors
console.log('\nPromise - catch')

// Ex1
let promiseCatch = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000)
})
promiseCatch.catch() // This will throw an error
