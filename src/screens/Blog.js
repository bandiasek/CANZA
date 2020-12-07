import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { db } from '../firebase'

function Blog() {
	// Defining state
	const [posts, setPosts] = useState([])

	// Fetching and saving posts to state
	const getPosts = () => {
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
	}

	// After loading page, fetch posts
	useEffect(() => {
		getPosts()
	}, [])

	return (
		<div className='Blog'>
			<h1>Blog</h1>

			{
				// Rendering posts whne they are ready
				posts !== null ? (
					posts.map((post) => (
						<Post
							author={post.data.author}
							postName={post.data.postName}
							createdAt={post.data.createdAt}
							postText={post.data.postText}
							key={post.id}
						/>
					))
				) : (
					<h1>No posts</h1>
				)
			}
		</div>
	)
}

export default Blog