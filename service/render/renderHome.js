import getData from "../../repository/getData.js";

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
            res.render('nodata',{});
            break;
    }      
}

export default renderHome;
    