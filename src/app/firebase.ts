import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebase = initializeApp(firebaseConfig, 'client');
export default firebase;