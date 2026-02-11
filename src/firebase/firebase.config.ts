// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyiXIJ4z6tDROsjsUU54MgcunhnC_V5Wc",
  authDomain: "game-club-rh.firebaseapp.com",
  projectId: "game-club-rh",
  storageBucket: "game-club-rh.firebasestorage.app",
  messagingSenderId: "659360577987",
  appId: "1:659360577987:web:b3b522390aa3f7ede0e576",
  measurementId: "G-Y60FM67XJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in client side)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;