// Import the functions you need from the SDKs you need
import  {initializeApp}  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC09va2oXJsXKhUwB5F2p3OkmBUdgfskYk",
  authDomain: "tabla-de-gastos.firebaseapp.com",
  projectId: "tabla-de-gastos",
  storageBucket: "tabla-de-gastos.appspot.com",
  messagingSenderId: "902587271092",
  appId: "1:902587271092:web:0e213ced4a817a393ad4e1",
  measurementId: "G-3TK5BC0C32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
