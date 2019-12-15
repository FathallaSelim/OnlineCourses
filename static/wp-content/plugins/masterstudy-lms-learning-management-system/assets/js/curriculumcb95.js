(function ($) {

    $(document).ready(function () {

        $('.stm-curriculum-item.has-excerpt').on('click', function (e) {
            if (typeof($(e.target).attr('href')) === 'undefined') {
                e.preventDefault();
                $(this).toggleClass('opened');
                $(this).find('.stm-curriculum-item__excerpt').slideToggle('fast');
            }
        });

        $('.stm-curriculum-item__section').on('click', function () {
            $(this).toggleClass('opened');
            $(this).closest('.stm-curriculum-section').find('.stm-curriculum-section__lessons').slideToggle();
        });

        $('.stm-curriculum-item.prev-status-').on('click', function(e) {
            e.preventDefault();
        });

    });

})(jQuery);
