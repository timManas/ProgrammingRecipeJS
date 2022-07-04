console.log('Iterables')

// What ?
// Iterable objects are generalization of arrayts

// To make range object iterable, we add method to the object name symbol.iterator
console.log('----- Symbol Iterator -----')

let range1 = { from: 1, to: 5 }

// Example
// 1. call to for..of initially calls this
range1[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

for (let num of range1) {
  console.log('num: ' + num)
}

/* Sequence of events:
1. When for..of SVGTransformList, calls the method once 
> Method must return an iterator
2. Onward, for ..of oworks only with that return object
3. When for .. of wants next value, it calls next() on that object
4. Result of next() must have the form {done: Boolean, value: anu}


Notes
- 'range' does NOT contain the next() method
- Another object 'iterator' is created by the call to range[Symbol.iterator()], and its next() generates values for the iteration
*/

// Essentially we can merge and use range itself as the iterator like this
let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    } else {
      return { done: true }
    }
  },
}

for (let num of range2) {
  console.log(num) // 1, then 2, 3, 4, 5
}

// String is widely used iterable
console.log('\nString is Iterable')
console.log('Ex:1  Iterate over String')
for (let char of 'HelloWorld') {
  console.log(char)
}

// Call an iterator explicitly
console.log('\nCall Iterator explicitly')

let str = 'HelloWord'
let iterator = str[Symbol.iterator]()

while (true) {
  let result = iterator.next()
  if (result.done) break

  console.log('result: ' + result.value)
}

/*
Notes
- Iterables are objects that implement  the Symbol.Iterator method
- ArrayLikes are objects that have indexes and length ...so they look like array
*/

// Array Like
console.log('\nExample of an object which is array like but not ITERABLE')
let arrayLike = { 0: 'Hello', 1: 'World', length: 2 }
// Will get an array if you uncomment this out
// for (let item of arrayLike) {
//   console.log(item)
// }

// Array.from - How to convert iterable or array-like value makes them a "REAL" array
// Synyax: Array.from(obj[,mapFn, thisArg])
console.log('\nArray.from')
let arr = Array.from(arrayLike)
console.log('Pop last element: ' + arr.pop())

let arr2 = Array.from(range2, (num) => num * num)
console.log('Arr2: ' + arr2)
