console.log("Cloning by Brute Force")
let user = {
    name: "Tim",
    age: 33,
}
let clone = {}

// Clone here
for (let key in user) {
    clone[key] = user[key];
}
clone.age = 50
for (let prop in clone) {
    console.log("Property: " + prop + "     Value: " + clone[prop])
}


console.log("Cloning by Object.Assign")
user = {
    name: "Tim",
    age: 33
}

let src1 = {
    Address: "1 York St."
}

let src2 = {
    occupation: "Me"
}

Object.assign(user, src1, src2);     // Places all properties onto user
for (let prop in user) {
    console.log("Property: " + prop + "     Value: " + user[prop])
}

clone = Object.assign({}, src1, src2)   // Creates new object and puts properties of src1 and src2 into new object
for (let prop in clone) {
    console.log("Property: " + prop + "     Value: " + clone[prop])
}
