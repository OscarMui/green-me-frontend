const {callNumApi, dataValidation} = require("../api/callNumApi");

exports = module.exports = function (req, res) {
    console.log(req.query);
    let settings = req.query;

    if(settings.run==1){
        if(!dataValidation(settings)){
            res.render("inputGet",{settings: settings});
        }else{
            callNumApi(settings).then((nums)=>{
                let output = {settings: settings, nums: nums};
                console.log(output);
                res.render("inputGet",output);
        
            }).catch((err)=>{
                console.log(err);
                res.render("inputGet",{settings: settings});
            });
        }
    }else{
        settings.run = 0;
        settings.minNum = 0;
        settings.maxNum = 100;
        settings.count = 1;

        console.log(settings);
        res.render("inputGet",{settings: settings});
    }
};

