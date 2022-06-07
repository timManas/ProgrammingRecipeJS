// Creation of Arrays
console.log('Creation of Arrays')
let arr = [
  'Hello',
  true,
  { name: 'Tim' },
  function () {
    console.log('Hello World')
  },
]
let matrix = [
  // MultiDimensional Array
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let arr2 = ['Hello', 'World', 'Tim']

// Loop through array
console.log('Looping through Array')
for (let i = 0; i < arr.length; i++) {
  console.log('i:' + i + '    arr[i]: ' + arr[i])
}

for (let item of arr2) {
  console.log('Arr[i]: ' + item)
}

// Push / Pop
console.log('\nPush/Pop: Used for add/remove at the END of the array')
arr2.push('GoodMorning') // Add last Element
console.log("Push 'GoodMorning' to end of Array: " + arr2)

console.log('Pop the last Element: ' + arr2.pop()) // Removes last element
console.log('Current Arr after pop: ' + arr2)

// Shift / UnShift
console.log(
  '\nShift/UnShift: Used for add/remove at the BEGINNING of the array'
)
arr2.unshift('Beginning')
console.log('Unshift new String in the beginning of the array: ' + arr2)

console.log('Shift Elements: ' + arr2.shift())
console.log('Current Arr after Shift: ' + arr2)

// Splice - Removes both the VALUE and Index by making it shorter
// Syntax - arr.splice(start[, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place.
// Returns the array of removed elements.
console.log('\nSplice - Can insert, remove, replace elements')
let arr3 = ['Hello', 'Tim', 'Hi']
arr3.splice(1, 1) // // from index 1 remove 1 element
console.log('spliced Arr: ' + arr3)

// Ex2 - Spliace
let arr3a = ['I', 'study', 'JavaScript', 'right', 'now']
arr3a.splice(0, 3, 'Lets', 'dance') // Remove elements 0 - 2. Then replace with "Lets", "dance"
console.log('spliced Arr#2: ' + arr3a)

let arr3b = ['I', 'study', 'JavaScript', 'right', 'now']
arr3b.splice(0, 2) // remove first two elements
console.log('spliced Arr#3: ' + arr3b)

let arr3c = ['I', 'study', 'JavaScript']
arr3c.splice(2, 0, 'complex', 'languages') // startinf from index 2, remove first, then add 'complex' 'languages
console.log('spliced Arr#4: ' + arr3c)

let arr3d = [1, 2, 5]
arr3d.splice(-1, 0, 3, 4) // startubg from index-1, deleted 0 elements, add 3 and 4
console.log('splices Arr#5: ' + arr3d)

// slice
// syntax - arr.slice([start], [end])
// Returns a new array copying all items from index start to end (not including end).
// Both start and end can be negative
console.log(
  '\nSlice - Returns a new array copying all items from index start to end (not including end).'
)
let arr4 = [1, 2, 3, 4, 5, 6]
arr4.slice(1, 3)
console.log('slice Arr: ' + arr4)

// concatentate two arrays
// syntax is arr.concat(arg1, arg2, ...)
// The result is arr will contain values from arg1, arg2 and so on
console.log('\nConcatenate')
let arrCat = [1, 2, 3]
console.log('Concatentated Arr: ' + arrCat.concat([4, 5, 6]))
console.log(
  'Concatenate two dimensional array: ' + arrCat.concat([7, 8], [9, 10])
)
console.log(
  'Concatenate arr an array then add single digit values: ' +
    arrCat.concat([11, 12], 50, 60)
)

// For Each
// Syntax: arr.forEach(function(item, index, array) {}
console.log('\nforEach')
const array1 = ['a', 'b', 'c']
array1.forEach((item, index, array) =>
  console.log(`${item} is at index  ${index} in array ${array}`)
)

// Search in Array
console.log('\nSearch Array')

// indexOf, lastIndexOf, includes
console.log('\nindexOf, lastIndexOf, includes')
let arrIndexOf = [1, 2, 3, 4, 5, 6, 0, false]
console.log('IndexOf: ' + arrIndexOf.indexOf(1000))
console.log('IndexOf: ' + arrIndexOf.indexOf(3))
console.log('lastIndexOf:' + arrIndexOf.lastIndexOf(false)) // Finds actually false and NOT '0'
console.log('includes: ' + arrIndexOf.includes(4))

// find, findIndex
// syntax: arr.find()
// syntax: arr.find(function(item, index, array) {...})
// If returns true, search is stopped. Item is returned.
// If returns false, undefined is returned
console.log('\nfind, findIndex')
const users = [
  { id: 1, name: 'Tim' },
  { id: 2, name: 'John' },
  { id: 3, name: 'M' },
]
const user1 = users.find((item) => item.id == 2) // returns a specific Object within users
console.log(user1.name)

const user2 = users.find((item) => item.name == 'm')
console.log(user2)

// filter
// syntax: arr.filter(function(item, index, array) {...})
// Filter will find multiple all elements which match
console.log('\nFilter')
let users1 = [
  { id: 1, name: 'Tim' },
  { id: 2, name: 'Tim' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Tim' },
  { id: 5, name: 'Romero' },
]

const filterUser1 = users1.filter((item) => item.name == 'Tim')
const filterUser2 = users1.filter((item) => item.id < 3)

console.log('Filtered Users: ' + filterUser1.length)
console.log('Filtered Users: ' + filterUser2.length)

// Transform an array
console.log('\n------ Transform an Array -------')

// map
// syntax: arr.map(function(item,index, array) {...})
// What ? Calls the function for each element of the array and returns the array of results
console.log('\nmap.arr()')
const arrMap = ['Hello', 'Tim', 'How', 'Are', 'You', 'Today']
const lengths = arrMap.map((item) => item.length)
console.log('Map Element Length: ' + lengths)

// sort an Array
// syntax: arr.sort()
console.log('\nsort')
const arrSort = [3, 2, 1, 4, 6, 5]
console.log('sorted: ' + arrSort)
arrSort.sort()
console.log('sorted: ' + arrSort)

console.log('\nCustom sorting')
// To use custom sorting, we need to provide a function to sort
function compareNumeric(a, b) {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

let arrCustomSort = [1, 6, 2, 5, 4, 3, 6]
let arrCustomSort2 = ['Österreich', 'Andorra', 'Vietnam']

console.log('Presorted: ' + arrCustomSort)
console.log('Custom sorting: ' + arrCustomSort.sort(compareNumeric))
console.log(
  'Custom sorting using arrow funciton: ' + arrCustomSort.sort((a, b) => a - b)
)

const a = 'réservé' // with accents, lowercase
const b = 'RESERVE' // no accents, uppercase

console.log(
  'Custom sorting for String usuing localeCompare: ' +
    arrCustomSort2.sort((a, b) => a.localeCompare(b))
)

// reverse
// split and join
// reduce/reduceRight

// fill
// copy

// Map to Array
