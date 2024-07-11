import React, { useState } from 'react'
import { putPublicacion } from '../Fetch/Put'


function Editar({id, recarga}) {
  // Estados para almacenar los valores de los campos del formulario
  const [brandE,setBrand]=useState()
  const [modelE,setModel]=useState()
  const [yearE,setYear]=useState()
  const [priceE,setPrice]=useState()
  const [imgE,setImg]=useState()
  const [reload,setReload]=useState(false) // Estado para manejar la recarga
  const [modal,setModal]=useState(true) // Estado para manejar la visibilidad del modal

  // Maneja la carga y vista previa de la imagen seleccionada.
  const handleImage = (e) => {  
    const file = document.getElementById("upload-file").files[0]; // Obtiene el archivo seleccionado
    const reader = new FileReader();
    if (file) {
        reader.onload = function(e) {
            setImg(e.target.result);  // Establece el resultado de la lectura como la URL de la imagen
        };
        reader.readAsDataURL(file);
    }
 };

  // Actualiza los datos del vehículo usando la función putPublicacion.
  const actualizarDatos = async () =>{
    const actualizacion = {
      brand:brandE,
      model:modelE,
      img:imgE,
      year:yearE,
      price:priceE
    }
    await putPublicacion(id,actualizacion)
    recarga() // Llama a la función recarga para actualizar la vista
  }
  // Muestra el modal y actualiza los datos del vehículo.
  const muestraModal=()=>{
    setModal(true)  
    actualizarDatos()
  }
  // Cierra el modal.
  const cerrar = ()=>{
      setModal(false)

  }
  const recargaPag=()=>{
    setReload(!reload)
  }

  return (
    <div>
      {modal && (
       <div className='container'>
        <div className="container-register">
          <button className='cerrar' onClick={cerrar} type='submit'>X</button>
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

            <button className='btn-register' onClick={muestraModal} type='submit'>Editar</button>
          </form>
        </div>
      </div>
      )}
    </div>
  )
}

export default Editar
