// String Comparisons
console.log("\nString Comparisons")
console.log('Z' > 'A') // Should return True
console.log('Glow' > 'Glee') // Should return True
console.log('Bee' > 'Be') // Should return True


// Boolean Comparisons
console.log("\nBoolean Comparisons")
console.log(2 > 1)
console.log(2 == 1)

// Comparisons of Different Types
console.log("\nComparisons of Different Types")
console.log('2' > 1)    // true, String '2' gets converted to number 2
console.log('01' == 1)  // true, String '01' becomes number 1

// Strict Equality Operator
console.log("\nStrict Equality Operator")
console.log( 0 == false)    // returns true =(
console.log(0 === false)    // returns False =)


// Comparisons with null & undefined
console.log("\nComparisons with null & undefined")
console.log(null === undefined)     // returns false
console.log(null == undefined)      // returns true

console.log("Watch out for this")
console.log(null == 0)  // false
console.log(null > 0)   // false    But .... null is converted to 0
console.log(null >= 0)  // true     Why ? >= converts null to 0