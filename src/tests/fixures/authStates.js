import { authStatusEnum } from '../../helpers'

export const initialState = {
  status: authStatusEnum.checking, // authenticated, not authenticated
  user: {},
  errorMessage: undefined,
}

export const authenticatedState = {
  status: authStatusEnum.authenticated, // authenticated, not authenticated
  user: {
    uid: 'abc',
    name: 'Christopher',
  },
  errorMessage: undefined,
}

export const notAuthenticatedState = {
  status: authStatusEnum.notAuthenticated, // authenticated, not authenticated
  user: {
    uid: 'abc',
    name: 'Christopher',
  },
  errorMessage: undefined,
}
