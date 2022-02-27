const {getQuestions} = require("../api/get");
const {submitQuestionnaire, userCallback} = require("../api/post");

exports = module.exports = function (req, res, next) {
    console.log("QUESTIONNAIRE",req.method);
    // console.log(req.body);

    let isAuthenticated = req.oidc.isAuthenticated();
    let user = req.oidc.user;

    let method = req.method;
    let body = req.body;
    
    if(!isAuthenticated){
        res.redirect("/login");
    }

    userCallback(user).then((result)=>{
        // console.log(result);
        // console.log(result.status);
        req.internalUser = result.user_object;
        req.user = user;
        req.isAuthenticated = isAuthenticated;
        next();
    })
};

