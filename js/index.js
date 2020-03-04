$(document).ready(function () {

  $('.header__btn').on('click', function () {
    $('.header__nav').slideToggle();
    $('.header').toggleClass('overlay');
  });

  $('.menu-item-has-drop').on('click', function () {
    $('.drop-menu').slideToggle();
  });

});