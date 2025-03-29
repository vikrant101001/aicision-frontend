import React from 'react'
import { motion } from 'framer-motion'

const Sidebar = ({ selectedAgent, setSelectedAgent }) => {
  const agents = [
    { name: 'Foodie', label: 'Foodie Buddy' },
    { name: 'Movie', label: 'Movie Buddy' },
    { name: 'Trip', label: 'Trip Buddy' }
  ];

  return (
    <motion.div
      className="w-64 h-full p-4 flex flex-col bg-white/10 border border-white/20 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4">Aicision Buddies</h2>
      <ul className="space-y-3">
        {agents.map((agent) => (
          <li 
            key={agent.name}
            onClick={() => setSelectedAgent(agent.name)}
            className={`p-2 rounded hover:bg-gray-600 cursor-pointer ${
              selectedAgent === agent.name ? 'bg-gray-600' : ''
            }`}
          >
            {agent.label}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Sidebar
