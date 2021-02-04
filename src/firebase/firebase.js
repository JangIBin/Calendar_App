import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyC9Y6RdIvjCCLlvZo6z8JQ4Km0NCcSyZEo",
	authDomain: "calendarapp-gamjarin.firebaseapp.com",
	projectId: "calendarapp-gamjarin",
	storageBucket: "calendarapp-gamjarin.appspot.com",
	messagingSenderId: "338081376236",
	appId: "1:338081376236:web:e98613db531c2ea83142c9",
	measurementId: "G-ENYZRRGJT8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};