console.log('----- Misc Items -----')

// Convert object to JSON
// Works on almost all types

// List of things that JSON.Stringify CANNOT covert to JSON
// 1. Function methods
// 2. Symbolic keys and values
// 3. Properties with undefined values
// 4. Cannot convert CIRCULAR reference

// Convert JS object to JSON
let student = {
  name: 'Tim',
  age: 100,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
}

let json = JSON.stringify(student)
console.log('Converted JS object to JSON: ' + json)

// We can even convert JS Objects which have methods inside
let student1 = {
  sayHi() {
    // ignored
    console.log('Say Hi')
  },
  [Symbol('id')]: 123,
  something: undefined, // this is ignored
  insideObject: {
    number: 456,
    participants: [1, 2, 3, 'Hello'],
  },
}
console.log('Converted JSON object to JSON: ' + JSON.stringify(student1))
