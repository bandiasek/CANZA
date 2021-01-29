import React from 'react'

import QuoteImg from '../assets/food/QuoteImg.svg'
import BackImg from '../assets/food/BackImg.svg'

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
                            <div className="food__itemSectionItem">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                            <div className="food__itemSectionItem">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                            <div className="food__itemSectionItem">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>
                            
                        </div>
                    </div>

                  </div>
            )
}

export default Food
