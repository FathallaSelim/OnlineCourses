(function ($) {
    $(document).ready(function () {
        stm_lms_enterprise(true);
    });
})(jQuery);

function stm_lms_enterprise() {
    var $ = jQuery;
    $('.stm-lms-enterprise:not(.loaded)').each(function () {
        $(this).addClass('loaded');
        new Vue({
            el: this,
            data: function () {
                return {
                    loading: false,
                    name: '',
                    email: '',
                    text: '',
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
                        'name': vm.name,
                        'email': vm.email,
                        'text': vm.text,
                    };

                    this.$http.post(stm_lms_ajaxurl + '?action=stm_lms_enterprise&nonce=' + stm_lms_nonces['stm_lms_enterprise'], data).then(function (response) {
                        vm.message = response.body['message'];
                        vm.status = response.body['status'];
                        vm.loading = false;
                    });
                }
            }
        });
    });
}
