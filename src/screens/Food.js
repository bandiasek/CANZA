import React from 'react'

import QuoteImg from '../assets/food/QuoteImg.svg'
import BackImg from '../assets/food/BackImg.svg'
import ItemLeafs from '../assets/food/ItemLeafs.svg'
import ItemCart from '../assets/food/ItemCart.svg'
import ItemApple from '../assets/food/ItemApple.svg'
import ItemMeat from '../assets/food/ItemMeat.svg'

import '../styles/screens/Food.css'

const Food = () => {
            return (
                  <div className="food__containerFluid">

                      <div className="food__welcomeSection">
                          <div className="food__welcomeSectionImg">
                              <div className="food__welcomeSectionText">
                                <h1>Papanie,  radosť </h1>
                                
                                <div className="food__welcomeSectionTextH2">
                                    <div className="food__welcomeSectionDash" ></div>
                                    <h2>V TÝCHTO DVOCH SLOVÁCH NEEXISTUJE ROZDIEL</h2>

                                </div>
                              </div>
                              <img src={BackImg} alt="BackImg left bottom" />
                          </div>
                      </div>
                    
                    <div className="food__quoteSection">
                        <img src={QuoteImg} alt="Quote section img"/>
                        <h1>
                            Zdravá strava je 
                            <br/>
                            <span className='food__quoteSectionTextEdit'>základom každého úspechu</span>
                        </h1>
                    </div>

                    <div className="food__itemsSection">
                        <div className="food__itemsSectionContainer">
                            <div className="food__itemsSectionItem">
                                <img src={ItemLeafs} alt="Food item Icon Leafs"/>
                                <h1>S CHUŤOU</h1>
                                <p>Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in turpis condimentum porttitor et quis felis. Curabitur quis accumsan neque. </p>
                            </div>

                            <div className="food__itemsSectionItem">
                                <img src={ItemCart} alt="Food item Icon Shopping Cart"/>
                                <h1>SPRÁVNE</h1>
                                <p>Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in turpis condimentum porttitor et quis felis. Curabitur quis accumsan neque. </p>
                            </div>

                            <div className="food__breakRow"></div>

                            <div className="food__itemsSectionItem">
                                <img src={ItemApple} alt="Food item Icon Apple"/>
                                <h1>CHUTNE</h1>
                                <p>Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in turpis condimentum porttitor et quis felis. Curabitur quis accumsan neque. </p>
                            </div>

                            <div className="food__itemsSectionItem">
                                <img src={ItemMeat} alt="Food item Icon Meat"/>
                                <h1>DOBRE</h1>
                                <p>Pellentesque id ipsum vel ex malesuada porta. Nam at lectus in turpis condimentum porttitor et quis felis. Curabitur quis accumsan neque. </p>
                            </div>
                            
                        </div>
                    </div>

                  </div>
            )
}

export default Food
