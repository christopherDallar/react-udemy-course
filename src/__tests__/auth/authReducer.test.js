import { renderHook } from '@testing-library/react'
import { useReducer } from 'react'
import { act } from 'react-dom/test-utils'
import { authReducer } from '../../auth/authReducer'

describe('Testing AuthReducer', () => {
  test('should first default state', () => {
    // const { result } = renderHook(() => useReducer(authReducer, {}))

    const state = authReducer({ logged: false }, {})
    // const [state] = result.current

    expect(state).toEqual({ logged: false })
  })

  test('should to call login action and set user', () => {
    // const { result } = renderHook(() => useReducer(authReducer, {}))

    // const [, dispatch] = result.current

    const action = {
      type: '[auth] Login',
      payload: {
        id: 1,
        name: 'Christopher',
      },
    }
    // act(() => {
    //   dispatch(action)
    // })

    const state = authReducer({ logged: false }, action)

    const user = {
      id: 1,
      name: 'Christopher',
      logged: true,
    }

    expect(state).toEqual(user)
  })

  test('should to call logged action and return logged false', () => {
    // const { result } = renderHook(() => useReducer(authReducer, {}))

    // const [, dispatch] = result.current

    const action = {
      type: '[auth] Logout',
    }
    // act(() => {
    //   dispatch(action)
    // })
    const user = {
      id: 1,
      name: 'Christopher',
      logged: true,
    }
    const state = authReducer(user, action)

    expect(state).toEqual({
      logged: false,
    })
  })
})
