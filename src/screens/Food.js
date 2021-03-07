import React, { useState, useEffect } from 'react'

import QuoteImg from '../assets/food/QuoteImg.svg'
import BackImg from '../assets/food/BackImg.svg'
import IntroductionImg from '../assets/food/Introduction.svg'

import ItemLeafs from '../assets/food/itemSection/ItemLeafs.svg'
import ItemCart from '../assets/food/itemSection/ItemCart.svg'
import ItemApple from '../assets/food/itemSection/ItemApple.svg'
import ItemMeat from '../assets/food/itemSection/ItemMeat.svg'

import Protein_1 from '../assets/food/macros/protein_1.svg'
import Protein_2 from '../assets/food/macros/protein_2.svg'
import Protein_3 from '../assets/food/macros/protein_3.svg'
import Fat_1 from '../assets/food/macros/fat_1.svg'
import Fat_2 from '../assets/food/macros/fat_2.svg'
import Fat_3 from '../assets/food/macros/fat_3.svg'
import Carbs_1 from '../assets/food/macros/carbs_1.svg'
import Carbs_2 from '../assets/food/macros/carbs_2.svg'
import Carbs_3 from '../assets/food/macros/carbs_3.svg'

import Chart_1 from '../assets/food/chart/chart_1.svg'
import Chart_2 from '../assets/food/chart/chart_2.svg'
import Chart_3 from '../assets/food/chart/chart_3.svg'
import Chart_4 from '../assets/food/chart/chart_4.svg'
import Chart_5 from '../assets/food/chart/chart_5.svg'

import MicrosImg_1 from '../assets/food/micros/MicrosImg_1.png'
import Vit_1 from '../assets/food/micros/Vit_1.svg'
import Vit_2 from '../assets/food/micros/Vit_2.svg'
import Vit_3 from '../assets/food/micros/Vit_3.svg'
import Vit_4 from '../assets/food/micros/Vit_4.svg'
import Vit_5 from '../assets/food/micros/Vit_5.svg'
import Vit_6 from '../assets/food/micros/Vit_6.svg'
import Vit_7 from '../assets/food/micros/Vit_7.svg'
import Vit_8 from '../assets/food/micros/Vit_8.svg'
import Vit_9 from '../assets/food/micros/Vit_9.svg'
import Vit_10 from '../assets/food/micros/Vit_10.svg'
import Vit_11 from '../assets/food/micros/Vit_11.svg'
import Vit_12 from '../assets/food/micros/Vit_12.svg'

import MicrosImg_2 from '../assets/food/micros/MicrosImg_2.png'
import Min_1 from '../assets/food/micros/Min_1.svg'
import Min_2 from '../assets/food/micros/Min_2.svg'
import Min_3 from '../assets/food/micros/Min_3.svg'
import Min_4 from '../assets/food/micros/Min_4.svg'
import Min_5 from '../assets/food/micros/Min_5.svg'
import Min_6 from '../assets/food/micros/Min_6.svg'
import Min_7 from '../assets/food/micros/Min_7.svg'
import Min_8 from '../assets/food/micros/Min_8.svg'
import Min_9 from '../assets/food/micros/Min_9.svg'
import Min_10 from '../assets/food/micros/Min_10.svg'
import Min_11 from '../assets/food/micros/Min_11.svg'
import Min_12 from '../assets/food/micros/Min_12.svg'
import Min_13 from '../assets/food/micros/Min_13.svg'
import Min_14 from '../assets/food/micros/Min_14.svg'

import WaterImg from '../assets/food/WaterImg.svg'
import Water250 from '../assets/food/Water250.svg'
import Water200 from '../assets/food/Water200.svg'

import '../styles/screens/FoodAndTraining.css'
import '../styles/screens/Food.css'

