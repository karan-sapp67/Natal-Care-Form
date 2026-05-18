import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQrMgwOmagPLXeL1rz_2BL6PtX-hb9QO0",
  authDomain: "valencia-survey.firebaseapp.com",
  projectId: "valencia-survey",
  storageBucket: "valencia-survey.firebasestorage.app",
  messagingSenderId: "98227149184",
  appId: "1:98227149184:web:3c7d532c4044075ef84965"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
