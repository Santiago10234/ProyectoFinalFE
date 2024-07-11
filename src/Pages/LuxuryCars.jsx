import React, { useEffect, useState } from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeDatosDeAmbos } from '../Fetch/Get'

function LuxuryCars() {
  // Estado para almacenar la lista de carros obtenidos
  const [listaCarros,setListaCarros]=useState([])

  useEffect(()=>{
    const traerCarros = async()=>{
      // Llama a la función para obtener datos y actualiza el estado con la lista de carros
      const data = await traeDatosDeAmbos("cars")
      setListaCarros(data)
    }
    traerCarros()
    console.log(listaCarros);
  },[])

  return (
    <div>
        <NabBar/>
        <Publicaciones getCarros={listaCarros}/> {/* Renderiza el componente Publicaciones con la lista de vehículos */}
    </div>
  )
}

export default LuxuryCars
