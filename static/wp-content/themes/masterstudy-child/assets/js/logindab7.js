(function ($) {

    $(window).load(function () {
        stm_lms_login(true);
    });

})(jQuery);

function stm_lms_login(redirect) {
    var $ = jQuery;
    $('.stm-lms-login:not(.loaded)').each(function(){
        let $this = $(this);
        $(this).addClass('loaded');
        var vue_obj = {
            el: this,
            data: function () {
                return {
                    vue_loaded: true,
                    loading: false,
                    login: '',
                    password: '',
                    message: '',
                    status: '',
                    site_key: '',
                    recaptcha: '',
                    captcha_error: '',
                    open_lost_password : false,
                    lost_password : '',
                    lost_password_process : '',
                }
            },
            methods: {
                logIn() {
                    var vm = this;
                    vm.loading = true;
                    vm.message = '';
                    var data = {
                        'user_login' : vm.login,
                        'user_password' : vm.password,
                        'nonce' : stm_lms_nonces['stm_lms_login'],
                    };

                    if(vm.site_key) {
                        grecaptcha.ready(function () {
                            grecaptcha.execute(vm.site_key, {action: 'login'}).then(function (token) {
                                data['recaptcha'] = token;
                                vm.processLogin(data);
                            });
                        });
                    } else {
                        vm.processLogin(data);
                    }


                },
                processLogin(data) {
                    var vm = this;

                    vm.$http.post(stm_lms_ajaxurl + '?action=stm_lms_login', data).then(function(response){
                        vm.message = response.body['message'];
                        vm.status = response.body['status'];
                        vm.loading = false;

                        if (response.body['user_page']) {
                            if (redirect) {
                                window.location = response.body['user_page'];
                            } else {
                                location.reload();
                            }
                        }
                    });
                },
                lostPassword() {
                    var vm = this;

                    if(!(vm.lost_password.length)) return true;

                    vm.lost_password_process = true;
                    vm.message = '';
                    var data = {
                        'user_login' : vm.lost_password,
                    };
                    this.$http.post(stm_lms_ajaxurl + '?action=stm_lms_lost_password&nonce=' + stm_lms_nonces['stm_lms_lost_password'], data).then(function(response){
                        vm.message = response.body['message'];
                        vm.status = response.body['status'];
                        vm.lost_password_process = false;
                    });
                },
            }
        };

        new Vue(vue_obj);

    });
}