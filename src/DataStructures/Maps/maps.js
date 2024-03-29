console.log('----- Map -----')

// Create a new map
const map = new Map()

// Store values in map
map.set('Hello', 'Why Hello There')
map.set(1, 'Number 1')
map.set(true, 5)

console.log('map: ' + map)
console.log('map keys: ' + map.keys())
console.log('map values: ' + map.values())

// print out all values in map ...since the above wont work =(
console.log('\nPrint values of map')
for (const key of map.keys()) {
  console.log('key: ' + key + '   value: ' + map.get(key))
}

console.log('\nPrint values of map2')
for (const [key, value] of map) {
  console.log('key: ' + key + '   value: ' + map.get(key))
}

// return a value from map
console.log('\nReturn value from map')
console.log('first Element: ' + map.get('Hello'))
console.log('second Element: ' + map.get(1))
console.log('third Element: ' + map.get(true))
console.log('first element: ' + map['Hello'])
console.log('second element: ' + map[1])
console.log('third Element: ' + map[true])

// Check if map has key
console.log('\nHasKey')
console.log('is Key Hello present: ' + map.has('Hello'))
console.log('is Key Helloooo present: ' + map.has('Helloooo'))
console.log('is Key True present: ' + map.has(true))

// Delete key/value in map
map.set('num1', 'Number1')
map.set('num2', 'Number2')
console.log('Delete key / value')
console.log('Pre Deletion of key num1 ? ' + map.has('num1'))
map.delete('num1')
console.log('Has key num1 ? ' + map.has('num1'))

// Find the size
console.log('\nSize of map: ' + map.size)

// Traverse Map using forEach
console.log('\nTraverse Map using forEach')
map.forEach((value, key, map) => {
  console.log('value: ' + value + '   key: ' + key)
})

// Traverse Map using keys, valuesx and entries()
console.log('\nTraverse map using keys, values and entries')
for (const key of map.keys()) {
  console.log('key: ' + key)
}
for (const values of map.values()) {
  console.log('values: ' + values)
}
for (const entries of map.entries()) {
  console.log('entry: ' + entries)
}

// Pass an array with key, value pair for initalization
console.log('\nPass array with key,value for initliazation')
const map2 = new Map([
  ['Hi', 'value1'],
  [50, true],
  [NaN, 'HelloWorld'],
])
console.log('map2 Size: ' + map2.size)

// Create an object from a map using Object.Entries
console.log('\nCreate an object from map')
const objectNew = Object.fromEntries(map2.entries())
console.log('New object: ' + objectNew.Hi)
// console.log('New object: ' + objectNew.50) // This does not work ... can only be a string
console.log('New object: ' + objectNew.Nan)

// Clear the map
console.log('\nClear map')
console.log('map Size: ' + map.size)
map.clear()
console.log('map Size: ' + map.size)

// Create a new map
// WeakMap  are map but MUST have keys that are ob jects and NOT primitive values
// WeakMap do NOT support iteration and methods keys(), values(), entrie()
// Why do we use WeakMap ? Additional data storage like caching
// Scenario#1 - Work with data which belongs to another API, and would like to attach additional data to it. Should only exists when data is alive
console.log('----- Weak Map -----')
let obj = { Hello: 'World' }
const weakMap = new WeakMap()
weakMap.set(obj, 'ok')
console.log('weakMap: ' + weakMap.get(obj))
//weakMap.set('test', 'Whoops') // This WILL FAIL since key is not an object

obj = null
console.log('weakMap: ' + weakMap.get(obj))
