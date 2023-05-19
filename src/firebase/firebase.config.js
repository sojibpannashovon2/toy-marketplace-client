// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKWhQFd82RD-s4tpAAr6ALJxM1xIMSyc4",
    authDomain: "gamezone-toy-shop.firebaseapp.com",
    projectId: "gamezone-toy-shop",
    storageBucket: "gamezone-toy-shop.appspot.com",
    messagingSenderId: "374426979367",
    appId: "1:374426979367:web:80180aa522534d02aed202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app