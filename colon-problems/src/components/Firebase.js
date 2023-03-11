// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ngdSWB3JAMGHxeK5MNIwVpWbiyjirwg",
  authDomain: "colon-problems.firebaseapp.com",
  projectId: "colon-problems",
  storageBucket: "colon-problems.appspot.com",
  messagingSenderId: "223558843629",
  appId: "1:223558843629:web:60e8f73fad0d473c7b60e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)
export { app, auth, storage, db }