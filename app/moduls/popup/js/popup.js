/*
 * Автозапускаемый модуль для организации модульных окон
 */
;(function($){

    var currentOpen;

    function OpenPopup(winName){
        currentOpen = winName;
        $("#popupoverlay").show();
        $("#" + winName).show(300);
    }

    function ClosePopup(){
        $("#" + currentOpen).hide(300);
        $("#popupoverlay").hide();
    }

    $("body").append("<div id='popupoverlay' class='popup-overlay'></div>");
    $("#popupoverlay").on('click',function () {
        ClosePopup();
    })

    $("a.popup-open").each(function () {
        
        var winName = $(this).attr("winname");
        $(this).on('click',function () {
            OpenPopup(winName);
            return false;
        });

    });

    $("a.close-popup-href").on('click',function () {
        ClosePopup();
        return false;
    });

})(jQuery);
