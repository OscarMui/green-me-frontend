var fetch = require('cross-fetch');

exports.submitQuestionnaire = async function findProfile(answers){
    return new Promise((resolve)=>{
        console.log(process.env.ABSOLUTE_PATH+"/questionnaire");
        fetch(process.env.ABSOLUTE_PATH+"/questionnaire", {
            method: "post",
            headers: {
                'Accept': 'application/text',
                'Content-Type': 'application/json'
                //text/plain
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                answers: answers,
                success: true,
            })
            //body: "answer="+answer.toString()+"&__RequestVerificationToken="+__RequestVerificationToken
        })
        .then((result) => { 
            return result.text();
        }).then((response)=>{
            console.log(response);
            resolve(response);
        });
    });
}