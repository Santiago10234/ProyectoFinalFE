import React from 'react'
import '../styles/Card.css'
function Card({brand,model,img,price,year,mostrar,btnEliminar,btnEditar}) {
  return (
    <div className='container-2'>
       <h3>{brand}</h3>   {/* Muestra la marca del carro */}
       <img className='img' src={img} alt="" height={"120px"} width={"180px"}/> {/* Muestra la img del carro */}
       <span>{model}</span>  {/* Muestra el modelo del carro */}
       <div className='container-price-edit'>
        <span className='price'>{price}</span>  {/* Muestra el precio del carro */}
        {mostrar 
        && <button className='btn-edit' onClick={btnEditar} type='button' >Editar</button>} {/* Muestra el botón de editar solo si la prop 'mostrar' es true */}
       </div>
       <div className='contenedor-year-Elim'>
        <h4 className='year'>{year}</h4>  {/* Muestra el año del carro */}
        {mostrar &&  
        <button className='btn-eliminar' onClick={btnEliminar} type="button">Eliminar</button>} {/* Muestra el botón de eliminar solo si la prop 'mostrar' es true */}
       </div>
       </div>
  )
}

export default Card
