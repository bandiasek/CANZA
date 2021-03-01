import React, { useState, useEffect, useMemo } from 'react'
import {
	Route,
	BrowserRouter as Router,
	NavLink,
	Switch,
} from 'react-router-dom'
import emailjs from 'emailjs-com'
import './styles/reset.css'
import './styles/App.css'

import Blog from './screens/Blog'
import CreatePost from './screens/CreatePost'
import Training from './screens/Training'
import Food from './screens/Food'
import Home from './screens/Home'
import { FuncContext } from './components/Context'
import { auth, db, storage } from './firebase'
import Loader from './components/Loader'
import PageNotFound from './screens/PageNotFound'

import Logo from './assets/LogoNav.svg'
import Ham from './assets/navbar/HamNav.svg'
import Back from './assets/navbar/Back.svg'

function App() {
	// Storing posts
	const [posts, setPosts] = useState([])
	const [isLogged, setIsLogged] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [navbarExpanded, setNavbarExpanded] = useState(true)

	// Wraping all the functions
	const functions = useMemo(() => ({
		// Sign in method, return true or false
		signIn: (event, email, pswd) => {
			var success
			event.preventDefault()
			auth
				.signInWithEmailAndPassword(email, pswd)
				.then((response) => {
					setIsLogged(true)
				})
				.catch((error) => alert(error.message))
		},

		// Storing state of an app
		isLogged: isLogged,

		// Getting posts to local variable posts
		getPosts: () => {
			db.collection('posts')
				.get()
				.then((snapchot) =>
					setPosts(
						snapchot.docs
							.map((doc) => ({
								id: doc.id,
								data: doc.data(),
							}))
							.sort(comparePosts)
					)
				)
		},

		// Variable to share useState
		posts: posts,

		// Method that uploads created posts to db
		createPost: (event, author, category, createdAt, imgPath, name, text) => {
			event.preventDefault()
			db.collection('posts')
				.doc()
				.set({
					author: author,
					category: category,
					createdAt: createdAt,
					imgPath: imgPath,
					name: name,
					text: text,
				})
				.then(() => {
					alert('Príspevok bol úspešne vytvorený!')
					functions.getPosts()
				})
				.catch((error) => alert('Nastala chyba pri tvorbe príspevku: ', error))
		},

		// Method that uploads image to storage and returns url to save
		uploadPost: (image, event, author, category, createdAt, name, text) => {
			const uploadTask = storage.ref(`images/${image.name}`).put(image)
			uploadTask.on(
				'state_changed',
				(snapshot) => {},
				(error) => {
					console.log(error)
				},
				() => {
					storage
						.ref('images')
						.child(image.name)
						.getDownloadURL()
						.then((url) => {
							functions.createPost(
								event,
								author,
								category,
								createdAt,
								url,
								name,
								text
							)
						})
				}
			)
		},

		// Method that del post localy and from db
		delPost: (postId) => {
			db.collection('posts')
				.doc(postId)
				.delete()
				.then(() => alert('Príspevok úspešne vytvorený!'))
				.catch((err) => alert('Nastla chyba pri vymazávaní: ', err))
			setPosts(posts.filter((post) => post.id !== postId))
		},

		// Method that del post localy and from db
		delPostImg: (imgPath) => {
			const delTask = storage.refFromURL(imgPath)
			delTask
				.delete()
				.then((response) => alert('Vymazanie obrázku bolo úspešné!'))
				.catch((err) => alert(err))
		},

		// Method that sends email through emailjs
		sendEmail: (event) => {
			event.preventDefault()

			emailjs
				.sendForm(
					'service_h52rwi7',
					'template_ufte97o',
					event.target,
					'user_d9f5M5lcv5HAk375PYvjS'
				)
				.then(
					(response) => {
						alert(
							response.text === 'OK'
								? 'Email bol úspešne odoslaný.'
								: 'Nastal problém s odoslaním Emailu.'
						)
					},
					(error) => {
						alert(error.text)
					}
				)
			event.target.reset()
		},
	}))

	const comparePosts = (a, b) => {
		if (a.data.createdAt < b.data.createdAt) {
			return -1
		}
		if (a.data.createdAt > b.data.createdAt) {
			return 1
		}
		return 0
	}

	// Handler for navigation hide
	const navbarMove = () => {
		setNavbarExpanded(!navbarExpanded)
		if (navbarExpanded) {
			document.querySelector('.app__navbarExpandedOpacity').style.display =
				'flex'
			setTimeout(() => {
				document.querySelector(
					'.app__navbarExpandedContainer'
				).style.transform = 'translateX(0)'
				document.querySelector('.app__navbarExpandedOpacity').style.opacity = 1
			}, 50)
		} else {
			document.querySelector('.app__navbarExpandedContainer').style.transform =
				'translateX(100%)'
			document.querySelector('.app__navbarExpandedOpacity').style.opacity = 0
			setTimeout(
				() =>
					(document.querySelector('.app__navbarExpandedOpacity').style.display =
						'none'),
				600
			)
		}
	}

	// Fetching posts at the start of the page
	useEffect(() => {
		functions.getPosts()

		setTimeout(() => {
			setIsLoaded(true)
			setTimeout(
				() => (document.querySelector('.container').style.opacity = 1),
				50
			)
		}, 3000)
	}, [isLoaded])

	if (isLoaded) {
		return (
			<FuncContext.Provider value={functions}>
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
								<div className='app__navbarExpandedOpacity' onClick={(e) => navbarMove()} >
									<div className='app__navbarExpandedContainer'>
										<div className='app__navbarExpandedItems'>
											<img
												src={Back}
												alt='Back image (X)'
												onClick={(e) => {
													e.preventDefault()
													navbarMove()
												}}
											/>
											<div className='app__navbarUl'>
												<NavLink
													className='app__navbarItem'
													exact={true}
													activeClassName='active'
													onClick={(e) => navbarMove()}
													to='/'
												>
													DOMOV
												</NavLink>
												<NavLink
													className='app__navbarItem'
													exact={true}
													activeClassName='active'
													onClick={(e) => navbarMove()}
													to='/cvicenie'
												>
													CVIČENIE
												</NavLink>
												<NavLink
													className='app__navbarItem'
													exact={true}
													activeClassName='active'
													onClick={(e) => navbarMove()}
													to='/strava'
												>
													STRAVA
												</NavLink>
												<NavLink
													className='app__navbarItem'
													exact={true}
													activeClassName='active'
													onClick={(e) => navbarMove()}
													to='/blog'
												>
													BLOG
												</NavLink>
											</div>
										</div>
									</div>
								</div>

								<img
									src={Ham}
									alt='Navigation hamburger Icon'
									onClick={(e) => {
										e.preventDefault()
										navbarMove()
									}}
								/>
							</div>
						</div>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/createpost' component={CreatePost} />
							<Route path='/blog' component={Blog} />
							<Route path='/strava' component={Food} />
							<Route path='/cvicenie' component={Training} />
							<Route path='' component={PageNotFound} />
						</Switch>
					</div>

					<div className='home__footer'>
						<div className='home__footerLeft'></div>

						<div className='home__footerRight'>
							<div>
								<h3>WE ARE</h3>
								<h1>CANZA</h1>
							</div>
							<div>
								<h5>&copy;Ondrej Brendza</h5>
								<h5>&copy;Miriam Staneková</h5>
								<h5>&copy;Project Samson</h5>
								<h5>2020</h5>
							</div>
						</div>
					</div>
				</Router>
			</FuncContext.Provider>
		)
	} else {
		return <Loader />
	}
}

export default App
