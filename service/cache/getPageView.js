import getCachedData from "./dataCache.js";
import fs from 'fs';
import ejs from 'ejs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function renderView(index){
    const data = await getCachedData();
    const template = fs.readFileSync((path.join(__dirname,'../../resources/views/view.ejs')), 'utf-8');
    const html = ejs.render ( template , { dataToRender:data[index-1]} );
    fs.writeFileSync(path.join(__dirname, `../../cached_pages/view-${index}.html`), html, 'utf8');
}

async function cachedRenderView(req, res){
    const dataLength = 8;//verificar se tem cacheddata antes de acessar length.
    const index = isNaN(req.params.index)?-1:parseInt(req.params.index);
    if((index<0) || (index>dataLength)){
        res.render("error",{});
    }else{
        const filePath = path.join(__dirname, `../../cached_pages/view-${index}.html`);
        if(!(fs. existsSync(filePath))){
            await renderView(index);
        }
        res.sendFile(filePath);
    }  
}

export default cachedRenderView;