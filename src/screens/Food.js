import React from 'react'

import QuoteImg from '../assets/food/QuoteImg.svg'
import BackImg from '../assets/food/BackImg.svg'
import ItemLeafs from '../assets/food/ItemLeafs.svg'
import ItemCart from '../assets/food/ItemCart.svg'
import ItemApple from '../assets/food/ItemApple.svg'
import ItemMeat from '../assets/food/ItemMeat.svg'
import IntroductionImg from '../assets/food/Introduction.svg'

import Protein_1 from '../assets/food/protein_1.svg'
import Protein_2 from '../assets/food/protein_2.svg'
import Protein_3 from '../assets/food/protein_3.svg'
import Fat_1 from '../assets/food/fat_1.svg'
import Fat_2 from '../assets/food/fat_2.svg'
import Fat_3 from '../assets/food/fat_3.svg'
import Carbs_1 from '../assets/food/carbs_1.svg'
import Carbs_2 from '../assets/food/carbs_2.svg'
import Carbs_3 from '../assets/food/carbs_3.svg'

import '../styles/screens/FoodAndTraining.css'
import '../styles/screens/Food.css'

const Food = () => {
	return (
		<div className='f_a_t__containerFluid'>
			<div className='f_a_t__welcomeSection'>
				<div className='f_a_t__welcomeSectionImg'>
					<div className='f_a_t__welcomeSectionText food__welcomeSectionText'>
						<h1>Papanie, radosť </h1>

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
					Zdravá strava je
					<br />
					<span className='f_a_t__quoteSectionTextEdit'>
						základom každého úspechu
					</span>
				</h1>
			</div>

			<div className='f_a_t__itemsSection'>
				<div className='f_a_t__itemsSectionContainer'>
					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemLeafs} alt='f_a_t item Icon Leafs' />
						<h1>S CHUŤOU</h1>
						<p>
							Strava ti musí chutiť. Akonáhle ti nechutí a premáhaš sa, tak je
							obrovská šanca že ti takáto strava nevydrží dlho. Riešenie je
							nájsť jedálniček a spôsob stravovania ktorý bude zdravý a bude ti
							chutiť!{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemApple} alt='f_a_t item Icon Shopping Cart' />
						<h1>SPRÁVNE</h1>
						<p>
							Správne množstvo a správna kvalita. Predstav si že máš kvet (svoje
							telo) a zalievaš ho vodou. Je rozdiel či ho zaleješ s vodou v
							ktorej je saponát alebo s vodou v ktorej hnojivo. Vyber si správny
							typ živín!{' '}
						</p>
					</div>

					<div className='f_a_t__breakRow'></div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemCart} alt='f_a_t item Icon Apple' />
						<h1>ROZUMNE</h1>
						<p>
							Stravuj sa rozumne. Nie všetko čo je zdravé je drahé. V tejto dobe
							je zaužívané že nekvalitné jedlá su lacnejšie, avšak stále sú tu
							kvalitné zdroje potravy za rozumné ceny. Nie vždy drahšie znamená
							lepšie!{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemMeat} alt='f_a_t item Icon Meat' />
						<h1>DOBRE</h1>
						<p>
							Ak robiš maximum vedieš si DOBRE. Nenechaj sa odradiť zlyhaním.
							Stane sa že zlyháš a dáš si niečo čo ti moc neprospieva. Riešením
							nie je to vzdať ale čím skôr sa vrátiť naspäť na zdravú cestu!{' '}
						</p>
					</div>
				</div>
			</div>

			<div className='f_a_t__introduction'>
				<div className='f_a_t__introductionContianer'>
					<img src={IntroductionImg} alt='Introduction Img floating left' />
					<div className='f_a_t__introductionDescription'>
						<h1>Vážne je dôležitá ?</h1>
						<p>
							Strava ako táka tvorí 80% úspechu bez ohľadu nato, aký je tvoj
							cieľ. Či chceš schudnúť, naberať, udržiavať si váhu alebo zlepšiť
							zdravie, bez kvalitnej stravy, stavebného materiálu pre telo, to
							nepôjde. Predstav si svoje telo ako motor. Ak chceš aby fungoval
							správne a spoľahlivo musíš sa o neho starať a zásobovať ho
							kvalitným palivom (stravou). Môžeš mať akýkoľvek silný motor, no
							pri nekvalitnom palive stráca na sile, kazí sa a nefunguje
							správne.{' '}
						</p>
					</div>
				</div>
			</div>
			
			<div className="food__macros">
				<h1><span className="macros__green">Makro</span>živiny</h1>
				<p>Každe jedlo sa delí na konkrétne makroživiny. Je dôležité sledovať aké mnoštvo akej makroživiny do tela dávaš. Výrazne to ovplyvní tvoj výsledok.</p>
				<div className="food__macrosContainer">
					<div className="macrosContainer__item">
						<h1>Bielkoviny</h1>
						<div className="macrosContainer__itemRow">
							<img src={Protein_1} alt="Kuracia nožka ikona"/>
							<img src={Protein_2} alt="Ryba ikona"/>
							<img src={Protein_3} alt="Mlieko ikona"/>	
						</div>
						<p>Bielkoviny alebo proteíny slúžia ako základná stavebná jednotka, ktoré pomáhajú vytvárať nové tkanivá</p>
					</div>

					<div className="macrosContainer__item">
						<h1>Tuky</h1>
						<div className="macrosContainer__itemRow">
							<img src={Fat_1} alt="Avokado ikona"/>
							<img src={Fat_2} alt="Syr ikona"/>
							<img src={Fat_3} alt="Olivy ikona"/>	
						</div>
						<p>Tuky alebo lipidy môžu byť rastlinného alebo živočíšneho pôvodu a sú to látky nerozpustné vo vode, ktoré slúžia ako zdroj energie</p>
					</div>

					<div className="macrosContainer__item">
						<h1>Sacharidy</h1>
						<div className="macrosContainer__itemRow">
							<img src={Carbs_1} alt="Chlieb ikona"/>
							<img src={Carbs_2} alt="Ryža ikona"/>
							<img src={Carbs_3} alt="Brokolica ikona"/>	
						</div>
						<p>Sacharidy sú najpohotovejším zdrojom energie pre organizmus, zároveň sa však podieľajú na stavebnom procese v tele</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Food
