import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGTXxJxCHNshhOQ70JdFQABh8v717VEkU",
  authDomain: "apploginbeyonce.firebaseapp.com",
  projectId: "apploginbeyonce",
  storageBucket: "apploginbeyonce.appspot.com",
  messagingSenderId: "98642680018",
  appId: "1:98642680018:web:e1032fadef48d2da38350b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);