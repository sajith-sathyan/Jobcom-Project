




import React from "react";
import firebase from "firebase/app";
import "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPnbuwvTmndA6-6NMN8q4Ok4iZK_Wo-hY",
  authDomain: "jobcom-d48ad.firebaseapp.com",
  projectId: "jobcom-d48ad",
  storageBucket: "jobcom-d48ad.appspot.com",
  messagingSenderId: "266757858367",
  appId: "1:266757858367:web:78028daf4bd3c5475f848a",
  measurementId: "G-L8PGYGGVFX",
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase app instance
export default firebase;

// Rest of your code
// ...

