import React from 'react';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export const AppRouter = () => {
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
