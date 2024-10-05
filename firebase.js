import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDs8QcGMDM_4k1SkW8BByBMfwxP-NTGlz4",
  authDomain: "e-commerce-88177.firebaseapp.com",
  projectId: "e-commerce-88177",
  storageBucket: "e-commerce-88177.appspot.com",
  messagingSenderId: "725680044739",
  appId: "1:725680044739:web:619be26bba5cd343624076",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore instance
