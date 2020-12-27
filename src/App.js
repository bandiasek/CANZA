import React, { useState, useEffect, useMemo } from 'react'
import './styles/reset.css'
import './styles/App.css'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Blog from './screens/Blog'
import Login from './screens/Login'
import Training from './screens/Training'
import Food from './screens/Food'
import Home from './screens/Home'
import { FuncContext } from './components/Context'
import { auth, db, storage } from './firebase'

import Logo from './assets/LogoNav.svg'
import Ham from './assets/HamNav.svg'

function App() {
	// Storing posts
	const [posts, setPosts] = useState([])

	// Wraping all the functions
	const functions = useMemo(() => ({
		
		// Sign in method, return true or false
		signIn: (event, email, pswd) => {
			event.preventDefault()
			auth
				.signInWithEmailAndPassword(email, pswd)
				.then(response => {return true})
				.catch((error) => alert(error.message))
				return false;
		},

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
					console.log('Document successfully written!')
					functions.getPosts()
				})
				.catch((error) => console.error('Error writing document: ', error))
		},
		
		// Method that uploads image to storage and returns url to save
		uploadImage: (image) => {
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
				  return url
				});
			  }
			);
		    },

		// Method that del post localy and from db
		delPost: (postId) => {
			db.collection('posts')
				.doc(postId)
				.delete()
				.then(() => console.log('Successfully deleted!'))
				.catch((err) => console.log('Error removing post: ', err))
			setPosts(posts.filter((post) => post.id !== postId))
		}
	}))

	// Fetching posts at the start of the page
	useEffect(() => {
		functions.getPosts()
		console.log(posts)
	}, [])

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
					<Route path='/blog/login' component={Login} />
				</div>
			</Router>
		</FuncContext.Provider>
	)
}

export default App
