import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk-4TCKO8Hx4V-fOmPUxpbRoilZrmIHiI",
  authDomain: "natalcare-survey.firebaseapp.com",
  projectId: "natalcare-survey",
  storageBucket: "natalcare-survey.firebasestorage.app",
  messagingSenderId: "302180681697",
  appId: "1:302180681697:web:bc2da7e585d644956fb4a0"
};

const appName = firebaseConfig.projectId;
const app = getApps().find((firebaseApp) => firebaseApp.name === appName) || initializeApp(firebaseConfig, appName);
export const auth = getAuth(app);
export const db = getFirestore(app);
