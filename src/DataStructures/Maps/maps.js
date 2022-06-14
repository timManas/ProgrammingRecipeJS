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

// Delete key/value in map

// Clear the map

// Find the size
