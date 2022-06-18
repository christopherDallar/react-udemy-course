import { checkingCredentials } from './';
import { signInWithGoogle } from './../../firebase/providers';

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
	};
};
