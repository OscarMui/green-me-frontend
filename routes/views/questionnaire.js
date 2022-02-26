const {submitQuestionnaire} = require("../api/submitQuestionnaire");

exports = module.exports = function (req, res, next) {
    console.log(req.method);
    console.log(req.body);

    let method = req.method;
    

    const questions = [
        {
            name: "Do you bring a bag to the supermarket?",
        },
        {
            name: "Do you turn on lights in the day?",
        },
    ]

    if(method=="POST"){
        console.log(req.body);
        let answers = req.body;
        submitQuestionnaire(answers).then((res)=>{
            res.render("questionnaire",{res});
        });
        
    }else{
        //GET
        res.render("questionnaire", {questions});
    }
};

