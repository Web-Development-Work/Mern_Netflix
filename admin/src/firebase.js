import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-151df.firebaseapp.com",
  projectId: "netflix-151df",
  storageBucket: "netflix-151df.appspot.com",
  messagingSenderId: "316700975498",
  appId: "1:316700975498:web:15063159b205c1a349a873",
  measurementId: "G-2ZGE63ES9F",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)
export default storage;
