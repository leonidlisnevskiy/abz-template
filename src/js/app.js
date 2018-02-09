import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import select2 from 'select2';

svg4everybody();

$(document).ready(function() {

  $('js-select').select2({
    minimumResultsForSearch: -1
  });

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
