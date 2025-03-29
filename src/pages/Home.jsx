import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Descriptions from '../components/Descriptions'
import Premium from '../components/Premium'

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
            <Steps/>
            <Descriptions/>
            <Premium/>
        </div>
    </div>
  )
}

export default Home