import React from 'react'
import  Card  from '../Components/Card'

function Publicaciones({getCarros}) {
  
  return (
    <div className='contenedor-card'>
       {getCarros.map(car=>(
        <Card
          key={car.id}
          brand={car.brand}
          img={car.img}
          model={car.model}
          year={car.year}
          price={car.price}
        />
       ))}
    </div>
  )
}

export default Publicaciones
