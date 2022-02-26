var fetch = require('cross-fetch');

exports.getTasks = async function getTasks(settings){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/api/user/"+123+"/tasks/")
            .then(result => result.json()) //usually
            .then((res) => {
                resolve(res.tasks)
            })
            .catch((err)=>{
                console.log("catch from www.random.org",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}

exports.dataValidation = function dataValidation(settings){
    //assume no error first
    settings.hasError = false;

    settings.run = 1;

    if(!settings.minNum){
        settings.minNum = 0;
    }else if(settings.minNum != Math.floor(settings.minNum)){
        settings.hasError = true;
        settings.errorMsg = "Invalid minimum number";
        return false;
    }

    if(!settings.maxNum){
        settings.maxNum = 100;
    }else if(settings.maxNum != Math.floor(settings.maxNum)){
        settings.hasError = true;
        settings.errorMsg = "Invalid maximum number";
        return false;
    }

    if(Number(settings.minNum)>Number(settings.maxNum)){
        settings.hasError = true;
        settings.errorMsg = "Minimum larger than maximum number.";
        return false;
    }

    if(!settings.count||!isWithinList(settings.count,[1,2,3,4,5,6,7,8,9,10])){
        settings.count = 1;
    }
    return true;

    //used for checkboxes/select dropdown
    function isWithinList(number,list){
        let found=false;
        list.forEach((item)=>{
            //console.log(number,item,number==item);
            if(item==number){
                found=true;
            }
        });
        return found;
    }
}
