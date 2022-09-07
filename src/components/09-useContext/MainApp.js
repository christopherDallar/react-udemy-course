import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserContext.Provider>
  )
}
