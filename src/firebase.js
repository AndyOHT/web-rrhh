// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn13dDnu4HrenZllc28zPcg17X8OnwJWY",
  authDomain: "web-rrhh.firebaseapp.com",
  projectId: "web-rrhh",
  storageBucket: "web-rrhh.firebasestorage.app",
  messagingSenderId: "906391272938",
  appId: "1:906391272938:web:02a9242cb959d5b6a08693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
