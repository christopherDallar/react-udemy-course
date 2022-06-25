import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CheckingAuth } from './../components/ui/CheckingAuth';
import { AuthStatusEnum } from './../store/auth/authSlice';
import { useCheckAuth } from './../hooks/useCheckAuth';
import { AuthRoutes } from './../components/auth/routes/AuthRoutes';
import { JournalRoutes } from './../components/journal/routes/JournalRoutes';

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === AuthStatusEnum.checking) {
		return <CheckingAuth />;
	}

	return (
		<BrowserRouter>
			<Switch>
				{status === AuthStatusEnum.authenticated ? (
					<Route path='/*' component={JournalRoutes} />
				) : (
					<Route path='/auth' component={AuthRoutes} />
				)}
			</Switch>
		</BrowserRouter>
	);
};
