function submitForm(completed){
    let form = $("#reportForm");
    $("input[name='completed']").val(completed);
    
    form.submit();
}