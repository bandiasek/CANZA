import React, { useState, useEffect, useMemo } from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import emailjs from 'emailjs-com'; 
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

import Logo from './assets/LogoNav.svg'
import Ham from './assets/HamNav.svg'

function App() {
	// Storing posts
	const [posts, setPosts] = useState([])
	const [isLogged, setIsLogged] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	// Wraping all the functions
	const functions = useMemo(() => ({
		
		// Sign in method, return true or false
		signIn: (event, email, pswd) => {
			var success;
			event.preventDefault()
			auth
				.signInWithEmailAndPassword(email, pswd)
				.then(response => { setIsLogged(true) } )
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
						snapchot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				)
		},

		// Variable to share useState
		posts: posts,

		// Method that uploads created posts to db
		createPost: (event, author, category, createdAt, imgPath, name, text) => {
			event.preventDefault();
			db.collection('posts')
				.doc()
				.set({
					author: author,
					category: category,
					createdAt: createdAt,
					imgPath: imgPath,
					name: name,
					text: text
				})
				.then(() => {
					alert('Príspevok bol úspešne vytvorený!')
					functions.getPosts()
				})
				.catch((error) => alert('Nastala chyba pri tvorbe príspevku: ', error))
		},
		
		// Method that uploads image to storage and returns url to save
		uploadPost: (image, event, author, category, createdAt, name, text ) => {
			const uploadTask = storage.ref(`images/${image.name}`).put(image);
			uploadTask.on(
			  "state_changed",
			  snapshot => {},
			  error => {
			    console.log(error);
			  },
			  () => {
			    storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then(url => {
					functions.createPost(event, author, category, createdAt, url, name, text)
				});
			  }
			);
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
				.then( response => alert('Vymazanie obrázku bolo úspešné!') )
				.catch(err => alert(err) )
		},

		// Method that sends email through emailjs 
		sendEmail: (event) => {
			event.preventDefault()

			emailjs.sendForm('service_h52rwi7', 'template_ufte97o', event.target, 'user_d9f5M5lcv5HAk375PYvjS')
			.then((response) => {
				alert(response.text === 'OK' ? 'Email bol úspešne odoslaný.' : 'Nastal problém s odoslaním Emailu.')
			  }, (error) => {
				alert(error.text)
			  })
			  event.target.reset()
		}
	}))

	// Fetching posts at the start of the page
	useEffect(() => {
		functions.getPosts()
		
		setTimeout(()=>{
			setIsLoaded(true);
			setTimeout(()=>(
				document.querySelector('.container').style.opacity = 1
			),50)
		    },3000);
	}, [])

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
								<img src={Ham} alt='Navigation hamburger Icon' />
							</div>
						</div>
	
						<Route path='/' exact component={Home} />
						<Route path='/strava' component={Food} />
						<Route path='/trening' component={Training} />
						<Route path='/blog' exact component={Blog} />
						<Route path='/createpost' component={CreatePost} />
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
			return (
				<Loader />
			)
		
		}
	}

export default App
