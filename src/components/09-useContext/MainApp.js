import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
	const user = {
		id: 123,
		name: 'christopher',
		email: 'chri@gmail,com',
	};

	return (
		<UserContext.Provider value={user}>
			<AppRouter />
		</UserContext.Provider>
	);
};
