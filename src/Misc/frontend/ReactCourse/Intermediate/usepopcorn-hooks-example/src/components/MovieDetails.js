import { useState, useRef, useEffect } from 'react'
import { Loader } from './Loader'
import { StarRating } from './StarRating'
import { useKey } from './useKey'

const KEY = '609392f6'

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState('')

  const countRef = useRef(0)

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId)
  const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating


  // Destructure the data from movie
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie
  

  // const isTop = imdbRating > 8
  // console.log(isTop)

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    }

    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }

  useKey('Escape', onCloseMovie)

  useEffect(
    function userRatingUseEffect() {
      console.log("userRating triggered")
      if (userRating) 
        countRef.current++
        console.log("Finished userRating triggered")
    },
    [userRating]
  )


  useEffect(
    function selectIdUseEffect() {
      console.log("selectId triggered")
      async function getMovieDetails() {

        setIsLoading(true)          // This will trigger a Re-Render

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        )

        const data = await res.json()
        console.log('res movie data: ' + JSON.stringify(data))

        // This will trigger a Re-Render
        console.log("Modify setMovie and isLoading")
        setMovie(data)
        setIsLoading(false)
      }
      getMovieDetails()
      console.log("Finished selectId triggered")
    },
    [selectedId]
  )

  
  useEffect(
    function titleUseEffect() {
      console.log("title triggered - title: " + title)

      if (!title) 
        return
      
      document.title = `Movie | ${title}`

      return function () {
        document.title = 'usePopcorn'
        console.log(`Clean up effect for movie ${title}`)     // This will get triggered first ...
      }
    },
    [title]
  )



  console.log("Rendering -> selectedId: " + selectedId + "    title: " + title)
  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>id: {selectedId}</p>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* <p>{avgRating}</p> */}

          <section>
            <div className='rating'>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className='btn-add' onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  )
}

export { MovieDetails }
