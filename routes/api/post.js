var fetch = require('cross-fetch');

exports.submitQuestionnaire = async function findProfile(answers){
    return new Promise((resolve,reject)=>{
        console.log(process.env.ABSOLUTE_PATH+"/questionnaire");
        fetch(process.env.ABSOLUTE_PATH+"/questionnaire", {
            method: "post",
            headers: {
                'Accept': 'application/text',
                'Content-Type': 'application/json'
                //text/plain
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(answers)
            //body: "answer="+answer.toString()+"&__RequestVerificationToken="+__RequestVerificationToken
        })
        .then((result) => { 
            // console.log("SUBMIT QUESTION",result);
            return result.json();
        }).then((response)=>{
            // console.log("SUBMIT QUESTION",response);
            resolve(response);
        }).catch((err)=>{
            console.log("catch from api",err);
            resolve("error");
        });
        
    });
}

exports.taskCompletion = async function taskCompletion(taskId,answers){
    return new Promise((resolve,reject)=>{
        console.log(process.env.ABSOLUTE_PATH+"/task/"+taskId);
        fetch(process.env.ABSOLUTE_PATH+"/task/"+taskId, {
            method: "post",
            headers: {
                'Accept': 'application/text',
                'Content-Type': 'application/json'
                //text/plain
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(answers)
            //body: "answer="+answer.toString()+"&__RequestVerificationToken="+__RequestVerificationToken
        })
        .then((result) => { 
            resolve("OK");
        }).catch((err)=>{
            console.log("catch from api",err);
            reject("error");
        });
        
    });
}

exports.userCallback = async function userCallback(user){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/usercallback", {
                method: "post",
                headers: {
                    'Accept': 'application/text',
                    'Content-Type': 'application/json'
                    //text/plain
                },
    
                //make sure to serialize your JSON body
                body: JSON.stringify(user)
                //body: "answer="+answer.toString()+"&__RequestVerificationToken="+__RequestVerificationToken
            })
            .then((result) => { 
                return result.json();
            }).then((response)=>{
                console.log(response);
                resolve(response);
            }).catch((err)=>{
                console.log("catch from api",err);
                reject("error");
            });
        }, 1000);
    });
}