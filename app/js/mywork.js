;$(function () {
    formvalidate.Init('form-send-mywork');

    $("input#image").on('change',function () {
        var fullname = $(this).val();
        if (fullname != "")
        {
            var fileTitle = fullname.replace(/.*\\(.*)/, "$1"); //выдираем название файла, если в win системе
            fileTitle = fileTitle.replace(/.*\/(.*)/, "$1"); //выдираем название файла, если в unix системе
            $(".form-input-item-fictiv").text(fileTitle);
            $(".form-input-item-fictiv").addClass("fictiveON");
            $(".form-input-item-fictiv").parent().parent().parent().removeClass("form-onerror-label");
        }
        else
        {
            $(".form-input-item-fictiv").text("Загрузите изображение");
            $(".form-input-item-fictiv").removeClass("fictiveON");
        }

    });

});
