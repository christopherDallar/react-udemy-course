import { authSlice, onChecking } from '../../../store/auth/authSlice'
import { initialState } from '../../fixures/authStates'

describe('Testing authSlice.js', () => {
  test('should have initial state', () => {
    expect(authSlice.getInitialState()).toEqual(initialState)
  })

  test('should change state status to checking', () => {
    let state = authSlice.getInitialState()
    state = authSlice.reducer(state, onChecking())
    expect(authSlice.getInitialState()).toEqual(initialState)
  })
})
