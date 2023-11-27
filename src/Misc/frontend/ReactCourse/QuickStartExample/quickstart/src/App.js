import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  // Upon start of page, we trigger the getAdvice to fetch the response so that it will get displayed on screen
  useEffect(function () {
    getAdvice()
  }, [])

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    console.log(
      `advice: ${advice}       count: ${count}        data: ${JSON.stringify(
        data
      )}}`
    )

    // Data.slip.advice is the JSON object. Try console logging it
    setAdvice(data.slip.advice)

    setCount(count + 1) // I dont get this ... where are they storing count ? Answer: in 'count' ...useStates stores it in there
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  )
}

function Message(props) {
  return (
    <p>
      Count <strong>{props.count}</strong> clicked
    </p>
  )
}

export default App
