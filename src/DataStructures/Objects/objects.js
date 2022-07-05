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
