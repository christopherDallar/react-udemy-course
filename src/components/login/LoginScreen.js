import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		// navigate('/marvel'); // To push this new history and navigate to route
		navigate('/marvel', {
			// If i am in /login then press button navigate to /marvel, but if i press browser back button, it doesn't navigate to login again
			// it doesn't push this new history and navigate to route
			replace: true,
		});
	};

	return (
		<div className='container mt-5'>
			<h1>LoginScreen</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
