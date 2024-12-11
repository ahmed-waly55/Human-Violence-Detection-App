import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDv0TdDcL-M5w8OaIOkgVRt13N5Otk55cU",
  authDomain: "login-auth-e7a45.firebaseapp.com",
  projectId: "login-auth-e7a45",
  storageBucket: "login-auth-e7a45.appspot.com",
  messagingSenderId: "724578903774",
  appId: "1:724578903774:web:c2bd4c97dcea149a83c44f",
  measurementId: "G-ER163EC71V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
