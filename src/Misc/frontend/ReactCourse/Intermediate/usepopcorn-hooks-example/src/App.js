import { useState } from 'react'
import { tempMovieData, tempWatchedData } from './data/tempMovieData'
import { useLocalStorageState } from './components/useLocalStorageState'
import { useMovies } from './components/useMovies'
import { NavBar } from './components/NavBar'
import { Search } from './components/Search'
import { Main } from './components/Main'
import { Box } from './components/Box'
import { Loader } from './components/Loader'
import { MovieList } from './components/MovieList'
import { ErrorMessage } from './components/ErrorMessage'
import { MovieDetails } from './components/MovieDetails'
import { WatchedSummary } from './components/WatchedSummary'
import { WatchedMoviesList } from './components/WatchedMovieList'
import { NumResults } from './components/NumResults'

export default function App() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const { movies, isLoading, error } = useMovies(query)
  const [watched, setWatched] = useLocalStorageState([], 'watched')

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie])
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
          {/* <MovieList movies={movies} onSelectMovie={handleSelectMovie} /> */}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
