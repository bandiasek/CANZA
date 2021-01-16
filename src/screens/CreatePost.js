import React, { useState, useContext } from 'react'

import { FuncContext } from '../components/Context'
import Post from '../components/Post'

import '../styles/screens/Createpost.css'

const CreatePost = () => {
	// Storing login data
	const [user, setUser] = useState({
		email: '',
		pswd: '',
	})
	const [post, setPost] = useState({
		author: '',
		category: '',
		createdAt: '',
		imgPath: '',
		name: '',
		text: '',
	})
	const [image, setImage] = useState(null)

	// Getting data from useContext
	const {
		signIn,
		isLogged,
		posts,
		uploadPost,
		delPostImg,
		delPost,
	} = useContext(FuncContext)

	// Method that handles text input in login, and also in create post
	const onChangeInput = (event) => {
		event.preventDefault()
		if (
			event.currentTarget.name === 'pswd' ||
			event.currentTarget.name === 'email'
		) {
			setUser({
				...user,
				[event.currentTarget.name]: event.currentTarget.value,
			})
		} else {
			setPost({
				...post,
				[event.currentTarget.name]: event.currentTarget.value,
			})
		}
	}

	// Method that handles image change
	const onChangeImage = (e) => {
		e.preventDefault()
		if (e.target.files[0]) {
			setImage(e.target.files[0])
		}
	}

	// Method that runs on submit, disables button, wait until upload image and create post
	const onSubmit = async (
		image,
		event,
		author,
		category,
		createdAt,
		name,
		text
	) => {
		event.preventDefault()

		try {
			await uploadPost(image, event, author, category, createdAt, name, text)
			setPost({
				author: '',
				category: '',
				createdAt: '',
				imgPath: '',
				name: '',
				text: '',
			})
			setImage(null)
		} catch (exception) {
			alert(exception)
		}
	}

	// Method that runs on delete post
	const onDelete = (event, postId, imgPath) => {
		event.preventDefault()
		delPostImg(imgPath)
		delPost(postId)
	}
	return(
		<div class='createpost__container'>
			{
				isLogged ? 
					<div class='createpost__containerLoggedIn' >
						<div class='continerLoggedIn__form'>
							<form
								onSubmit={(event) =>
									onSubmit(
										image,
										event,
										post.author,
										post.category,
										post.createdAt,
										post.name,
										post.text
									)
								}
							>
								<h1>Vytvorenie príspevku</h1>
								<input
									type='text'
									name='author'
									value={post.author}
									placeholder='Meno autora'
									id='author'
									required
									onChange={(event) => onChangeInput(event)}
								/>

								<input
									type='text'
									name='category'
									value={post.category}
									placeholder='Category'
									id='category'
									required
									onChange={(event) => onChangeInput(event)}
								/>

								<input
									type='text'
									name='createdAt'
									value={post.createdAt}
									placeholder='Dátum výtvorenia'
									id='createdAt'
									required
									onChange={(event) => onChangeInput(event)}
								/>

								<input
									type='text'
									name='name'
									value={post.name}
									placeholder='Názov príspevku'
									id='name'
									required
									onChange={(event) => onChangeInput(event)}
								/>

								<textarea
									type='text'
									name='text'
									value={post.text}
									placeholder='Text príspevku'
									id='text'
									required
									onChange={(event) => onChangeInput(event)}
								/>
								<input
									type='file'
									onChange={(event) => onChangeImage(event)}
									required
								/>

								<button type='submit'>Vytvor post</button>
							</form>
						</div>
						

						<div class='continerLoggedIn__posts' >
							{posts.map((item) => (
								<div>
									<Post
										author={item.data.author}
										category={item.data.category}
										createdAt={item.data.createdAt}
										name={item.data.name}
										text={item.data.text}
										imgPath={item.data.imgPath}
										key={item.id}
									/>
									<button
										onClick={(event) => onDelete(event, item.id, item.data.imgPath)}
										key={item.id + '2'}
									>
										del
									</button>
								</div>
								))}
							</div>
					</div>

				:

				<div class='createpost__signIn'>
					<form onSubmit={(event) => signIn(event, user.email, user.pswd)}>
						<h1>Login</h1>
						<input
							type='email'
							name='email'
							value={user.email}
							placeholder='Enter your email'
							id='email'
							required
							onChange={(event) => onChangeInput(event)}
						/>

						<input
							type='password'
							name='pswd'
							value={user.pswd}
							placeholder='Enter your password'
							id='pswd'
							required
							onChange={(event) => onChangeInput(event)}
						/>

						<button type='submit'>
							Sign in
						</button>
					</form>
				</div>

			}
		</div>
		
	)
}

export default CreatePost
