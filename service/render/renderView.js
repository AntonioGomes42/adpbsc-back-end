// import getData from "../../repository/getData.js";
import getCachedData from "../cache/dataCache.js";

async function renderView(req,res){
    // const data = await getData();
    const data = await getCachedData();
    let index = isNaN(req.params.index)?-1:parseInt(req.params.index);
    if((index<0) || (index>data.length)){
        res.render("error",{});
    }else{
        res.render("view",{ dataToRender:data[index-1]});
    }  
}

export default renderView;