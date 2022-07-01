console.log('----- Sets -----')

// Create new Set
const set = new Set()

// Add new values to set
set.add(1)
set.add('two')
set.add(true)
set.add(['hello', 'world'])

// Print set
console.log('Set: ' + set)

// Return size of set
console.log('Size: ' + set.size)

// Print out values of Set
console.log('\nPrint values of Set')
set.forEach((value, value1, set) => {
  console.log('value: ' + value + '   value1: ' + value1 + '   set: ' + set)
})

// Delete values in set
console.log('\nDelete value in set')
set.add('HelloMrTim')
console.log("Has key 'HelloMrTim' ? " + set.has('HelloMrTim'))
set.delete('HelloMrTim')
console.log("Has key 'HelloMrTim' ? " + set.has('HelloMrTim'))

// Clear Set
console.log('\nClear')
console.log('Set size: ' + set.size)
set.clear
console.log('Set size: ' + set.size)

// Weak Sets
// Similar to set but may only add OBJECTS to Weaksets (NOT primitives)
// Supports add, has and delete but NOT size, kets () and NO iterations
console.log('\n----- Weak Sets -----')
let visitedSet = new WeakSet()
let john = { name: 'John' }
let pete = { name: 'Pete' }
let mary = { name: 'Mary' }

// Add to Weak Set
visitedSet.add(john)
visitedSet.add(pete)

// Check is set Has object
console.log('Has John ? ' + visitedSet.has(john))
console.log('Has XYZ ? ' + visitedSet.has(mary))

// Delete
visitedSet.delete(john)
console.log('Has John  after deletion? ' + visitedSet.has(john))
