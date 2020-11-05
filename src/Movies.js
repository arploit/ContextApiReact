import React from 'react'

const Movies = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Movies
