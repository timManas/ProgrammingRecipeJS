function sayWow(value) {
  console.log('sayWow: ' + value)
}

function sayHello(value) {
  console.log('sayHello: ' + value)
}

// Export functions
export { sayWow, sayHello }

// Export an Array
export let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

// Export a constant
export const CONSTANT = 12345

// Export a class
export class User {
  constructor(value) {
    console.log('User Class value: ' + value)
  }
}
