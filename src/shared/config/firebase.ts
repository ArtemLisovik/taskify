import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjRpzFb3_AK3pYpMi79io1056KzttkDwE",
  authDomain: "taskify-1b150.firebaseapp.com", 
  projectId: "taskify-1b150",
  storageBucket: "taskify-1b150.appspot.com",
  messagingSenderId: "267466020768",
  appId: "1:267466020768:web:af4015d03d8f992fe9b6c5"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const database = getFirestore(app)
// export const storage = getStorage(app)