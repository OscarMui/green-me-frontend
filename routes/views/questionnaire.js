const {submitQuestionnaire} = require("../api/submitQuestionnaire");

exports = module.exports = function (req, res, next) {
    console.log(req.method);
    // console.log(req.body);

    let method = req.method;
    let body = req.body;
    

    const questions = [
        {
            name: "Do you bring a bag to the supermarket?",
            subquestionOption: "no",
        },
        {
            name: "Do you turn on lights in the day?",
            subquestionOption: "no",
        },
        {
            name: "Do you eat beef?",
            subquestionOption: "yes",
        },
    ]

    if(method=="POST"){
        console.log(req.body);
        
        let answers = new Array();
        let i = 0;
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
            userId: "123",
            results: answers,
        }
        console.log(submitData);
        submitQuestionnaire(submitData).then((result)=>{
            res.redirect("/tasks");
        });
        
    }else{
        //GET
        res.render("questionnaire", {questions});
    }
};

