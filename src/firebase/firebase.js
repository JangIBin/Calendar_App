// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Y6RdIvjCCLlvZo6z8JQ4Km0NCcSyZEo",
  authDomain: "calendarapp-gamjarin.firebaseapp.com",
  projectId: "calendarapp-gamjarin",
  storageBucket: "calendarapp-gamjarin.appspot.com",
  messagingSenderId: "338081376236",
  appId: "1:338081376236:web:e98613db531c2ea83142c9",
  measurementId: "G-ENYZRRGJT8"
};

// Initialize Firebase
// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };