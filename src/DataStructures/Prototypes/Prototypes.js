console.log('\nPrototypes')

/**
 Prototypes
 - Behaves like "abstract" classes in java
 - Child objects inherits properties from the parent object
 - If property is not in child object, it will keep searching parent object until it finds it. Otherwise we get a null when we reach very top of the parent object

 Diagram:
 Animal   [Prototype]  Rabbit
 [eats]   <------     [jumps]

 Notes
 - Does NOT support Circular inheritance (i.e Child cant inherit from parent then parent inherit from child). Will get an error
 - Value of proto can either be object or null
*/

// Ex1: Define proto outside the object
let animal1 = { eats: true }
let rabbit1 = { jumps: true }
rabbit1.__proto__ = animal1
console.log('rabbit Hops: ' + rabbit1.jumps)
console.log('rabbit eats: ' + rabbit1.eats) // Notice rabbit does not have property eats ... but animal does

// Ex2: Define prototype inside object
let animal2 = {
  eats: true,
  walk() {
    console.log('Animal walk')
  },
}
let rabbit2 = {
  jumps: true,
  __proto__: animal2, //
}
rabbit2.walk()

// Note: Prototype is ONLY used for reading properties.
// Write/Delete operations works directly with the object

//Ex3:
let animal3 = { eats: true, walk() {} }
let rabbit3 = { __proto__: animal3 }
rabbit3.walk = function () {
  console.log('Rabbit walks')
}
rabbit3.walk() // Rabbit walks find the method immediately in the object and executes it, without using prototype

// Ex4
let user = {
  name: 'John',
  lastname: 'Smith',
  set fullName(value) {
    ;[this.name, this.lastname] = value.split(' ')
  },
  get fullName() {
    return `${this.name} ${this.lastname}`
  },
}

let admin = { __proto__: user, isAdmin: true }

console.log(admin.fullName)
admin.fullName = 'Alice Cooper'
console.log(admin.fullName) // Alice Cooper
console.log(user.fullName) // John Smith, state of the user is protected
