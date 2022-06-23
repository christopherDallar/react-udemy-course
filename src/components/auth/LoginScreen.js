import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './../../hooks/useForm';
import {
	AuthStatusEnum,
	startGoogleSignIn,
	startLoginWithEmailAndPassword,
} from '../../store/auth';
import { InputError } from '../atomic/InputError';

const formData = {
	email: 'christopher123456@test.com',
	password: '123456',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'Email must to be @.'],
	password: [
		(value) => value.length >= 6,
		'Password must to be at least 6 characters.',
	],
};

export const LoginScreen = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [formSubmitted, setFormSubmitted] = useState(false);
	const {
		email,
		password,
		onInputChange,
		isFormValid,
		emailValid,
		passwordValid,
	} = useForm(formData, formValidations);

	const isCheckingAuthentication = useMemo(
		() => status === AuthStatusEnum.checking,
		[status]
	);

	const onSubmit = (e) => {
		e.preventDefault();

		setFormSubmitted(true);

		if (!isFormValid) {
			return;
		}

		dispatch(startLoginWithEmailAndPassword({ email, password }));
	};

	const onGoogleSignIn = (e) => {
		dispatch(startGoogleSignIn());
	};

	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<input
					autoComplete='off'
					className='auth__input'
					type='email'
					placeholder='Email'
					name='email'
					value={email}
					onChange={onInputChange}
				/>
				<InputError message={formSubmitted && emailValid} />

				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={onInputChange}
				/>
				<InputError message={formSubmitted && passwordValid} />

				<InputError message={errorMessage} />
				<button
					disabled={!isFormValid || isCheckingAuthentication}
					type='submit'
					className='btn btn-primary btn-block'
				>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>

					<button className='google-btn' onClick={onGoogleSignIn}>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>

						<span className='btn-text'>Sign in with google</span>
					</button>

					<Link to='/auth/register' className='link'>
						Create new account
					</Link>
				</div>
			</form>
		</>
	);
};
