// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0X-LhYXGBc57lVpy2N2g2Yu0RHA4Z6gU",
  authDomain: "firecanada-d1e62.firebaseapp.com",
  projectId: "firecanada-d1e62",
  storageBucket: "firecanada-d1e62.appspot.com",
  messagingSenderId: "337420754646",
  appId: "1:337420754646:web:a17db808b9717969f43377"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
