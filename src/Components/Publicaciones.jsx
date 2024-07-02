import React from 'react'
import  Card  from '../Components/Card'
import  '../styles/Publicaciones.css'
function Publicaciones({getCarros}) {
  return (
    <div className='contenedor-publicaciones'>
      <div className='contenedor-card'>
        {getCarros.map((actualCar)=>(
          <Card
          key={actualCar.id}
          brand={actualCar.Brand}
          model={actualCar.Model}
          img={actualCar.img}
          price={actualCar.price}
          year={actualCar.year}
          />
        ))}
      </div>
    </div>
  )
}

export default Publicaciones
