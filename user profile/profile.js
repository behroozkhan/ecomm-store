import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
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
  measurementId: "G-PQXQJB56F5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  //   location.href = "./user profile/profile.html";
    // location.href = '../login-register/login.js'
    console.log("uid==>",uid);
    console.log("location==>",location.href);
    getUserCurrentData(uid)
    // ...
  } else {
    console.log("user sign out");
    // User is signed out
    // ...
  }
});


const getUserCurrentData = async (uid) => {
  console.log("uid==>",uid);
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  console.log("docSnap", docSnap);
  if (docSnap.exists()) {
    let fullName = document.querySelectorAll("#name")[0];
    let email = document.querySelectorAll("#email")[0];
    fullName.innerHTML = docSnap.data().fullName;
    email.innerHTML = docSnap.data().email;
    console.log("fullName==>", fullName);
    console.log("email==>", email);
    //     if (docSnap.data().picture) {
    //         userProfile.src = docSnap.data().picture
    //     }
    // } else {
    //     fullName.innerHTML = docSnap.data().fullName;
    //     email.innerHTML = docSnap.data().email;
    //     if (docSnap.data().picture) {
    //         userProfile.src = docSnap.data().picture
    //     }

  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}


// This Function for fetching data 


// ---------------------- This File Work Is uploading a file    ---------------------//

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const mountainImagesRef = ref(storage, `images/${file.files[0].name}`);
    const uploadTask = uploadBytesResumable(mountainImagesRef, file.files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};


//----------------------  This Function for logout Current User --------------------///
const logoutBtn = document.querySelectorAll("#logout-btn")[0];
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    let indexProfile = document.querySelectorAll("#index-profile")[0];
    indexProfile.style.display = "none"
    location.href = "../login-register/login-register.html"

  }).catch((error) => {
    // An error happened.
    console.log("Error while signing out:", error);
  });
});
