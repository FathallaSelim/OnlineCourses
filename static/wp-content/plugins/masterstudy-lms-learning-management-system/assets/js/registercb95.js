(function ($) {
    $(window).load(function () {
        stm_lms_register(true);
    })
})(jQuery);

function stm_lms_register(redirect) {
    var vue_obj = {
        el: '#stm-lms-register',
        data: function () {
            return {
                vue_loaded: true,
                loading: false,
                login: '',
                email: '',
                password: '',
                password_re: '',
                message: '',
                status: '',
                site_key: '',
                become_instructor: '',
                degree: '',
                expertize: '',
                recaptcha: '',
                captcha_error: '',
                privacy_policy: true,
                has_privacy_policy: false
            }
        },
        methods: {
            hasPrivacyPolicy() {
                if (!this.has_privacy_policy) {
                    this.has_privacy_policy = true;
                    this.privacy_policy = false;
                }
            },
            register() {
                var vm = this;
                vm.loading = true;
                vm.message = '';

                var data = {
                    'user_login': vm.login,
                    'user_email': vm.email,
                    'user_password': vm.password,
                    'user_password_re': vm.password_re,
                    'become_instructor': vm.become_instructor,
                    'privacy_policy': vm.privacy_policy,
                    'degree': vm.degree,
                    'expertize': vm.expertize,
                };

                if (vm.site_key) {
                    grecaptcha.ready(function () {
                        grecaptcha.execute(vm.site_key, {action: 'register'}).then(function (token) {
                            data['recaptcha'] = token;
                            vm.processRegister(data);
                        });
                    });
                } else {
                    vm.processRegister(data);
                }
            },
            processRegister(data) {

                var vm = this;

                vm.$http.post(stm_lms_ajaxurl + '?action=stm_lms_register&nonce=' + stm_lms_nonces['stm_lms_register'], data).then(function (response) {
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
            }
        }
    };

    new Vue(vue_obj);
}