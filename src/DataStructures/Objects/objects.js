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
