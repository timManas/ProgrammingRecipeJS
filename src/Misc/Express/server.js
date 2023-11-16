import express from 'express'

const app = express()
const PORT = 5000

let enableNext = false

const friends = [
  {
    id: 0,
    name: 'Tim',
  },
  {
    id: 1,
    name: 'John',
  },
]

app.get('/friends', (req, res, next) => {
  res.json(friends)
})

// Parameterized Route
app.get('/friends/:friendId', (req, res, next) => {
  const friendId = Number(req.params.friendId)
  const friend = friends[friendId]
  if (friend) {
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error: `friend does not exists: ${friendId}`,
    })
  }
})

app.get('/', (req, res, next) => {
  if (enableNext) {
    next()
  }

  res.send('Hello World !')
})

app.get('/', (req, res, next) => {
  res.send('Ayo !')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
