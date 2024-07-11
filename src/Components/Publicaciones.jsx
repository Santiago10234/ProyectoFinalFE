import React from 'react'
import  Card  from '../Components/Card'

function Publicaciones({getCarros,mostrar,btnEliminar,btnEditar}) {
  
  return (
    // Mapea la lista de carros y renderiza un componente Card para cada uno
    <div className='contenedor-card'>
       {getCarros.map(car=>(
        <Card
          key={car.id}
          brand={car.brand}
          img={car.img}
          model={car.model}
          year={car.year}
          price={car.price}
          mostrar={mostrar}
          btnEliminar={()=>btnEliminar(car.id)}
          btnEditar={()=>btnEditar(car.id)}
        />
       ))}
    </div>
  )
}

export default Publicaciones
