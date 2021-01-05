import React, { useState, useEffect, useContext } from 'react'
import { FuncContext } from '../components/Context'

import '../styles/screens/Blog.css'


function Blog() {
	// Getting data from useContext
	const { posts } = useContext(FuncContext)

	// Saving current post
	const [ curPost, setCurPost ] = useState(null)

	// Method that choose change current post
	const onChangePost = (event, index) => {
		if( event !== null ){
			event.preventDefault()
		}
		if( posts[index] !== null ) {
			setCurPost(posts[index])

		} else {
			alert('Nastala chyba pri výbere Príspevku');
		}
	}

	// Hook that runs after viewing content 
	useEffect( () => {
		// Setting cur posts to first index
		onChangePost(null, 0)

	}, [] )

	// Conditional rendering
	if(curPost !== null){
		return (
			<div className='blog__container'>
				<div className="blog__upperCont">
					<div className="blog__description">
						<h3>{curPost.data.category}</h3>
						<h1>{curPost.data.name}</h1>
						<div className="blog__descriptionAuthorDate">
							<h5>{curPost.data.createdAt}</h5>
							<div className="blog__line">
	
							</div>
							<h4>by {curPost.data.author}</h4>
						</div>
					</div>
					
					<div className="blog__upperImg">
						<img src={curPost.data.imgPath} alt="Img from current showing post"/>
					</div>
	
				</div>
	
				<div className="blog__lowerCont">
	
				</div>
	
			</div>
		)
	} else {
		return (
			<div className="loading">
				<h1>Loading is taking too long ...</h1>
			</div>
		)
	}
	
}

export default Blog