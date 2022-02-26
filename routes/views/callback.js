const {userCallback} = require("../api/get");

exports = module.exports = function (req, res) {
    console.log("CALLBACK",req.method);
    console.log("CALLBACK HERE CALLBACK HERE");

    console.log(req.body);

    res.redirect("/questionnaire");
};

