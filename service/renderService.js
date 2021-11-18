import getData from '../repository/getData.js'

async function getDataJson(){
    const data = await getData();
    return new Promise((res)=>{
        try {
            const templateToRender = (data.length > 5 ?'home':('home-'+data.length));
            res({"templateToRender":templateToRender,"data":data});
        } catch (error) {
            res({"templateToRender":'error',"data":"Não Encontrado"})
        }
        
    })
}


export default getDataJson;