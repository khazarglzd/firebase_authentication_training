// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIHtBdHPhpQsUTAC4lWIIXUB26H6oj4b0",
    authDomain: "fir-training-3be38.firebaseapp.com",
    projectId: "fir-training-3be38",
    storageBucket: "fir-training-3be38.appspot.com",
    messagingSenderId: "449415931224",
    appId: "1:449415931224:web:5aa4f6f2b0bf624159f12d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);