var fetch = require('cross-fetch');

exports.getTasks = async function getTasks(id){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/user/"+id+"/incompletetasks")
            .then(result => result.json()) //usually
            .then(({tasks,templates}) => {
                resolve(tasks.map((task)=>{
                    let template =  templates.filter((template)=>{
                        return task.template_id==template.id
                    })[0];
                    return {
                        id: task.id,
                        completed: task.num_completions,
                        max: template.max_completions,
                        points: template.user_points,
                        description: template.desc,
                        wasteSavings: template.waste_savings,
                        carbonSavings: template.carbon_savings,
                    }
                }));
            })
            .catch((err)=>{
                console.log("catch from api",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}

exports.getQuestions = async function getQuestions(sub){
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch(process.env.ABSOLUTE_PATH+"/questionnaire")
            .then(result => result.json()) //usually
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err)=>{
                console.log("catch from api",err);
                settings.hasError=true;
                settings.errorMsg = "Error occured when connecting to www.random.org";
                resolve("error");
            });
        }, 1000);
    });
}