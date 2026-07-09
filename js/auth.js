import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const ADMIN_EMAIL = "middle2class.shop@gmail.com";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const errEmail = document.getElementById("errEmail");
const errPassword = document.getElementById("errPassword");
const errGeneral = document.getElementById("errGeneral");

loginBtn.addEventListener("click", login);

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
});

async function login() {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    errEmail.classList.remove("show");
    errPassword.classList.remove("show");
    errGeneral.textContent = "";

    let valid = true;

    if (!email || !email.includes("@")) {
        errEmail.classList.add("show");
        valid = false;
    }

    if (!password || password.length < 6) {
        errPassword.classList.add("show");
        valid = false;
    }

    if (!valid) return;

    try {

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        if (user.email === ADMIN_EMAIL) {

            window.location.href = "admin-dashboard.html";

        } else {

            window.location.href = "index.html";

        }

    } catch (error) {

        switch (error.code) {

            case "auth/invalid-credential":
                errGeneral.textContent = "Invalid email or password.";
                break;

            case "auth/too-many-requests":
                errGeneral.textContent = "Too many attempts. Try again later.";
                break;

            default:
                errGeneral.textContent = error.message;

        }

    }

}
