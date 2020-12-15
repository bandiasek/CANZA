import React, { useEffect, useState } from 'react'

import PostImg from '../assets/postImg.svg'
import BackImg from '../assets/backImg.svg'

import '../styles/reset.css'
import '../styles/components/Swiper.css'

const SwiperItem = ({ postCategory, postName, postImg }) => {
      // Defining styles
      const [style, setStyle] = useState({top:0,left:0,position:'absolute'})
      const styles = [
            {top:0, left:0, position:'absolute'},
            {top:0, right:0, position:'absolute'},
            {bottom:0, right:0, position:'absolute'}
      ];

      // Function + useEffect to randomly choose element
      const choosePosition = () => {
           setStyle(
                 styles[
                       Math.floor(
                             Math.random() * Math.floor(styles.length
                              )
                              )
                        ]
           )
      }

      useEffect(() => {
            choosePosition()
      }, [])
      return (
            <div className="swiperItem__container">
                  <div className="swiperItem__containerImg">
                        <img src={PostImg} alt="Post img" />
                        
                        <div style={style}>
                              <img src={BackImg} alt="Back img"/>
                        </div>
                  </div>
                  
                  <div className="swiperItem__containerText">
                        <h4>STRAVOVANIE</h4>
                        <h1>Ako pomáha strava pri cvičení ?</h1>
                  </div>
            </div>
      )
}
            
export default SwiperItem;