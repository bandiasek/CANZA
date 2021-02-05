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
						Vždy dostatočne motivovaný dať zo seba maximu! Mať chuť a "drive" byť lepší a trénovať, trénovať, trénovať... Nezáleží či si chlap alebo žena, starý alebo mladý, nikdy veci nie sú tak zlé, aby nebola chuť ísť cvičiť!{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemBiceps} alt='Training item Icon Shopping Cart' />
						<h1>SPRÁVNE</h1>
						<p>
						Nie nadarmo sa vraví "Quality Over Quantity". Správnym spôsobom všetko ide ľahšie. Najdi si PRE TEBA správny spôsob a nevzdavaj sa. Niekedy to môže trvať rok, dva, možno aj tri mesiace, no dôležité je ho nájsť! {' '}
						</p>
					</div>

					<div className='f_a_t__breakRow'></div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemClock} alt='Training item Icon Apple' />
						<h1>NEPONÁHĽAJ</h1>
						<p>
							Všetko ma svoj čas. Trénuj rozvážne a buď trpezlivý/á. Niekdy sa výsledky ukážu o mesiac, inokedy zasa o rok, inokedy zasa o päť. Dôležité je vytrvať!{' '}
						</p>
					</div>

					<div className='f_a_t__itemsSectionItem'>
						<img src={ItemWeight} alt='Training item Icon Meat' />
						<h1>DOBRE</h1>
						<p>
							Ak robíš maximum, vedieš si DOBRE. Nepozeraj a neporovnávaj sa. Každý máme svoju cestu, svoje tempo, svoje možnosti. Nenechaj sa demotivovať okolnosťami. Vedieš si DOBRE! {' '}
						</p>
					</div>
				</div>
			</div>

			<div className='f_a_t__introduction'>
				<div className='f_a_t__introductionContianer'>
					<img src={IntroductionImg} alt='Introduction Img floating left' />
					<div className='f_a_t__introductionDescription'>
						<h1>Prečo trénovať ?</h1>
						<p>
							Samotný tréning, pohyb je pre ľudské telo prirodzený. Moderná doba človeka núti sedieť v kancelárií, škole, doma či dokonca v dopravných prostriedkoch. V minulosti ľudské telo bolo vystavené pohybu a aktivite deň čo deň. Ľudia mali lepšiu imunitu, boli silnejší a často krát viac osvalený ako my teraz. Preto sa pohyb považuje pre telo ako nevyhnutný. Či máš záľubu v tréningu s váhami, s vlastným telom alebo možno iné športy, vôbec nezáleží. Ide hlavne o to, že sa hýbeš a nútiš svoje telo k zlepšeniu sily či vytrvalosti.  
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Training
