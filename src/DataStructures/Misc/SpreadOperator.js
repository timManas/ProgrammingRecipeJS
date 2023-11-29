console.log('Spread Operators')

console.log('Ex1: Add new elements to Array')
const array1 = ['Hello', 'World', 'Wide', 'Web']
const newArr = ['News', ...array1, 'End']
console.log('newArr: ' + newArr + '\n')

console.log('Ex2: Seperate String to letters')
const str = 'ThisIsAString'
const letters = [...str]
console.log('Seperated Words: ' + letters + '\n')

console.log('Ex3: Use spread operator in function call')
const arr2 = [1, 2, 3, 4]
function multiplyNum(a, b, c, d) {
  return a * b * c * d
}
console.log('multiply: ' + multiplyNum([...arr2]) + '\n')

console.log('Ex4: Spread operators with Objects')
const ob1 = {
  name: 'Hugh Janus',
  age: 37,
  id: 123456,
}
const updatedOb1 = { ...ob1, address: '200 Bay St.' }
console.log('updatedObj1: ' + JSON.stringify(updatedOb1) + '\n')
