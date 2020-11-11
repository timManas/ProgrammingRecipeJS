// Method Example
console.log("Method Example")
let user = {
    sayHi: function() {
        console.log("Hello World")
    }
}
user.sayHi()

// Short Hand Notation
user = {
    sayHi() {
        console.log("Hello Tim")
    }
}
user.sayHi()

// 'this' in methods
console.log("this Example")
user = {
    name: "Tim",
    age: 30,

    sayHi() {
        console.log(this.name)
    }
}
user.sayHi()

// 'this' is NOT bounded
console.log("'this' is Not bounded")
user = {name: "Tim"}
let admin = {name: "Admin"}

function sayHi() {
    console.log(this.name)
}

// Assign a function to BOTH user and admin
// NOTE: NOTICE we did NOT put a "()" in there. You do, you get an error
user.say = sayHi            
admin.say = sayHi

// Run the method
user.say()
admin.say()
admin['say']

// Chaining Example
console.log("Chaining Example:")
let ladder = {
    step:0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log("Num Steps: " + this.step)
    }
}

// Ex1: Sequential 
ladder.up()
ladder.up()
ladder.down()
ladder.showStep()

// Ex2: Chaining
ladder.up().up().down().showStep()


