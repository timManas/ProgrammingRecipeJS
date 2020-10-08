// String Conversion
console.log("String Conversion");
let value = true
console.log("TypeOf: " + typeof value)
value = String(value)
console.log("TypeOf After String() Conversion: " + typeof value)

// Numeric Conversion
console.log("\nNumeric Conversion");
let str = "1234"
console.log("TypeOf: " + str)
str = Number(str)
console.log("TypeOf After Number() Conversion: " + str)

let age = "Hello World"
console.log("Hello World converted to Num is: " + Number(age))

// Boolean Conversions
console.log("\nBoolean Conversions");
console.log("Boolean of 1: " + Boolean(1))
console.log("Boolean of 0: " + Boolean(0))
console.log("Boolean of Hello World: " + Boolean("Hello World"))
console.log("Boolean of Empty String: " + Boolean(""))