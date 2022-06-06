// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCnVCRMEVP0q_Ba9wcY1Zvkp1mWsf76C5Q',
  authDomain: 'budget-a870e.firebaseapp.com',
  projectId: 'budget-a870e',
  storageBucket: 'budget-a870e.appspot.com',
  messagingSenderId: '329494752424',
  appId: '1:329494752424:web:dcf24a69c433da12abe69d',
  measurementId: 'G-LGD6M92383',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
