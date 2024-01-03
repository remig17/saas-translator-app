import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Firebase Web app's configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ocMj4Y4_8-prt7CJErizVpHG0IQRWL0",
  authDomain: "saas-translator-app-d8d29.firebaseapp.com",
  projectId: "saas-translator-app-d8d29",
  storageBucket: "saas-translator-app-d8d29.appspot.com",
  messagingSenderId: "435348230448",
  appId: "1:435348230448:web:90aa2e0eafd24786d1b8f5",
};

const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
