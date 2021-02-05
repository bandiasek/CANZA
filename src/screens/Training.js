import React from 'react'

import QuoteImg from '../assets/training/QuoteImg.png'
import BackImg from '../assets/food/BackImg.svg'
import ItemDumbbell from '../assets/training/ItemDumbbell.svg'
import ItemBiceps from '../assets/training/ItemBiceps.svg'
import ItemClock from '../assets/training/ItemClock.svg'
import ItemWeight from '../assets/training/ItemWeight.svg'
import IntroductionImg from '../assets/training/Introduction.png'

import '../styles/screens/FoodAndTraining.css'
import '../styles/screens/Training.css'

const Training = () => {
    return (
		<div className='f_a_t__containerFluid'>
			<div className='f_a_t__welcomeSection'>
				<div className='f_a_t__welcomeSectionImg'>
					<div className='f_a_t__welcomeSectionText training__welcomeSectionText'>
						<h1>Cvičenie, radosť </h1>

						<div className='f_a_t__welcomeSectionTextH2'>
							<div className='f_a_t__welcomeSectionDash'></div>
							<h2>V TÝCHTO DVOCH SLOVÁCH NEEXISTUJE ROZDIEL</h2>
						</div>
					</div>
					<img src={BackImg} alt='BackImg left bottom' />
				</div>
			</div>

			<div className='f_a_t__quoteSection'>
				<img src={QuoteImg} alt='Quote section img' />
				<h1>
                    Nebudeme ti klamať,
					<br />
					<span className='f_a_t__quoteSectionTextEdit'>
                        tu si a tu treba poriadne makať.
					</span>
				</h1>
			</div>

			<div className='f_a_t__itemsSection'>
				<div className='f_a_t__itemsSectionContainer'>
					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemDumbbell} alt='Training item Icon Leafs' />
						<h1>S CHUŤOU</h1>
						<p>
							Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in
							turpis condimentum porttitor et quis felis. Curabitur quis
							accumsan neque.{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemBiceps} alt='Training item Icon Shopping Cart' />
						<h1>SPRÁVNE</h1>
						<p>
							Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in
							turpis condimentum porttitor et quis felis. Curabitur quis
							accumsan neque.{' '}
						</p>
					</div>

					<div className='f_a_t__breakRow'></div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemClock} alt='Training item Icon Apple' />
						<h1>NEPONÁHĽAJ</h1>
						<p>
							Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in
							turpis condimentum porttitor et quis felis. Curabitur quis
							accumsan neque.{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemWeight} alt='Training item Icon Meat' />
						<h1>DOBRE</h1>
						<p>
							Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in
							turpis condimentum porttitor et quis felis. Curabitur quis
							accumsan neque.{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='f_a_t__introduction'>
				<div className='f_a_t__introductionContianer'>
					<img src={IntroductionImg} alt='Introduction Img floating left' />
					<div className='f_a_t__introductionDescription'>
						<h1>Ako začať ?</h1>
						<p>
                        Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in turpis condimentum porttitor et quis felis. Curabitur quis accumsan neque. Pellentesque iaculis suscipit purus sed bibendum. Nulla gravida congue massa, ac hendrerit dui tempus ac. Sed vehicula ut diam sit amet gravida. Etiam facilisis ligula et metus fermentum tempus. Mauris tempus elit sapien, sed sollicitudin eros maximus ac. Vestibulum accumsan vestibulum mi, non euismod urna auctor non. Suspendisse lacinia interdum nulla, nec eleifend nibh feugiat sit amet.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Training
