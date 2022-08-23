console.log('\nMixin')
//What ?
// Classes which contains method used by other classes without the need to inherit it
// A mixin provides methods that implement a certain behaviour to add behaviour to another class

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
