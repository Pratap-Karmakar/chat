// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGAPAPc5IWzdPElLjkb02xwQ1JD-1kKx4",
    authDomain: "next-chat-6fafb.firebaseapp.com",
    projectId: "next-chat-6fafb",
    storageBucket: "next-chat-6fafb.appspot.com",
    messagingSenderId: "1032334304251",
    appId: "1:1032334304251:web:362821e25369767363a15e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)