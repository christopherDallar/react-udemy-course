import { renderHook } from '@testing-library/react'
import { authSlice } from '../../../store/auth/authSlice'

import { initialState } from '../../fixtures/authFixtures'

describe('Testing authSlice', () => {
  test('should to return initialState and must to be called as auth', () => {
    expect(authSlice.name).toBe('auth')
    // expect(authSlice.getInitialState()).toEqual(initialState)

    const state = authSlice.reducer(initialState, {})
    expect(state).toEqual(initialState)
  })
})
