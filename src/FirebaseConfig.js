import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7dQyoXzzlHnnD9HWHhYLIsT5N7eJW8zo",
  authDomain: "pocketledger-cc05c.firebaseapp.com",
  projectId: "pocketledger-cc05c",
  storageBucket: "pocketledger-cc05c.appspot.com",
  messagingSenderId: "601529540250",
  appId: "1:601529540250:web:101458dcd208631ef7c923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()