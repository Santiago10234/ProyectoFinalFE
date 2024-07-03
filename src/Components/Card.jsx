import React from 'react'
import '../styles/Card.css'
function Card({brand,model,img,price,year,mostrar,btnEliminar}) {
  return (
    <div className='container-2'>
       <h3>{brand}</h3> 
       <img className='img' src={img} alt="" height={"120px"} width={"180px"}/>
       <span>{model}</span>
       <span className='price'>{price}</span>
       <div className='contenedor-year-Elim'>
        <h4 className='year'>{year}</h4>
        {mostrar &&  
        <button className='btn-eliminar' onClick={btnEliminar} type="button">Eliminar</button>
        }
       </div>
       </div>
  )
}

export default Card
