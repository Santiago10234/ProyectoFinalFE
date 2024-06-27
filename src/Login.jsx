import React from 'react'

function Login() {
  return (
    <div className='container'>
         <div className='container-register'>
           <form className='container-inp'>
                <h1 className='titulo-register'>Login</h1>
                <input placeholder='Email' className='inp' type="email" />
                <input placeholder='Password' className='inp' type="password" />
                <button className='btn-register' type='button'>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login
