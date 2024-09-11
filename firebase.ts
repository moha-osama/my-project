import "firebase/auth";
import "firebase/firestore";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChIfVbdy0jaFyPPTwxTu9Gm89vuYDPqW8",
  authDomain: "tasks-b04f1.firebaseapp.com",
  projectId: "tasks-b04f1",
  storageBucket: "tasks-b04f1.appspot.com",
  messagingSenderId: "971142242691",
  appId: "1:971142242691:web:f1ffde2a9bd552da76d6b6",
  measurementId: "G-G4ZZ8RSRKN",
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

const auth = getAuth(firebaseApp);

export { auth };
