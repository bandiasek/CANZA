import React from 'react'

import Logo from '../assets/LogoNav.svg'
import '../styles/components/Loader.css'

const Loader = () => {
      return (
            <div className='loader__container'>
                  <img src={Logo} alt='Navbar Canza Logo' />
				<h3>
				      CAN<span className='app__navbarColor'>ZA</span>
				</h3>
            </div>
      )
}
            
export default Loader