const Food = () => {
	// Stpring tdee calculator data
	const [tdeeData, setTdeeData] = useState({
		weight: '',
		height: '',
		age: '',
		sex: '',
		activityLevel: '',
	})
	const [tdeeResult, setTdeeResult] = useState({
		resultDef: '---',
		result: '---',
		resultSur: '---',
	})

	const [macrosResult, setMacrosResult] = useState({
		carbs: '---',
		fat: '---',
		proteins: '---',
		kcalCarbs: '---',
		kcalFat: '---',
		kcalProt: '---',
	})

	// Checked handler
	const checkHandler = (e) => {
		if (e.target.name === 'sex') {
			setTdeeData({
				...tdeeData,
				sex: e.target.value,
			})
		} else {
			setTdeeData({
				...tdeeData,
				activityLevel: e.target.value,
			})
		}
	}

	// Change input handler
	const onChangeInput = (event) => {
		event.preventDefault()
		setTdeeData({
			...tdeeData,
			[event.currentTarget.name]: event.currentTarget.value,
		})
	}

	// Calculate if filled
	const calculateTdee = () => {
		if (
			tdeeData.weight !== '' &&
			tdeeData.height !== '' &&
			tdeeData.age !== '' &&
			tdeeData.sex !== '' &&
			tdeeData.activityLevel !== ''
		) {
			const result =
				(10 * tdeeData.weight.valueOf() +
					6.25 * tdeeData.height.valueOf() -
					5 * tdeeData.age.valueOf() +
					(tdeeData.sex === '5' ? 5 : -161)) *
				tdeeData.activityLevel.valueOf()
			setTdeeResult({
				result: Math.round(result),
				resultDef: Math.round(result - 200),
				resultSur: Math.round(result + 200),
			})
		}
	}

	// Calculate macros result
	const calculateMacros = () => {
		if (tdeeResult.result !== '---') {
			const fatSubResult = Math.round(tdeeResult.result.valueOf() * 0.3)
			const protSubResult = Math.round(tdeeResult.result.valueOf() * 0.3)
			const carbsSubResult = Math.round(tdeeResult.result.valueOf() * 0.4)
			const fatResult = Math.round(fatSubResult / 9)
			const protResult = Math.round(protSubResult / 4)
			const carbsResult = Math.round(carbsSubResult / 4)

			setMacrosResult({
				carbs: carbsResult.toString(),
				fat: fatResult.toString(),
				proteins: protResult.toString(),
				kcalCarbs: carbsSubResult.toString(),
				kcalFat: fatSubResult.toString(),
				kcalProt: protSubResult.toString(),
			})
		}
	}

	// UseEffect runs every tdeeData changes, tdeeResult changes
	useEffect(() => {
		calculateTdee()
	}, [tdeeData])

	useEffect(() => {
		calculateMacros()
		console.log(macrosResult)
	}, [tdeeResult])

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

			<div className='food__macros'>
				<h1>
					<span className='macros__green'>Makro</span>živiny
				</h1>
				<p>
					Každe jedlo sa delí na konkrétne makroživiny. Je dôležité sledovať aké
					mnoštvo akej makroživiny do tela dávaš. Výrazne to ovplyvní tvoj
					výsledok.
				</p>
				<div className='food__macrosContainer'>
					<div className='macrosContainer__item'>
						<h1>Bielkoviny</h1>
						<div className='macrosContainer__itemRow'>
							<img src={Protein_1} alt='Kuracia nožka ikona' />
							<img src={Protein_2} alt='Ryba ikona' />
							<img src={Protein_3} alt='Mlieko ikona' />
						</div>
						<p>
							Bielkoviny alebo proteíny slúžia ako základná stavebná jednotka,
							ktoré pomáhajú vytvárať nové tkanivá
						</p>
					</div>

					<div className='macrosContainer__item'>
						<h1>Tuky</h1>
						<div className='macrosContainer__itemRow'>
							<img src={Fat_1} alt='Avokado ikona' />
							<img src={Fat_2} alt='Syr ikona' />
							<img src={Fat_3} alt='Olivy ikona' />
						</div>
						<p>
							Tuky alebo lipidy môžu byť rastlinného alebo živočíšneho
							pôvodu a sú to látky nerozpustné vo vode, ktoré slúžia ako zdroj
							energie
						</p>
					</div>

					<div className='macrosContainer__item'>
						<h1>Sacharidy</h1>
						<div className='macrosContainer__itemRow'>
							<img src={Carbs_1} alt='Chlieb ikona' />
							<img src={Carbs_2} alt='Ryža ikona' />
							<img src={Carbs_3} alt='Brokolica ikona' />
						</div>
						<p>
							Sacharidy sú najpohotovejším zdrojom energie pre
							organizmus, zároveň sa však podieľajú na stavebnom procese v tele
						</p>
					</div>
				</div>
			</div>

			<div className='food__charts'>
				<div className='food__chartsHeading'>
					<div className='chartsHeading__type'>
						<div className='chartsHeading__typeCircle chartsHeading__typeCirclePro'></div>
						<h1>Bielkoviny</h1>
					</div>
					<div className='chartsHeading__type'>
						<div className='chartsHeading__typeCircle chartsHeading__typeCircleFat'></div>
						<h1>Tuky</h1>
					</div>
					<div className='chartsHeading__type'>
						<div className='chartsHeading__typeCircle chartsHeading__typeCircleCarbs'></div>
						<h1>Sacharidy</h1>
					</div>
				</div>
				<div className='food__chartsContainer'>
					<img src={Chart_1} alt='Chudnutie graf' />
					<div className='f_a_t__breakRow'></div>
					<img src={Chart_2} alt='Udržovanie graf' />
					<img src={Chart_3} alt='Naberanie graf' />
					<div className='f_a_t__breakRow'></div>
					<img src={Chart_4} alt='Výbušnosť graf' />
					<img src={Chart_5} alt='Vytrvalosť graf' />
				</div>
			</div>

			<div className='food__micros'>
				<h1>
					<span className='macros__green'>Mikro</span>živiny
				</h1>
				<p>
					Neprinášajú do organizmu energiu, sú však dôležité faktory, ktoré
					spolupôsobia pri metabolizme. Ide najmä o vitamíny (napr. vitamín A,
					B, C, D, E, a K), minerálne látky (napr. vápnik a fosfor) a stopové
					prvky (napr. železo, zinok, selén a mangán).
				</p>
				<div className='food__microsVitamins'>
					<div className='microsVitamins__info'>
						<h1>Vitamíny</h1>
						<ul>
							<li>
								- pomáhajú uvoľniť energiu nachádzajúcu sa v potravinách, ktoré
								konzumujete
							</li>
							<li>
								- vyrábajú kolagén, ktorý pomáha hojiť rany, podporuje steny
								krvných ciev a je dôležitý pre kosti a zuby
							</li>
							<li>
								- udržujú vaše oči, pokožku, pľúca, tráviaci trakt a nervový
								systém v dobrej kondícii
							</li>
							<li>
								- budujú vaše kosti, chránia váš zrak a navzájom sa ovplyvňujú,
								aby pomohli telu vstrebať vitamíny, ktoré potrebujú
							</li>
							<li>- chránia vás pred chorobami</li>
						</ul>
						<div className='microsVitamins__infoContainer'>
							<img src={Vit_1} alt='Vitamín B1 v kuraciom mäse' />
							<img src={Vit_2} alt='Vitamín B2 v mlieku' />
							<img src={Vit_3} alt='Vitamín B3 v brokolici' />
							<img src={Vit_4} alt='Vitamín B5 v avokáde' />
							<img src={Vit_5} alt='Vitamín B6 v mrkvi' />
							<img src={Vit_6} alt='Vitamín B7 vo vajci' />
							<img src={Vit_7} alt='Vitamín B9 vo špargli' />
							<img src={Vit_8} alt='Vitamín B12 v rybe' />
							<img src={Vit_9} alt='Vitamín C v citróne' />
							<img src={Vit_10} alt='Vitamín D skrze slnko' />
							<img src={Vit_11} alt='Vitamín E v obylí' />
							<img src={Vit_12} alt='Vitamín K v dini' />
						</div>
					</div>
					<div className='microsVitamins__img'>
						<img src={MicrosImg_1} alt='Vitamíny obrázok' />
					</div>
				</div>

				<div className='food__microsMinerals'>
					<div className='microsMinerals__img'>
						<img src={MicrosImg_2} alt='Minerály obrázok' />
					</div>
					<div className='microsMinerals__info'>
						<h1>Minerály</h1>
						<ul>
							<li>
								- minerály udržiavajú správnu rovnováhu vody vo vašom tele
							</li>
							<li>
								- podporujú zdravé kosti a stabilizujú bielkovinové štruktúry,
								ktoré získate z bielkovín, ktoré konzumujete, vrátane tých,
								ktoré tvoria vaše vlasy, pokožku a nechty
							</li>
							<li>- pomáhajú distribuovať kyslík do celého tela</li>
						</ul>
						<div className='microsMinerals__infoContainer'>
							<img src={Min_1} alt='Kalcium v brokolici' />
							<img src={Min_2} alt='Probiotiká v mlieku' />
							<img src={Min_3} alt='Magnésium v mandľách' />
							<img src={Min_4} alt='NA v kuracej nožke' />
							<img src={Min_5} alt='CL v riasach' />
							<img src={Min_6} alt='K v tekvici' />
							<img src={Min_7} alt='S vo vajci' />
						</div>
						<h1>Stopové prvky</h1>
						<div className='microsMinerals__infoContainer'>
							<img src={Min_8} alt='FE v šaláte' />
							<img src={Min_9} alt='MN v ananáse' />
							<img src={Min_10} alt='CU v kraboch' />
							<img src={Min_11} alt='Zinok v mušliach' />
							<img src={Min_12} alt='I v riasach' />
							<img src={Min_13} alt='F v pomarančovom džúse' />
							<img src={Min_14} alt='SE v šunke' />
						</div>
					</div>
				</div>
			</div>

			<div className='food__tdee'>
				<h1>TDEE kalkulačka</h1>
				<p>
					TDEE - Celkový výdaj energie za deň je údaj, ktorý vyjadruje,
					koľko kalórií potrebuje telo za celý deň spáliť. Zahŕňa tvoj bazálny
					metabolizmus, BMR - teda koľko spáli tvoje telo za deň v pokoji,
					vynásobený úrovňou aktivity. Aktivita môže byť zamestnanie, cvičenie
					alebo iné fyzické činnosti. Samozrejme, každe telo je iné, preto tento
					údaj slúži len orientačne.
				</p>
				<div className='food__tdeeForm'>
					<form>
						<h1>Základné údaje</h1>
						<div className='tdeeForm__info'>
							<input
								type='number'
								name='weight'
								min='1'
								required
								placeholder='VÁHA (kg)'
								onChange={(e) => onChangeInput(e)}
							/>
							<input
								type='number'
								name='height'
								min='1'
								required
								placeholder='VÝŠKA (cm)'
								onChange={(e) => onChangeInput(e)}
							/>
							<input
								type='number'
								name='age'
								min='1'
								required
								placeholder='VEK'
								onChange={(e) => onChangeInput(e)}
							/>
						</div>
						<h1>Pohlavie</h1>
						<div className='tdeeForm__sex'>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='sex'
									id='male'
									value='5'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.sex === '5' ? true : false}
								/>
								<label htmlFor='male'>MUŽ</label>
							</div>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='sex'
									id='female'
									value='-161'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.sex === '-161' ? true : false}
								/>
								<label htmlFor='female'>ŽENA</label>
							</div>
						</div>
						<h1>Aktivity za týždeň</h1>
						<div className='tdeeForm__activity'>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='actvity'
									id='inactive'
									value='1.2'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.activityLevel === '1.2' ? true : false}
								/>
								<label htmlFor='inactive'>Žiadne</label>
							</div>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='actvity'
									id='moder-active'
									value='1.375'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.activityLevel === '1.375' ? true : false}
								/>
								<label htmlFor='moder-active'>Menej ako 3</label>
							</div>
							<div className='f_a_t__breakRow'></div>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='actvity'
									id='active'
									value='1.550'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.activityLevel === '1.550' ? true : false}
								/>
								<label htmlFor='active'>3 - 5 krát</label>
							</div>
							<div className='tdeeForm__option'>
								<input
									type='checkbox'
									name='actvity'
									id='very-active'
									value='1.725'
									onChange={(e) => checkHandler(e)}
									checked={tdeeData.activityLevel === '1.725' ? true : false}
								/>
								<label htmlFor='very-active'>Každý deň</label>
							</div>
						</div>
					</form>
				</div>
				<div className='food__tdeeResult'>
					<div className='tdeeResult__item'>
						<h1>AK CHCETE SCHUDNÚŤ</h1>
						<h2>{tdeeResult.resultDef}</h2>
						<h1>KALÓRII DENNE</h1>
					</div>
					<div className='tdeeResult__item'>
						<h1>AK NECHCETE MENIŤ</h1>
						<h2>{tdeeResult.result}</h2>
						<h1>KALÓRII DENNE</h1>
					</div>
					<div className='tdeeResult__item'>
						<h1>AK CHCETE NABRAŤ</h1>
						<h2>{tdeeResult.resultSur}</h2>
						<h1>KALÓRII DENNE</h1>
					</div>
				</div>
			</div>

			<div className='food__macrosResult'>
				<h1>Denný kalorický príjem</h1>
				<div className='macrosResult__container fat'>
					<div className='macrosResult__name'>
						<h1>TUKY</h1>
					</div>
					<div className='macrosResult__info'>
						<div className='macrosResult__infoHeading'>
							<h1>
								{tdeeResult.result}
								<span className='macrosResult__small'>kcal </span>* 0.3 ={' '}
								{macrosResult.kcalFat}
								<span className='macrosResult__small'>kcal </span>
							</h1>
							<h1>
								{macrosResult.kcalFat}
								<span className='macrosResult__small'>kcal </span>/ 9
								<span className='macrosResult__small'>kcal </span>={' '}
								{macrosResult.fat}
								<span className='macrosResult__small'>g </span>
							</h1>
						</div>
						<ul>
							<li> - 1g tuku má 9 kcal</li>
							<li> - 30 % z celodenného príjmu by mali tvoriť tuky</li>
							<li>
								{' '}
								- u mužov sa používa taktiež pomer 0.8g až 1g na 1kg telesnej
								váhy
							</li>
							<li>
								{' '}
								- u žien z dôvodu zachovania menštruačného cyklu sa používa
								pomer 1.2g až 1.6g na 1 kg telesnej váhy
							</li>
						</ul>
					</div>
					<div className='macrosResult__result'>
						<h1>
							{macrosResult.fat}
							<span className='macrosResult__small'>g </span>
						</h1>
					</div>
				</div>
				<div className='macrosResult__container prot'>
					<div className='macrosResult__name'>
						<h1>BIELKOVINY</h1>
					</div>
					<div className='macrosResult__info'>
						<div className='macrosResult__infoHeading'>
							<h1>
								{tdeeResult.result}
								<span className='macrosResult__small'>kcal </span>* 0.3 ={' '}
								{macrosResult.kcalProt}
								<span className='macrosResult__small'>kcal </span>
							</h1>
							<h1>
								{macrosResult.kcalProt}
								<span className='macrosResult__small'>kcal </span>/ 4
								<span className='macrosResult__small'>kcal </span>={' '}
								{macrosResult.proteins}
								<span className='macrosResult__small'>g </span>
							</h1>
						</div>
						<ul>
							<li> - 1g bielkoviny má 4 kcal</li>
							<li> - 30 % z celodenného príjmu by mali tvoriť bielkoviny</li>
							<li>
								{' '}
								- priemerné ľudské telo dokáže vstrebať maximálne 2.2g
								bielkoviny na 1 kg telesnej váhy
							</li>
							<li>
								{' '}
								- pri prekročení maximálneho príjmu bielkovín hrozia zažívacie
								ťažkosti, smradľavý pot a podobne
							</li>
						</ul>
					</div>
					<div className='macrosResult__result'>
						<h1>
							{macrosResult.proteins}
							<span className='macrosResult__small'>g</span>
						</h1>
					</div>
				</div>
				<div className='macrosResult__container carbs'>
					<div className='macrosResult__name'>
						<h1>SACHARIDY</h1>
					</div>
					<div className='macrosResult__info'>
						<div className='macrosResult__infoHeading'>
							<h1>
								{tdeeResult.result}
								<span className='macrosResult__small'>kcal </span>* 0.4 ={' '}
								{macrosResult.kcalCarbs}
								<span className='macrosResult__small'>kcal </span>
							</h1>
							<h1>
								{macrosResult.kcalCarbs}
								<span className='macrosResult__small'>kcal </span>/ 4
								<span className='macrosResult__small'>kcal </span>={' '}
								{macrosResult.carbs}
								<span className='macrosResult__small'>g </span>
							</h1>
						</div>
						<ul>
							<li> - 1g sacharidu má 4 kcal</li>
							<li> - 40 % z celodenného príjmu by mali tvoriť sacharidy</li>
							<li>
								{' '}
								- sacharidy sú potrebné pre správne vstrebávanie bielkovín a
								celkový chod organizmu
							</li>
							<li>
								{' '}
								- netreba zabúdať na vlákninu, na 1000 kcal je potrebné
								konzumovať 14g vlákniny v strave
							</li>
						</ul>
					</div>
					<div className='macrosResult__result'>
						<h1>
							{macrosResult.carbs}
							<span className='macrosResult__small'>g </span>
						</h1>
					</div>
				</div>
			</div>
			<div className='food__water'>
				<h1>
					<span className='macros__green'>Pitný </span>
					režim
				</h1>
				<p>
					Tekutiny sú tým najzásadnejším, čo do svojho organizmu privádzame.
					Naše telo je tvorené z viac ako 70% práve vody. Jej množstvo záleží na
					mnohých faktoroch, na pohlaví, na veku, na aktuálnej úrovni množstva
					svalovej hmoty alebo napríklad aj na tom, či ste chorí alebo či ste
					úplne fit. Všetky tieto faktory ovplyvňujú množstvo tekutín v
					organizme.{' '}
				</p>
				<div className='food__waterContainer'>
					<div className='waterContainer__info'>
						<h1>Príjem tekutín pri športovej aktivite</h1>
						<ul>
							<li>
								- človek by mal v priemere za deň prijať 30-50 ml tekutín na 1kg
								svojej váhy
							</li>
							<li>
								- bunkové procesy v tele sú založené na vode, a bez nej
								nedokážeme správne fungovať
							</li>
							<li>
								- pri zvýšenej fyzickej aktivite, je príjem tekutín ešte
								dôležitejší
							</li>
						</ul>
						<div className='waterContainerInfo__container'>
							<div className='waterContainerInfo__item'>
								<img src={Water250} alt='Voda pred tréningom 250ml' />
								<h1>tesne pred začatím tréningu</h1>
							</div>
							<div className='waterContainerInfo__item'>
								<img src={Water200} alt='Voda na každých 15 min tréningu' />
								<h1>na každých 15 minút tréningu</h1>
							</div>
							<div className='waterContainerInfo__item'>
								<img src={Water250} alt='Voda po ukončení tréningu' />
								<h1>po skončené tréningu</h1>
							</div>
						</div>
					</div>
					<div className='waterContainer__img'>
						<img src={WaterImg} alt='Obrázok vody' />
					</div>
				</div>
				<h2>
					Myslite teda na svoje telo, myslite na to, že musíte piť. Dostatočný
					príjem vody je nevyhnutný na zabezpečenie správneho fungovania
					metabolizmu, celkovú hydratáciu a odvod škodlivých látok z tela.
				</h2>
			</div>
			<div className='food__end'>
				<h1>
					{'„'}
					<span className='foodEnd__edit'>Úspech</span> je súčet malých snáh
					opakovaných <span className='foodEnd__edit'>deň čo deň</span>
					{'.”'}
				</h1>
				<h2>- Robert Collier</h2>
			</div>
			<span className='foodEnd__edit'></span>
		</div>
	)
}

export default Food
