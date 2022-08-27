console.log('\nMixin')
//What ?
// Classes which contains method used by other classes without the need to inherit it
// A mixin provides methods that implement a certain behaviour to add behaviour to another class
// Syntax: using Object.assign(target, object to inherit from)

// Why ?
// JS does not support multiple inhertiance but mixin can be implemented by copying methods into prototypes

// Ex1
let sayHiMixin = {
  sayHi() {
    console.log('Hi')
  },
  sayBye() {
    console.log('Bye')
  },
}

class User {
  constructor(name) {
    this.name = name
  }
}

// Copy the methods over
Object.assign(User.prototype, sayHiMixin)
let user = new User('Dude')
user.sayHi() // Notice user does not have sayHi method but object sayHiMixin does ...
user.sayBye()