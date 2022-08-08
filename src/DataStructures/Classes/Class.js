console.log('\nClasses')

// Syntax:
class myClass {
  constructor() {}
  method1() {}
  method2() {}
}

// Ex1
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log('Hello')
    return 'Hi'
  }
}

let user1 = new User('John')
console.log('name: ' + user1.name)
console.log('say:' + user1.sayHi())

// Class Expression
console.log('\nClass Expression')
// What ? Classes can be defined inside another expression, passed around, returned, assigned, etc

// Ex1 - Class expression
let User1 = class {
  sayHi() {
    console.log('Hello')
  }
}

// Ex2 - Class expression can have names
let User2 = class MyClass {
  sayHi() {
    console.log('Hi')
  }
}
new User2().sayHi()

// Ex3 - Class defined on demand
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log('Yo')
    }
  }
}
let User3 = makeClass('hihihihi')
new User3().sayHi()

// Classes with getters and Setters
console.log('\nClasses with Getters and Setters')

// Ex1
class User4 {
  constructor(name) {
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(name) {
    if (name.length < 4) {
      console.log('Name too Short')
      return
    }
    this._name = name
  }
}

user4 = new User4('Johns')
console.log('User4 name: ' + user4.name)

user4.name = 'Tim'
console.log('User4 name: ' + user4.name) // Should still see "Johns"

user4 = new User4('A')
console.log('User4 name: ' + user4.name) // Should now see undefined
