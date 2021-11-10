import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, goOffline } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCz6ZqISe3UH0hyQC4JrSg940SmQAJlq0Y",
    authDomain: "adpbsc-e88dd.firebaseapp.com",
    databaseURL: "https://adpbsc-e88dd.firebaseio.com",
    projectId: "adpbsc-e88dd",
    storageBucket: "adpbsc-e88dd.appspot.com",
    messagingSenderId: "650108365725",
    appId: "1:650108365725:web:5b8bfae0c7fb718b2c1d74",
    measurementId: "G-LLGXYQ7T2S"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function getData(){
    return onValue(ref(db, 'ADPBSCADM1/program'), (snapshot) => {
        const data = (snapshot.val()) || "No data";
        const dataTransformed = JSON.parse(data);
        console.log(dataTransformed);
        goOffline(db);
        }, {
        onlyOnce: true
    });
}

getData();









