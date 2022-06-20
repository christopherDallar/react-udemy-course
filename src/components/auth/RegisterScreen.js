import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks';
import { InputError } from './../atomic/InputError';

const formData = {
	displayName: 'Christopher Dallar',
	email: 'christopher@google.com',
	password: '123456',
	passwordConfirm: '123456',
};

const formValidations = {
	displayName: [(value) => value.length >= 1, 'DisplayName is required.'],
	email: [(value) => value.includes('@'), 'Email must to be @.'],
	password: [
		(value) => value.length >= 6,
		'Password must to be at least 6 characters.',
	],
	passwordConfirm: [
		(value, formState) => value === formState['password'],
		'Passwords is not matching.',
	],
};

export const RegisterScreen = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const {
		formState,
		displayName,
		email,
		password,
		passwordConfirm,
		onInputChange,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
		passwordConfirmValid,
	} = useForm(formData, formValidations);

	const onSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
		console.log(formState);
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name'
					className='auth__input'
					autoComplete='off'
					name='displayName'
					onChange={onInputChange}
					value={displayName}
				/>
				<InputError message={formSubmitted && displayNameValid} />

				<input
					type='email'
					placeholder='Email'
					className='auth__input'
					autoComplete='off'
					name='email'
					onChange={onInputChange}
					value={email}
				/>
				<InputError message={formSubmitted && emailValid} />

				<input
					type='password'
					placeholder='Password'
					className='auth__input'
					name='password'
					onChange={onInputChange}
					value={password}
				/>
				<InputError message={formSubmitted && passwordValid} />

				<input
					type='password'
					placeholder='Confirm password'
					className='auth__input'
					name='passwordConfirm'
					onChange={onInputChange}
					value={passwordConfirm}
				/>
				<InputError message={formSubmitted && passwordConfirmValid} />

				<button
					type='submit'
					className='btn btn-primary btn-block mb-5 mt-5'
					disabled={!isFormValid}
				>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
