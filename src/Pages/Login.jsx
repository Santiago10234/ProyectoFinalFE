import React, { useEffect, useState } from 'react'
import traerUser from '../Fetch/Get'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
        const [lista, setLista]= useState([])
        const [correo, setCorreo] = useState("")
        const [clave, setClave] = useState("")

        useEffect(()=>{
            const traeDatitos = async()=>{
                const infoUser = await traerUser()
                setLista(infoUser)
            }
            traeDatitos()
        },[])
  
        
        const valitar = ()=>{
            if(lista.find(users => users.email === correo && users.password === clave)){
                navigate("/luxuryCars")
            }else{
                alert("Email o contraseña incorrecta")
                console.log(lista);
            }
            
        }

 return (
    <div className='container'>
         <div className='container-register'>
           <form className='container-inp'>
                <h1 className='titulo-register'>Login</h1>
                <input onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Email' className='inp' type="email" />
                <input onChange={(e)=>{setClave(e.target.value)}} placeholder='Password' className='inp' type="password" />
                <button onClick={valitar} className='btn-register' type='button'>Login</button>
           </form>
        </div>
    </div>
  )
}
 
export default Login
