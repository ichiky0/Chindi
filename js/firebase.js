// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRtVLjtj81LVp3sIepkXG6l97pBSpyVyc",
    authDomain: "chindi-413c2.firebaseapp.com",
    projectId: "chindi-413c2",
    storageBucket: "chindi-413c2.firebasestorage.app",
    messagingSenderId: "835747100587",
    appId: "1:835747100587:web:c70ace29c93e0baff344ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);

// Export so other files can use them
export { app, db, auth };
