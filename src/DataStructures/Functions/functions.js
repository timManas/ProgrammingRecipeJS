console.log('\n----- Functions ------')
// Funcitons are of type 'objects' in JS
// We can treat functions by adding properties to them

// Ex:1 - Name Property
function sayHi() {
  console.log('Hi')
}
console.log('functionName: ' + sayHi.name)

let sayHi2 = function () {
  console.log('Hi 2')
}
console.log('functionName: ' + sayHi2.name)

// length Property
console.log('\nlength property')
// Returns the number of function arguments

//Ex:1
function f1(a) {}
function f2(a, b, c) {}
function f3(a, b, c, d, x, y, z) {}
console.log('f1 length: ' + f1.length)
console.log('f2 length: ' + f2.length)
console.log('f3 length: ' + f3.length)

// Ex:2 Random number of parameters
function ask(question, ...handlers) {
  console.log(
    'question length: ' +
      question.length +
      '   handler length: ' +
      handlers.length
  )
}
ask('Hello', 'Yes')
ask('Hello', 'Yes', 'No', 'why')
