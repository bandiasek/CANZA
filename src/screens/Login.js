import React, { useState } from 'react'

import CreatePost from '../components/CreatePost'
import SignInForm from '../components/SignInForm'

const Login = () => {
	// Storing login data
	const [isLogged, setIsLogged] = useState(false)

	if (isLogged) {
		return (
			<div className='createPost'>

			</div>
		)
	} else {
		return (
			<div></div>
		)
	}
}

export default Login
