import React from 'react'
import { useNavigate } from 'react-router-dom'
function Inicio() {
    const navigate = useNavigate()
  return (
    <section className='container'>
        <div className='container-inicio'>
            <div className='titulo'>
                <h1 className='h1'>Welcome to Luxury Cars</h1>
            </div>
            <form className='container-form'>
                <button type='button' className='btn1'>Login</button>
                <button onClick={()=>{
                    navigate("/registro")
                }} type='button' className='btn2'>Register</button>
            </form>
        </div>
    </section>
  )
}

export default Inicio
