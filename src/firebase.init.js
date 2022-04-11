// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfIK82RsVTOodPkSGgDROlNtVHFmCqlM",
  authDomain: "rotuer-firebase-integration.firebaseapp.com",
  projectId: "rotuer-firebase-integration",
  storageBucket: "rotuer-firebase-integration.appspot.com",
  messagingSenderId: "122957044100",
  appId: "1:122957044100:web:4585ed652145b4ce9da5d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;