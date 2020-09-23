// Variables
let message = "Hello";
console.log("Variable:  " + message);

message = 12345;
console.log("Variable with num: " + message);


// Numbers
let n = 1234
n = 12.345

// There is also Infinity, -Infinity & NaN
console.log(1/0)  // displays infinity
console.log(Infinity)
console.log ("Should display Nan:" + "Hello World" / 2)   // Nan


// Big Int
// n at the end means this is a big Int
const bigInt = 1234567890123456789012345678901234567890n;
console.log("Big Num Type: " + bigInt)


// String 
let str = "Hello World"
console.log("String Type: " + str )

// BackTickString
let name = "Tim";
console.log (`BackTick Ex: Hello, ${name}`)
console.log (`BacKTick Ex2: ${1+1}`)


// Boolean Type
let isBool = true
let isNum = false
console.log("Bool Ex: " + (4 > 1))


// Null Value
let age = null
console.log("Age:" + age)


// Undefined Value
// let age   // This will cause an error. Remember to comment this
// console.log("Age: " + age)