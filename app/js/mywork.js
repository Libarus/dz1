;$(function () {
    formvalidate.Init('form-send-mywork');

    $("input#image").on('change',function () {
        console.log($(this).val());
    })

})
