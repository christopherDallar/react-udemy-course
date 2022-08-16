import { createSlice } from '@reduxjs/toolkit';
import { authStatus } from '../../helpers';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: authStatus.checking, // authenticate, not authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = authStatus.checking;
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = authStatus.authenticated;
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = authStatus.notAuthenticated;
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
} = authSlice.actions;
