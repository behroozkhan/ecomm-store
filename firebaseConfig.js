 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//  Auth Import
 import {
    getAuth,
    createUserWithEmailAndPassword
  } 
  from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
//  firestore Import
  import {
      getFirestore,doc,setDoc
  } 
  from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 
 
 
  const firebaseConfig = {
   apiKey: "AIzaSyDKckeGedMbGSj7NpxFk3siDAXkzd-yGU0",
   authDomain: "friend-hackthon.firebaseapp.com",
   projectId: "friend-hackthon",
   storageBucket: "friend-hackthon.appspot.com",
   messagingSenderId: "229955689782",
   appId: "1:229955689782:web:29c41164559f544a626797",
   measurementId: "G-ZST5B4N4VQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);

 export {auth,createUserWithEmailAndPassword,db,doc,setDoc}