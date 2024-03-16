// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ66xyvaVTmVMTT_ndhiwzxRZ4d5bBmgs",
  authDomain: "sharkchat-a4248.firebaseapp.com",
  projectId: "sharkchat-a4248",
  storageBucket: "sharkchat-a4248.appspot.com",
  messagingSenderId: "1067353935478",
  appId: "1:1067353935478:web:095f525257571d3fc95957"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)