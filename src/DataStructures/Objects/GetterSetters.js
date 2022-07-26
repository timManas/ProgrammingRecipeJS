console.log('Getters & Setters')

console.log('\nGetters & Setters')
// Denoted by the get

// Ex1
let obj = {
  name: 'John',
  lastName: 'Smith',

  get propName() {
    return `${this.name} ${this.lastName}`
  },

  set propName(value) {
    this.name = value
  },
}

console.log('name: ' + obj.name)
console.log('prop name: ' + obj.propName)

// Setter
obj.propName = 'Jazzy J'
console.log('prop name: ' + obj.propName)
