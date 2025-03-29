import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../components/sidebar'
import FoodieAgent from '../components/FoodieAgent'
import MovieAgent from '../components/MovieAgent'
import TripAgent from '../components/TripAgent'

const Dashboard = () => {
  const [selectedAgent, setSelectedAgent] = useState('Foodie')

  let AgentComponent;
  switch(selectedAgent) {
    case 'Foodie':
      AgentComponent = <FoodieAgent />
      break
    case 'Movie':
      AgentComponent = <MovieAgent />
      break
    case 'Trip':
      AgentComponent = <TripAgent />
      break
    default:
      AgentComponent = <FoodieAgent />
  }

  return (
    <motion.div 
      className="min-h-screen flex p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sidebar Section */}
      <Sidebar selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />

      {/* Main Content Section */}
      <div className="flex-grow ml-8 flex flex-col">
        {AgentComponent}
      </div>
    </motion.div>
  )
}

export default Dashboard
