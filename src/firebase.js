import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1d5Mi7B56-8wch3fjRzH0oOuTwQG4dJs",
  authDomain: "clone-7d0de.firebaseapp.com",
  projectId: "clone-7d0de",
  storageBucket: "clone-7d0de.appspot.com",
  messagingSenderId: "861452107466",
  appId: "1:861452107466:web:49dcdd4af1743196b4fe33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
