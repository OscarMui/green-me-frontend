const {getTasks} = require("../api/get");

exports = module.exports = function (req, res, next) {
    console.log("TASKS",req.method);
    // console.log(req.body);

    let isAuthenticated = req.isAuthenticated;
    let user = req.user;
    let internalUser = req.internalUser;
    console.log(user);
    console.log(req.internalUser);
    let method = req.method;
    let body = req.body;

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

  