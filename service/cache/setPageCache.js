import ejs from 'ejs';
import fs from 'fs';
import getData from '../../repository/getData.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function cacheHtml(){
    const data = await getData();
    const template = fs.readFileSync((path.join(__dirname,'../../resources/views/home.ejs')), 'utf-8');
    const html = ejs.render ( template , { dataToRender:data} );
    fs.writeFileSync(path.join(__dirname, "../../cached_pages/home.html"), html, 'utf8');
}

export default cacheHtml;