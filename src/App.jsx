import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'

import { AppContext } from './context/AppContext'

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard'


const App = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen 
    bg-gradient-to-r from-pink-300 from-2% via-sky-300 via-30% to-indigo-200 to-90%
    animated-gradient
    
'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}

      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/result' element={<Result/>}/>
        <Route path = '/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App