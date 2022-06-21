import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { CheckingAuth } from './../ui/';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { AuthStatusEnum } from './../store/auth/authSlice';

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) {
				dispatch(logout());
			}

			const { uid, email, displayName, photoURL } = user;

			dispatch(login({ uid, email, displayName, photoURL }));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (status === AuthStatusEnum.checking) {
		return <CheckingAuth />;
	}

	return (
		<BrowserRouter>
			<Switch>
				{status === AuthStatusEnum.authenticated ? (
					<Route path='/*' component={JournalScreen} />
				) : (
					<Route path='/auth/*' component={AuthRouter} />
				)}

				{/* <Route path='/*' element={<Redirect to='/auth/login' />} /> */}

				{/* <Route path='/auth' component={AuthRouter} /> */}

				{/* <Route exact path='/' component={JournalScreen} /> */}

				<Redirect to='/auth/login' />
			</Switch>
		</BrowserRouter>
	);
};
