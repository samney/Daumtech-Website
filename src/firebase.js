import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Validate environment variables
const requiredEnvVars = {
  VITE_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check for missing environment variables
// const missingVars = Object.entries(requiredEnvVars)
//   .filter(([_, value]) => !value)
//   .map(([key]) => key);

// if (missingVars.length > 0) {
//   console.error(
//     "Missing required Firebase environment variables:",
//     missingVars
//   );
//   throw new Error(
//     "Missing required Firebase environment variables. Please check your .env file."
//   );
// }

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app;
let db;
let storage;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);

  // console.log("Firebase initialized successfully with config:", {
  //   projectId: firebaseConfig.projectId,
  //   storageBucket: firebaseConfig.storageBucket,
  //   authDomain: firebaseConfig.authDomain,
  // });
} catch (error) {
  throw new Error(
    "Failed to initialize Firebase. Please check your configuration."
  );
}

export { db, storage, collection, addDoc, serverTimestamp };
