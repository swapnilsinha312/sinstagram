// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNn8ZwgoQeHEODRCNECdltxfnD_Nr_u30",
  authDomain: "sinstagram-126.firebaseapp.com",
  projectId: "sinstagram-126",
  storageBucket: "sinstagram-126.appspot.com",
  messagingSenderId: "910130483327",
  appId: "1:910130483327:web:4dc1cd77e8f66c7e26ef4a"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app); 
const db = getFirestore(app);
const usersRef = collection(db, 'Users');

export { auth,db,usersRef };