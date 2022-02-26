function changeYesNo(i){
    let yesNo = $('input[name="yesNo'+i+'"]:checked').val();
    // console.log(i,yesNo)
    if(yesNo == "no"){
        $("#subQuestion"+i).removeClass("d-none");
    }else{
        $("#subQuestion"+i).addClass("d-none");
    }
}