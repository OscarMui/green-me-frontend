function changeYesNo(i,showSubquestion){
    // let yesNo = $('input[name="yesNo'+i+'"]:checked').val();
    // console.log(i,yesNo)
    if(showSubquestion){
        $("#subQuestion"+i).removeClass("d-none");
        $("#radioLikeliness1"+i).prop('required', 'true');
    }else{
        $("#subQuestion"+i).addClass("d-none");
        $("#radioLikeliness1"+i).prop('required', "");
    }
}