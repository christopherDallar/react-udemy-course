import React from 'react';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckingAuth } from './../ui/';

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/auth' component={AuthRouter} />

				<Route exact path='/' component={JournalScreen} />

				<Redirect to='/auth/login' />
			</Switch>
		</BrowserRouter>
	);
};
