import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
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

let registerBtn = document.querySelectorAll("#register-button")[0];
let register = () => {
  let userName = document.querySelectorAll("#username-reg")[0].value;
  let email = document.querySelectorAll("#email-reg")[0].value;
  let password = document.querySelectorAll("#password-reg")[0].value;

  let userlistObj = {
    userName: userName,
    email: email,
    password: password,
  };
  // const auth = getAuth();
  createUserWithEmailAndPassword(auth, userlistObj.email, userlistObj.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      try {
        const docRef = await addDoc(collection(db, "users"), {
          ...userlistObj,
          uid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage==>", errorMessage);
    });
};

registerBtn.addEventListener("click", register);
