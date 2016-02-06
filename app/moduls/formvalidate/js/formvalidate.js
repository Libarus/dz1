/**
 * Модуль для валидации формы при отправке данных
 */
;(function ($) {
    
    var idFormElement;
    var me;

    PublicInterface();

    /**
     * Проверка валидации формы
     *
     * @return {boolean} Прошла форма проверку или нет
     */
    function _Validate () {
        $(".form-item").each(function () {
            
            var val = $(this).find(".form-input-item").val();
            if (val == ""){
                $(this).addClass('form-onerror-label');
            }
            else{
                $(this).removeClass('form-onerror-label');
            }

        })

        return false;
    }

    function PublicInterface() {
        me = {
            /**
             * Инициализация 
             *
             *  @param {string} idfe ID формы для валидации
             */
            Init: function(idfe) {
                console.log(idfe);
                idFormElement = idfe;

                $("#" + idFormElement).on('submit',function () {
                    return _Validate();
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
