import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './../auth';
import { CalendarPage } from './../calendar';

export const AppRouter = () => {
	const authStatus = 'authenticated'; // 'not-authenticated', 'authenticated'

	return (
		<BrowserRouter>
			<Routes>
				{authStatus !== 'authenticated' ? (
					<Route path='/auth/*' element={<LoginPage />} />
				) : (
					<Route path='/*' element={<CalendarPage />} />
				)}

				{/* <Route path='/*' element={<CalendarPage />} /> */}

				<Route path='/*' element={<Navigate to='/auth/login' />} />
			</Routes>
		</BrowserRouter>
	);
};
