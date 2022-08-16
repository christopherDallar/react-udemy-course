import { createSlice } from '@reduxjs/toolkit';

const status = {
  checking: 'checking',
  authenticate: 'authenticate',
  notAuthenticated: 'not authenticated',
};

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
      state.status = status.authenticate;
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin } = authSlice.actions;
