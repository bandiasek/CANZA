import React, { useState, useEffect, useMemo } from 'react'
import './styles/reset.css'
import './styles/App.css'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Blog from './screens/Blog'
import CreatePost from './screens/CreatePost'
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
	const [isLogged, setIsLogged] = useState(false)

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
					alert('Document successfully written!')
					functions.getPosts()
				})
				.catch((error) => alert('Error writing document: ', error))
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
				.then(() => alert('Successfully deleted!'))
				.catch((err) => alert('Error removing post: ', err))
			setPosts(posts.filter((post) => post.id !== postId))
		},

		// Method that del post localy and from db
		delPostImg: (imgPath) => {
			const delTask = storage.refFromURL(imgPath)
			delTask
				.delete()
				.then( response => alert('Delete of an Image was succesful ') )
				.catch(err => alert(err) )
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
					<Route path='/createpost' component={CreatePost} />
				</div>
			</Router>
		</FuncContext.Provider>
	)
}

export default App
