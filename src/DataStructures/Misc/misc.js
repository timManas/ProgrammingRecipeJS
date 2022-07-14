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

// JSON.parse
// What ? Decode a JSON-string
//syntax: let value = JSON.parse(str, [reviver]);
// str NEEDS to be in JSON-STRING ....not object or any other format
console.log('\nJSON.parse')

let userData1 =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'
let user2 = JSON.parse(userData1)

console.log('user parsed: ' + user2.friends[0])

// reviver
// Deserialize JSON String to object, then back to JSON
console.log('\nreviver')
let str1 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'
let meetup2 = JSON.parse(str1, (key, value) => {
  if (key == 'date') return new Date(value)

  return value
})
console.log('meetup date: ' + meetup2.date.getDate())

// reviver works for nested objects too
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`
schedule = JSON.parse(schedule, (key, value) => {
  if (key == 'date') return new Date(value)

  return value
})
console.log('find second date: ' + schedule.meetups[1].date.getDate())

// Using '...args'
// Allows us to enter any random number of arguments
// Note: ...args must be at the END of the argument ...Not in the beginning or end (ex:  function sum(...args, firstname, lastname) OR function sum(firstname, ....args, lastname))
console.log('\nUsing ...args')
function sum(...args) {
  let sum = 0
  for (let arg of args) {
    sum += arg
  }
  return sum
}
console.log('sum using ...args: ' + sum(1, 2, 3))
console.log('sum using ...args: ' + sum(1, 2, 3, 4))

console.log('\nUse ...args to set the remainder')
function showName(firstName, secondName, ...titles) {
  console.log('firstName: ' + firstName)
  console.log('secondName: ' + secondName)
  console.log('titles: ' + titles)
}
showName('Tim', 'John', 'Dr', 'Prof', 'MC', 'GOAT') // Notice only firstname and lastname are displayed seperatly. The rest are displayed in titles
