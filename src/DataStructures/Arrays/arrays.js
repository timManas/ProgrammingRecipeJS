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

// Search in Array
// indexOf, lastIndexOf, includes
// find, findIndex
// filter

// Transform an array
// map
// sort an Array
// reverse
// split and join
// reduce/reduceRight

// fill
// copy

// Map to Array
