import React from 'react'

function Register() {
  return (
    <div className='container'>
         <div className='container-register'>
           <form className='container-inp'>
                <h1 className='titulo-register'>Sing Up</h1>
                <input placeholder='Name' className='inp' type="text" />
                <input placeholder='Emil' className='inp' type="email" />
                <input placeholder='Password' className='inp' type="password" />
                <button className='btn-register' type='button'>Register</button>
           </form>
        </div>
    </div>
  )
}

export default Register

