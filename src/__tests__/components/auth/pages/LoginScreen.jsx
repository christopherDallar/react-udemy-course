import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from '../../../../components/auth/pages/LoginScreen'
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
const mockStartLoginWithEmailAndPassword = jest.fn()

jest.mock('../../../../store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailAndPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailAndPassword({ email, password })
  },
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}))

describe('Testing <LoginScreen />', () => {
  beforeEach(() => jest.clearAllMocks())

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

  test('should to submit form and call startLoginWithEmailAndPassword', () => {
    const email = 'christopher@gmail.com'
    const password = '1234567'

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>,
    )

    const emailField = screen.getByRole('textbox', { name: 'Email' })
    fireEvent.change(emailField, { target: { name: 'email', value: email } })

    const passwordField = screen.getByTestId('password')
    fireEvent.change(passwordField, {
      target: { name: 'password', value: password },
    })

    const form = screen.getByLabelText('form-login')
    fireEvent.submit(form)

    // screen.debug()
    // expect(form).toBeTruthy()
    expect(mockStartLoginWithEmailAndPassword).toHaveBeenCalledWith({
      email,
      password,
    })
  })
})
