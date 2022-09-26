// Eval function
// What ? Execute a string of code
// This is considered bad practice and rarely used
// Note: Eval is 'evil'
// Why ? Exposes
console.log('\nEval')

// Ex1
let code = 'console.log("Hello World")'
eval(code)

// Ex2:
code = '2 + 2'
console.log('Total:' + eval(code))

/**
Summary
A call to eval(code) runs the string of code and returns the result of the last statement.

Rarely used in modern JavaScript, as there’s usually no need.
Can access outer local variables. That’s considered bad practice.
Instead, to eval the code in the global scope, use window.eval(code).
Or, if your code needs some data from the outer scope, use new Function and pass it as arguments. 

*/
