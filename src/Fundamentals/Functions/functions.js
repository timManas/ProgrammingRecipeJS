// Function Declaration
function sayHelloWorld() {
    console.log("Hello World");
}

sayHelloWorld();


// Function Expressions
let sayHi = function() {
    console.log("Hi World");
}

sayHi;  // This will not print
sayHi(); // This will Print 


//CallBack Functions
console.log("CallBack Functions Example: ")
function ask(question, yes, no) {
    if (confirm(question))
        yes();                  // Here is where we add the () ...which then executes the showOk()
    else
        no();                   // Here is where we add the () ...which then executes the showCancel()
    
}

function showOk() {
    console.log("Agreed")
}

function showCancel() {
    console.log("Cancelled")
}

ask("Do you Agree", showOk, showCancel)     // Notice we DO NOT place the the () ...


