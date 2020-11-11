// Creation
let single = 'Hello'
let double = "World"
let backTicks = `Tim`

console.log("Single: " + single + 
"     Double: " + double +
"     BackTicks: " + backTicks)



// Misc Functions
console.log("Misc Functions")
let str = "Hello World"

// Find String Length
console.log("length: " + str.length)

// Accessing individual characters in string
for (let i=0; i<str.length;i++) 
    console.log("Letter: " + str[i] +   "   CharAt: " + str.charAt(i))

// Change Case to upper or lower
str = str.toUpperCase()
console.log("ToUpper: " + str) 

str = str.toLocaleLowerCase()
console.log("ToLower: " + str)

// Search for Substring
console.log("SubString of 'wor': " + str.indexOf("wor"))
console.log("Substring of 'tim': " + str.indexOf('tim'))

// Getting Substring
console.log("SubString: " + str.substring(1,7))
console.log("Substr: " + str.substr(1,7))       // 7 is length of the word
console.log("Slice: " + str.slice(1,7))


// Comparing sTRING
