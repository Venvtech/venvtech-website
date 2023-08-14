import React from 'react'
import logo from '../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'

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

            <div className='hidden md:flex'>                
                <a href='https://wa.me/5511920857650?text=Visitei+a+p%C3%A1gina+da+VenvTech+e+gostaria+de+falar+com+um+consultor.' target='_blank' rel='noreferrer'>
                    <button className='px-8 py-3 rounded md bg-[#20B486] text-white font-bold flex'>
                        <FaWhatsapp 
                            size={18}
                            style={{color:'#fff'}}
                        /> 
                        &nbsp;Whatsapp            
                    </button> 
                </a>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar