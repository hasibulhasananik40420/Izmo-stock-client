// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDoX9KXOQlcbbi1hSnlFuLX3nayVuxZXU",
  authDomain: "assginment-11.firebaseapp.com",
  projectId: "assginment-11",
  storageBucket: "assginment-11.appspot.com",
  messagingSenderId: "1084725152325",
  appId: "1:1084725152325:web:8754f3a08ca30d7922312c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth