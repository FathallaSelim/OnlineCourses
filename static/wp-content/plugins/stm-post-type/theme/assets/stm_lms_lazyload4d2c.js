(function ($) {
    document.addEventListener('lazybeforeunveil', function (e) {
        $(e.target).closest('.stm_lms_lazy_image').addClass('stm_lms_lazy_image__lazyloaded');
    });
})(jQuery);