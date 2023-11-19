import express from 'express'

const PORT = 3000
const app = express()

/*
    Event loop is blocked until this loop finishes
    Nothing else can be processed, accessed until this loop finishes
 */
const delay = (duration) => {
  const startTime = Date.now()
  while (Date.now() - startTime < duration) {
    console.log('Date: ' + Date.now())
  }
}

app.get('/', (req, res) => {
  res.send('Performance Example')
})

app.get('/timer', (req, res) => {
  // Delay function
  delay(5000)

  res.send('Timer Expired')
})

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`)
})
