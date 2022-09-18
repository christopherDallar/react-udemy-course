import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from '../../../../components/auth/pages/LoginScreen'
import { startGoogleSignIn } from '../../../../store/auth'
import authSlice from '../../../../store/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // preloadedState: {

  // }
})

jest.mock('../../../../store/auth')

// jest.mock('react-redux', () => {
// useDispatch: () => {
//   return jest.fn()
// }
// })

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

  test('should to call onGoogleSignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>,
    )

    const gBtn = screen.getAllByAltText('googleSignInBtn')
    // screen.debug()
    fireEvent.click(gBtn)

    // expect(startGoogleSignIn()).toBeTruthy()
  })
})
