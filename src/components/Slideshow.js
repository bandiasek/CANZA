import React from 'react'
import { Slide } from 'react-slideshow-image'

import img1 from '../assets/slideShow/image_1.svg'
import img2 from '../assets/slideShow/image_2.svg'
import img3 from '../assets/slideShow/image_3.svg'
import img4 from '../assets/slideShow/image_4.svg'
import img5 from '../assets/slideShow/image_5.svg'

import 'react-slideshow-image/dist/styles.css'
import '../styles/components/Slideshow.css'

const slideImages = [
	{
		src: img1,
		alt: 'First img of the slideShow',
	},
	{
		src: img2,
		alt: 'Second img of the slideShow',
	},
	{
		src: img3,
		alt: 'Third img of the slideShow',
	},
	{
		src: img4,
		alt: 'Fourth img of the slideShow',
	},
	{
		src: img5,
		alt: 'Fifth img of the slideShow',
	},
]

const properties = {
	duration: 5000,
	transitionDuration: 1000,
	defaultIndex: 0,
	infinite: true,
	arrows: false,
	autoplay: true,
	canSwipe: false,
	indicators: true,
	indicators: (i) => <div className='each-indicator'></div>,
}

const Slideshow = () => {
	return (
		<div className='slideshow__container'>
			<Slide {...properties}>
				{slideImages.map((slide) => {
					return (
						<img
							className='slideshow__itemImg'
							src={slide.src}
							alt={slide.alt}
							key={slide.alt}
						/>
					)
				})}
			</Slide>
		</div>
	)
}

export default Slideshow
