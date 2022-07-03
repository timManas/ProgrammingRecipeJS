console.log('Iterables')

// What ?
// Iterable objects are generalization of arrayts

// To make range object iterable, we add method to the object name symbol.iterator
console.log('----- Symbol Iterator -----')

let range = { from: 1, to: 5 }

// Example
// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
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

for (let num of range) {
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
let range = {
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

for (let num of range) {
  alert(num) // 1, then 2, 3, 4, 5
}
