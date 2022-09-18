import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from '../../../../components/auth/pages/LoginScreen'
import authSlice from '../../../../store/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // preloadedState: {

  // }
})

describe('Testing <LoginScreen />', () => {
  test('should to show component well', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
  })
})
