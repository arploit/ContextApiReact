import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'abc',
      price: 23,
      id: 1,
    },
    {
      name: 'hij',
      price: 23,
      id: 2,
    },
    {
      name: 'efg',
      price: 23,
      id: 3,
    },
    {
      name: 'xbz',
      price: 23,
      id: 4,
    },
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
