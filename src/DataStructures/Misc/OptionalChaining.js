console.log('Option Chaining')

const adventurer = {
  name: 'Tim',
  address: {
    number: 38,
    street: 'Bay St',
    city: 'Toronto',
    province: 'ON',
  },
}

const streeName = adventurer.address?.street
console.log('StreetName: ' + streeName)

const nation = adventurer.address?.nation
console.log('nation: ' + nation)
