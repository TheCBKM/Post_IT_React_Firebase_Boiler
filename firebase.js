require("firebase/firestore");
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxBl3gDMENkZET3jikPGaqO0Kd98jo_rQ",
  authDomain: "postit-2cc09.firebaseapp.com",
  databaseURL: "https://postit-2cc09.firebaseio.com",
  projectId: "postit-2cc09",
  storageBucket: "postit-2cc09.appspot.com",
  messagingSenderId: "128233009309",
  appId: "1:128233009309:web:eef214d7f5a1b27e29a474"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
