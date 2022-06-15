import { createSlice } from '@reduxjs/toolkit';

const statusEnum = {
	checking: 'checking',
	notAuthenticated: 'not-authenticated',
	authenticated: 'authenticated',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: statusEnum.notAuthenticated, // 'not-authenticated', 'authenticated'
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, action) => {},
		logout: (state, payload) => {},
		checkingCredentials: (state) => {
			state.status = statusEnum.checking;
		},
	},
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
