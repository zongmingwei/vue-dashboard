import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5GZtV0h934j9ctJbgLIt6VSnfj12mOPw ",
  authDomain: "vue-practice-716fd.firebaseapp.com",
  databaseURL: "https://vue-practice-716fd.firebaseio.com",
  projectId: "vue-practice-716fd",
  storageBucket: "vue-practice-716fd.appspot.com",
  messagingSenderId: "986394545262"
});

export const db = firebaseApp.firestore();
