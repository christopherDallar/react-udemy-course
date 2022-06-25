import { Switch, Route, Redirect } from 'react-router-dom';
import { JournalScreen } from './../pages/JournalScreen';

export const JournalRoutes = () => {
	return (
		<Switch>
			<Route path='/' component={JournalScreen} />

			<Route path='/*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	);
};
