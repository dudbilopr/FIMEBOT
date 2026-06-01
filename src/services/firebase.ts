import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1zA4rgNYvKLfZg-Htoc7l1jv6UIMcAlU",
  authDomain: "tecmd-datalab.firebaseapp.com",
  projectId: "tecmd-datalab",
  storageBucket: "tecmd-datalab.firebasestorage.app",
  messagingSenderId: "747545168390",
  appId: "1:747545168390:web:7410d9acdeb83b3ac45187",
  measurementId: "G-CKVE1N281E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
