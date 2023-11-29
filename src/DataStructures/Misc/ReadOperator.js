console.log('Read Operators')

console.log('Ex1: Use read operator in function')
function test(...values) {
  return values
}
console.log('test:  ' + test('Hello', 'World', 'Wide', 'Web') + '\n')

console.log('Ex2: Destructure array')
let [name1, name2, ...titles] = [
  'Julius',
  'Caesar',
  'Hello',
  'World',
  'Wide',
  'Web',
]
console.log(
  'name1: ' + name1 + '   name2: ' + name2 + '    titles: ' + titles + '\n'
)

console.log('Ex2: Destructure object')
const ob1 = {
  name: 'Hugh Janus',
  age: 37,
  id: 123456,
}
const { id, ...others } = ob1
console.log('name: ' + id + '      others: ' + JSON.stringify(others) + '\n')
