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

// Throw Errors back to generators using yield
console.log('\nThrow Errors back to generators using yirld')
function* gen1() {
  try {
    let ask1 = yield 'PLACEHOLDER #1'
    console.log(ask1)
  } catch (error) {
    console.log('Erorr Message: ' + error) // Step3 - Error messages gets printed and does not continue in the try loop anymore
  }
}

let generator5 = gen1()
console.log(generator5.next().value) // Step1 - Stop at PLACEHOLDER #1
generator5.throw(new Error('ERROR ERROR ERROR')) // Step2 - Send Error message

// Stoping a generator using generator.return
// What ? Finishes the generator and returns the given value
console.log('\nGenerator.return() - Stopping a generator')

// Ex1
function* gen2() {
  yield 1
  yield 2
  yield 3
}

let generator6 = gen2()
console.log(generator6.next())
console.log(generator6.return('Hello World')) // Notice generator stopped here with Hello World & also returns done:true
console.log(generator6.next()) // This doesent return 3...instead returns undefined and done:true

// Ex2:
console.log()
function* gen() {
  let ask1 = yield 'PLACEHOLDER #1'
  console.log(ask1)
  let ask2 = yield 'PLACEHOLDER #2'
  console.log(ask2)
}

let generator7 = gen()
console.log(generator7.next().value) // Stops at PLACEHOLDER #1
console.log(generator7.return('HelloWorld').value) // Generator stops here and just returns Hello World
console.log(generator7.next(9).value)
