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

// Accessor Descriptors
// Acceptor descriptors may have get,set, enumerable and configurable
// Note: Property can either be acceor or data property butr NOT both
console.log('\nAccessor Descriptors')

// Ex1
let user = { name: 'John', surname: 'Doe' }
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name}  ${this.surname}`
  },
  set(value) {
    ;[this.name, this.surname] = value.split(' ')
  },
})
console.log('user fullName: ' + user.fullName)
