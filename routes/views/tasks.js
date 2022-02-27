const {getTasks} = require("../api/get");

exports = module.exports = function (req, res, next) {
    console.log("TASKS",req.method);
    // console.log(req.body);

    let {isAuthenticated,internalUser, user, method, body} = req;

    console.log(user);
    console.log(req.internalUser);

    if(!isAuthenticated){
        res.redirect("/login");
    }

    if(method=="POST"){
        
    }else{
        //GET
        getTasks(req.internalUser.id).then((tasks)=>{
            console.log(tasks);
            res.render("tasks",{tasks,isAuthenticated,user,internalUser});
        });

        // res.render("tasks",{tasks,isAuthenticated,user});
        
    }
};

  