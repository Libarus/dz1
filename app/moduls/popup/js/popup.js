/*
 * Автозапускаемый модуль для организации модульных окон
 */
;(function($){

    var currentOpen;

    function OpenPopup(winName){
        var shift = $("#" + winName).css("top") + $(window).scrollTop();
        console.log(shift);
        currentOpen = winName;
        $("#popupoverlay").show();
        $("#" + winName).css("top",shift);
        $("#" + winName).show(500);
        //$("body").css({ overflow:"hidden" });
    }

    function ClosePopup(){
        $("#" + currentOpen).hide();
        $("#popupoverlay").hide();
    }

    $("body").append("<div id='popupoverlay' class='popup-overlay'></div>");
    $("#popupoverlay").on('click',function () {
        ClosePopup();
    })

    $("a.popup-open").each(function () {
        
        var winName = $(this).attr("winname");
        console.log(winName);
        $(this).on('click',function () {
            OpenPopup(winName);
            return false;
        });

    });

})(jQuery);
