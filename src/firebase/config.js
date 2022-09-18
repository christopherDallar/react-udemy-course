// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from '../helpers'
// Your web app's Firebase configuration

// console.log(process.env.NODE_ENV)

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID,
  REACT_APP_DATABASEURL,
} = getEnvironments()

// Dev/Orid
// const firebaseConfig = {
// 	apiKey: 'AIzaSyD-X9WnosSpzWr_HHI2IGPkBaCyCtS3cws',
// 	authDomain: 'react-courses-133db.firebaseapp.com',
// 	projectId: 'react-courses-133db',
// 	storageBucket: 'react-courses-133db.appspot.com',
// 	messagingSenderId: '111566426259',
// 	appId: '1:111566426259:web:4801abca92ada360f67d66',
// };

// Testing
const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  databaseURL: REACT_APP_DATABASEURL,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
}

// console.log(firebaseConfig)
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
