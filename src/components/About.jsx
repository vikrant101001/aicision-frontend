import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-5'>



        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-12 py-4 rounded-full border border-neutral-500'>
        <p className='text-3xl'>
                About Me
        </p>
        </div>

        {/* Profile Image */}
        <div className='relative mt-5 group'>
        
          <img
            src='./src/assets/me.jpg'
            alt='Vikrant Profile'
            className='w-60 h-60 sm:w-70 sm:h-70 rounded-full transition-transform transform hover:scale-105 hover:brightness-75'
          />
        

        
        {/* Logos (Hidden by default, appear on hover) */}
        <div className='absolute inset-0 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='flex gap-4 pb-4'>
            {/* LinkedIn Logo */}
            <a
              href='https://www.linkedin.com/in/programming-vikrant'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='./src/assets/linkedin.svg'
                alt='LinkedIn'
                className='w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform'
              />
            </a>

            {/* Website Logo */}
            <a
              href='https://programming-vikrant.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='./src/assets/website.svg'
                alt='Website'
                className='w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform'
              />
            </a>
          </div>
        </div>
        </div>


        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Hi! My name is Vikrant</h1>
        
        <p className='text-center max-w-xl mx-auto mt-5'>I am a 2 YOE Fullstack Developer with experience in both MNCs and US based Remote Startups.</p>
        
        <a href='https://programming-vikrant.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5'
              >
              

            
            <button
      className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
      aria-label='Learn more about my tech stack and skills'
      
    >
            Know my Tech Stack and Skills
            </button>
        </a>
        <br/>
        <br/>
        <br/>
        <br/>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>About Aicision</h1>
        
        <img
            src='./src/assets/logo.svg'
            alt='Vikrant Profile'
            className='w-60 h-60 sm:w-70 sm:h-70 rounded-full transition-transform transform hover:scale-105 hover:brightness-75'
          />
        <p className='text-center max-w-xl mx-auto mt-10'>
          I created Aicision as the one stop shop to show where i excel in terms of tech-stack and design thinking. 
          With the use of <b>MERN (Mongodb, ExpressJS,ReactJS, NodeJS)</b> as the main stack for the base website working, i want to show the possibilities and simplicity of MERN.
          <br/> <br/> 
          For the Foodie and Movie aicision buddies, i used <b>Python FastAPI</b> as a microservice and incorporated it with the help of AWS lambda. I used OpenAI for the RAG , finetuning the data and overall flow of the buddy.
          <br/> <br/> 
          For the Trip buddie, i used <b>Java Springboot</b> as a microservice and used AWS Kubernetes for the incorporation. I used Mapbox API key for the entire trip planning module.
          
          </p>
          <div className='flex flex-wrap justify-center mt-16 gap-10'>
            {Array(5).fill('').map((item, index)=>(
                <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                src={index % 5 === 0 ? assets.i_react : index % 5 === 1 ? assets.i_mongodb : index % 5 === 3 ? assets.i_js : index % 5 === 4 ? assets.i_java : assets.i_python}
                alt="" key={index} width={70}/>
            ))}
        </div>
        <br/>
        <br/>
        <br/>

        
        





    </div>
    

  )
}

export default About