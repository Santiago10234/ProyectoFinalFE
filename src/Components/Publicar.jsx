import React, { useState } from 'react';
import NavBar from './NavBar';
import '../styles/publicar.css';
import { enviaDatosDeAmbos } from '../Fetch/Post';
import { useNavigate } from 'react-router-dom';

function Publicar() {
  const [marca,setMarca]=useState()
  const [modelo,setModelo]=useState()
  const [year,setYear]=useState()
  const [precio,setPrecio]=useState()
  const [img,setImg]=useState()
  const navigate = useNavigate()

  const agregaCarro=async()=>{
    await enviaDatosDeAmbos(marca,modelo,img,precio,year)
    navigate("/luxuryCars")
  }
  const handleImage = (e) => {
    const file = document.getElementById("upload-file").files[0];
    const reader = new FileReader();
    if (file) {
        reader.onload = function(e) {
            setImg(e.target.result);
        };
        reader.readAsDataURL(file);
    }
};


  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="container-register">
          <h1 className='titulo'>Vehículo</h1>
          <form className='container-inp'>
          <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage}/>
              <select value={marca} onChange={(e)=> setMarca(e.target.value)} className='inp'>
              <option defaultValue>Marca</option>
              <option>Alfa Romeo</option>
              <option>Aston Martin</option>
              <option>Audi</option>
              <option>Bentley</option>
              <option>BMW</option>
              <option>Cadillac</option>
              <option>Dodge</option>
              <option>Ferrari</option>
              <option>Audi</option>
              <option>Ford</option>
              <option>Jaguar</option>
              <option>Lamborghini</option>
              <option>Land Rover</option>
              <option>Lexus</option>
              <option>Audi</option>
              <option>Maserati</option>
              <option>Mazda</option>
              <option>Mercedes Benz</option>
              <option>Porsche</option>
              <option>Rolls Royce</option>
              <option>Tesla</option>
              <option>Toyota</option>
              <option>Volvo</option>
            </select>
            <input value={modelo} onChange={(e)=> setModelo(e.target.value)} className='inp' placeholder='Modelo' type="text" />
            <input value={year} onChange={(e)=> setYear(e.target.value)} className='inp' placeholder='Año' type="number" />
            <input value={precio} onChange={(e)=> setPrecio(e.target.value)} className='inp' placeholder='Precio' type="text" />

            <button onClick={agregaCarro} className='btn-register' type='submit'>Publicar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Publicar;
