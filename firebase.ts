// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCUA53fd6CCCFsE-VVtT3jzLHBRQy9wWSU',
  authDomain: 'neilflix-4ffd5.firebaseapp.com',
  projectId: 'neilflix-4ffd5',
  storageBucket: 'neilflix-4ffd5.appspot.com',
  messagingSenderId: '773001663171',
  appId: '1:773001663171:web:287b4c60be170993ec4876',
  measurementId: 'G-EDH5VFKRHP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
