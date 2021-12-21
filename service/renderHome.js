import getData from "../repository/getData.js";

async function renderHome(req,res){
    const data = await getData();
    const dataLength = data.length;
    switch (true) {
        case dataLength>0 && dataLength<=5:
            res.render(('home-'+dataLength), { dataToRender:data});
            break;
        case dataLength>5:
            res.render('home', { dataToRender:data});
            break;
        case dataLength == -1:
            console.log("erro");
            res.send("erro");
            break;
    }      
}

export default renderHome;
    