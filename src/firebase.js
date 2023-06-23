// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD65yQFQaEzZk5ySGg37X9ATf0BH8f_X_c",
  authDomain: "kris-6f833.firebaseapp.com",
  projectId: "kris-6f833",
  storageBucket: "kris-6f833.appspot.com",
  messagingSenderId: "784051852926",
  appId: "1:784051852926:web:8e86681f65e228fc692a2f",
  measurementId: "G-99YS8KD1P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);

