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
