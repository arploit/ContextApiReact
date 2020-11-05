import React, { useContext } from 'react'
import './NavStyles.css'
import { MovieContext } from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <header>
      <nav>
        <ul>
          <li> Trying </li>
          <li>Number of Books:{movies.length} </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
