import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { checkingAuth, startGoogleSignIn } from '../../store/auth';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm({
		email: 'christopher@google.com',
		password: '123456',
	});

	const onSubmit = (e) => {
		e.preventDefault();

		console.log({ email, password });
		dispatch(checkingAuth());
	};

	const onGoogleSignIn = (e) => {
		console.log('onGoogleSignIn');

		console.log({ email, password });
		dispatch(startGoogleSignIn());
	};

	return (
		<>
			<h3 className='auth__title'>Login</h3>

			<form onSubmit={onSubmit}>
				<input
					autoComplete='off'
					className='auth__input'
					type='email'
					placeholder='Email'
					name='email'
					value={email}
					onChange={onInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={onInputChange}
				/>
				<button type='submit' className='btn btn-primary btn-block'>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>

					<div className='google-btn'>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text' onClick={onGoogleSignIn}>
							<b>Sign in with google</b>
						</p>
					</div>

					<Link to='/auth/register' className='link'>
						Create new account
					</Link>
				</div>
			</form>
		</>
	);
};
