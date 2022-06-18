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
		login: (state, { payload }) => {
			console.log(payload);
			state.status = statusEnum.authenticated; // 'not-authenticated', 'authenticated'
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.errorMessage = null;
		},
		logout: (state, { payload }) => {
			state.status = statusEnum.notAuthenticated; // 'not-authenticated', 'authenticated'
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload.errorMessage;
		},
		checkingCredentials: (state) => {
			state.status = statusEnum.checking;
		},
	},
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
