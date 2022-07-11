console.log('----- Misc Items -----')

// Full syntax: let json = JSON.stringify(value[, replacer, space])

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

console.log('\nReplace R')
// Full syntax: let json = JSON.stringify(value[, replacer, space])
//Excluding and transforming: replacer
// value is value to encode
//replacer: is an array of properties to encode or a mapping function
// Use replacer when we need to fine-tune the replacement process ex: Filtrer out circular references

// Ex:1 Has a circular reference
let room = { number: 23 }
let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
}

room.occupiedBy = meetup // This is a circular reference
console.log('Meetup: ' + JSON.stringify(meetup, ['title', 'participants']))
console.log(
  'Exclude all property except occupiedBy : ' +
    JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])
)

// This will fail since occupiedBy creates a circular reference
// console.log(
//   'All property : ' +
//     JSON.stringify(meetup, [
//       'title',
//       'participants',
//       'place',
//       'name',
//       'number',
//       'occupiedBy',
//     ])
// )

console.log('\nUse replacer to avoid the circular reference')
console.log(
  'Use replaceR to avoid circular reference: ' +
    JSON.stringify(meetup, function replacer(key, value) {
      console.log(`${key}: ${value}`)
      return key == 'occupiedBy' ? undefined : value
    })
)

// Custom toJSON()
console.log('\nCustom to JSON')
let room1 = {
  number: 23,
  toJSON() {
    return this.number
  },
}

let meetup1 = {
  title: 'Conference',
  date: new Date(Date.UTC(2017, 0, 1), room1),
}
console.log(
  'JSON Stringify: ' +
    JSON.stringify(meetup1) +
    '   Notice: Date is now in stirng format'
)
console.log('JSON Stringify: ' + JSON.stringify(room1))
