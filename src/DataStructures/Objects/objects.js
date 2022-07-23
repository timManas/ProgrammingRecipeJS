console.log('----- Objects -----')

let user1 = { name: 'Tim', age: '35' }

// returns an array of keys
console.log('\nObject.keys(obj)')
console.log('Objects.keys() - ' + Object.keys(user1))

// returns an array of values
console.log('\nObject.values(obj)')
console.log('Objects.values() - ' + Object.values(user1))

// returns an array of entries
console.log('\nObject.entries(obj)')
console.log('Objects.entries() - ' + Object.entries(user1))

/*
Note
- Object.* methods return "real" array objects and NOT just an iterable
 */

console.log('\nTransform an Object')
let prices = { banana: 1, orange: 2, meat: 4 }

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
)
console.log('Meat prices:' + doublePrices.meat)

/**
 * So what happened ?
 * 1. Use Object.entries() to get the key/value pair from prices
 * 2. Use array method map to transform key/value pair to double prices
 * 3. Use Object.fromEntries() on resulting array to convert back to Object
 *
 */

console.log('\nProperty Flags and descriptors')
/**
 * Syntax: let descriptor = Object.getOwnPropertyDescriptors(obj, propertyName)
 * Syntax for changing property = Object.defineProperty(obj, propertyName, descriptor)
 *
 * Besides key/value pair, objects can have three special attributes
 * writeables - If true, value can be changed, otherwise its read-only
 * enumerable - If true, then listed in loops, otherwise not listed
 * configuarable - if true, property can be deleted/modified, otherwise not
 *
 * Generally - They are all true when we create an object but can be changed at any time
 */

// Ex1
let user2 = { name: 'John' }
let descriptor = Object.getOwnPropertyDescriptors(user2, 'name')
console.log(JSON.stringify(descriptor, null, 2)) // you will see the properties object user2

// To change the flag we use Object.defineProperty
// NOTE: If flag is supplied, it is assumed false
// Ex2:
let user3 = {}
Object.defineProperty(user3, 'name', { value: 'John' })
let descriptor3 = Object.getOwnPropertyDescriptors(user3, 'name')
console.log(JSON.stringify(descriptor3, null, 2)) // Since flags are not provided, it is assumed false for all of them

// Non-Writable
console.log('\nNon writable')
let user4 = { name: 'John' }
Object.defineProperty(user4, 'name', { writable: false })
console.log('user4 name: ' + user4.name)
user4.name = 'Tim' // Name is Not changed
console.log('user4 name: ' + user4.name) // Errors only appear in strict mode. In non strict mode, no errors occur when writing to non-writable properties

// Ex:1 Property is created from scratch
let user5 = {}
Object.defineProperty(user5, 'name', {
  value: 'John',
  enumerable: true,
  configurable: true,
})
console.log('user5 name: ' + user5.name)
user5.name = 'Tim'
console.log('user5 name: ' + user5.name)
