import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAzc6eRhMmTLog_3f75JtuoV4YA366GMOE",
    authDomain: "osn-services.firebaseapp.com",
    databaseURL: "https://osn-services.firebaseio.com",
    projectId: "osn-services",
    storageBucket: "osn-services.appspot.com",
    messagingSenderId: "313357881332",
    appId: "1:313357881332:web:9e34becb57d7d91a4873a1",
    measurementId: "G-340NTHPJ2V"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export var storage = firebase.storage().ref();