console.log('F.prototype')
// New objecrs can be created with the constructor function like new F()
// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object

// Ex1
let animal = { eats: true }
function Rabbit(name) {
  this.name = name
}
Rabbit.prototype = animal

let rabbit = new Rabbit('White Rabbit')
console.log('Rabbit eats ? ' + rabbit.eats) // Notice Rabbit gets properties of animal

// Ex2: Use function constructor to initialize
function Rabbit1(name) {
  this.name = name
  console.log('Name: ' + this.name)
}
let rabbit1 = new Rabbit1('Rabbit1')
let rabbit2 = new rabbit1.constructor('Rabbit2')
