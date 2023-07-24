$(document).ready(function () {

  jQuery(function ($) {
    $("#phone_input").mask('+7(999) 999 9999');
  });

});

$(window).on("scroll", function () {
  if ($(window).width() >= '380') {

    $("header").toggleClass("scroll", $(this).scrollTop() > 70);
    $(".header-burger").removeClass("active", $(this).scrollTop() < 70);
    $(".line2").removeClass("line2-active", $(this).scrollTop() < 70);
    $(`div[name="dropdown"`).toggleClass("dropdown", $(this).scrollTop() < 70);
  }

});

const openBurgerMenu = () => {
  $(".header-burger").toggleClass("active");
  $(".line2").toggleClass("line2-active");
  $(`div[name="dropdown"`).removeClass("dropdown");
};
