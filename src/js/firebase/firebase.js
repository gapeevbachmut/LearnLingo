import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBM5Y6QM2r6WXTF8zM7dWPy11UsmUn6HlI',
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
