// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from '../helpers'
// Your web app's Firebase configuration

// console.log(process.env.NODE_ENV)

const env = getEnvironments()
console.log(env)

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
  apiKey: 'AIzaSyBe0QRV15YS7w6v8N4FfuCZPXDK0-lkCZo',
  authDomain: 'expreimento1.firebaseapp.com',
  databaseURL: 'https://expreimento1.firebaseio.com',
  projectId: 'expreimento1',
  storageBucket: 'expreimento1.appspot.com',
  messagingSenderId: '87217011344',
  appId: '1:87217011344:web:64be94dc2fec8d80e4b615',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
