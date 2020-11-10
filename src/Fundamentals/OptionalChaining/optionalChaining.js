// Optional Chaining
console.log("Optional Chaining")
let user = {}
console.log(user?.address?.street)
//console.log(user?.address.street)       // This will cause an Error

let user2 = {
    name:"Tim",
    age:"33",
}
console.log(user?.name)
console.log(user?.age)

// Short Circuiting
console.log("Short Circuiting")
let user3 = null
let x = 0

user3?.sayHi(x++)
console.log("X = " + x)

// Other variants
console.log("Other Variants ?. ?[] ?.()")
let userAdmin = {
    admin() {
        console.log("Adminnnnn")
    }
}
let userGuest = {}

userAdmin.admin?.()
userGuest.admin?.()

console.log("Example of variant '?.[]'")
let user4 = {
    name:"Tim"
}

let user5 = null
console.log(user4?.['name'])
console.log(user5?.['name'])        // Returns undefined since user5 is null