// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore if you need it


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZGDVnkpYFK3vGbzXSknBhP3AKP-rDqnU",
  authDomain: "daily-calorie-tracker-e6745.firebaseapp.com",
  projectId: "daily-calorie-tracker-e6745",
  storageBucket: "daily-calorie-tracker-e6745.appspot.com",
  messagingSenderId: "631434363976",
  appId: "1:631434363976:web:174acb6abe9cdc1dec047d",
  measurementId: "G-J5T0RWWZJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore if you need it
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db }; 
