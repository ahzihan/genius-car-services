// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiYATsZfMIdJdAftTIKgdk7mvbyUN6y5g",
    authDomain: "genious-car-services-4d849.firebaseapp.com",
    projectId: "genious-car-services-4d849",
    storageBucket: "genious-car-services-4d849.appspot.com",
    messagingSenderId: "384604928291",
    appId: "1:384604928291:web:70a28a2cf99195ebb8f496"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const auth = getAuth( app );
export default auth;