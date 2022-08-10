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

// Class Fields
// Syntax to add any properties
// They are set on individual objects ..not User.prototypes
console.log('\nClass Fields')

// Ex1
class User5 {
  name = 'John'

  sayHi() {
    console.log('Saying Hello')
  }
}
let user6 = new User()
user6.sayHi()
console.log('Prototype : ' + User5.prototype.sayHi()) // undefined

// Class Inheritance
console.log('\nClass Inheritance')

// Extends keyword
class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    console.log('Runs with speed:' + this.speed)
  }

  stop() {
    this.speed = 0
    console.log('Stopped')
  }
}

// Rabbit extends Animal
class Rabbit extends Animal {
  hide() {
    console.log('Hiding')
  }
}

let rabbit = new Rabbit('Bob')
rabbit.run(50)
rabbit.stop()
rabbit.hide()

let animal = new Animal('Animal')
// animal.hide()   // This will cause an error

// Ex2 - Any expression  is allowed after extends
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase)
    }
  }
}

class User7 extends f('Hello') {}

new User7().sayHi() // Hello
