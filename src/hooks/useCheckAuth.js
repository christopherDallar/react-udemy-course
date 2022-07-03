import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';

export const useCheckAuth = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) {
				dispatch(logout());
				console.log('onAuthStateChanged - Logout');
				return;
			}

			const { uid, email, displayName, photoURL } = user;

			dispatch(login({ uid, email, displayName, photoURL }));
			dispatch(startLoadingNotes());
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return status;
};
