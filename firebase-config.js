// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByd8SL32BLKAoIo5FHJ-t-5z9l_TwvwAc",
    authDomain: "mcdonald-s-f4fe0.firebaseapp.com",
    projectId: "mcdonald-s-f4fe0",
    storageBucket: "mcdonald-s-f4fe0.firebasestorage.app",
    messagingSenderId: "874616360716",
    appId: "1:874616360716:web:1014eb79f9a7393d994329",
    measurementId: "G-FBTLWH38GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);