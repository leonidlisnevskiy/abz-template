import $ from 'jquery';
import slick from 'slick-carousel';
import formvalidator from 'jquery-form-validator';

$('.js-btn-nav').click(function(event) {
  event.stopPropagation();
  $('.js-header').toggleClass('is-open');

  if(!$('.js-header').is(e.target) && $('.js-header').has(e.target).length === 0) {
    $('.js-header').removeClass('is-open');
  }
});

$(document).ready(function() {

  $('textarea, input').each(function() {
    var placeholder = $(this).attr('placeholder');

    $(this).focus(function() {
      $(this).attr('placeholder', '');
    });
    $(this).blur(function() {
      $(this).attr('placeholder', placeholder);
    });
  });

});
