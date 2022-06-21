import { createSlice } from '@reduxjs/toolkit';

export const AuthStatusEnum = {
	checking: 'checking',
	notAuthenticated: 'not-authenticated',
	authenticated: 'authenticated',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: AuthStatusEnum.notAuthenticated, // 'not-authenticated', 'authenticated'
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.status = AuthStatusEnum.authenticated; // 'not-authenticated', 'authenticated'
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.errorMessage = null;
		},
		logout: (state, { payload }) => {
			state.status = AuthStatusEnum.notAuthenticated; // 'not-authenticated', 'authenticated'
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload.errorMessage;
		},
		checkingCredentials: (state) => {
			state.status = AuthStatusEnum.checking;
		},
	},
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
