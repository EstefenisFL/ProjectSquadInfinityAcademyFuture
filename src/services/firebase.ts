import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9QMj7-XqyOMO3TOPpnDDL5rEzTjUtao",
  authDomain: "my-project-1546693843841.firebaseapp.com",
  databaseURL: "https://my-project-1546693843841-default-rtdb.firebaseio.com",
  projectId: "my-project-1546693843841",
  storageBucket: "my-project-1546693843841.appspot.com",
  messagingSenderId: "992955452173",
  appId: "1:992955452173:web:4aa49d88c3892f6ab53e44",
  measurementId: "G-7E16GDFWNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
