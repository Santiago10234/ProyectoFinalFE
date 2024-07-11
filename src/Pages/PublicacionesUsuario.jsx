import React from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeCarrosPorUsuario } from '../Fetch/Get'
import { useState,useEffect } from 'react'
import { DeleteCars } from '../Fetch/Delete'
import Editar from '../Components/Editar'
function PublicacionesUsuario() {
  
  const [listaCarros,setListaCarros]=useState([])
  const [reload,setReload]=useState(false)
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [id,setID]=useState(0)

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
  
  const editarClick = (id) => {
    setMostrarEditar(true); 
    setID(id)
  };

    return (
    <div>
      <NabBar/>
      <Publicaciones btnEditar={editarClick} btnEliminar={eliminarPubli}  getCarros={listaCarros} mostrar={true} />
      {mostrarEditar && <Editar id={id}  recarga={recargaPag} />} 
    </div>
  )
}

export default PublicacionesUsuario
