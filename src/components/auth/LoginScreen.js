import React from 'react';

export const LoginScreen = () => {
	return (
		<div>
			<h3>Login</h3>

			<form>
				<input type='email' placeholder='Email' name='email' />
				<input type='password' placeholder='Password' name='password' />
				<button type='submit'>Login</button>
				<hr />
				google
			</form>
		</div>
	);
};
