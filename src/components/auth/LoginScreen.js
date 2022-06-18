import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './../../hooks/useForm';
import { checkingAuth, startGoogleSignIn } from '../../store/auth';

export const LoginScreen = () => {
	const { status } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm({
		email: 'christopher@google.com',
		password: '123456',
	});

	const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

	const onSubmit = (e) => {
		e.preventDefault();

		console.log({ email, password });
		dispatch(checkingAuth());
	};

	const onGoogleSignIn = (e) => {
		console.log(isAuthenticated);
		console.log('onGoogleSignIn');
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
				<button
					disabled={isAuthenticated}
					type='submit'
					className='btn btn-primary btn-block'
				>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>

					<button
						className='google-btn'
						disabled={isAuthenticated}
						onClick={onGoogleSignIn}
					>
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
