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

// Why ? Because of the MicroTask Queue
// Because then/catch/finally are put into queue, they are not executed.
// Only when JS engine becomes free from the current code, will the task take from the queue/

// How do we Set up a queue then ?
// By doing this instead:
let promiseQueue1 = Promise.resolve()
promiseQueue1
  .then(() => console.log('Promise Done'))
  .then(() => console.log('Code Finished'))
