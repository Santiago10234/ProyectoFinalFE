import React from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeCarrosPorUsuario } from '../Fetch/Get'
import { useState,useEffect } from 'react'
import { DeleteCars } from '../Fetch/Delete'
import { putPublicacion } from '../Fetch/Put'
import Editar from '../Components/Editar'

function PublicacionesUsuario() {
  
  const [listaCarros,setListaCarros]=useState([])
  const [reload,setReload]=useState(false)
  useEffect(()=>{
    const traerCarros = async()=>{
      const data = await traeCarrosPorUsuario("cars",localStorage.getItem("idU"))
      setListaCarros(data)
    }
    traerCarros()
    console.log(listaCarros);
  },[reload])



  const eliminarPubli = async (id)=>{
    const elim = await DeleteCars(id)
    console.log(elim)
    recargaPag()
  }
  const recargaPag=()=>{
    setReload(!reload)
  }
  
  const editarPubli = async ()=>{
    const edit = await putPublicacion(id ,marca, modelo, precio, year)
    console.log(edit)

  }
  

    return (
    <div>
      <NabBar/>
      <Publicaciones btnEditar={editarPubli} btnEliminar={eliminarPubli} getCarros={listaCarros} mostrar={true} />
      {/* <Editar/> */}
    </div>
  )
}

export default PublicacionesUsuario
