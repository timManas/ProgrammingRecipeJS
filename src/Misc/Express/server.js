import express from 'express'

const app = express()
const PORT = 5001

// This is a next() example
app.get('/', (req, res, next) => {
  res.send('Hello World !')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Ayo !')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
