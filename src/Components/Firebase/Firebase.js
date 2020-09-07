import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeRDN_SHe0L790GUSgVBYrEgJLYrVCP9g",
  authDomain: "clone-a03cd.firebaseapp.com",
  databaseURL: "https://clone-a03cd.firebaseio.com",
  projectId: "clone-a03cd",
  storageBucket: "clone-a03cd.appspot.com",
  messagingSenderId: "603498083227",
  appId: "1:603498083227:web:1c63309d0eaaec5a0e273e",
  measurementId: "G-NSY9BWGQTN",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { /*db*/ auth };
