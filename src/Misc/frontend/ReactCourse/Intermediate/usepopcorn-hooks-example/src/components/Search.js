import { useRef } from 'react'
import { useKey } from './customHooks/useKey'

function Search({ query, setQuery }) {
  const inputEl = useRef(null)

  useKey('Enter', function () {

    // If we are already focused on the search bar. Then dont refocus again
    if (document.activeElement === inputEl.current) 
      return

    inputEl.current.focus()
    setQuery('')
  })

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  )
}

export { Search }
