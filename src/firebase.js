import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1JXwFKwc6ElUFDlGezHoFnTuPpV-Ew_M",
  authDomain: "project-story-60de5.firebaseapp.com",
  projectId: "project-story-60de5",
  storageBucket: "project-story-60de5.appspot.com",
  messagingSenderId: "621568335310",
  appId: "1:621568335310:web:d204f643243a24fbd3df9f",
  measurementId: "G-T7Q66JY2ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;