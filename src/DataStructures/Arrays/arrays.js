// Creation of Arrays
console.log("Creation of Arrays")
let arr = ["Hello", true, {name: "Tim"}, function() {console.log("Hello World")}];
let matrix = [                  // MultiDimensional Array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

let arr2 = ["Hello", "World", "Tim"]


// Loop through array
console.log("Looping through Array")
for (let i=0; i<arr.length; i++) {
    console.log("i:" + i + "    arr[i]: " + arr[i])
}

for (let item of arr2) {
    console.log("Arr[i]: " + item )
}

// Push / Pop
console.log("Push/Pop: Used for add/remove at the END of the array")
arr2.push("GoodMorning")                                     // Add last Element
console.log("Push 'GoodMorning' to end of Array: " + arr2)

console.log("Pop the last Element: " + arr2.pop())          // Removes last element
console.log("Current Arr after pop: " + arr2)              

// Shift / UnShift
console.log("Shift/UnShift: Used for add/remove at the BEGINNING of the array")
arr2.unshift("Beginning")
console.log("Unshift new String in the beginning of the array: " + arr2)

console.log("Shift Elements: " + arr2.shift())
console.log("Current Arr after Shift: " + arr2)



