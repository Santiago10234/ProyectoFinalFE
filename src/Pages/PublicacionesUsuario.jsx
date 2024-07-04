import React from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeCarrosPorUsuario } from '../Fetch/Get'
import { useState,useEffect } from 'react'
import { DeleteCars } from '../Fetch/Delete'

function PublicacionesUsuario() {
  
  const [listaCarros,setListaCarros]=useState([])

  useEffect(()=>{
    const traerCarros = async()=>{
      const data = await traeCarrosPorUsuario("cars",localStorage.getItem("idU"))
      setListaCarros(data)
    }
    traerCarros()
    console.log(listaCarros);
  },[])

  useEffect(()=>{
   
    eliminarPubli()
  },[])
  const eliminarPubli = async (id)=>{
    const elim = await DeleteCars(id)
    console.log(elim)
  }

  

    return (
    <div>
      <NabBar/>
      <Publicaciones btnEliminar={eliminarPubli} getCarros={listaCarros} mostrar={true} />
    </div>
  )
}

export default PublicacionesUsuario
