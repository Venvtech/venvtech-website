import React from 'react'
import { heroImg } from '../../assets'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#005573] font-medium'>Defenda-se no mundo virtual</p>
                <h1 className='md:leading-[72px] py-2 text-5xl font-semibold'>
                    VenvTech: Seu Parceiro em Cibersegurança
                </h1>
                <p className='py-2 text-lg text-gray-600'>
                    Nossa equipe de especialistas em cibersegurança está pronta para identificar vulnerabilidades, prevenir ataques e manter seus dados longe do alcance de invasores.
                </p>
            </div>
            <img  src={heroImg} className="md:order-last  order-first" />


        </div>

    </div>
  )
}

export default Hero