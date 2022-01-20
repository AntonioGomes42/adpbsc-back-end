import getDBData from '../repository/getDBData.js';
import transformDBData from './transformDBData.js';

async function getData(){
    const data = await transformDBData(await getDBData());
    return data;
}

export default getData;