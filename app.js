// Imports
import express from 'express';
import getData from './repository/getData.js';
import renderHome from './service/renderHome.js'
import renderView from './service/renderView.js';
import cors from 'cors';
// Consts
const server = express();
const port = 3000;
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

// --------- Pre-config server ---------
server.use(cors(corsOptions))
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

server.get('/:index', async (req, res)=>{
    renderView(req, res); 
});


//Server runner
server.listen(process.env.PORT || port, () => {
    console.log(`Server is running...`)
});










