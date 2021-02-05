import React, { useState, useEffect, useContext } from 'react'
import Swiper from 'react-id-swiper'

import Slideshow from '../components/Slideshow'
import SwiperItem from '../components/SwiperItem'
import { FuncContext } from '../components/Context'

import Dash from '../assets/Dash.svg'
import ArrowLeft from '../assets/arrows/ArrowLeft.svg'
import ArrowRight from '../assets/arrows/ArrowRight.svg'
import BlogImg from '../assets/BlogImg.svg'
import TrainingImg from '../assets/TrainingImg.svg'
import FoodImg from '../assets/FoodImg.svg'
import C from '../assets/can/C.svg'
import A from '../assets/can/A.svg'
import N from '../assets/can/N.svg'

import '../styles/reset.css'
import 'swiper/swiper-bundle.css'
import '../styles/screens/Home.css'

const Home = () => {
	// Gettings posts
	const { posts, sendEmail } = useContext(FuncContext)

	// Swipper setting
	const params = {
		slidesPerView: 3,
		slidesPerGroup: 1,
		spaceBetween: 10,
		loop: true,
		freemode: false,
		breakpoints: {
			1300: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 1,
			},
			320: {
				slidesPerView: 1,
			},
		},
	}

	// Swipper handling
	const [swiper, setSwiper] = useState(null)

	// Handling navigation between slides
	const goNext = () => {
		swiper.slideNext()
	}

	const goPrev = () => {
		swiper.slidePrev()
	}

	// After loading page, fetch posts
	useEffect(() => {
		console.log(posts)

		var mySwiper = document.querySelector('.swiper-container').swiper
		setSwiper(mySwiper)
	}, [])

	return (
		<div className='home__continerFluid'>
			<div className='home__container'>
				<Slideshow className='home__slideShow' />
				<div className='home__slideShowText'>
					<h1>Pracuj na svojom tele</h1>
					<h3>
						<span className='home__slideShowTextEdit'>
							<img src={Dash} alt='Dash' />
						</span>
						JE TVOJIM DOMOVOM PO CELÝ TVOJ ŽIVOT
					</h3>
				</div>

				<div className='home__newest'>
					<div className='home__newestHeading'>
						<h1>
							<span className='newestHeadingBorder'>NAJNOVŠI</span>E ČLÁNKY
						</h1>

						<div className='newestHeadingSwitch'>
							<img src={ArrowLeft} onClick={goPrev} alt='Left Arrow' />
							<img src={ArrowRight} onClick={goNext} alt='Right Arrow' />
						</div>
					</div>

					<div className='home__newestPosts'>
						<Swiper {...params} className='home__newestPostsSwiper'>
							{posts.map((post) => (
								<div key={post.id}>
									<SwiperItem
										category={post.data.category}
										imgPath={post.data.imgPath}
										name={post.data.name}
										key={post.id}
									/>
								</div>
							))}
						</Swiper>
					</div>
				</div>
			</div>

			<div className='home__FindMore'>
				<div className='home__FindMoreContainer'>
					<div className='home__FindMoreBlog'>
						<a href='blog'>
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={BlogImg} alt='Blog Img' />
						<h1>BLOG</h1>
					</div>

					<div className='home__FindMoreTraining'>
						<a href='####'>
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={TrainingImg} alt='Training Img' />
						<h1>CVIČENIE</h1>
					</div>

					<div className='home__FindMoreFood'>
						<a href='####'>
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={FoodImg} alt='Food Img' />
						<h1>STRAVA</h1>
					</div>
				</div>
			</div>

			<div className='home__youCan'>
				<h1>YOU</h1>
				<div className='home__youCanImgs'>
					<img src={C} alt='C' />
					<img src={A} alt='A' />
					<img src={N} alt='N' />
				</div>
			</div>

			<div className='home__contact'>
				<div className='home__contactContent'>
					<div className='home__contactForm'>
						<form onSubmit={sendEmail}>
							<h1>
								KONTAKTUJTE
								<span className='contactFormEdit'> NÁS</span>
							</h1>
							<input
								name='form_name'
								type='text'
								placeholder='VÁŠE MENO'
								required
								minlength='3'
								maxlength='32'
							></input>
							<input
								name='form_email'
								type='email'
								placeholder='VÁŠ EMAIL'
								required
							></input>
							<textarea
								name='form_message'
								rows='5'
								placeholder='VÁŠA SPRÁVA'
								required
								minLength='5'
							></textarea>
							<button name='odoslat' type='submit' id='btn-set'>
								ODOSLAŤ
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
