import { checkingAuth } from '../../../store/auth/thunks'

describe('Testing auth thunks', () => {
  test('should to invoke checkingCredentials', () => {
    checkingAuth()
  })
})
