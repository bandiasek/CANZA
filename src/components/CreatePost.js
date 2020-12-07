import React, { useState, useContext } from 'react'

import { FuncContext } from './Context'

const CreatePost = () => {
	// Storing crating post data
	const [post, setPost] = useState({
		author: '',
		postName: '',
		createdAt: '',
		postText: '',
	})

	const { createPost } = useContext(FuncContext)

	// Handling change in input
	const onChangeHandler = (event) => {
		event.preventDefault()
		setPost({
			 ...post, [event.currentTarget.name]: event.currentTarget.value 
			})
	}


	return (
		<div className='CreatePost'>
			<form className='signIn'>
				<input
					type='text'
					name='postName'
					value={post.postName}
					placeholder='Názov príspevku'
					id='postName'
					onChange={(event) => onChangeHandler(event)}
				/>

				<textarea
					type='text'
					name='postText'
					value={post.postText}
					placeholder='Text príspevku'
					id='postText'
					onChange={(event) => onChangeHandler(event)}
				/>

				<input
					type='text'
					name='createdAt'
					value={post.createdAt}
					placeholder='Dátum výtvorenia'
					id='createdAt'
					onChange={(event) => onChangeHandler(event)}
				/>

				<input
					type='text'
					name='author'
					value={post.author}
					placeholder='Meno autora'
					id='author'
					onChange={(event) => onChangeHandler(event)}
				/>

				<button onClick={(event) => {
					createPost(event, post.author, post.postName, post.createdAt, post.postText)
					setPost({
						author: '',
						postName: '',
						createdAt: '',
						postText: '',
					})
					}}>Vytvor post</button>
			</form>
		</div>
	)
}

export default CreatePost
