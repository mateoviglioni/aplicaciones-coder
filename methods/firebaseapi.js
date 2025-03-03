// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHxP0kSJTaVYCs5Ybk8sSmNrLR2Nk54z8",
  authDomain: "esteban-proyecto-72a40.firebaseapp.com",
  projectId: "esteban-proyecto-72a40",
  storageBucket: "esteban-proyecto-72a40.firebasestorage.app",
  messagingSenderId: "643014195141",
  appId: "1:643014195141:web:1ec47508c39a1889a5fdac",
  measurementId: "G-35TB5EE9ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);