import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKWlkcPvzulzepTkNVxgZCCEh6_G9-J1k",
  authDomain: "slack-clone-53bbb.firebaseapp.com",
  projectId: "slack-clone-53bbb",
  storageBucket: "slack-clone-53bbb.appspot.com",
  messagingSenderId: "177186253261",
  appId: "1:177186253261:web:ee4f3e0e9bfdad6c6afc84",
  measurementId: "G-WT7CWJ9B12",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
