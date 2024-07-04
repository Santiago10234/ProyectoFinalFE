import React from 'react'
import '../styles/navBar.css'
import logo from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'
import BurguerButton from './BurguerButton'
import { useState } from 'react'

function NabBar() {
  const[clicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const cerrar = ()=>{
        localStorage.clear()
        navigate("/")
    }
    const publicar = () =>{
        navigate("/publicar")
    }
    const luxuryCars = () =>{
      navigate("/luxuryCars")
    }
    const miPublicacion = () =>{
     navigate("/mipublicacion")
    }
const handleClick = () =>{
// cuando esta true lo pasa a false
  setClicked(!clicked)
}

  
  return (
    <div className='nav-container'>
      <nav className='NavBar'>
            <img className='logo'  onClick={luxuryCars} src={logo} alt="Logo" />
        <div className={`nave links ${clicked ? "active" : ""}`}>
            <a className='btn'>INICIO</a>
            <a className='btn' onClick={luxuryCars}>VEHÍCULOS</a>
            <a className='btn' onClick={miPublicacion}>MIS PUBLICACIONES</a>
            <a className='btn' onClick={publicar}>PUBLICAR</a>
            <a className='btn' onClick={cerrar} >CERRAR SESION</a>
        </div>
        <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
      </nav>
    </div>
  )
}

export default NabBar

