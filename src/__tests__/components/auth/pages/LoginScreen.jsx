import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from '../../../../components/auth/pages/LoginScreen'
import { startGoogleSignIn } from '../../../../store/auth/thunks'
import authSlice from '../../../../store/auth/authSlice'
import { notAuthenticatedState } from '../../../fixtures/authFixtures'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
})

const mockStartGoogleSignIn = jest.fn()

jest.mock('../../../../store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}))

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

  test('should to call onGoogleSignIn startGoogleSignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>,
    )

    const gBtn = screen.getByLabelText('googleSignInBtn')
    fireEvent.click(gBtn)

    expect(gBtn).toBeTruthy()
    expect(mockStartGoogleSignIn).toHaveBeenCalled()
  })
})
