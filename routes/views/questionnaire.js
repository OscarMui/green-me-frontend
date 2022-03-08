const {getQuestions} = require("../api/get");
const {submitQuestionnaire, userCallback} = require("../api/post");

exports = module.exports = function (req, res) {
    console.log("QUESTIONNAIRE",req.method);
    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;
    
    if(!isAuthenticated){
        res.redirect("/login");
    }

    userCallback(user).then((result)=>{
        // console.log(result);
        // console.log(result.status);
        let internalUser = result.user_object;

        if(result.questionnaire_status=="done"){ 
            res.redirect("/tasks");
        }else{
            //new users stay here
            if(method=="POST"){
                console.log(req.body);
                
                let answers = new Array();
                let i = 1;
                while(body["yesNo"+i]){
                    let answer = {
                        questionId: i,
                        answer1: body["yesNo"+i],
                    }
                    if(body["likeliness"+i]){
                        answer.answer2 = body["likeliness"+i]
                    }
                    answers.push(answer);
                    i++;
                }
        
                let submitData = {
                    userId: internalUser.id,
                    results: answers,
                }
                console.log(submitData);
                submitQuestionnaire(submitData).then((result)=>{
                    res.redirect("/tasks");
                }).catch((err)=>{
                    res.redirect("/500");
                });;
                
            }else{
                //GET
                getQuestions().then((questions)=>{
                    res.render("questionnaire", {questions,isAuthenticated,user,internalUser});
                }).catch((err)=>{
                    res.redirect("/500");
                });
        
                
            }
        }
        
    }).catch((err)=>{
        res.redirect("/500");
    });

    // const questions = [
    //     {
    //         name: "Do you bring a bag to the supermarket?",
    //         subquestionOption: "no",
    //         subquestion: "How difficult it is?"
    //     },
    //     {
    //         name: "Do you turn on lights in the day?",
    //         subquestionOption: "no",
    //         subquestion: "How difficult it is?"
    //     },
    //     {
    //         name: "Do you eat beef?",
    //         subquestionOption: "yes",
    //         subquestion: "How ekwjrewjfewf it is?"
    //     },
    // ]

    
};

