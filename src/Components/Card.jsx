import React from 'react'
import '../styles/Card.css'
function Card({brand,model,img,price,year}) {
  return (
    <div className='container-2'>
      <h3>{brand}</h3>
      <span>{model}</span>
      <img src={img} alt="" width={"200px"}/>
      <span>{price}</span>
      <h4>{year}</h4>
    </div>
  )
}

export default Card
