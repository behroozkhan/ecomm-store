// const radios = document.querySelectorAll('input[name="position"]');
// const para = document.getElementById("para");
// const title = document.getElementById("title");
// const imgSource = document.querySelectorAll(".crousal-img");

// radios.forEach((radio, index) => {
//     radio.addEventListener("change", () => {
//         if (index === 0) {
//             para.textContent = "Paragraph text for the first image";
//             title.textContent = "Title text for the first image";
//             imgSource[0].src = "./images/bg-1.webp";

//         } else if (index === 2) {
//             para.textContent = "Paragraph text for the second image";
//             title.textContent = "Title text for the second image";
//             imgSource[0].src = "/images/layout-2.webp";

//         } else {
//             // Set default text or handle other images as needed
//             para.textContent = "Default paragraph text";
//             title.textContent = "Default title text";
//         }
//     });
// });


// const radios = document.querySelectorAll('input[name="position"]');
// const para = document.getElementById("para");
// const title = document.getElementById("title");
// const imgSource = document.querySelectorAll(".crousal-img");

// // radios.forEach((radio, index) => {
//     radio.addEventListener("change", () => {
//         if (index === 0) {
//             para.textContent = "Paragraph text for the first image";
//             title.textContent = "Title text for the first image";
//             imgSource[0].src = "./images/bg-1.webp";

//         } else if (index === 2) {
//             para.textContent = "Paragraph text for the second image";
//             title.textContent = "Title text for the second image";
//             imgSource[0].src = "/images/layout-2.webp";

//         } else {
//             // Set default text or handle other images as needed
//             para.textContent = "Default paragraph text";
//             title.textContent = "Default title text";
//         }
//     });
// });
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,onAuthStateChanged
}  from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getFirestore
  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAOt0YRqCBI5MvtYzZaJiILrjlsA9vWn6w",
    authDomain: "signup-login-74d21.firebaseapp.com",
    projectId: "signup-login-74d21",
    storageBucket: "signup-login-74d21.appspot.com",
    messagingSenderId: "167744399342",
    appId: "1:167744399342:web:50d079ab744413004a90ff",
    measurementId: "G-PQXQJB56F5",
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 onAuthStateChanged(auth, (user) => {
    if (user && location.pathname !== "./user profile/profile.html") {
      const uid = user.uid;
      location.href = "./user profile/profile.html";
      // location.href = '../login-register/login.js'
      console.log("uid==>",uid);
      console.log("location==>",location.href);
      // ...
    } else {
      console.log("user sign out");
      // User is signed out
      // ...
    }
  });









const toogleRegister = document.querySelectorAll(".input-register")[0];
const loginToggle = document.querySelectorAll("#login-toggle")[0];
const loginBtn = document.querySelectorAll("#login")[0];
const registerBtn = document.querySelectorAll("#register")[0];


const toggleLogin = () =>{
    // const loginColorChange = document.querySelectorAll('.login-color-change')[0];
    loginToggle.style.display = "block";
    // loginColorChange.style.color = "red"
    toogleRegister.style.display = "none";


    
}
const toggleRegister = () =>{
    // const registerColorChange = document.querySelectorAll('.register-color-change')[0];
    toogleRegister.style.display = "block";
    // registerColorChange.style.color = "red"
    loginToggle.style.display = "none";
    loginColorChange.style.color = "black"


    
}

loginBtn.addEventListener('click',toggleLogin)
registerBtn.addEventListener('click',toggleRegister)