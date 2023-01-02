import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBuv8W7GDAygPMECEQ2KiL1slhgSL0dvPo",

  authDomain: "projecthangerstock.firebaseapp.com",

  projectId: "projecthangerstock",

  storageBucket: "projecthangerstock.appspot.com",

  messagingSenderId: "693893064334",

  appId: "1:693893064334:web:5b35be542adff600cf4bdf",

  measurementId: "G-V1LKSQ4BG3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
