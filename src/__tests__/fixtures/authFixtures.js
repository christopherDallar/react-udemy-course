import { AuthStatusEnum } from '../../store/auth/authSlice'

export const initialState = {
  status: AuthStatusEnum.checking, // 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authenticatedState = {
  status: AuthStatusEnum.authenticated, // 'not-authenticated', 'authenticated'
  uid: '123abc',
  email: 'demo@gmail.com',
  displayName: 'Demo user',
  photoURL: 'https://demo.jpg',
  errorMessage: null,
}

export const notAuthenticatedState = {
  status: AuthStatusEnum.notAuthenticated, // 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: undefined,
}

export const demoUser = {
  uid: '123abc',
  email: 'demo@gmail.com',
  displayName: 'Demo user',
  photoURL: 'https://demo.jpg',
}
