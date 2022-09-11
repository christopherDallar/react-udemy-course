import {
  authSlice,
  AuthStatusEnum,
  checkingCredentials,
  login,
  logout,
} from '../../../store/auth/authSlice'
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from '../../fixtures/authFixtures'

describe('Testing authSlice', () => {
  test('should to return initialState and must to be called as auth', () => {
    expect(authSlice.name).toBe('auth')
    // expect(authSlice.getInitialState()).toEqual(initialState)

    const state = authSlice.reducer(initialState, {})
    expect(state).toEqual(initialState)
  })

  test('should to return authenticated state', () => {
    const state = authSlice.reducer(initialState, login(demoUser))
    expect(state).toEqual(authenticatedState)
  })

  test('should to return not authenticated state', () => {
    const state = authSlice.reducer(authenticatedState, logout())
    expect(state).toEqual(notAuthenticatedState)
  })

  test('should to return not authenticated state and show error msg', () => {
    const errorMessage = 'Wrong credentials'
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage }),
    )

    notAuthenticatedState.errorMessage = errorMessage

    expect(state).toEqual(notAuthenticatedState)
  })

  test('should checkingCredentials to state.status to checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials())

    expect(state.status).toBe(AuthStatusEnum.checking)
  })
})
