import React from 'react'
import { useLocation } from 'react-router-dom'

const Shop = () => {
    const {state} = useLocation();

  return (
    <div>
      <h2>Title: {state.productTitle}</h2>
      <p>Price: {state.price}</p>
    </div>
  )
}

export default Shop
