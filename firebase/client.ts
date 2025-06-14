
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyDZnzk_0fsZmtybLBs3sSBdVuWV4HKGjCs",
  authDomain: "vocaprep-ai.firebaseapp.com",
  projectId: "vocaprep-ai",
  storageBucket: "vocaprep-ai.firebasestorage.app",
  messagingSenderId: "800056704570",
  appId: "1:800056704570:web:bc4acc95734f272c687f03",
  measurementId: "G-0SZL9QN737"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)