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

// Smarter getters and Setters
// Use a getter to set specific values in the object property
console.log('\nSmart getters and Setters')

function User(name, birthday) {
  this.name = name
  this.birthday = birthday

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear()
      return todayYear - this.birthday.getFullYear() // Notice we use birthday.getFullYear ... this is due to new Date()
    },
  })
}

let john = new User('John', new Date(1978, 2, 3))
console.log('Birthday: ' + john.birthday)
console.log('Age: ' + john.age)
