import React from 'react'
import { assets } from '../assets/assets'

const Descriptions = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Why Aicision</h1>

        <p className='text-gray-800 mb-8'>
        People, on average, spend <b>30 to 45 minutes</b> deciding on tasks that last just a few hours. This indecision not only wastes time but also creates unnecessary stress and frustration, especially when there are countless options available.
        </p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.h_decision} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>But how does Aicision Work</h2>
                <p className='text-gray-900 mb-4'>Aicision leverages the power of <b>Retrieval-Augmented Generation (RAG)</b> to access vast and up-to-date information, ensuring the most accurate and relevant recommendations. This advanced architecture enables the system to retrieve contextually appropriate data, enhancing the precision of its suggestions.</p>
                <p className='text-gray-900 mb-4'>Additionally, Aicision is <b>fine-tuned</b> on curated datasets tailored to user preferences and behaviors. By analyzing patterns, it personalizes its recommendations to suit individual tastes, whether it’s a movie for the evening or a meal to satisfy cravings. Aicision transforms decision-making into a seamless, enjoyable experience.</p>
            </div>
        </div>


    </div>
  )
}

export default Descriptions