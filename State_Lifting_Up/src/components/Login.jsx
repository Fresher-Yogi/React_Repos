import React, { useState } from 'react'

const Login = ({setToggle}) => {


  return (
    <div className='w-96 h-96 bg-blue-100 rounded-xl'>
        <div className="form p-4 flex flex-col"> 
            <h2 className= 'text-xl font-bold py-5' > Login Page </h2>
            <input className='p-2 bg-white rounded text-black  m-2' type="text" name="username" id="" placeholder='Enter name' />
            <input className='p-2 bg-white rounded text-black  m-2' type="email" name="useremail" id=""  placeholder='Enter email' />
            <input className='p-2 bg-white rounded text-black  m-2 mb-7' type="password" name="" id="" placeholder='Enter password'/>
            <button onClick={()=>{console.log('heyyyyyyyyy'); }} className='bg-blue-600 rounded-2xl py-2  text-white font-bold'> Login </button>
        </div>
        <p className='p-6 cursor-pointer'> didn't have an Account?  <span onClick={()=>{setToggle((prev)=>!prev)}} className='text-blue-700'> Register here  </span> </p>
    </div>
  )
}

export default Login
