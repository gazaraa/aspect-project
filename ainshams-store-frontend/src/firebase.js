// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPNyX0SfR1vM-HzCArzJe-s7GCCxIibqI",
    authDomain: "aspect-de36f.firebaseapp.com",
    projectId: "aspect-de36f",
    storageBucket: "aspect-de36f.appspot.com",
    messagingSenderId: "802471887821",
    appId: "1:802471887821:web:60fce646e81fa957f03a84",
    measurementId: "G-5KWC6YKJW0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
