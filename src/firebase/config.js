import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcVshqnRBXYIgx90TqtJMpTPxIr-PQ4rQ",
    authDomain: "aulaclick-cerrogrande.firebaseapp.com",
    projectId: "aulaclick-cerrogrande",
    storageBucket: "aulaclick-cerrogrande.firebasestorage.app",
    messagingSenderId: "240179182310",
    appId: "1:240179182310:web:64bed1deab1501726d5927",
    measurementId: "G-2FKPZJZMNS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
