import firebase from 'firebase';
var firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    databaseURL: process.env.REACT_DATABASE_URL,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
});

var db = firebaseApp.database();
export { db };