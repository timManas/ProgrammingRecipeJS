// Generator Functions
// Can only return one value but also return multiple using yield
// Similar to arrays or Queue
// Keeps track of the current value iterated
// Returns done:true ocne we reach the very bottom

// Note: Generators are iterable

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

// Ex2: Generators are iterable
let generator2 = generateSequence()
for (let value of generator2) {
  console.log('value: ' + value) // Notice this only shoqws 1,2 ...Not 3. Why ? Because for loop ignores the last value. So if we want everything, we use the .next() approach
}
