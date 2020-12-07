import React, { useState, useContext } from 'react'

import { FuncContext } from './Context'
 
const SignInForm = () => {
	// Storing posts, login data, crating post
	const [user, setUser] = useState({
		email: '',
		pswd: '',
      })
      
      const { signIn } = useContext(FuncContext)

	// Handling change in input
	const onChangeHandler = (event) => {
		event.preventDefault()
		setUser({
			 ...user, [event.currentTarget.name]: event.currentTarget.value 
			})
	}


		return (
			<form className='signIn'>
				<input
					type='text'
					name='email'
					value={user.email}
					placeholder='Enter your email'
					id='email'
					onChange={(event) => onChangeHandler(event)}
				/>

				<input
					type='password'
					name='pswd'
					value={user.pswd}
					placeholder='Enter your password'
					id='pswd'
					onChange={(event) => onChangeHandler(event)}
				/>

				<button onClick={(event) => signIn(event, user.email, user.pswd)}>Sign in</button>
			</form>
		)
}

export default SignInForm
