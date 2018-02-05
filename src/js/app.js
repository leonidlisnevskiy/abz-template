import $ from 'jquery';
import svg4everybody from 'svg4everybody';

svg4everybody();

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
