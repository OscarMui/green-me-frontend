var fetch = require('cross-fetch');

exports.getTasks = async function getTasks(sub){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/user/"+sub+"/tasks/")
            .then(result => result.json()) //usually
            .then((res) => {
                resolve(res.tasks)
            })
            .catch((err)=>{
                console.log("catch from api",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}

exports.getQuestions = async function getQuestions(sub){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/questionnaire")
            .then(result => result.json()) //usually
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err)=>{
                console.log("catch from api",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}

exports.userCallback = async function userCallback(sub){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/usercallback")
            .then(result => result.json()) //usually
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err)=>{
                console.log("catch from api",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}