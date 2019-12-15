(function ($) {
    $(document).ready(function () {
        stm_lms_become_instructor(true);
    });
})(jQuery);

function stm_lms_become_instructor() {
    var $ = jQuery;
    $('.stm-lms-become-instructor:not(.loaded)').each(function () {
        $(this).addClass('loaded');
        new Vue({
            el: this,
            data: function () {
                return {
                    loading: false,
                    degree: '',
                    degree_filled: true,
                    expertize: '',
                    expertize_filled: true,
                    message: '',
                    status: '',
                }
            },
            methods: {
                send() {
                    var vm = this;
                    vm.loading = true;
                    vm.message = '';
                    var data = {
                        'degree': vm.degree,
                        'expertize': vm.expertize,
                    };

                    vm.degree_filled = (vm.degree !== '');
                    vm.expertize_filled = (vm.expertize !== '');

                    this.$http.post(stm_lms_ajaxurl + '?action=stm_lms_become_instructor&nonce=' + stm_lms_nonces['stm_lms_become_instructor'], data).then(function (response) {
                        vm.message = response.body['message'];
                        vm.status = response.body['status'];
                        vm.loading = false;
                    });
                }
            }
        });
    });
}
