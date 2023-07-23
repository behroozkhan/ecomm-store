import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
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
 
