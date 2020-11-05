import React, { useState, useContext } from 'react'
import Movies from './Movies'
import { MovieContext } from './MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      {movies.map((movie) => (
        <Movies name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList
