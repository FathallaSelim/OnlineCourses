(function ($) {
    if (top.location !== location) {
        var css = '#stm_wrapper { display: none; } ' +
            'body.has_envato_iframe {top: 0 !important}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));

        head.appendChild(style);
    }

})(jQuery);