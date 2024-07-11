import React, { useState } from 'react'
import { guardarUser } from '../Fetch/Post'
import { useNavigate } from 'react-router-dom'
function Register() {
    const [nombre,setNombre]=useState("")
    const [correo, setCorreo]=useState("")
    const [clave, setClave]=useState("")
    const navigate = useNavigate()// Hook para manejar la navegación

    const [error, setError] = useState("") // Estado para manejar el mensaje de error
    const agregarUser = async ()=>{ // Función asíncrona para agregar un nuevo usuario
        if (nombre.trim() === '' || correo.trim() === '' || clave.trim() === '') {
            setError('Todos los espacios deben de estar completos')
            return;
          }
        try {
            await guardarUser({
                user:nombre,
                email:correo,
                password:clave
            })
             // Limpia los campos del formulario
            setNombre("")
            setCorreo("")
            setClave("")
            navigate("/login") // Redirige al usuario a la página de login
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className='container'>
         {error && <p className='error-message'>{error}</p>} {/* Mostrar el mensaje de error */}

         <div className='container-register'>
           <form className='container-inp'>
                <h1 className='titulo-register'>Sing Up</h1>
                <input 
                    value={nombre}
                    onChange={(e)=>{
                    setNombre(e.target.value)
                }} placeholder='Name' className='inp' type="text" />
                <input
                    value={correo}  
                    onChange={(e)=>{
                    setCorreo(e.target.value)
                }}
                 placeholder='Email' className='inp' type="email" />
                <input 
                    value={clave}
                    onChange={(e)=>{
                    setClave(e.target.value)
                }} placeholder='Password' className='inp' type="password" />
                <button onClick={agregarUser} className='btn-register' type='button'>Register</button>
               
           </form>
        </div>
    </div>
  )
}

export default Register

