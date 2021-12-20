import getDBData from '../repository/getDBData.js';
import transformDBData from './transformDBData.js';

async function getData(){
    const dbData = await getDBData()
    const data = await transformDBData(dbData);
    
    return data;
}

export default getData;