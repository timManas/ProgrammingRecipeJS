import { useState, useEffect } from 'react'

const KEY = '609392f6'

export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(
    function () {
      const controller = new AbortController()

      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError('')

          console.log("Start API Call UseEffect")
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          )

          if (!res.ok)
            throw new Error('Something went wrong with fetching movies')

          const data = await res.json()
          console.log('res data: ' + JSON.stringify(data))

          if (data.Response === 'False')
            throw new Error('Movie not found')

          setMovies(data.Search)
          setError('')
          
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err.message)
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      if (query.length < 3) {
        setMovies([])
        setError('')
        return
      }

      fetchMovies()

      // REMEMBER - This executes first before the useEffect function start line 12
      return function () {
        console.log("Abort previous API Call")
        controller.abort()    // Abort the API REQUEST
      }
    },
    [query]
  )

  return { movies, isLoading, error }
}
