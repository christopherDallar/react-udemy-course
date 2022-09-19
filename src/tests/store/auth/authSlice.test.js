import {
  authSlice,
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from '../../../store/auth/authSlice'
import { authenticatedState, initialState } from '../../fixures/authStates'
import { testUserCredentials } from '../../fixures/testUser'

describe('Testing authSlice.js', () => {
  test('should have initial state', () => {
    expect(authSlice.getInitialState()).toEqual(initialState)
  })

  test('should change state status to checking', () => {
    const state = authSlice.reducer(initialState, onChecking())
    expect(authSlice.getInitialState()).toEqual(initialState)
  })

  test('should to login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials))

    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    })
  })

  test('should to logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout())

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    })
  })

  test('should to logout with errorMessage', () => {
    const errorMessage = 'Credentials invalid'
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage,
    })
  })

  test('should clear error message', () => {
    const errorMessage = 'Credentials invalid'
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))

    const newState = authSlice.reducer(state, clearErrorMessage())

    expect(newState.errorMessage).toBe(undefined)
  })
})
