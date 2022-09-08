import { types } from '../../types/types'

describe('Testing types', () => {
  test('should to return this types', () => {
    expect(types).toEqual({
      login: '[auth] Login',
      logout: '[auth] Logout',
    })
  })
})
