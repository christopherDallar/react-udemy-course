import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks';

const formData = {
	displayName: 'Christopher Dallar',
	email: 'christopher@google.com',
	password: '123456',
	passwordConfirm: '',
};

export const RegisterScreen = () => {
	const {
		displayName,
		email,
		password,
		passwordConfirm,
		onInputChange,
		formState,
	} = useForm(formData);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='name'
					className='auth__input'
					autoComplete='off'
					name='displayName'
					onChange={onInputChange}
					value={displayName}
				/>

				<input
					type='email'
					placeholder='Email'
					className='auth__input'
					autoComplete='off'
					name='email'
					onChange={onInputChange}
					value={email}
				/>
				<input
					type='password'
					placeholder='Password'
					className='auth__input'
					name='password'
					onChange={onInputChange}
					value={password}
				/>

				<input
					type='password'
					placeholder='Confirm password'
					className='auth__input'
					name='passwordConfirm'
					onChange={onInputChange}
					value={passwordConfirm}
				/>

				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
