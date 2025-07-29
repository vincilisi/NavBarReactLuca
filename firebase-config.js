// src/firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyByd8SL32BLKAoIo5FHJ-t-5z9l_TwvwAc",
    authDomain: "mcdonald-s-f4fe0.firebaseapp.com",
    projectId: "mcdonald-s-f4fe0",
    storageBucket: "mcdonald-s-f4fe0.firebasestorage.app",
    messagingSenderId: "874616360716",
    appId: "1:874616360716:web:1014eb79f9a7393d994329",
    measurementId: "G-FBTLWH38GT"
};

const app = initializeApp(firebaseConfig);
export default app;
