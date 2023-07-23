

// const usernameReg = document.querySelectorAll('#username-reg')[0];
// const emailReg = document.querySelectorAll('#email-reg')[0];
// const passwordReg = document.querySelectorAll('#password-reg')[0];


// // inner-login-reg
// const loginBtn = document.querySelectorAll('#login')[0];
// const inputFeildsReg = document.querySelectorAll('#input-feilds-reg')[0];

// const loginToggle = document.querySelectorAll('#inner-login-toggle')[0];

// const registerToggle = document.querySelectorAll('#inner-register-toggle')[0];
// const registerBtn = document.querySelectorAll('#register')[0];

// loginBtn.addEventListener('click',()=>{
//     registerToggle.style.display = 'none';
//     loginToggle.style.display = 'block';
//     loginBtn.style.color = 'pink'


// })

// registerBtn.addEventListener('click',()=>{
//     loginToggle.style.display = 'none';
//     registerToggle.style.display = 'block';
//     registerBtn.style.color = 'purple'

// })

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAOt0YRqCBI5MvtYzZaJiILrjlsA9vWn6w",
  authDomain: "signup-login-74d21.firebaseapp.com",
  projectId: "signup-login-74d21",
  storageBucket: "signup-login-74d21.appspot.com",
  messagingSenderId: "167744399342",
  appId: "1:167744399342:web:50d079ab744413004a90ff",
  measurementId: "G-PQXQJB56F5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
 
 
  onAuthStateChanged(auth, (user) => {
    if (user && location.pathname !== "../user profile/profile.html") {
      const uid = user.uid;
      location.href = "../user profile/profile.html";
      // location.href = '../login-register/login.js'
      console.log("uid==>",uid);
      console.log("location==>",location.href);
      // ...
    } else {
        if(location.pathname !== "../index.html" && location.pathname !== "../user profile/profile.html"){
          location.href = "../index.html"
        }
      console.log("user sign out");
      // User is signed out
      // ...
    }
  });

  let loginBtn =  document.querySelectorAll('#login-button')[0];
  let logIn = ()=>{
      let email = document.querySelectorAll('#email-log')[0].value;
      let password = document.querySelectorAll('#password-log')[0].value;
      signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          console.log("userCredential",userCredential)
          const user = userCredential.user;
          console.log("succesfull Login==>",user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error==>",error);
        });
      

}
loginBtn.addEventListener('click',logIn);