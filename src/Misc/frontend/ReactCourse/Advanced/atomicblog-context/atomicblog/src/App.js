import { useEffect, useState } from 'react'
import { PostProvider } from './PostContext'
import Header from './Header'
import Archive from './Archive'
import Footer from './Footer'
import Main from './Main'

function App() {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false)

  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode')
    },
    [isFakeDark]
  )

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className='btn-fake-dark-mode'
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  )
}

export default App
