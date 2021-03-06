// Imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, goOffline, goOnline } from "firebase/database";
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
// Require and Consts
const envVariables = dotenv.config()
const firebaseConfig = JSON.parse(await readFile(new URL('./firebaseConfig.json', import.meta.url)));
const app = initializeApp(firebaseConfig);
const db = getDatabase();

async function getDBData(){
  goOnline(db);
  return new Promise((res) => {
            onValue(ref(db, `${process.env.DATA_PATH}`), (snapshot) => {
            const returnedDbData = snapshot.val();
            goOffline(db);
            if(!returnedDbData){
              res([]);
            }else{
              const transformedDbData = JSON.parse(returnedDbData);
              res(transformedDbData); 
            }     
            },{
              onlyOnce: true
            });
          
        })
};

export default getDBData;
