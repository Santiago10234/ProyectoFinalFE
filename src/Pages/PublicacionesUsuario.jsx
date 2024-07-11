import React from 'react'
import NabBar from '../Components/NavBar'
import Publicaciones from '../Components/Publicaciones'
import { traeCarrosPorUsuario } from '../Fetch/Get'
import { useState,useEffect } from 'react'
import { DeleteCars } from '../Fetch/Delete'
import Editar from '../Components/Editar'
function PublicacionesUsuario() {
  
  const [listaCarros,setListaCarros]=useState([]) // Estado para almacenar la lista de carros del usuario
  const [reload,setReload]=useState(false)
  const [mostrarEditar, setMostrarEditar] = useState(false); // Estado para manejar la visibilidad del componente Editar
  const [id,setID]=useState(0) // Estado para almacenar el ID del carro seleccionado para editarlo

  useEffect(()=>{
    const traerCarros = async()=>{
      // Obtiene los datos de los carros del usuario y actualiza la lista
      const data = await traeCarrosPorUsuario("cars",localStorage.getItem("idU"))
      setListaCarros(data)
    }
    traerCarros()
    console.log(listaCarros);
  },[reload])


  // Llama a la función para eliminar el carro
  const eliminarPubli = async (id)=>{
    const elim = await DeleteCars(id)
    console.log(elim)
    recargaPag()
  }
  const recargaPag=()=>{
    setReload(!reload)
  }
  
  const editarClick = (id) => {
    setMostrarEditar(true); // Muestra el componente Editar
    setID(id)
  };

    return (
    <div>
      <NabBar/>
      <Publicaciones btnEditar={editarClick} btnEliminar={eliminarPubli}  getCarros={listaCarros} mostrar={true} />
      {/* Muestra el componente Editar si `mostrarEditar` es verdadero */}
      {mostrarEditar && <Editar id={id}  recarga={recargaPag} />} 
    </div>
  )
}

export default PublicacionesUsuario
