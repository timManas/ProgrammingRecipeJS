// Proxy
// What ? An object wraps another object and intercepts operations (ex: read/write)
// Syntax: let proxy = new Proxy (target, handler)
// target - Is an object to wrap
// handler - proxy configuration: an object with methods which intercept operation (ex: get and set)

// Note: Empty tarps will allow all operations on proxy to forward to target
// Proxy is a special “exotic object”. It doesn’t have own properties. With an empty handler it transparently forwards operations to target.

console.log('Proxy')

// Ex1: Empty Handler with no traps
let target = {}
let proxy = new Proxy(target, {}) // Handler is empty

proxy.test = 'Hello World'
console.log('Proxy Test: ' + proxy.test)
console.log('Target Test: ' + target.test) // Notice by changing proxy, we change target

// 'get' Trap
// get has three Properties
// target - is the target object, the one passed in new Proxy
// property - is the property name
// receiver - If target is a getter, then we dont need this argument yet
console.log("\n'Get' Trap")

// Ex1: Use a get trap for a list
let numbers = [1, 2, 3, 4]
numbers = new Proxy(numbers, {
  get(target, property) {
    console.log('Property: ' + property)
    if (property in target) {
      return target[property]
    } else {
      console.log('Property does not exist')
      return 0
    }
  },
})
console.log('numbers[1]: ' + numbers[1])
console.log('numbers[100]: ' + numbers[100])

// Ex2: Use a get trap for a map
let dictionary = {
  firstName: 'Joe',
  age: '35',
}
dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase] // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase
    }
  },
})
console.log('dictionary[firstName]: ' + dictionary['firstName'])
console.log('dictionary[lastName]: ' + dictionary['lastName'])

// 'set' Trap
// Syntax: set(target, property, value, receiver):
// target – is the target object, the one passed as the first argument to new Proxy,
// property – property name,
// value – property value,
// receiver – similar to get trap, matters only for setter properties.
// Note: Set traps NEED to return true if the trap is successful in setting a value
console.log("\n'Set' Trap")

// Ex1:
// numbers = []

// numbers = new Proxy(numbers, {
//   set(target, property, value, receiver) {
//     console.log(
//       'target: ' +
//         target +
//         '   property: ' +
//         property +
//         '    value: ' +
//         value +
//         '    receiver: ' +
//         receiver
//     )
//     if (typeof value == 'number') {
//       target[property] = value
//       return true
//     } else {
//       console.log('Value not a number: ' + value)
//       return false
//     }
//   },
// })

let numbers2 = []

numbers2 = new Proxy(numbers2, {
  // (*)
  set(target, prop, val) {
    console.log('target: ' + target + '   prop: ' + prop + '    val: ' + val)
    if (typeof val == 'number') {
      target[prop] = val
      return true
    } else {
      return false
    }
  },
})

numbers2.push(1)
console.log('Add a new value')
numbers2.push(2)
console.log('numbers length: ' + numbers2.length)

// numbers.push('Hello World') // This is cause an error. Commenting this out
