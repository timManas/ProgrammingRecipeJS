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
