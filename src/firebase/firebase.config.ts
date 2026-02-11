// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmeoG4xnQE7C68PWOG00eXpALQCqQei-8",
    authDomain: "game-club-3881b.firebaseapp.com",
    projectId: "game-club-3881b",
    storageBucket: "game-club-3881b.firebasestorage.app",
    messagingSenderId: "248385453416",
    appId: "1:248385453416:web:2babb7489582607497aadd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)