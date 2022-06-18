import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			// User info
			displayName,
			email,
			photoURL,
			uid,
		};

		// console.log({ user });

		// TO get access token
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		// console.log({ credentials });
	} catch (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;

		// // The email of the user's account used.
		// const email = error.customData.email;

		// The AuthCredential type that was used.
		// const credential = GoogleAuthProvider.credentialFromError(error);

		return {
			ok: false,
			errorMessage,
		};
	}
};
