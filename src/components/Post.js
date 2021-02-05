import React from 'react'

import '../styles/components/Post.css'

const Post = ({ author, category, createdAt, name, text, imgPath }) => {
	return (
		<div class='post__continer'>
			<h1>{name}</h1>
			<h3>{author}</h3>
			<h3>{category}</h3>
			<h4>{createdAt}</h4>
			<p>{text}</p>
			<img src={imgPath} alt='postIMg' />
		</div>
	)
}

export default Post
