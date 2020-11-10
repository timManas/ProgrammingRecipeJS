// Symbols
console.log()
let user1 = Symbol()
let id = Symbol("id")   // "id" is a description
let id2 = Symbol("id")
console.log("id === id2 ? " + (id === id2))

console.log(id)     // Returns Error since we cannot convert Symbol to String

// Hidden Properties
console.log("Hidden Properties")
user = {
    name:"Tim"
}
id = Symbol("id")
user[id] = 1
console.log("User[id]: " + user[id])

// Symbols in Object Literals
console.log("Symbols in Object Literals")
id = Symbol("id")
user = {
    name: "Tim",
    [id]: 123       // NOT "id":123
}

// Symbols are skipped by for ... in
console.log("Symbols are skipped by for ... in")
id = Symbol("id")
user = {
    name: "Tim",
    age:33,
    [id]: 123
}

for (let key in user)
    console.log("Key: " + key)

console.log("Direct access to Symbol: " + user[id])


// Global Symbols
console.log("Global Symbols")
id = Symbol.for("id")
id2 = Symbol.for("id")
console.log("id === id2 ? " + (id === id2))

let sym = Symbol.for("name")
let sym2 = Symbol.for("id")
console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym2))