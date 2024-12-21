// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgm39f5H5iGHlvKmht_4y4vN_Al0Aqh1Y",
  authDomain: "mern-book-store-42d47.firebaseapp.com",
  projectId: "mern-book-store-42d47",
  storageBucket: "mern-book-store-42d47.appspot.com",
  messagingSenderId: "753512962188",
  appId: "1:753512962188:web:4f93bf5a3e079d82c503a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;