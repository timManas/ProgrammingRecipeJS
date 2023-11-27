import { useEffect, useState } from 'react'

function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  /** 
   Upon start of page, we trigger the getAdvice to fetch the response so that it will get displayed on screen
   Removing the [] produces an infinite []
   Why is that ?  If you Effect runs in an infinite cycle, these two things MUST be true:
   1. Your effect is updating some state
   2. That state leads to a rerender, which causes the Effects dependencies to change 

  Changing state will always cause a re-render. 
  By default, useEffect always runs after render has run. 

  This means if you don't include a dependency array when using useEffect to fetch data, 
  and use useState to display it, you will always trigger another render after useEffect runs.
  Unless you provide useEffect a dependency array.

  If you provide useEffect an empty dependency array, it'll run exactly once
  
   */
  useEffect(
    function () {
      console.log('Advice Effect Executed')
      getAdvice()
    },
    [advice]
  )

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    // console.log(
    //   `advice: ${advice}       count: ${count}        data: ${JSON.stringify(
    //     data
    //   )}}`
    // )

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
