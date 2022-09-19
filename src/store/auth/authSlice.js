import { createSlice } from '@reduxjs/toolkit'
import { authStatusEnum } from '../../helpers'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: authStatusEnum.checking, // authenticate, not authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = authStatusEnum.checking
      state.user = {}
      state.errorMessage = undefined
    },
    onLogin: (state, { payload }) => {
      state.status = authStatusEnum.authenticated
      state.user = payload
      state.errorMessage = undefined
    },
    onLogout: (state, { payload }) => {
      state.status = authStatusEnum.notAuthenticated
      state.user = {}
      state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
  },
})

export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
} = authSlice.actions
