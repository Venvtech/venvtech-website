import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src={logo} className='h-[50px]'/>

            <div className='hidden md:flex items-center'>
                <ul className='flex gap-4'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Quem Somos</a></li>
                    <li><a href='#'>Contato</a></li>                    
                </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar