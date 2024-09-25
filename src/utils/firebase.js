import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnl-M9C0m-U4K2pAStA5fMD8my_hlANUY",
  authDomain: "syed-store.firebaseapp.com",
  projectId: "syed-store",
  storageBucket: "syed-store.appspot.com",
  messagingSenderId: "694081876627",
  appId: "1:694081876627:web:e9221e13b3653d7fced366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth}