exports = module.exports = function (req, res) {
    console.log("INDEX",req.method);
    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;

    //GET
    console.log(user);
    if(!isAuthenticated){
        res.render("index",{isAuthenticated,user});
    }else{
        res.redirect("/questionnaire");
    }
};

  