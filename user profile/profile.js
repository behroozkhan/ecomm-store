import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

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
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

const fileInputBtn = document.querySelectorAll("#file-input")[0];
const userProfile = document.querySelectorAll("#user-profile")[0];
// const email = document.querySelectorAll("#email")[0];
// const userName = document.getElementById("name");


//-------------- this firebase method check current user login or not  ------------------------//
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("uid==>", uid);
    console.log("location==>", location.href);
    getUserCurrentData(uid, user.email);
    updateprofile()
    console.log("user", user);
    document.getElementById("email").innerHTML = user.email;
    // ...
  } else {
    console.log("user sign out");
    // User is signed out
    // ...
  }
});
//-------------------- getting all user who login my ecom websute -------------------------------//
const getUserCurrentData = async (uid, email) => {
  console.log(email)
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    document.getElementById('name').innerHTML = doc.data().userName
  });
};

//----------------------------- update Profile ---------------------------------//
// let updateprofile = async() => {
//   try{
//   const  fullName = document.querySelectorAll('#name')[0];
//   const  email = document.querySelectorAll('#email')[0];
//   const imageUrl = await uploadFile(file.files[0])
//   const uid = auth.currentUser.uid;
//   const washingtonRef = doc(db, "users", uid);
//   await updateDoc(washingtonRef, {
//       fullName: fullName.value,
//       email: email.value,
//       picture: imageUrl
//   });
//   Swal.fire({
//     icon: 'success',
//     title: 'User updated successfully',
// })
// }catch{
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Something went wrong!',
//     footer: '<a href="">Why do I have this issue?</a>'
//   })
// }
// }
const updateBtn = document.querySelectorAll("#update-profile")[0];
const updateprofile = async (uid) => {
  try {
    uid = auth.currentUser.uid;
    // const fullName = document.querySelectorAll('#name')[0];
    // const email = document.querySelectorAll('#email')[0];
    let userName = document.getElementById("name").innerText;
    let email = document.getElementById("email").innerText;
    const file = fileInputBtn.files[0];
    const imageUrl = await uploadFile(file);

    console.log("fullName==>", userName);
    console.log("email==>", email);
    console.log("file==>", file);
    console.log("imageurl==>", imageUrl);
    console.log("uid==>", uid);

    const washingtonRef = doc(db, "users", uid);
    await updateDoc(washingtonRef, {
      picture:imageUrl
    });

    console.log("washingtonRef==>",washingtonRef);
    // Update the user profile in the database with the new information
    // const uid = auth.currentUser.uid;
    // const washingtonRef = doc(db, 'users', uid);
    // await updateDoc(washingtonRef, {
    //   fullName: fullName,
    //   email: email,
    //   picture: imageUrl,
    // });

    // // Update the profile image on the page with the new image URL
    // userProfile.src = imageUrl;

    Swal.fire({
      icon: 'success',
      title: 'User updated successfully',
    });
  } catch(error) {
    console.log("error",error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
};

updateBtn.addEventListener('click', updateprofile)



// ---------------------- This File Work Is uploading a file    ---------------------//
fileInputBtn.addEventListener("change", () => {
    const selectedFile = fileInputBtn.files[0];
    userProfile.src = URL.createObjectURL(selectedFile);
});

// ----------------- Ready Method Function For Uploading File Using in fileInputBtn------------------------//
// const uploadFile = (file) => {
//   return new Promise((resolve, reject) => {
//     const mountainImagesRef = ref(storage, `images/${file.files[0].name}`);
//     const uploadTask = uploadBytesResumable(mountainImagesRef, file.files[0]);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // Observe state change events such as progress, pause, and resume
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//         }
//       },
//       (error) => {
//         reject(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           resolve(downloadURL);
//         });
//       }
//     );
//   });
// };

//----------------------  This Function for logout Current User --------------------///
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const mountainImagesRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(mountainImagesRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        // Upload is complete, resolve with the download URL
        // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //   resolve(downloadURL);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );
  });
};

// -------- This  function logout current login User And Redirect to login Page -----------------//
const logoutBtn = document.querySelectorAll("#logout-btn")[0];
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // let indexProfile = document.querySelectorAll("#index-profile")[0];
      // indexProfile.style.display = "none";
      location.href = "../login-register/login-register.html";
    })
    .catch((error) => {
      console.log("Error while signing out:", error);
    });
});
