import { logoutFirebase, signInWithGoogle } from '../../../firebase/providers'
import { checkingCredentials, login, logout } from '../../../store/auth'
import { checkingAuth, startGoogleSignIn } from '../../../store/auth/thunks'
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../firebase/providers')

describe('Testing auth thunks', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('should to invoke checkingCredentials', async () => {
    await checkingAuth()(dispatch)
    // const value = checkingCredentials()

    // console.log(value)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

  test('should startGoogleSignIn to invoke checkingCredentials and login - Well Done', async () => {
    const loginData = { ok: true, user: demoUser }

    await signInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('should startGoogleSignIn to invoke checkingCredentials and logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Some wrong with Google' }

    await signInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
  })
})
