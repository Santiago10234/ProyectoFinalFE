import React from 'react'
import '../styles/Card.css'
function Card({brand,model,img,price,year}) {
  return (
    <div className='container-2'>
       <h3>{brand}</h3> 
       <img className='img' src={img} alt="" width={"180px"}/>
      <span>{model}</span>
      <span className='price'>{price}</span>
      <h4>{year}</h4> 
    </div>
  )
}

export default Card
