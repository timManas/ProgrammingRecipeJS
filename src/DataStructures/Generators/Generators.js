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

// Yield as two way
// Can send values BACK to the generator
// To do so, we use .next(arg).
// That argument becomes the result of the yield
// Note:
// The first call of .next() should always be made WITHOUT argument.
console.log('\nYield can be used two way')

// Ex1:
// How this flow works
function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield 'PLACEHOLDER' // Step3 -  The value will be placed in 'PLACEHOLDER' and now result=xyz... (Hence we PASS value to the generator using yield)
  console.log(result) // Step4 - Output to console
}
let generator3 = gen()
let question = generator3.next().value // Step1 - Create .next() with empty argument. It is required for passing values inside generator
generator3.next('xyz') // Step2 - Pass value xyz into gen() ...
console.log()

// Ex2:
function* gen() {
  let ask1 = yield 'PLACEHOLDER #1' // Step3 - Value gets passed here
  console.log(ask1) // Step4 - Outputs to console
  let ask2 = yield 'PLACEHOLDER #2' // Step5 - Program waits here until we get the next .next() argument
  console.log(ask2)
}

let generator4 = gen()
console.log(generator4.next().value) // Step1 - Create .next() with empty argument and programs waits at PLACEHOLDER #1
console.log(generator4.next('HelloWorld').value) // Step2 - Pass 'HelloWorld' in PLACEHOLDER #1
console.log(generator4.next(9).done) // Step6 - Program passes next value into PLACEHOLDER #6

console.log('\n' + generator4.next('X').value) // Step7 - Will see undefined since there are no more yields
