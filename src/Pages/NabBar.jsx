import React from 'react'
import '../styles/navBar.css'
import logo from '../img/Logo.png'

function NabBar() {
  return (
    <div className='nav-container'>
      <nav className='NavBar'>
        <div>
            <img className='logo' src={logo} alt="Logo" />
        </div>
        <div className='navegacion'>
            <div>
                <button className='btn'>INICIO</button>
                <button className='btn'>VEHÍCULOS</button>
                <button className='btn'>NOSOTROS</button>
                <button className='btn'>PUBLICAR</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NabBar
