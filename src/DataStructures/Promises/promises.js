console.log('\nPromise')
// What ?
// A Promise is technically a promise. Its a promise to do something when a task finishes
// Promises has three states: Pending, Resolved, Rejected

// Syntax is let promise = new Promise(function (resolve, reject){ ... })
// Resolve is called when the job finishes successfully.
// Reject is called when the job fails

// Promises object return new Promise constructor has these internal properties
// Promises contains state which initially is "pending" then moves to either resolved or reject

// Ex1: Resolved
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('done')
  }, 1000)
})

// Ex2: Reject
let rejected = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Whoops'))
  }, 1000)
})
