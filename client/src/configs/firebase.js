// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyAYzhCnvf2jOZe9FWqpbthnhM25vUQeq0c',
    authDomain: 'pinimage-a2249.firebaseapp.com',
    projectId: 'pinimage-a2249',
    storageBucket: 'pinimage-a2249.appspot.com',
    messagingSenderId: '651102017713',
    appId: '1:651102017713:web:bd6a570e51c61959a02a90',
    measurementId: 'G-YP1TRS2Z98',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
