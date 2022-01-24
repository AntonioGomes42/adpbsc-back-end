// Imports
import express from 'express';
import cache from './service/cache/getCachedPage.js';
import getData from './repository/getData.js';
import renderHome from './service/render/renderHome.js'
import renderView from './service/render/renderView.js';

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

server.get('/', (req, res)=>{
    renderHome(req,res);
});

server.get('/cookie', (req, res)=>{
    res.cookie('cookie', ).send("Cookie has been set!")
});

server.get('/test', (req, res)=>{
    cache(req,res);
});

server.get('/:index', async (req, res)=>{
    renderView(req, res); 
});


//Server runner
server.listen(process.env.PORT || port, () => {
    console.log(`Server is running...`)
});










