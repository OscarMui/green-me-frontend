const {getTask} = require("../api/get");
const {taskCompletion} = require("../api/post");

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
        console.log({
            userId: internalUser.id,
            task: {
                id: req.params.taskId,
                update: req.body.completed,
            }
        })
        taskCompletion(req.params.taskId,{
            userId: internalUser.id,
            task: {
                    id: req.params.taskId,
                    update: req.body.completed,
                }
        }).then((response)=>{
            res.redirect("/tasks"); 
        });

        
        
    }else{
        //GET
        getTask(req.params.taskId).then((task)=>{
            res.render("report", {task,isAuthenticated,user,internalUser});
        });
        
    }
};

