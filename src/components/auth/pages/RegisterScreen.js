import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './../../../hooks/useForm';
import { InputError } from './../../atomic/InputError';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from './../../../store/auth';
import { AuthStatusEnum } from './../../../store/auth';

const formData = {
	displayName: 'Christopher Dallar',
	email: 'christopher123456@test.com',
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
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === AuthStatusEnum.checking,
		[status]
	);

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

		if (!isFormValid) {
			return;
		}

		dispatch(startCreatingUserWithEmailAndPassword(formState));

		console.log(formState);
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
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

				<InputError message={errorMessage} />
				<button
					type='submit'
					className='btn btn-primary btn-block mb-5 mt-5'
					disabled={!isFormValid || isCheckingAuthentication}
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
