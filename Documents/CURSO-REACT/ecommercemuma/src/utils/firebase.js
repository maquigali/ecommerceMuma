// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjmFp8IsfmL4LGkihrIokTfvvFMpLVDM",
  authDomain: "rinconmuma-ecommerce.firebaseapp.com",
  projectId: "rinconmuma-ecommerce",
  storageBucket: "rinconmuma-ecommerce.appspot.com",
  messagingSenderId: "706772169371",
  appId: "1:706772169371:web:ba880e7b6c60d8ca038c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app);