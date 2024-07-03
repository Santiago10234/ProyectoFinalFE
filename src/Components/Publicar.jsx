import React, { useState } from 'react';
import NavBar from './NavBar';
import '../styles/publicar.css';

function Publicar() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="container-register">
          <h1 className='titulo'>Vehículo</h1>
          <form className='container-inp' onSubmit={handleSubmit}>
            <input onChange={handleFileChange} className='file' type="file" />
            <select value={marca} onChange={(e)=> setMarca(e.target.value)} className='inp'>
              <option defaultValue>Marca</option>
              <option>Alfa Romeo</option>
              <option>Aston Martin</option>
              <option>Audi</option>
            </select>
            <input value={modelo} onChange={(e)=> setModelo(e.target.value)} className='inp' placeholder='Modelo' type="text" />
            <input value={year} onChange={(e)=> setYear(e.target.value)} className='inp' placeholder='Año' type="number" />
            <input value={precio} onChange={(e)=> setPrecio(e.target.value)} className='inp' placeholder='Precio' type="number" />
            <button className='btn-register' type='submit'>Publicar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Publicar;
