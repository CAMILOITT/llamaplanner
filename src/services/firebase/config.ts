import { initializeApp } from "firebase/app"
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_YOUR_SENDER_ID,
} from "./env"

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  projectId: FIREBASE_PROJECT_ID,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: FIREBASE_YOUR_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export default app
