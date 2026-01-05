// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAHGhBQk-Zmy5qBS2dJZN2KYjzIX9oQJg',
  authDomain: 'learnlingo-auth-320f9.firebaseapp.com',
  projectId: 'learnlingo-auth-320f9',
  storageBucket: 'learnlingo-auth-320f9.firebasestorage.app',
  messagingSenderId: '1060134815936',
  appId: '1:1060134815936:web:65e14830a23616ff3e0525',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// ---   !!!!!   firebase.js імпортується всюди, де потрібен auth
