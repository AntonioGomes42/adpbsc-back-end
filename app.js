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
            const returnedDbData = (snapshot.val()) || false;
            const transformedDbData = JSON.parse(returnedDbData);
            goOffline(db);
            res(transformedDbData);
            }, {
            onlyOnce: true
            });     
    });
}
// -------- Function to organize data return ------------
async function tidyUpData(){
    const data = await getData();
    return new Promise((res) => {
        const jsonDataArray = [];
        data.forEach(arrayElement => {
                const jsonData = {
                    date:arrayElement[0],
                    dayWeek:arrayElement[1],
                    service:arrayElement[2],
                    time:arrayElement[3],
                    inCharger:arrayElement[4],
                    urlAudio:arrayElement[5]
                }
                jsonDataArray.push(jsonData);
        });
        res(jsonDataArray);
    });
}

// --------- Server functions ---------

server.use(express.static("public"))

server.get('/', async (req,res) => {
    try{
        res.send(JSON.stringify(await tidyUpData()));
    }catch(error){
        console.log(error);
    }
});
  

//Server runner
server.listen(process.env.PORT || port, () => {
    console.log(`Server is running...`)
});










