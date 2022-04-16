// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAKFPMwBmVPKf0h_UT0mnc9NtnPXSucuQ",
    authDomain: "react-crud-749eb.firebaseapp.com",
    projectId: "react-crud-749eb",
    storageBucket: "react-crud-749eb.appspot.com",
    messagingSenderId: "789431625607",
    appId: "1:789431625607:web:b2ea7776b3f76eb9501522",
    measurementId: "G-2K1249DXDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);