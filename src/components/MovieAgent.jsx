import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ChatInput from './ChatInput'
import { assets } from '../assets/assets'

const MovieAgent = () => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [chatHistory, setChatHistory] = useState([])

  const handleSend = (message) => {
    if (!hasInteracted) setHasInteracted(true)
    setChatHistory([...chatHistory, { sender: 'user', text: message }])
    // Optionally add AI response logic here
  }

  return (
    <motion.div 
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto pr-2">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">
          
        </h1>

        {/* Suggestion Area */}
        {!hasInteracted && (
          <div className="flex items-center justify-center space-x-4 my-8">
            <img 
              src="./src/assets/h_movie.png" 
              alt="Food suggestion" 
              className="w-24 h-24"
            />
            <div className="text-lg text-gray-700">
            </div>
          </div>
        )}

        {/* Chat History */}
        <div className="mt-4 space-y-2 justify-center">
          {chatHistory.length === 0 ? (
            <p className="text-gray-500">Hey there, Moive Agent here. Let's plan your next cinema to watch :)</p>
          ) : (
            chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span className="inline-block bg-gray-200 text-gray-800 p-2 rounded-lg">
                  {msg.text}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Input Area - Fixed at the bottom */}
      <div className="sticky bottom-0 bg-white/10">
        <ChatInput onSend={handleSend} />
      </div>
    </motion.div>
  )
}

export default MovieAgent
