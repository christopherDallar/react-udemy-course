import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './../auth';
import { CalendarPage } from './../calendar';
import { authStatusEnum } from '../helpers';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  // const { status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === authStatusEnum.checking) {
    return <h3>Loading...</h3>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {status !== authStatusEnum.authenticated ? (
          <>
            <Route path="/auth/*" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
