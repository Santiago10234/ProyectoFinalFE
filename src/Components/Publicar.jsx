import React from 'react'
import NavBar from './NavBar'
import '../styles/publicar.css'

function Publicar() {
  
  return (
    <div>
        <NavBar/>
        <div className='container'>
            <div className="container-register">
              <h1 className='titulo'>Vehículo</h1>
              <form className='container-inp' >
                  <input className='file' type="file" />
                  <select className='inp'>
                      <option selected >Marca</option>
                      <option>Alfa Romeo</option>
                      <option>Aston Martin</option>
                      <option>Audi</option>
                  </select>
                  <input className='inp' placeholder='Modelo' type="text" />
                  <input className='inp' placeholder='Año' type="number" />
                  <input className='inp' placeholder='Precio' type="number" />
                  <button className='btn-register' type='button'>Publicar</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Publicar
