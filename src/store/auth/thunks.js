import { checkingCredentials, logout, login } from './';
import {
	loginWithEmailAndPassword,
	logoutFirebase,
	registerUserWithEmailAndPassword,
	signInWithGoogle,
} from './../../firebase/providers';

export const checkingAuth = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await signInWithGoogle();
		console.log('startGoogleSignIn', result);

		if (!result.ok) {
			return dispatch(logout(result.errorMessage));
		}

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailAndPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailAndPassword({
				email,
				password,
				displayName,
			});

		if (!ok) {
			return dispatch(logout({ errorMessage }));
		}

		dispatch(login({ uid, displayName, email, photoURL }));
	};
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const { ok, errorMessage, uid, displayName, photoURL } =
			await loginWithEmailAndPassword({
				email,
				password,
			});

		console.log('startLoginWithEmailAndPassword', {
			ok,
			errorMessage,
			uid,
			displayName,
			photoURL,
		});

		if (!ok) {
			return dispatch(logout({ errorMessage }));
		}

		dispatch(login({ uid, displayName, photoURL, email }));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await logoutFirebase();
		console.log('startLogout all providers', result);

		dispatch(logout());
	};
};
