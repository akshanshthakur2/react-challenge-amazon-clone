// Import the functions you need from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxAb-3q9SbHm78_Dz1724TnbsmbZDIas",
  authDomain: "clone-ba62a.firebaseapp.com",
  projectId: "clone-ba62a",
  storageBucket: "clone-ba62a.appspot.com",
  messagingSenderId: "21851696233",
  appId: "1:21851696233:web:bf86bf720e575d6b9546f8",
  measurementId: "G-M0GH8NJQK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
