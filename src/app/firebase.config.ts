// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  doc,
  getFirestore,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyBLqtTylzjTezrnafZTLts7rVNCW0V_EPU',
  authDomain: 'angular-ecomerce-practice.firebaseapp.com',
  projectId: 'angular-ecomerce-practice',
  storageBucket: 'angular-ecomerce-practice.appspot.com',
  messagingSenderId: '682196015579',
  appId: '1:682196015579:web:c7b91b4789c110fd96effe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// const mySnapshot = await getDocs(collection(firestore, name));
// const docProducts = doc(firestore, '/BQuMYhKRjCTyTWo5jzur');

export const getListDataFromFireStore = async (name: any) => {
  let result: any = [];
  const mySnapshot = await getDocs(collection(firestore, name));

  mySnapshot.forEach((doc) => {
    console.log(`doc`, doc.data());
    result = [...result, { ...doc.data() }];
  });
  console.log('result:', result);

  return [];
};
