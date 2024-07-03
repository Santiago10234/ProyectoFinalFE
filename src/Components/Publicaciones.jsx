import React from 'react'
import  Card  from '../Components/Card'

function Publicaciones({getCarros}) {
  return (
    <div>
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
  )
}

export default Publicaciones
