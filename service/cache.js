import cacheHtml from "./setCache.js";
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function cache(req, res){
    const filePath = path.join(__dirname, '../cache/home.html');
    if(!(fs. existsSync(filePath))){
        await cacheHtml();
    }
    res.sendFile(filePath);
}

export default cache;