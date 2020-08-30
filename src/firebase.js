import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAftqwGNk6Zr3Y_KARclW9grCViQ35L8Do",
  authDomain: "twitter-clone-40254.firebaseapp.com",
  databaseURL: "https://twitter-clone-40254.firebaseio.com",
  projectId: "twitter-clone-40254",
  storageBucket: "twitter-clone-40254.appspot.com",
  messagingSenderId: "1098163392363",
  appId: "1:1098163392363:web:e4925154d599f2ad66462e",
  measurementId: "G-WJRFJ04B2Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
