const {callNumApi, dataValidation} = require("../api/callNumApi");

exports = module.exports = function (req, res, next) {
    console.log(req.method);
    console.log(req.body);

    let method = req.method;
    let body = req.body;

    if(method=="POST"){
        callNumApi(body).then((nums)=>{
            res.render("inputPost",{method,body,nums});
        });
        
    }else{
        //GET
        res.render("inputPost");
    }
};

