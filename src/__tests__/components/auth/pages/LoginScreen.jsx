import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from '../../../../components/auth/pages/LoginScreen'
import { startGoogleSignIn } from '../../../../store/auth'
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

jest.mock('../../../../store/auth')

// const useDispatch = jest.fn()

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch,
// }))

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
    // screen.debug()
    fireEvent.click(gBtn)

    // screen.debug()
    expect(gBtn).toBeTruthy()
    expect(store.dispatch).toBeCalledWith()
  })
})
