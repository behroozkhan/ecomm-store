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