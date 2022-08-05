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

// Note: For ... loop also iterates over inherited properties too
console.log('\nFor... loop also iteraves over inherited properties too ')
let animal4 = { eats: true }
let rabbit = { jumps: true, __proto__: animal4 }
for (let prop in rabbit) console.log('Property: ' + prop)

// Object Prototypes
// Let us create objects by using Object.prototype as the [[Prototype]]
console.log('----- Native Prototypes -----')
console.log('\nObject Prototypes')
// Ex1
let obj = {} // This is the same as let obj = new Object()
console.log(obj.__proto__ === Object.prototype) // true
console.log(obj.toString === obj.__proto__.toString) //true
console.log(obj.toString === Object.prototype.toString) //true

console.log('\nCreate Protype using Object.setPrototype ')
// Ex1
let animal5 = { eats: true }
let rabbit5 = {}
Object.setPrototypeOf(rabbit5, animal5)
console.log('rabbit5 eats ? ' + rabbit5.eats)
console.log(
  'rabbit5 prototype is animal5 :  ' +
    (Object.getPrototypeOf(rabbit5) === animal5)
)

console.log('\nCreate Prototypse using Object.create')
// Ex1
let animal6 = { eats: true }
let rabbit6 = Object.create(animal6, { jumps: { value: true } })
console.log(rabbit6.jumps)
console.log(rabbit.eats)

/**
 
Summary
 - In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
 - We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
 - The object referenced by [[Prototype]] is called a “prototype”.
 - If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
 - Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
 - If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
 - The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.


  To create an object with the given prototype, use:
    > literal syntax: { __proto__: ... }, allows to specify multiple properties
    > or Object.create(proto, [descriptors]), allows to specify property descriptors.
 */
