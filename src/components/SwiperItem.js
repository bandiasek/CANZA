import React, { useEffect, useState } from 'react'

import BackImg from '../assets/posts/backImg.svg'

import '../styles/reset.css'
import '../styles/components/Swiper.css'

const SwiperItem = ({ category, imgPath, name }) => {
	// Defining styles
	const [style, setStyle] = useState({ top: 0, left: 0, position: 'absolute' })
	const styles = [
		{ top: 0, left: 0, position: 'absolute' },
		{ top: 0, right: 0, position: 'absolute' },
		{ bottom: 0, right: 0, position: 'absolute' },
	]

	// Function + useEffect to randomly choose element
	const choosePosition = () => {
		setStyle(styles[Math.floor(Math.random() * Math.floor(styles.length))])
	}

	useEffect(() => {
		choosePosition()
	}, [])
	return (
		<div className='swiperItem__container'>
			<div className='swiperItem__containerImg'>
				<img src={imgPath} alt='Post img' />

				<div style={style} className='swiperItem__backImg'>
					<img src={BackImg} alt='Back img' />
				</div>
			</div>

			<div className='swiperItem__containerText'>
				<h4>{category}</h4>
				<h1>{name}</h1>
			</div>
		</div>
	)
}

export default SwiperItem
