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
console.log('\nreverse')
// syntax: arr.reverse()
const arrReverse = [1, 2, 3, 4, 5, 6, 7]
console.log('reverse: ' + arrReverse.reverse())

// split
console.log('\nsplit')
// syntax: arr.split(delim)
const arrSplit = 'Hello Mr Tim . How are you today ?'
const split = arrSplit.split(' ')
console.log('split: ' + split)
// Second argument allows only a specific size
const arrSplit2 = 'Yo,Mr,Jay,How,Is,It,Going'
const split2 = arrSplit2.split(',', 2)
console.log('split with specific length: ' + split2)

// join
console.log('\njoin')
const arrJoin = ['Heello', 'World', 'Mr', 'Tim']
console.log('joined: ' + arrJoin.join(' '))
console.log('joined: ' + arrJoin.join(','))

const arrJoin1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('joined: ' + arrJoin1.join(''))
console.log('joined: ' + arrJoin1.join(' '))

// reduce/re""duceRight
console.log('\nReduceRight')
//syntax: arr.reduce(function(accumulator, item, index, array) {...}, [initial])
// What ? Used to calculate a single value based on the array
// accumulator: is the result of the previous funciton call, equals iinitial the first time  (if provided)
// item: is the current array item
// index: is the position
// array: is the array
// How ? As the function is applied, the previous function call is passed to the next one as the first argument
const arrReduce = [1, 2, 3, 4, 5]
let result = arrReduce.reduce((sum, current) => sum + current, 0)
console.log('reduce result: ' + result)

console.log('------ Iterables -------')

console.log('\nfor ..of iterables')
// objects that use "for..of" are called iterable
// Iterables must implement the method named "Symbol.Iteraor"
let range = { from: 1, to: 5 }

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}
for (let num of range) {
  console.log('num: ' + num)
}
/*
  Note
  - range iteself does NOT have the next() method
  - Instead another object is created by call of the Symbol.Iterator() and its next() generates values for the iteration
*/

console.log('\nString Iterables')
for (let char of 'test') {
  console.log('char: ' + char)
}

// The following example gives us more control of the iteration
console.log('\nCalling an iterator explicitly')
const str = 'Hello'
let iterator = str[Symbol.iterator]()

while (true) {
  const result = iterator.next()
  if (result.done) break

  console.log('letter: ' + result.value)
}

// Array Destructuring
// Note: Array Destructuring does NOT modify the array
console.log('\nArray Destructuring')
let arr5 = ['John', 'Smith']
let [firstName, lastName] = arr5
console.log('FirstName: ' + firstName + '   LastName: ' + lastName)

// Ex#2
const word = 'Hello World'
let [firstName1, lastName1] = word.split(' ')
console.log('FirstName: ' + firstName1 + '   LastName: ' + lastName1)

// Ex#3 - Throw away unwanted element
let arr6 = ['John', 'Smith', 'Tim', 'Sarah']
let [firstName2, , , lastName2] = arr6
console.log(
  'FirstName: ' +
    firstName2 +
    '   LastName: ' +
    lastName2 +
    '  Note: only John and Sarah are used. The empty , are skipping the values'
)

// Ex#4:  Create object
let user = {}
;[user.name, user.lastName] = 'Joe Star'.split(' ')
console.log('FirstName: ' + user.name + '   LastName: ' + user.lastName)

// Ex:5 Loop with Entries
console.log('\nLoop with Entries using Destructuring')
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`)
}

// Ex:6 Using ...rest of the entires
let [name1, name2, ...titles] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
]
console.log(
  'Use ... to represent remainder of array    - name1: ' +
    name1 +
    '   name2: ' +
    name2 +
    '    titles: ' +
    titles
)

// Ex:7 - Set Default values when destructuring
let [name = 'Guest', last = 'GuesLastName'] = []
console.log('Default FirstName: ' + name + '   Default LastName: ' + last)
