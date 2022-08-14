import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './../auth'
import { CalendarPage } from './../calendar'
import { getEnvVariables } from '../helpers'

export const AppRouter = () => {
  const authStatus = 'authenticated' // 'not-authenticated', 'authenticated'

  console.log(getEnvVariables())

  return (
    <BrowserRouter>
      <Routes>
        {authStatus !== 'authenticated' ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<CalendarPage />} />
        )}

        {/* <Route path='/*' element={<CalendarPage />} /> */}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  )
}
