import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Blog from './screens/Blog'
import Login from './screens/Login'
import Training from './screens/Training'
import Food from './screens/Food'
import Home from './screens/Home'

function App() {
	return (
		<Router>
			<div className='app__navbar'>
				<ul>
					<li>
						<Link to='/'>Domov</Link>
					</li>
					<li>
						<Link to='/trening'>Tréning</Link>
					</li>
					<li>
						<Link to='/strava'>Strava</Link>
					</li>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
				</ul>
			</div>

			<Route path='/' exact component={Home} />
			<Route path='/strava' component={Food} />
			<Route path='/trening' component={Training} />
			<Route path='/blog' exact component={Blog} />
			<Route path='/blog/login' component={Login} />
		</Router>
	)
}

export default App
