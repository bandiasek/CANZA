import React from 'react'

import Slideshow from '../components/Slideshow'
import Dash from '../assets/Dash.svg'

import '../styles/reset.css'
import '../styles/screens/Home.css'

const Home = () => {
	return (
		<div className='home__continerFluid'>
			<div className='home__container'>
				<Slideshow className='home__slideShow' />
				<div className='home__slideShowText'>
					<h1>Pracuj na svojom tele</h1>
					<h3>
						<span className='home__slideShowTextEdit'>
							<img src={Dash} alt='Dash' />
						</span>
						JE TVOJIM DOMOVOM PO CELÝ TVOJ ŽIVOT
					</h3>
				</div>

        


			</div>
		</div>
	)
}

export default Home
