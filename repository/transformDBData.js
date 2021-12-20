 // -------- Function to get Data read to use  ------------
function transformDBData(data){
    return new Promise((res) => {
        if(!data.length){
            res({ length : -1 })
        }else{
            const jsonDataArray = [];
            data.forEach(arrayElement => {
                const jsonData = {
                    date:arrayElement[0],
                    dayWeek:arrayElement[1],
                    service:arrayElement[2],
                    time:arrayElement[3],
                    inCharger:arrayElement[4],
                    urlAudio:arrayElement[5]
                };
                jsonDataArray.push(jsonData);
            });
         res(jsonDataArray);
        }      
    });
}

export default transformDBData;