import {
  signInWithGoogle,
  registerUserWithEmailAndPassword,
  loginWithEmailAndPassword,
  logoutFirebase,
} from '../../../firebase/providers'
import { checkingCredentials, login, logout } from '../../../store/auth'
import {
  checkingAuth,
  startCreatingUserWithEmailAndPassword,
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
  startLogout,
} from '../../../store/auth/thunks'
import { clearNotesLogout } from '../../../store/journal/journalSlice'
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../firebase/providers')

// jest.mock('../../../store/journal/journalSlice')

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

  test('should startCreatingUserWithEmailAndPassword call to checkingCredentials and login - Well Done', async () => {
    const loginData = { ok: true, ...demoUser }
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName,
    }

    await registerUserWithEmailAndPassword.mockResolvedValue(loginData)
    await startCreatingUserWithEmailAndPassword(formData)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(demoUser))
  })

  test('should startCreatingUserWithEmailAndPassword call to checkingCredentials and logout - Bad done', async () => {
    const errorMessage = 'Error message'
    const loginData = { ok: false, errorMessage }
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName,
    }

    await registerUserWithEmailAndPassword.mockResolvedValue(loginData)
    await startCreatingUserWithEmailAndPassword(formData)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }))
  })

  test('should startLoginWithEmailAndPassword call to checkingCredentials and login - Well Done', async () => {
    const loginData = { ok: true, ...demoUser }
    const formData = {
      email: demoUser.email,
      password: '123456',
    }

    await loginWithEmailAndPassword.mockResolvedValue(loginData)
    await startLoginWithEmailAndPassword(formData)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(demoUser))
  })

  test('should startLoginWithEmailAndPassword call to checkingCredentials and logout - Bad done', async () => {
    const errorMessage = 'Error message'
    const loginData = { ok: false, errorMessage }
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName,
    }

    await loginWithEmailAndPassword.mockResolvedValue(loginData)
    await startLoginWithEmailAndPassword(formData)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }))
  })

  test('should startLogout to call logoutFirebase, clearNotes and logout', async () => {
    await startLogout()(dispatch)

    logoutFirebase.mockResolvedValue({ ok: true })

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(logoutFirebase).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())
  })
})
