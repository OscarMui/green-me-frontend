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
            if(req.body.completed=="yes"){
                res.render("report",{isAuthenticated,user,internalUser,method}); 
            }else{
                res.redirect("/tasks"); 
            }
            
        }).catch((err)=>{
            res.redirect("/500");
        });

        
        
    }else{
        //GET
        getTask(req.params.taskId).then((task)=>{
            console.log(task);
            res.render("report", {task,isAuthenticated,user,internalUser,method});
        }).catch((err)=>{
            res.redirect("/500");
        });
        
    }
};

