import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './../auth';
import { CalendarPage } from './../calendar';
import { getEnvVariables } from '../helpers';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
  const { status } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {status !== 'authenticated' ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<CalendarPage />} />
        )}

        {/* <Route path='/*' element={<CalendarPage />} /> */}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
