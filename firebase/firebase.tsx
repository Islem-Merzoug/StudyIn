import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVP0ugdwcUpk_4J8Yn9C9GrhwR03_qSJA",
    authDomain: "studyin-mobile.firebaseapp.com",
    projectId: "studyin-mobile",
    storageBucket: "studyin-mobile.appspot.com",
    messagingSenderId: "888474820940",
    appId: "1:888474820940:web:c10a3bde792259eb06afe9",
    measurementId: "G-5LVDHEBRQR"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


export default firebase;
