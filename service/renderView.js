import getData from "../repository/getData.js";

async function renderView(req,res){
    const data = await getData();
    let index = !(isNaN(req.params.index))?parseInt(req.params.index):1;
    if((index<0) || (index>data.length)){
        index=1;
    }
    res.render("view",{ dataToRender:data[index-1]});
}

export default renderView;