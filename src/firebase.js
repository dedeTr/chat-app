import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAedYzqTGmcUFuQeAopUWmqsoNcRoDfGaE",
  authDomain: "chat-app-b9be7.firebaseapp.com",
  databaseURL: "https://chat-app-b9be7.firebaseio.com",
  projectId: "chat-app-b9be7",
  storageBucket: "chat-app-b9be7.appspot.com",
  messagingSenderId: "332289967588",
  appId: "1:332289967588:web:5f5ee9156647c73f9b33f1",
  measurementId: "G-F6Y66MFE9S",
});

const db = firebaseApp.firestore();
export default db;
