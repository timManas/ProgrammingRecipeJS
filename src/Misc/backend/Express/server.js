import { app } from './app.js'

const PORT = 5000

// Start Express
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
