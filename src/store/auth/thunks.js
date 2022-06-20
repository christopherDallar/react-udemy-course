import { checkingCredentials, logout, login } from './';
import {
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
		console.log(result);

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

		const resp = await registerUserWithEmailAndPassword({
			email,
			password,
			displayName,
		});
		console.log(resp);
	};
};
