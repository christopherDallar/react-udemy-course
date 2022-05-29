import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	// Link
} from 'react-router-dom';
import { Navbar } from './atomic/Navbar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<div className='container'>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/about' element={<AboutScreen />} />
						<Route path='/login' element={<LoginScreen />} />

						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};
