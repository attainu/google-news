import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCQKcMav03BrakIE4tBvDYusBrSeDIs9B0",
    authDomain: "news-clone-e35a3.firebaseapp.com",
    databaseURL: "https://news-clone-e35a3.firebaseio.com",
    projectId: "news-clone-e35a3",
    storageBucket: "news-clone-e35a3.appspot.com",
    messagingSenderId: "298891632365",
    appId: "1:298891632365:web:e2de713db95fd911a1f6e4",
    measurementId: "G-EQEMBNJQ81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase 