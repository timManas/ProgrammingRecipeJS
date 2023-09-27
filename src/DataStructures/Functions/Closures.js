console.log('\n----- Closures ------')

// What ?
// Allows inner funcitons access variables of outer function

// Ex1 - Return an anonymous function
console.log('Ex1')
var compose = function (x) {
  return function (y) {
    console.log('x: ' + x + '    y: ' + y)
  }
}

let func = compose(5)
func(3)

// Ex2 - Return a function
console.log('\nEx2')
var composeA = function (x) {
  function innerFunction(y) {
    console.log('x: ' + x + '    y: ' + y)
  }

  return innerFunction
}

let funcA = composeA(3)
funcA(10) // returns x: 3    y: 10
composeA(3)(10) // returns x: 3    y: 10
// funcA.innerFunction(10)     // Error: funcA.innerFunction is not a function
// composeA(3).innerFunction(10)  // Error: composeA(...).innerFunction is not a function

// Ex3 - Return a function within a function
console.log('\nEx3')
var composeB = function (x) {
  console.log('inside top func ')

  return function innerA(y) {
    console.log('inside mid func ')

    return function innerB(z) {
      console.log('inside inner func ')
      console.log('x: ' + x + '     y: ' + y + '    z: ' + z)
      return 'Inside inner Function'
    }
  }
}

let topFunc = composeB(5)
let midFunc = topFunc(4)
let innFunc = midFunc(3)
console.log('innFunc: ' + innFunc + '\n')
console.log('print using one line')
composeB(1)(2)(3)

//Ex4
console.log('\nEx4')
var composeC = function (x) {
  let insideProp1 = 'HelloWorld'

  function innerA(y) {
    console.log('x: ' + x + '    y: ' + y)
  }

  function innerB(z) {
    console.log('x: ' + x + '    z: ' + z)
  }

  return function innerC(A) {
    console.log('x: ' + x + '    A: ' + A)
  }
}

let topFuncC = composeC(100)
console.log('typeOf: ' + typeof topFuncC)
console.log('function Name: ' + topFuncC.name)
topFuncC(55) // Execute the innerC function

let insideA = topFuncC.innerA // What the fuck ? Cant access this ? Why not ? Because innerC is a function ....
console.log(topFuncC.insideProp1) //undefined
console.log(composeC.insideProp1) //undefined
console.log(composeC(100).insideProp1) //undefined
