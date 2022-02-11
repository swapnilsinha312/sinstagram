// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app); 
const db = getFirestore(app);
const usersRef = collection(db, 'Users');

export { auth,db,usersRef };