// Imports from node_modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, goOffline, goOnline } from "firebase/database";
import express from "express";
// Require and Consts
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
const server = express();
const port = 3000;


// -------- Function to get Data ------------
function getData(){
        return new Promise((res) => {
            goOnline(db);
            onValue(ref(db, 'ADPBSCADM1/program'), (snapshot) => {
            const data = (snapshot.val()) || false;
            const dataTransformed = JSON.parse(data);
            goOffline(db);
            res(dataTransformed);
            }, {
            onlyOnce: true
            });     
    });
}
// -------- Function to organize the data return ------------
async function run(){
    const data = await getData();
    return new Promise((res) => {
        const jsonArray = [];
        data.forEach(element => {
                const dataJson = {
                    date:element[0],
                    dayWeek:element[1],
                    service:element[2],
                    time:element[3],
                    inCharger:element[4],
                    urlAudio:element[5]
                }
                jsonArray.push(dataJson);
        });
        res(jsonArray);
    });
}

// --------- Server functions ---------

server.use(express.static("public"))

server.get('/', async (req, res) => {
    try{
        res.send(JSON.stringify(await run()));
    }catch(error){
        console.log(error);
    }
});
  
server.listen(process.env.PORT || port, () => {
    console.log(`"Server is running...")`)
});










