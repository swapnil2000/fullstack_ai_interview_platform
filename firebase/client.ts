/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD8jmg6uix6G2ty6JDF1lG55Qp3eA6c0r8',
	authDomain: 'prepwise-cd879.firebaseapp.com',
	projectId: 'prepwise-cd879',
	storageBucket: 'prepwise-cd879.firebasestorage.app',
	messagingSenderId: '1041410099263',
	appId: '1:1041410099263:web:b0f15a776ef5fd37e4508a',
	measurementId: 'G-LZ64WY2QC0',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
