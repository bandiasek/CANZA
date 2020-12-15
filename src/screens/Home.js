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
		loop: true,
		freemode: false,

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
		</div>
	)
}

export default Home
