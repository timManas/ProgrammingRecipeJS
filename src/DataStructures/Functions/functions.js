console.log('\n----- Functopms ------')
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
