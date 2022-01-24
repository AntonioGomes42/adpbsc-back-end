import getData from '../../repository/getData.js';
import NodeCache from 'node-cache';

const cache = new NodeCache();

async function setDataCache(){
    const data  = await getData();
    cache.set("data", data , 10 * 60 );
    return data;
}

function getCachedData(){
    return new Promise((res)=>{
        const value = cache.get("data");
        if(value == undefined){
            res(setDataCache());
        }else{
            res(value);
        }
    })  
}

export default getCachedData;
