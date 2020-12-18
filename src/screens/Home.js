import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import Swiper from 'react-id-swiper'

import Slideshow from '../components/Slideshow'
import SwiperItem from '../components/SwiperItem'
import Dash from '../assets/Dash.svg'
import ArrowLeft from '../assets/arrows/ArrowLeft.svg'
import ArrowRight from '../assets/arrows/ArrowRight.svg'
import ArrowLeftActive from '../assets/arrows/ArrowLeftActive.svg'
import ArrowRightActive from '../assets/arrows/ArrowRightActive.svg'
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
	// Defining state
	const [posts, setPosts] = useState([])

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
			}
		    }

	    }

	// Swipper handling
	const [swiper, setSwiper] = useState(null);
	
	// Handling navigation between slides
	const goNext = () => {
		  swiper.slideNext();
	    };
	   
	const goPrev = () => {
		  swiper.slidePrev();
	}

	// Fetching and saving posts to state
	const getPosts = () => {
            db.collection('posts')
                  .get()
			.then((snapchot) =>{ 
				setPosts(
					snapchot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
				console.log(posts)
			}
			)
	}

	// After loading page, fetch posts
	useEffect(() => {
		getPosts()
		
		var mySwiper = document.querySelector(".swiper-container").swiper;
    		setSwiper(mySwiper);
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

			<div className="home__newest">
				<div className="home__newestHeading">
					<h1><span className="newestHeadingBorder" >NAJNOVŠI</span>E ČLÁNKY</h1>

					<div className="newestHeadingSwitch">
						<img src={ArrowLeft} onClick={goPrev} alt="Left Arrow"/>
						<img src={ArrowRight} onClick={goNext} alt="Right Arrow"/>
					</div>
				</div>

				<div className="home__newestPosts">
					<Swiper  {...params} className="home__newestPostsSwiper">
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
						<div>
							<SwiperItem />
						</div>
					</Swiper>
				</div>
			</div>
			</div>

			<div className="home__FindMore">
				<div className="home__FindMoreContainer">
					<div className="home__FindMoreBlog">
						<a href="####">
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={BlogImg} alt="Blog Img"/>
						<h1>BLOG</h1>
					</div>

					<div className="home__FindMoreTraining">
						<a href="####">
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={TrainingImg} alt="Training Img"/>
						<h1>CVIČENIE</h1>
					</div>

					<div className="home__FindMoreFood">
						<a href="####">
							<h4>ZISTI VIAC KLIKNUTÍM</h4>
						</a>
						<img src={FoodImg} alt="Food Img"/>
						<h1>STRAVA</h1>
					</div>
				</div>
			</div>

			<div className="home__youCan">
				<h1>YOU</h1>
				<div className="home__youCanImgs">
					<img src={C} alt="C"/>
					<img src={A} alt="A"/>
					<img src={N} alt="N"/>
				</div>
			</div>

			
		</div>
	)
}

export default Home
