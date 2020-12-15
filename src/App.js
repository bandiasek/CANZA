import React from 'react'
import './styles/reset.css'
import './styles/App.css'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Blog from './screens/Blog'
import Login from './screens/Login'
import Training from './screens/Training'
import Food from './screens/Food'
import Home from './screens/Home'

import Logo from './assets/LogoNav.svg'
import Ham from './assets/HamNav.svg'

function App() {
	return (
		<Router>
			<div className='container'>
				<div className='app__navbar'>
					<div className='app__navbarLeft'>
						<img src={Logo} alt='Navbar Canza Logo' />
						<h3>
							CAN<span className='app__navbarColor'>ZA</span>
						</h3>
					</div>

					<div className='app__navbarRight'>
						<img src={Ham} alt='Navigation hamburger Icon' />
					</div>
				</div>

				<Route path='/' exact component={Home} />
				<Route path='/strava' component={Food} />
				<Route path='/trening' component={Training} />
				<Route path='/blog' exact component={Blog} />
				<Route path='/blog/login' component={Login} />
			</div>
		</Router>
	)
}

export default App
