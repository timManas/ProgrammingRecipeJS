// Constructor function
console.log('Constructor function')
function User(name) {
  // this = {}            // This constructor declared implicity ...hidden
  this.name = name
  this.admin = false

  // return this          // This return is returned implicityl ...hidden
}
let user = new User('Tim')
console.log('New UserName: ' + user.name)
console.log('Is UserAdmin: ' + user.admin) // Notice we can place assign default values to admin

// New function() {....}
console.log('\nnew Function() {...}')
let user2 = new (function () {
  this.name = 'John'
  this.admin = false
})()
// Notice user & user1 can both be delared as new.

// Methods in Constructor
console.log('\nMethods in Constructor')
function User3(name) {
  this.name = name
  this.sayHi = function () {
    console.log('Method saying Hi')
  }

  function sayHello() {
    console.log('Method saying Hello')
  }
  this.sayHello = sayHello()
}

let newUser = new User3('John')
console.log('name of person' + newUser.name)
console.log('sayHi: ' + newUser.sayHi)
console.log('sayHello: ' + newUser.sayHello)

/**

Notes:
1.Create a new object using "new" operator
2. When a function with "new" is created: it does the following steps
    - A new empty object is created and assigned to this
    - The funciton body executes. Modifies "this" adds new properties to it
    - return the value of "this"

3. We can ommit paranthesis after new if it has NO arguments
4. We can another funciton inside construtor

 */
