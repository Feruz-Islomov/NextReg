import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-F9Zzlm147XOA4OXgT9wHGGvnXCqSoc",
  authDomain: "thereghotel.firebaseapp.com",
  projectId: "thereghotel",
  storageBucket: "thereghotel.appspot.com",
  messagingSenderId: "1041329500265",
  appId: "1:1041329500265:web:14d5eb7264e585ecf9f2f8",
  // apiKey: process.env.NEXT_PUBLIC_APIKEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECTID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  // appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
