import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks';
import { InputError } from './../atomic/InputError';

const formData = {
	displayName: 'Christopher Dallar',
	email: 'christopher@google.com',
	password: '123456',
	passwordConfirm: '',
};

const formErrorMessages = {
	displayName: 'Campo obligatorio',
	email: 'Campo obligatorio',
	password: 'Campo obligatorio',
	passwordConfirm: 'Campo obligatorio',
};

export const RegisterScreen = () => {
	const {
		formState,
		displayName,
		email,
		password,
		passwordConfirm,
		onInputChange,
		displayNameValid,
		isFormValid,
		EmailValid,
		passwordValid,
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
				<InputError inputName='displayName' messages={displayNameValid} />

				<input
					type='email'
					placeholder='Email'
					className='auth__input'
					autoComplete='off'
					name='email'
					onChange={onInputChange}
					value={email}
				/>
				<InputError inputName='email' messages={formErrorMessages} />

				<input
					type='password'
					placeholder='Password'
					className='auth__input'
					name='password'
					onChange={onInputChange}
					value={password}
				/>
				<InputError inputName='password' messages={formErrorMessages} />

				<input
					type='password'
					placeholder='Confirm password'
					className='auth__input'
					name='passwordConfirm'
					onChange={onInputChange}
					value={passwordConfirm}
				/>
				<InputError inputName='passwordConfirm' messages={formErrorMessages} />

				<button type='submit' className='btn btn-primary btn-block mb-5 mt-5'>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
