import express from 'express'

const PORT = 3000
const app = express()

/*
    Event loop is blocked until this delay finishes
    Nothing else can be processed, accessed until this loop finishes
    This is Bad ... This will cause ENTIRE server to slow down

    Why ? 
    Because NodeJS is a single thread application. So a blocking function like this will block other
    request from executing 

    Ex:
    T + 0: Client1 sends request to server
    T + 2: Client2 sends request to server

    T + 5: Server sends request to Client1
    T +10: Server sends request to Client2

    Why is this bad ?
    - Client2 should also get T+5 sec, instead T+10 ...Request #2 is blocked off

 */
const delay = (duration) => {
  const startTime = Date.now()
  while (Date.now() - startTime < duration) {
    console.log('Date: ' + Date.now())
  }
}

app.get('/', (req, res) => {
  res.send(`Performance Example ${process.pid}`)
})

app.get('/timer', (req, res) => {
  // Delay function
  delay(10000)

  res.send(`Timer Expired ${process.pid}`)
})

console.log('Worker process started...')
app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`)
})
