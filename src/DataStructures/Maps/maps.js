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
console.log('first Element: ' + map.get(1))
console.log('first Element: ' + map.get(true))

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

// Clear the map
console.log('\nClear map')
console.log('map Size: ' + map.size)
map.clear()
console.log('map Size: ' + map.size)
