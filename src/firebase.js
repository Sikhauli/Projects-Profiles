// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssCbCWE1wKFTg-QuRdr-eeYrDqi8fhDg",
  authDomain: "profile-app-57d0c.firebaseapp.com",
  projectId: "profile-app-57d0c",
  storageBucket: "profile-app-57d0c.appspot.com",
  messagingSenderId: "366778419427",
  appId: "1:366778419427:web:066ed68df2900bf4d7ddd6",
  measurementId: "G-RJ2E8P9PFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);