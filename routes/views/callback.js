const {userCallback} = require("../api/get");

exports = module.exports = function (req, res) {
    console.log("CALLBACK",req.method);
    console.log("CALLBACK HERE CALLBACK HERE");

    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;
    

    if(!isAuthenticated){
        res.redirect("/login");
    }

    userCallback(user).then((result)=>{
        if(result.status=="new"){
            res.redirect("/questionnaire");
        }else{
            res.redirect("/task");
        }
    })
};

