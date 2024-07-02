import React, { useEffect, useState } from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeDatosDeAmbos } from '../Fetch/Get'

function LuxuryCars() {
  const [listaCarros,setListaCarros]=useState([])

  useEffect(()=>{
    const traerCarros = async()=>{
      const data = await traeDatosDeAmbos("cars")
      setListaCarros(data)
    }
    traerCarros()
  },[])


  return (
    <div>
        <NabBar/>
        <Publicaciones getCarros={listaCarros}/>
    </div>
  )
}

export default LuxuryCars
