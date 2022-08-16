import { createSlice } from '@reduxjs/toolkit';
import { authStatus } from '../../helpers';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // authenticate, not authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = authStatus.authenticated;
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin } = authSlice.actions;
