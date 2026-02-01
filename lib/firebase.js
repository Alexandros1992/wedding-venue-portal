// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJVsmbbA6aOfQE4Jf6FLiJN-Y7NG6wz2w",
  authDomain: "wedding-venue-portal.firebaseapp.com",
  projectId: "wedding-venue-portal",
  storageBucket: "wedding-venue-portal.firebasestorage.app",
  messagingSenderId: "594628827868",
  appId: "1:594628827868:web:6365b71658f2d9a940f219",
  measurementId: "G-FD9M7C77SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);