import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore,doc,getDoc} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
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
  // const storage = getStorage(); 
// const userProfile = document.querySelectorAll("#user-profile")[0];


// const currentUserUid = ()=>{
//   onAuthStateChanged(auth, (user) => {
//     if (!user) { // Check if user is null (not authenticated)
//       location.href = "../login-register/login-register.html";
//       console.log("User logout Successfully");
//     }
//   })
// .catch((error) => {
//   // An error happened.
//   console.log("Error while signing out:", error);
// });
// } 

//--------- this function for get user data and fetch into profile card  -------------//
// const getCurrentUserData = async (uid) =>{
// const docRef = doc(db, "users", uid);
// const docSnap = await getDoc(docRef);
// console.log("uid===>",uid);
// if (docSnap.exists()) {
//   let userName = document.querySelectorAll('#name')[0];
//   let userEmail = document.querySelectorAll('#email')[0];
//   console.log("Document data:", docSnap.data());
//   userName.innerHTML += docSnap.data().userName;
//   userEmail.innerHTML += docSnap.data().userEmail;
//   // userProfile.src = docSnap.data().userImg;
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
// }

//--------- this function for get user data and fetch into profile card  -------------//
// ... Firebase imports and configuration ...

const getCurrentUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  console.log("uid===>", uid);
  console.log(docSnap);
  if (docSnap.exists()) {
    let userName = document.querySelector('#name');
    let userEmail = document.querySelector('#email');
    console.log("Document data:", docSnap.data());
    userName.innerHTML = docSnap.data().userName;
    userEmail.innerHTML = docSnap.data().email;
    console.log(userNameElement,userEmailElement);
    // userProfile.src = docSnap.data().userImg;
  } else {
    console.log("No such document!");
  }
}

// Listen for changes in the authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, call the function to fetch and display user data
    getCurrentUserData(user.uid);
  } else {
    // User is signed out, handle as needed
    console.log("User is signed out.");
  }
});

// Listen for changes in the authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, call the function to fetch and display user data
    getCurrentUserData(user.uid);
  } else {
    // User is signed out, handle as needed
    // For example, you might want to redirect to the login page
    console.log("User is signed out.");
  }
});
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
