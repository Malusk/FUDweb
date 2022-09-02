import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDMf4qY3_puRS9aP5om_LIABirunhunnE",
  authDomain: "fudpdf.firebaseapp.com",
  projectId: "fudpdf",
  storageBucket: "fudpdf.appspot.com",
  messagingSenderId: "943592235890",
  appId: "1:943592235890:web:cfcc4f2b1196ba25f0b3eb",
  measurementId: "G-BQWMS31HCH"
};

const app = initializeApp(firebaseConfig);
// Create a root reference
const wao = () => {
const storage = getStorage();
const storageRef = ref(storage, 'some-child');
const selectedFile = document.getElementById('input').files[0];
console.log("Yes");
uploadBytes(storageRef, selectedFile).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}
export {wao};
