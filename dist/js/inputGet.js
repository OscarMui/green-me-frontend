function generateLink(){
    let keys = [], values = [];

    keys.push("run");
    values.push("1");

    keys.push("minNum");
    values.push($("#minNum").val());
    keys.push("maxNum");
    values.push($("#maxNum").val());
    keys.push("count");
    values.push($("#count").children("option:selected").val());

    let string = "/input/get"
    for(let i=0;i<keys.length;i++){
        string += i==0 ? "?" : "&";
        string += keys[i]+"="+values[i];
    }
    string += "#content";
    
    if(location.origin+string==window.location.href) location.reload();
    else window.location.href=string;
}