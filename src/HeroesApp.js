import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';

export const HeroesApp = () => {
	return (
		<>
			<AuthContext.Provider value={null}>
				<AppRouter />
			</AuthContext.Provider>
		</>
	);
};
