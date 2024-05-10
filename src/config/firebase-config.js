// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5rlYF5m9MGOz8Bi-AVAh_J8OyQwPDco",
  authDomain: "test-6f83c.firebaseapp.com",
  projectId: "test-6f83c",
  storageBucket: "test-6f83c.appspot.com",
  messagingSenderId: "532494675157",
  appId: "1:532494675157:web:7e56e1fb00ae32dfe4465c",
  measurementId: "G-99816K4LYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);