const {getTask} = require("../api/get");

exports = module.exports = function (req, res, next) {
    console.log("REPORT",req.method);
    console.log(req.params);
    // console.log(req.body);

    let {isAuthenticated,internalUser, user, method, body} = req;

    if(!isAuthenticated){
        res.redirect("/login");
    }

    let task = {};

    if(method=="POST"){
        console.log(req.body);
        
        // let answers = new Array();
        // let i = 0;
        // while(body["yesNo"+i]){
        //     let answer = {
        //         questionId: i,
        //         answer1: body["yesNo"+i],
        //     }
        //     if(body["likeliness"+i]){
        //         answer.answer2 = body["likeliness"+i]
        //     }
        //     answers.push(answer);
        //     i++;
        // }

        // let submitData = {
        //     userId: "123",
        //     results: answers,
        // }
        // console.log(submitData);
        // submitQuestionnaire(submitData).then((result)=>{
        //     res.redirect("/tasks");
        // });

        res.redirect("/tasks");
        
    }else{
        //GET
        getTask(req.params.taskId).then((task)=>{
            res.render("report", {task,isAuthenticated,user,internalUser});
        });
        
    }
};

