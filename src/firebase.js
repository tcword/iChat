import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJOPiJjR7LaazjTuuYGJsoiE8Ye1aQrdg",
  authDomain: "social-d1a3c.firebaseapp.com",
  databaseURL: "https://social-d1a3c.firebaseio.com",
  projectId: "social-d1a3c",
  storageBucket: "social-d1a3c.appspot.com",
  messagingSenderId: "935689068061",
  appId: "1:935689068061:web:8d458b00667ddbf5e570f4",
  measurementId: "G-E198JKTYG9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;