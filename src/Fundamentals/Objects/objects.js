// Object Creation
console.log("Object Creation")
let user = {
    name: "Tim",        // key's are ALWAYS string, values can be whatever
    age: 33,
    "Hello World": "YoYoYo",
}

// Accessing Object properties using Square brackets
console.log("Accessing Object properties using Square brackets")
console.log("Users Name: " + user["name"])
console.log("Users Age: " + user.age)
console.log("Users Dibberish: " + user["Hello World"])
console.log("Users thing1: " + user.thing1)


// Computed properties
console.log("Computed Properties")
let fruit = prompt("Which fruit to buy ?")  // Type in apple
let bag = {
    [fruit]:5,          // This goes to fruit and fetches what user typed in
}
console.log("Number of fruits = " + bag.apple)
console.log("Number of Fruits = " + bag["apple"])   

// Property value shorthand
console.log("Property value shorthand")
function makeUser(name, age) {
    return {
        name,       // sane as name:name ...aka name:Tim
        age         // same as age:age  .... aka age:30
    }
}
user = makeUser("Tim", 30)
console.log("Name: " + user.name + "    Age: " + user["age"])


// Property existence test ... "in" operator
console.log("In operator")
console.log("Is Address in user ? " + ("address" in user))  // returns False
console.log("Is age in user ? " + ("age" in user))  // returns True


// For in Loop 
console.log("For in Loop to traverse through all properties of Object")
for (let properties in user ) {
    console.log(properties)
}

// Object properties order
console.log("Object properties order")
let user2 = {
    Name:"Tim",
    age:30,
    "5":5,
    address: "33 Baker Street",
    "10":10
}

for (let prop in user2) {
    console.log(prop)
}
console.log("Remember: Numbers come in first then properties in order they were created)