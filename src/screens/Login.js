import React, { useState, useEffect, useMemo } from 'react'
import { auth, db } from '../firebase'

import CreatePost from '../components/CreatePost'
import SignInForm from '../components/SignInForm'
import { FuncContext } from '../components/Context'

const Login = () => {
	// Storing posts, login data, crating post
	const [posts, setPosts] = useState([])
	const [isLogged, setIsLogged] = useState(false)

	// Wraping all the functions
	const functions = useMemo(() => ({
		signIn: (event, email, pswd) => {
			event.preventDefault()
			auth
				.signInWithEmailAndPassword(email, pswd)
				.then(response => setIsLogged(true))
				.catch((error) => alert(error.message))
		},

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

		createPost: (event, author, postName, createdAt, postText) => {
			event.preventDefault();
			db.collection('posts')
				.doc()
				.set({
					author: author,
					postName: postName,
					createdAt: createdAt,
					postText: postText,
				})
				.then(() => {
					console.log('Document successfully written!')
					functions.getPosts()
				})
				.catch((error) => console.error('Error writing document: ', error))
		},

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
	}, [])

	if (isLogged) {
		return (
			<div className='createPost'>
				<FuncContext.Provider value={functions}>
					<CreatePost />
				</FuncContext.Provider>

				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							{post.data.postName}
							<button onClick={() => functions.delPost(post.id)}>
								{' '}
								delete{' '}
							</button>
						</li>
					))}
				</ul>
			</div>
		)
	} else {
		return (
			<FuncContext.Provider value={functions}>
				<SignInForm />
			</FuncContext.Provider>
		)
	}
}

export default Login
