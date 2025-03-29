import React, { useState } from 'react'

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim() === '') return
    onSend(message)
    setMessage('')
  }

  return (
    <div className="flex items-center p-4 border-t border-gray-300">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  )
}

export default ChatInput
