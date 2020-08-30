import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDgd7Ga1qAEDWKjY-ktft1WcL0WcAdCYn4",
  authDomain: "siatin.firebaseapp.com",
  databaseURL: "https://siatin.firebaseio.com",
  projectId: "siatin",
  storageBucket: "siatin.appspot.com",
  messagingSenderId: "428245002290",
  appId: "1:428245002290:web:53db6b75344e9a2864342b",
  measurementId: "G-6HG09N2DJN"
};

//Login system
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;