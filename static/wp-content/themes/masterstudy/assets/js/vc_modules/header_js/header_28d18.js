"use strict";

(function ($) {
  $(document).ready(function () {
    $('.stm_lms_categories_dropdown__childs').each(function () {
      $(this).before('<span class="stm_lms_cat_toggle"></span>');
    });
    $('.stm_lms_search_popup .stm_lms_categories_dropdown__parent > a').on('click', function (e) {
      if ($(this).closest('.stm_lms_categories_dropdown__parent').has('.stm_lms_categories_dropdown__childs').length) {
        e.preventDefault();
        var $child = $(this).closest('.stm_lms_categories_dropdown__parent').find('.stm_lms_categories_dropdown__childs');
        $('.stm_lms_categories_dropdown__childs').slideUp();
        $child.slideToggle();
      }
    });
    $('.categories-courses-single>a').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.categories-courses-single').toggleClass('active');
    });
    $('.header_main_menu_wrapper .sub-menu').each(function () {
      $(this).before('<span class="stm_lms_menu_toggle"></span>');
    });
    $('body').on('click', '.stm_lms_menu_toggle', function (e) {
      $(this).closest('li').find('.sub-menu').toggleClass('active');
    });
    /*Open Popups*/

    /*Account Popup*/

    $('.stm_header_top_toggler').on('click', function () {
      createBg();
      $('.stm_lms_header_popups_overlay').addClass('active');
      $('.stm_lms_account_popup').toggleClass('active');
    });
    $('.stm_lms_account_popup__close').on('click', function () {
      $('.stm_lms_header_popups_overlay, .stm_lms_account_popup').removeClass('active');
    });
    /*Search Popup*/

    $('.stm_header_top_search').on('click', function () {
      createBg();
      $('.stm_lms_header_popups_overlay').addClass('active');
      $('.stm_lms_search_popup').toggleClass('active');
    });
    $('.stm_lms_search_popup__close').on('click', function () {
      $('.stm_lms_header_popups_overlay, .stm_lms_search_popup').removeClass('active');
    });
    /*Menu Popup*/

    $('.stm_lms_categories-courses__toggler').on('click', function () {
      createBg();
      $('.stm_lms_header_popups_overlay').addClass('active');
      $('.categories-courses').toggleClass('active');
    });
    $('.stm_menu_toggler').on('click', function () {
      createBg();
      $('.stm_lms_header_popups_overlay').addClass('active');
      $('.stm_lms_menu_popup').toggleClass('active');
    });
    $('.stm_lms_menu_popup__close').on('click', function () {
      $('.stm_lms_header_popups_overlay, .stm_lms_menu_popup').removeClass('active');
    });
    /*Overlay Close*/

    $(document).on('click', '.stm_lms_header_popups_overlay', function () {
      $('.categories-courses, .stm_lms_header_popups_overlay, .stm_lms_account_popup, .stm_lms_search_popup, .stm_lms_menu_popup').removeClass('active');
    });

    function createBg() {
      if (!$('.stm_lms_header_popups_overlay').length) {
        $('.header_default').append('<div class="stm_lms_header_popups_overlay"></div>');
      }
    }
  });
})(jQuery);