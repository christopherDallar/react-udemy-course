import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { CheckingAuth } from './../ui/';
import { AuthStatusEnum } from './../store/auth/authSlice';
import { useCheckAuth } from './../hooks/useCheckAuth';

export const AppRouter = () => {
	const status = useCheckAuth();

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

				<Redirect to='/auth/login' />
			</Switch>
		</BrowserRouter>
	);
};
