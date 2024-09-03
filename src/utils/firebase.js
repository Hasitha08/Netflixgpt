// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKeWYK_vf8edDVpByV6BpaLIuJjzrpXtw",
  authDomain: "netflixgpt-project-c4d65.firebaseapp.com",
  projectId: "netflixgpt-project-c4d65",
  storageBucket: "netflixgpt-project-c4d65.appspot.com",
  messagingSenderId: "441207133691",
  appId: "1:441207133691:web:9bfa52b6ecfbb82507e75e",
  measurementId: "G-3KWM1BX470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();