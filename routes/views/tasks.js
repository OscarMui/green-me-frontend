const {getTasks} = require("../api/get");

exports = module.exports = function (req, res, next) {
    console.log("TASKS",req.method);
    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;

    if(!isAuthenticated){
        res.redirect("/login");
    }

    const tasks = [
        {
            name: "Recycle",
            description: "long long description, long long description, long long description,long long description long long description, long long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long descriptionlong long description",
            image: "/images/pugjs.jpeg",
            points: 10,
            id: 1
        },
        {
            name: "Bag",
            description: "long long description",
            image: "/images/pugjs.jpeg",
            points: 10,
            id: 2
        },
        // {
        //     name: "Vegetarian",
        //     description: "long long description",
        //     image: "/images/pugjs.jpeg",
        //     points: 10,
        // }
    ]
    if(method=="POST"){

    }else{
        //GET
        // getTasks(user.sub).then((tasks)=>{
        //     res.render("tasks",{tasks});
        // });

        res.render("tasks",{tasks,isAuthenticated,user});
        
    }
};

  