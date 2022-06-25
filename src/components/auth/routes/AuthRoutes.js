import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from './../pages/LoginScreen';
import { RegisterScreen } from './../pages/RegisterScreen';

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route path='/auth/login' component={LoginScreen} />
			<Route path='/auth/register' component={RegisterScreen} />

			<Route path='/*'>
				<Redirect to='/auth/login' />
			</Route>
		</Switch>
	);
};
