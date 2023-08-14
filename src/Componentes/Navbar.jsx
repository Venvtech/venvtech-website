import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src={logo} className='h-[50px]'/>
        
        </div>
    </div>
  )
}

export default Navbar