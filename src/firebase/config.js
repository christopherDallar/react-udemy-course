// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD-X9WnosSpzWr_HHI2IGPkBaCyCtS3cws',
	authDomain: 'react-courses-133db.firebaseapp.com',
	projectId: 'react-courses-133db',
	storageBucket: 'react-courses-133db.appspot.com',
	messagingSenderId: '111566426259',
	appId: '1:111566426259:web:4801abca92ada360f67d66',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);