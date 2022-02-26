exports = module.exports = function (req, res) {
    console.log(req.method);
    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;

    if(method=="POST"){

    }else{
        //GET
        console.log(user);
        res.render("index",{isAuthenticated,user});
        
    }
};

  