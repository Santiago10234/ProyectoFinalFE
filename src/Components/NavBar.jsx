import React from 'react'
import '../styles/navBar.css'
import logo from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'

function NabBar() {
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
  return (
    <div className='nav-container'>
      <nav className='NavBar'>
        <div>
            <img className='logo'  onClick={luxuryCars} src={logo} alt="Logo" />
        </div>
        <div className='nave'>
            <div>
                <a className='btn' onClick={luxuryCars}>INICIO</a>
                <a className='btn'>VEHÍCULOS</a>
                <a className='btn'>NOSOTROS</a>
                <a className='btn' onClick={publicar}>PUBLICAR</a>
            </div>
            <div>
                <a className='btn' onClick={cerrar} >CERRAR SESION</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NabBar
