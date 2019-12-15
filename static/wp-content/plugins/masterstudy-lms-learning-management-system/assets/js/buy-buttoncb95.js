(function ($) {
    $(document).ready(function () {
        $('.stm_lms_mixed_button.subscription_enabled > .btn').on('click', function(){
            $('.stm_lms_mixed_button').toggleClass('active');
        });
    })
})(jQuery);
