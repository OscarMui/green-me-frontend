function submitForm(completed){
    let form = $("#reportForm");
    $("input[name='completed']").val(completed ? "yes": "no");
    
    form.submit();
}