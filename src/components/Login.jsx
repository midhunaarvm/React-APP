import React from 'react'

function Login() {
  return (
    <div className='LoginAccount'><h1>LOGIN</h1>
    <label htmlFor="">Enter Your Email</label>
    <input type="text" placeholder='email'/>
    <label htmlFor="">Enter Your Password</label>
    <input type="text" placeholder='password'/>
    </div>
  )
}

export default Login