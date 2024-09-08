// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBe3_AY_eSCV7tv5K3Lt_UQ2R3JPKZrzp4',
  authDomain: 'alumni-association-e1e99.firebaseapp.com',
  projectId: 'alumni-association-e1e99',
  storageBucket: 'alumni-association-e1e99.appspot.com',
  messagingSenderId: '534718429901',
  appId: '1:534718429901:web:654fd942632d78bd9fc784',
  measurementId: 'G-BML3ZDFFCC',
};

const app = initializeApp(firebaseConfig);
// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
