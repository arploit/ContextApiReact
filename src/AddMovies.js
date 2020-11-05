import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext.js'

const AddMovies = () => {
  const [movies, setMovie] = useContext(MovieContext)
  const [name, updateName] = useState('')
  const [price, updatePrice] = useState('')

  const setName = (e) => {
    updateName(e.target.value)
  }

  const setPrice = (e) => {
    updatePrice(e.target.value)
  }

  const updateMovie = (e) => {
    e.preventDefault()
    setMovie((premovies) => [...premovies, { name: name, price: price }])
  }

  return (
    <form onSubmit={updateMovie}>
      <input type="text" name="name" value={name} onChange={setName} />
      <input type="price" name="price" value={price} onChange={setPrice} />
      <button>Submit</button>
    </form>
  )
}

export default AddMovies
