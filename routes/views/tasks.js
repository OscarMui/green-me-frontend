const {getTasks} = require("../api/getTasks");

exports = module.exports = function (req, res, next) {
    console.log(req.method);
    // console.log(req.body);

    let method = req.method;
    let body = req.body;

    const tasks = [
        {
            name: "Recycle",
            description: "long long description",
            image: "/images/pugjs.jpeg",
            points: 10,
        },
        // {
        //     name: "Bag",
        //     description: "long long description",
        //     image: "/images/pugjs.jpeg",
        //     points: 10,
        // },
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
        // getTasks().then((tasks)=>{
        //     res.render("tasks",{tasks});
        // });

        res.render("tasks",{tasks});
        
    }
};

  