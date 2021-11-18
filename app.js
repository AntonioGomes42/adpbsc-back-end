// Imports
import express from 'express';
import getData  from './repository/getData.js'
import getDataJson from './service/renderService.js';
// Consts
const server = express();
const port = 3000;

// --------- Pre-config server ---------
server.use(express.static("./resources"));
server.set("views", './resources/views');
server.set("view engine", "ejs");

// --------- Server functions ---------

server.get('/api/v1', async (req,res) => {
    try{
        res.send(JSON.stringify(await getData()));
    }catch(error){
        console.log(error);
    }
});

server.get('/', async (req,res)=>{
    const dataJson = await getDataJson();
    res.render(dataJson.templateToRender);
})

//Server runner
server.listen(process.env.PORT || port, () => {
    console.log(`Server is running...`)
});










