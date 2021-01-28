import React from 'react'

import WelcomeImg from '../assets/food/WelcomeImg.svg'
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


                  </div>
            )
}

export default Food
