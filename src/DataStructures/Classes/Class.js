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

// Overriding a Method
// Use super.methodName(...) to call parent method
// use super() to call the parent constructor
// Note: Arrow functions do NOT have a super. If accessed, it is taken from the outer function ....
console.log('\nOverriding a Method')

// Ex1
class Animal1 {
  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    console.log(this.name + 'runs at speed: ' + this.speed)
  }

  stop() {
    this.speed = 0
    console.log(`${this.name} has stopped`)
  }
}

class Rabbit1 extends Animal1 {
  hide() {
    console.log(`${this.name} hides`)
  }

  stop() {
    super.stop()
    this.hide()
  }
}

let rabbit1 = new Rabbit1('Wabbit')
rabbit1.run(50)
rabbit1.stop()

// Overriding constructor
// Note: Need to have super() before declaring this.
console.log('\nOverride Constructor')

// Ex1
class Animal2 {
  constructor(name) {
    this.speed = 0
    this.name = name
  }
}

class Rabbit2 extends Animal2 {
  constructor(name, color) {
    super(name)
    this.color = color
  }
}

let rabbit2 = new Rabbit2('Wabitz', 'Blue')
console.log('name: ' + rabbit2.name)
console.log('_name: ' + rabbit2._name)
console.log('color: ' + rabbit2.color)

// Static Methods
// Can define methods which can be accessed anywhere by using keyword static
// Statuc methods are use to implement functions that belong to the class as whole but NOT individual objects
// Note: We CANNOT  set static for individual objects
console.log('\nStatic Properties')

// Ex1
class UserStatic {
  static staticMethod() {
    console.log('Static method called')
  }
}
UserStatic.staticMethod()

// Note: Ex1 is actually the same as
class UserStatic1 {}
UserStatic1.staticMethod = function () {
  console.log('This is static Method')
}
UserStatic1.staticMethod()

// Ex2: We CANNOT set static for individual objects
let user8 = new UserStatic()
// user8.staticMethod() // This will produce an error
//However we can use the entire Class
UserStatic.staticMethod()

// Static Properties
// Property has static before declaration
console.log('\nStatic Properties')

// Ex1
class Article1 {
  static publisher = 'Hello World'
}
console.log('Publisher: ' + Article1.publisher)

// Static Methods can be inherited
class Animal3 {
  static planet = 'Earth3'

  constructor(name, speed) {
    this.name = name
    this.speed = speed
  }

  run(speed = 0) {
    this.speed += speed
    console.log('animal: ' + this.name + 'speed is ' + this.speed)
  }

  static compare(animalA, animalB) {
    // static methods we dont put the ()
    return animalA.speed - animalB.speed
  }
}

class Rabbit3 extends Animal3 {
  hide() {
    this.speed = 0
    console.log(`${this.name} speed is 0`)
  }
}

let wabbits = [new Rabbit3('White', 1), new Rabbit3('Black', 5)]
wabbits.sort(Rabbit3.compare) // The compare method is NOT method of Animal but rather of the whole class. Hence we dont put ()

wabbits[0].run(10)

console.log('planet: ' + Rabbit3.planet)
