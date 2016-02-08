/**
 * Модуль для валидации формы при отправке данных
 */
;(function ($) {
    
    var idFormElement;
    var me;

    PublicInterface();

    /**
     * Проверка валидации формы
     */
    function _Validate () {
        $(".form-item").each(function () {
            
            var val = $(this).find(".form-input-item").val();
            if (val == ""){
                $(this).addClass('form-onerror-label');
                //console.log($(this).attr('id'));
            }
            else{
                $(this).removeClass('form-onerror-label');
            }
        });
        return false;
    }


    /**
     * Сброс валидации формы
     */
    function _ClearValidate () {
        $(".form-item").each(function () {
            $(this).removeClass('form-onerror-label');
        });
    }

    function PublicInterface() {
        me = {
            /**
             * Инициализация 
             *
             *  @param {string} idfe ID формы для валидации
             */
            Init: function(idfe) {
                idFormElement = idfe;

                $("#" + idFormElement).on('submit',function () {
                    return _Validate();
                });

                $("#" + idFormElement).on('reset',function () {
                    _ClearValidate();
                });

                $(".form-item").each(function () {
                    var $this = $(this);
                    $(this).find(".form-input-item").on('keydown',function () {
                        $this.removeClass('form-onerror-label');
                    });
                });
            }
        };
    }
    
    window.formvalidate = me;

})(jQuery);
