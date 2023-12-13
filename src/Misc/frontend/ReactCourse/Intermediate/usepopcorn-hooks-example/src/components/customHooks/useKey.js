import { useEffect } from 'react'

function useKey(key, action) {

  useEffect(
    function () {
      function callback(e) {

        // This will execute the function passed down from original class (ex: MovieDetails)
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action()  
        }
      }

      document.addEventListener('keydown', callback)

      return function () {
        document.removeEventListener('keydown', callback)
      }
    },
    [action, key]
  )
}

export { useKey }
