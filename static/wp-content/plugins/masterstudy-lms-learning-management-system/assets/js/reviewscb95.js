(function ($) {
    $(document).ready(function () {

        new Vue({
            el: '#stm-lms-reviews',
            data: function () {
                return {
                    loading: true,
                    reviews: [],
                    offset: 0,
                    total: false
                }
            },
            created: function() {
                this.getReviews();
            },
            methods: {
                getReviews() {
                    var vm = this;
                    var url = stm_lms_ajaxurl + '?action=stm_lms_get_reviews&nonce=' + stm_lms_nonces['stm_lms_get_reviews'] + '&offset=' + vm.offset + '&post_id=' + stm_lms_post_id;
                    vm.loading = true;

                    this.$http.get(url).then(function (response) {
                        response.body['posts'].forEach(function(review){
                            vm.reviews.push(review);
                        });
                        vm.total = response.body['total'];
                        vm.loading = false;
                        vm.offset++;
                    });
                }
            }
        });

        new Vue({
            el: '#stm_lms_add_review',
            data: function () {
                return {
                    loading: false,
                    review_text: '',
                    openReview: false,
                    rating: 0,
                    ratingWidth: 75,
                    singleRating : 75/5,
                    message: '',
                    status: '',
                }
            },
            created: function() {
            },
            methods: {
                addReview() {
                    var vm = this;
                    if(this.openReview) {
                        vm.message = '';
                        vm.loading = true;
                        var url = stm_lms_ajaxurl
                            + '?action=stm_lms_add_review&nonce=' + stm_lms_nonces['stm_lms_add_review'] + '&post_id=' + stm_lms_post_id
                            + '&mark=' + this.rating
                            + '&review=' + this.review_text;
                        vm.loading = true;

                        vm.$http.get(url).then(function (response) {
                            vm.message = response.body['message'];
                            vm.status = response.body['status'];
                            vm.loading = false;
                            if(response.body['status'] === 'success') vm.openReview = false;
                        });
                    }
                    this.openReview = true;
                },
                ratingHover($event) {
                    this.rating = parseInt($event.offsetX / this.singleRating) + 1;
                    console.log(this.rating);
                }
            }
        });
    })
})(jQuery);
