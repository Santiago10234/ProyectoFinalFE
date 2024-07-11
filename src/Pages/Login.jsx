import React, { useEffect, useState } from 'react'
import traerUser from '../Fetch/Get'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate() // Hook para manejar la navegación de la pagina

        const [lista, setLista]= useState([])  // Estado para almacenar la lista de usuarios
        const [correo, setCorreo] = useState("") // Estado para almacenar el correo electrónico ingresado
        const [clave, setClave] = useState("") // Estado para almacenar la clave ingresado
        const [error, setError] = useState("") // Estado para manejar el mensaje de error
        
        useEffect(()=>{  // Hook useEffect para cargar los datos de usuarios
            const traeDatitos = async()=>{
                const infoUser = await traerUser()
                setLista(infoUser)
            }
            traeDatitos()
        },[])
  
        
        const validar = ()=>{ // Función para validar los datos del usuario
            const usuario = lista.find(users => users.email === correo && users.password === clave)
            if(usuario){
                localStorage.setItem("idU",usuario.id)
                navigate("/luxuryCars")
            }else{
                setError('Email o contraseña incorrecta')
                console.log(lista);
            }
            
        }

 return (
    <div className='container'>
        {error && <p className='error-message'>{error}</p>} {/* Mostrar el mensaje de error */}
         <div className='container-register'>
           <form className='container-inp'>
                <h1 className='titulo-register'>Login</h1>
                <input onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Email' className='inp' type="email" />
                <input onChange={(e)=>{setClave(e.target.value)}} placeholder='Password' className='inp' type="password" />
                <button onClick={validar} className='btn-register' type='button'>Login</button>
           </form>
        </div>
    </div>
  )
}
 
export default Login
