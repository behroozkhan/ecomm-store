import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection, query, where, getDocs,doc,updateDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL
// } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

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
const db = getFirestore(app);
const auth = getAuth();



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("uid==>", uid);
      console.log("location==>", location.href);
      getUserCurrentData(uid, user.email);
      getAllData(user.email)
      console.log("user", user);
      document.querySelector(".email").innerHTML = user.email;
      // ...
    } else {
      console.log("user sign out");
      // User is signed out
      // ...
    }  
  });  
  
  const getUserCurrentData = async (uid , email) => {
  
  console.log(email)  
  
  const q = query(collection(db, "users"), where("email", "==", email));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    document.querySelector('.name').innerHTML = doc.data().userName
  });  
}  

// getAllData Function Basically work Is get All Register User Get Data IN This Function
const getAllData = async (email)=>{
  const q = query(collection(db, "users"), where("email", "!=", email));
  const chatList = document.querySelectorAll("#all-user-chat-list")[0];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const {userName} = doc.data()

    // doc.data() is never undefined for query doc snapshots
    chatList.innerHTML += ` <div class="user-info" onclick="selctedUserToChat('${userName}')>
    <img id="community-user" src="../images/bk linkedin profile.jpg" alt="User image" class="card__image" />
    <h2 id="community-user-name">${userName}</h2>
    <span id="timestamp">1 Min</span>
  </div>`
    console.log(doc.id, " => ", doc.data());
  });  
}  
// this function work is chat selected user
const selctedUserToChat = (userName)=>{
  console.log("userName==>",userName)
  const selectedUser = document.querySelectorAll('#selected-user')[0];
  selectedUser.innerHTML = userName;
  console.log("selectedUser==>",selectedUser);
} 

const messageInpBtn = document.querySelector("#message-inp");

messageInpBtn.addEventListener('keydown',(e) =>{
  // console.log(messageInpBtn.value);
  if(e.key === "Enter"){
    console.log(messageInpBtn.value);
  }
})
window.selctedUserToChat = selctedUserToChat;  