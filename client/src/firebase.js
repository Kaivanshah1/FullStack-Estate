// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-16fa6.firebaseapp.com",
  projectId: "mern-estate-16fa6",
  storageBucket: "mern-estate-16fa6.appspot.com",
  messagingSenderId: "772727763849",
  appId: "1:772727763849:web:1e4c48a3997ce3422a6758",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
