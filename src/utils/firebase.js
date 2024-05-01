// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ4TdOxUsvOk_IDDoAdCf16GPBFARiDv4",
  authDomain: "netflix-gpt-56b61.firebaseapp.com",
  projectId: "netflix-gpt-56b61",
  storageBucket: "netflix-gpt-56b61.appspot.com",
  messagingSenderId: "781168775057",
  appId: "1:781168775057:web:9b42b7d64bc55464291430",
  measurementId: "G-38NFC685PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();