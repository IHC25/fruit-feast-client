// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh4h9B-0pudtfhGGMIlTwKjNCJGiKMP-I",
  authDomain: "fruit-feast-77dda.firebaseapp.com",
  projectId: "fruit-feast-77dda",
  storageBucket: "fruit-feast-77dda.appspot.com",
  messagingSenderId: "148963132644",
  appId: "1:148963132644:web:0913276f32a21d846b98f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
