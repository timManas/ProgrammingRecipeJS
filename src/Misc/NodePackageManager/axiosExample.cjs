const axios = require('axios')

//Ex1
async function ex1() {
  await axios
    .get('https://www.google.com')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('error: ' + error)
    })
    .then(() => {
      console.log('Ex1 All done \n\n\n')
    })
}

//Ex2
async function ex2() {
  await axios
    .get('https://wwwwwwww.google.com')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('error: ' + error)
    })
    .then(() => {
      console.log('Ex2 All done \n\n\n')
    })
}

// Execute this in order.
;(async () => {
  await ex1()
  await ex2()
})()
