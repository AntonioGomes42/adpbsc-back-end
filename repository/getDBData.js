// Imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, goOffline, goOnline } from "firebase/database";
import { readFile } from 'fs/promises';
// import dotenv from 'dotenv';
// Require and Consts
const firebaseConfig = JSON.parse(await readFile(new URL('./firebaseConfig.json', import.meta.url)));
const app = initializeApp(firebaseConfig);
const db = getDatabase();
// dotenv.config(await readFile(new URL('../.env', import.meta.url)));

async function getDBData(){
    goOnline(db);
    return new Promise((res) => {
                onValue(ref(db, `ADPBSCADM1/program`), (snapshot) => {
                const returnedDbData = snapshot.val();
                const transformedDbData = JSON.parse(returnedDbData);
                goOffline(db);
                res(transformedDbData);
            }, {
              onlyOnce: true
            });
    });
}

export default getDBData;
