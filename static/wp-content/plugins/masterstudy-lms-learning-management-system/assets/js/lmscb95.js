(function ($) {
    document.addEventListener('lazybeforeunveil', function(e){
        $(e.target).closest('.stm_lms_lazy_image').addClass('stm_lms_lazyloaded');
    });

    $(document).ready(function () {

        $('.stm_lms_log_in[data-lms-modal]').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($('.stm-lms-wrapper__login').length) {
                $(this).removeAttr('data-lms-modal');
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".stm-lms-wrapper__login").offset().top
                }, 300);
            }
        });

        var modal_body = [];

        $('[data-lms-modal]').on('click', function (e) {
            e.preventDefault();

            var modal_target = $(this).attr('data-target');

            if (!$(modal_target).length) {
                var modal = $(this).attr('data-lms-modal');
                var params = $(this).attr('data-lms-params');
                $.ajax({
                    url: stm_lms_ajaxurl,
                    dataType: 'json',
                    context: this,
                    data: {
                        action: 'stm_lms_load_modal',
                        modal: modal,
                        nonce : stm_lms_nonces['load_modal'],
                        params: params
                    },
                    beforeSend: function () {
                        $(this).addClass('loading');
                    },
                    complete: function (data) {
                        var data = data['responseJSON'];
                        $(this).addClass('modal-loaded');
                        $(this).removeClass('loading');

                        modal_body[modal_target] = $(data['modal']).appendTo('body');

                        toggleModal(modal_target);

                    }
                });
            } else {
                toggleModal(modal_target);
            }

        });

        function toggleModal(modal) {
            $(modal).modal('toggle');
        }

        $('[data-buy-course]').on('click', function (e) {
            var item_id = $(this).attr('data-buy-course');

            if (typeof item_id === 'undefined') {
                window.location = $(this).attr('href');
                return false;
            }


            $.ajax({
                url: stm_lms_ajaxurl,
                dataType: 'json',
                context: this,
                data: {
                    action: 'stm_lms_add_to_cart',
                    nonce: stm_lms_nonces['stm_lms_add_to_cart'],
                    item_id: item_id,
                },
                beforeSend: function () {
                    $(this).addClass('loading');
                },
                complete: function (data) {
                    var data = data['responseJSON'];
                    $(this).removeClass('loading');

                    $(this).find('span').text(data['text']);

                    if (data['cart_url']) {
                        if (data['redirect']) window.location = data['cart_url'];
                        $(this).attr('href', data['cart_url']).removeAttr('data-buy-course');
                    }

                }
            });

            e.preventDefault();
        });

        $('[data-delete-course]').on('click', function (e) {
            e.preventDefault();
            var item_id = $(this).data('delete-course');
            var group_id = $(this).data('delete-enterprise');
            $.ajax({
                url: stm_lms_ajaxurl,
                dataType: 'json',
                context: this,
                data: {
                    action: 'stm_lms_delete_from_cart',
                    nonce: stm_lms_nonces['stm_lms_delete_from_cart'],
                    item_id: item_id,
                    group_id: group_id,
                },
                beforeSend: function () {
                    $(this).addClass('loading');
                },
                complete: function (data) {
                    $(this).removeClass('loading');
                    $(this).closest('.item_can_hide').slideUp();
                    location.reload();
                }
            });
        });

        $('.stm_lms_logout').on('click', function (e) {
            e.preventDefault();
            $.ajax({
                url: stm_lms_ajaxurl,
                dataType: 'json',
                context: this,
                data: {
                    action: 'stm_lms_logout',
                },
                complete: function (data) {
                    location.reload();
                }
            });
        });

    })
})(jQuery);

function stm_lms_price_format(price) {
    price = stm_lms_price_format_number(price);
    price = (stm_lms_vars['position'] === 'left') ? stm_lms_vars['symbol'] + price : price + stm_lms_vars['symbol'];

    return price;
}

function stm_lms_price_format_number(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + stm_lms_vars['currency_thousands'])
}