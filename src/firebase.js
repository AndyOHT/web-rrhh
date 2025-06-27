// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← 🔥 Agregado

const firebaseConfig = {
  apiKey: "AIzaSyDn13dDnu4HrenZllc28zPcg17X8OnwJWY",
  authDomain: "web-rrhh.firebaseapp.com",
  projectId: "web-rrhh",
  storageBucket: "web-rrhh.firebasestorage.app",
  messagingSenderId: "906391272938",
  appId: "1:906391272938:web:02a9242cb959d5b6a08693"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta auth y db
export const auth = getAuth(app);
export const db = getFirestore(app); // ← 🔥 Esta línea permite usar Firestore en toda tu app
