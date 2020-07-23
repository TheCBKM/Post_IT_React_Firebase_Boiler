require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8g128u6CZlhgbiZajmPRPjSvPEnhiPfM",
  authDomain: "fincareforlife-test.firebaseapp.com",
  databaseURL: "https://fincareforlife-test.firebaseio.com",
  projectId: "fincareforlife-test",
  storageBucket: "fincareforlife-test.appspot.com",
  messagingSenderId: "795724241676",
  appId: "1:795724241676:web:e7de5de78effed8515c729",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
