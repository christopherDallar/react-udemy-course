import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from './../../types/types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Christopher',
			},
		};

		dispatch(action);

		navigate('/marvel', {
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
