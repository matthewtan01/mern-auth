// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ca65c.firebaseapp.com",
  projectId: "mern-auth-ca65c",
  storageBucket: "mern-auth-ca65c.appspot.com",
  messagingSenderId: "18599771741",
  appId: "1:18599771741:web:be949ef9d148ef6c93d7b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);