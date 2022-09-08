// Generator Functions
// Can only return one value but also return multiple using yield
// Similar to arrays or Queue
// Keeps track of the current value iterated
// Returns done:true ocne we reach the very bottomn
console.log('Generators Functions')

// Ex1
function* generateSequence() {
  yield 1
  yield 2
  return 3
}

let generator = generateSequence()
let value = generator.next()
console.log('value: ' + JSON.stringify(value)) // value: {"value":1,"done":false}

value = generator.next()
console.log('value: ' + JSON.stringify(value)) // value: {"value":2,"done":false}

value = generator.next()
console.log('value: ' + JSON.stringify(value)) // value: {"value":3,"done":true}
