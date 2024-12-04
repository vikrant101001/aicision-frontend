import React from 'react'
import { assets } from '../assets/assets'
import { Link , useNavigate} from 'react-router-dom'
import { motion } from "framer-motion"

const Header = () => {
  const navigate = useNavigate();
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}} 
    viewport={{once: true}}
    
    >
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>
                Your Go-To Ally for swift decision Making
        </p>
        <img src={assets.star_icon} alt=""/>
        </div>

        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        >
          
          Make your "X" Decision Quickly with <span className='text-blue-600'
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{delay:0.4, duration: 2}}
          
          >AICISION</span> </motion.h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Meet Aicision, Your AI buddy who will help make decisions for your daily confusions. Why waste time searching when you can just talk to Aicision</p>

        <button onClick={()=>navigate('/dashboard')}className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
            Your Aicision Dashboard
            <img className='h-6' src={assets.star_group} alt=""/>
        </button>


        <div className='flex flex-wrap justify-center mt-16 gap-10'>
            {Array(3).fill('').map((item, index)=>(
                <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                src={index % 3 === 0 ? assets.h_movie : index % 3 === 1 ? assets.h_food : assets.h_trip}
                alt="" key={index} width={70}/>
            ))}
        </div>

        <p className='mt-2 text-neutral-600'>Click on either of the above icons to start your Aicision journey</p>

    </motion.div>
  )
}

export default Header