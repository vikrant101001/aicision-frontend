import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="" className='w-20 sm:w-24 lg:w-28'/>

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @vikrant101001.dev | All right reserved.</p>

        <a href="https://www.linkedin.com/in/programming-vikrant/" target="_blank" rel="noopener noreferrer">
          <img src={assets.linkedin} alt="LinkedIn" width={35} />
        </a>


    </div>
  )
}

export default Footer