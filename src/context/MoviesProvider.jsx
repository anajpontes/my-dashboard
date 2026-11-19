import { useState } from 'react'
import { MoviesContext } from './MoviesContext.js'
import { movies as initialMovies } from '../data/movies.js'
 
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(initialMovies)
 
  function addMovie(newMovie) {
    setMovies([...movies, newMovie])
  }
 
  const value = { movies, addMovie }
 
  return <MoviesContext value={value}>{children}</MoviesContext>
}
 
export default MoviesProvider