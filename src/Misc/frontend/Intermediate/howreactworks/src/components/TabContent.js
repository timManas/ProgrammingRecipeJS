import { useState } from 'react'

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true)
  const [likes, setLikes] = useState(0)

  console.log('RENDER')

  function handleInc() {
    setLikes((likes) => likes + 1)
  }

  function handleTripleInc() {
    // Not these state changes are Batched and rendered ONCE NOT THREE times
    setLikes((likes) => likes + 1)
    setLikes((likes) => likes + 1)
    setLikes((likes) => likes + 1)
  }

  function handleUndo() {
    setShowDetails(true)
    setLikes(0)
    console.log(likes)
  }

  function handleUndoLater() {
    // Trigger a re-render after 5 seconds
    setTimeout(handleUndo, 5000)
  }

  return (
    <div className='tab-content'>
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className='tab-actions'>
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? 'Hide' : 'Show'} details
        </button>

        <div className='hearts-counter'>
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className='tab-undo'>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 5s</button>
      </div>
    </div>
  )
}

export { TabContent }
