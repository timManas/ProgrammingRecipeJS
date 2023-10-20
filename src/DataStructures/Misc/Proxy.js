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

// Own keys Trap
// Object.keys. for loop iterate an object proerties use "OwnPropertykeys" internal method to get a list of properties
// Ownkeys must return  an array of keys. Otherwise error
// If key exists, it will return it ... If key does not exist then Proxy will not return the object
console.log("\n'OwnKeys' & getOwnPropertyDescriptor")

// Ex1: Use the OwnKeys Trap
let user = {
  name: 'John',
  age: 40,
  _password: 'secret',
}

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_')) // Filters out objects which start with '_'
  },
})

// Own keys filters out the password
for (let key in user) {
  console.log('key:' + key)
}

// Ex2: Proxy will not return a key present
user = {}
user = new Proxy(user, {
  ownKeys(target) {
    return ['a'] // 'a' does not exist as a key in user
  },
})
console.log('Object keys:  ' + Object.keys(user))

// In order for Object.keys to return a property, we need to use getOwnPropertyDescriptor trap and return enuerable: true
console.log('\ngetOwnPropertyDescriptor')

// Ex1
user = {}
user = new Proxy(user, {
  ownKeys(target) {
    return ['a', 'b', 'c'] // These keys dont exists in user but we will make return this property
  },
  getOwnPropertyDescriptor(target, property) {
    return {
      enumerable: true,
      configurable: true,
    }
  },
})

console.log('Object keys:  ' + Object.keys(user))

// "has" Trap
// What ? Checks if value is within range
// Syntax: has (target, range)
console.log("\n'has' Range")

// Ex1
let range = {
  start: 1,
  end: 10,
}

range = new Proxy(range, {
  has(target, prop) {
    return target.start <= prop && prop <= target.end // Checks value if within range
  },
})

console.log('Is 5 in range: ' + (5 in range))
console.log('Is 500 in range: ' + (500 in range))

// Function Proxy
// What ? We are able to set proxys for functions too.
// Syntax: apply(target, thisArg, args)
// target - The function to be proxied
// thisArg - value of this
// args - arguments
console.log('\nProxy for functions')

// Ex1:
function funcProxy(target) {
  return new Proxy(target, {
    apply(target, thisArg, args) {
      console.log(
        'target: ' + target + '   this: ' + thisArg + '    args: ' + args
      )
      target.apply(thisArg, args) // This triggers the sayHi Function
    },
  })
}

function sayHi(user) {
  console.log('User says Hi: ' + user)
}

sayHi = funcProxy(sayHi)
sayHi('John')

// Proxy does not have to declare the target value
console.log('\nProxy Handler target do not need to be defined')
var proxyObject = function (args) {
  let object = {} // This is made up
  let handler = {
    get: (target, property) => {
      return () => property
    },
  }

  let proxy = new Proxy(object, handler)
  return proxy
}

const obj = proxyObject()
console.log('name: ' + obj['abc123']()) // "abc123"
