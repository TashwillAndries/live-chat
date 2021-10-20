import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrPsye8_EaAC-iuaVMt6Z7FcejtoscVMA",
  authDomain: "vue-fire-f8801.firebaseapp.com",
  projectId: "vue-fire-f8801",
  storageBucket: "vue-fire-f8801.appspot.com",
  messagingSenderId: "39058902856",
  appId: "1:39058902856:web:3d8b538ff4035a45776d7d",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFire = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFire, timestamp, projectAuth };
