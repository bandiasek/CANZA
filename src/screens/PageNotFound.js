import React from 'react'
import '../styles/screens/Pagenotfound.css'

const PageNotFound = () => {
      return(
            <div className="pageNotFound__container">
                  <h1>404</h1>
                  <h2>Podstránka sa <span className='pageNotFound__border'>nenašla</span></h2>
            </div>
            )
      }

export default PageNotFound
