import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {getDatabase, set, ref} 
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";


// const auth = getAuth();
// const database = getDatabase();

// const signup = () => {
//     console.log(auth)
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let password = document.getElementById("passward");
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((resolve) => {
//             alert("Successfully Signup!", resolve)
//             let userId = auth.currentUser.uid
//             let usersReference =  ref(database, "users/" + userId);
//             let usersObj = {
//                 name: name.value,
//                 email: email.value,
//                 password: password.value,
//             };
//             set(usersReference, usersObj)
//         window.location.href="login.html"
//         })
//         .catch((reject) => {
//             alert("SignUp rejected", reject)
//         })
// }
// let signupBtn = document.getElementById("signupBtn");
// if (signupBtn) {
//     signupBtn.addEventListener("click", signup);
// }   window.location.href="login.html"
// const login = () => {
//     let email = document.getElementById("login-email");
//     let password = document.getElementById("login-passward");
//     signInWithEmailAndPassword(auth, email.value, password.value)
//         .then((resolve) => {
//             alert("successfully login!", resolve)
          
//         })
//         .catch((reject) => {
//             alert("Login rejected", reject)
//         })
// }
// let loginBtn = document.getElementById("loginBtn");
// if (loginBtn) {
//     loginBtn.addEventListener("click", login);
// }
const signup = () => {
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a new user using Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User creation successful
            const user = userCredential.user;
            const userId = user.uid;

            // Reference to the user's data in the database
            const userRef = ref(database, `users/${userId}`);

            // Data to be stored in the database
            const userData = {
                name,
                email,
                password,
                // Do not store the password in the database for security reasons.
            };

            // Set the user data in the database
            set(userRef, userData)
                .then(() => {
                    // Data storage successful
                    alert("Successfully signed up!");
                    // Redirect to the dashboard or another page
                    window.location.href = "/login.html";
                })
                .catch((error) => {
                    // Handle errors related to database write
                    console.error("Error storing user data:", error);
                    alert("Signup completed, but there was an issue storing user data.");
                });
        })
        .catch((error) => {
            // Handle authentication errors
            console.error("Authentication failed:", error);
            alert("Signup failed. Please check your email and password.");
        });
};

let signUpBtn = document.getElementById("signupBtn");
if(signUpBtn){
    signUpBtn.addEventListener("click", signup);
}

const signIn = () => {
    console.log("test")
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password")
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve) => {
        alert("successfully signin", resolve)
        window.location.href = "";
    })
    .catch((reject) => {
        alert("Signin rejected", reject)
    })
}
let signInBtn = document.getElementById("loginBtn");
if(signInBtn){
    signInBtn.addEventListener("click", signIn);
}