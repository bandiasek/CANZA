import React from 'react'

import Slideshow from '../components/Slideshow'

import '../styles/reset.css'
import '../styles/screens/Home.css'

const Home = () => {
            return (
                  <div className="home__continerFluid">
                      <div className="home__container">
                        <Slideshow />
                      </div>
                  </div>
            )
}

export default Home
