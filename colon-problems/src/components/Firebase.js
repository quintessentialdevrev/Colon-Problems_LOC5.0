// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

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
export { app, auth }