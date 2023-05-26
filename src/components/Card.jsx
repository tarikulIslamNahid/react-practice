import React from 'react'
import propTypes from 'prop-types'

const Card = ({data}) => {
  return (
    <div>
      <p>Name: {data.name}</p> 
      <p>Age: {data.age}</p> 
      <p>Address: {data.address}</p> 
    </div>
  )
}

Card.propTypes = {
    data:propTypes.object
}

export default Card
