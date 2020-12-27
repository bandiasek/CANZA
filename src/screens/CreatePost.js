import React, { useState, useContext } from 'react'

import { FuncContext } from '../components/Context'

const CreatePost = () => {
	// Storing login data
      const [user, setUser] = useState({
		email: '',
		pswd: '',
      })

      // Getting data from useContext
      const { signIn, isLogged } = useContext(FuncContext)
      
      // Method that handles text input in login, and also in create post
      const onChangeInput = (event) => {
		event.preventDefault()
		setUser({
			 ...user, [event.currentTarget.name]: event.currentTarget.value 
			})
	}


	if (isLogged) {
		return (
			<div>
				<h1>LOGGED IN</h1>
			</div>
		)
	} else {
		return (
			<div>
                       <form className='signIn'>
                              <input
                                    type='text'
                                    name='email'
                                    value={user.email}
                                    placeholder='Enter your email'
                                    id='email'
                                    onChange={(event) => onChangeInput(event)}
                              />

                              <input
                                    type='password'
                                    name='pswd'
                                    value={user.pswd}
                                    placeholder='Enter your password'
                                    id='pswd'
                                    onChange={(event) => onChangeInput(event)}
                              />

                              <button onClick={(event) =>
                                    signIn(event, user.email, user.pswd)
                                    
                              }>Sign in</button>
                        </form> 
                  </div>
		)
	}
}

export default CreatePost
