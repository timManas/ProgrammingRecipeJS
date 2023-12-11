import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // REMEMBER - Render FIRST, then useEffect
  useEffect(() => {
    console.log('I am the effect - Count: ' + count);
    return () => {
      console.log('I run after re-render, but before the next useEffect - Count: ' + count);
    };
  });

  console.log('Rendering - Count: ' + count);
  return (
    <>
      <button onClick={() => {setCount((count) => count + 1)}}>
        Click me
      </button>
      <p>state: {count}</p>
    </>
  );
}


export default App;


/**
 * This is the order
 * 1. User clicks on Button
 * 2. Button triggers a state change
 * 3. State change triggers a Re-Render
 * 4. Rendering logic gets triggered first, hence "Rendering-Count" gets hit first
 * 5. Once browser paints, useEffect() get triggered
 * 6. useEffect clean up function triggers first, hence " I run after re-render "
 * 7. Finally, 'I am the effect' gets triggered
 */