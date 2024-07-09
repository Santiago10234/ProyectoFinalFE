import React, { useState } from 'react'
import { putPublicacion } from '../Fetch/Put'


function Editar({id,recarga}) {
  const [brandE,setBrand]=useState()
  const [modelE,setModel]=useState()
  const [yearE,setYear]=useState()
  const [priceE,setPrice]=useState()
  const [imgE,setImg]=useState()

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

  const actualizarDatos = async () =>{
    const actualizacion = {
      brand:brandE,
      model:modelE,
      img:imgE,
      year:yearE,
      price:priceE
    }
    await putPublicacion(id,actualizacion)
    recarga()
    

  }
  return (
    <div>
       <div className='container'>
        <div className="container-register">
          <button className='cerrar'>X</button>
          <h1 className='titulo'>Edita tu Vehículo</h1>
          <form className='container-inp'>
          <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file"  onChange={handleImage}/>
              <select className='inp' onChange={(e)=>setBrand(e.target.value)}>
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
            <input className='inp' placeholder='Modelo' type="text" onChange={(e)=>setModel(e.target.value)}/>
            <input className='inp' placeholder='Año' type="number" onChange={(e)=>setYear(e.target.value)}/>
            <input className='inp' placeholder='Precio' type="text" onChange={(e)=>setPrice(e.target.value)}/>

            <button className='btn-register' onClick={actualizarDatos} type='submit'>Editar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editar
