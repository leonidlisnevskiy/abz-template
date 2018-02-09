import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import select2 from 'select2';

svg4everybody();

$(document).ready(function() {

  const ERROR = 'is-error';

  $('.js-input-file').each((i, file) => {
    file = $(file);
    const field = file.find('.js-input-file-field');

    field.on('change', e => {
      if (field.get(0).files[0].size/1000000 > 5) {
        file.addClass(ERROR);
      } else {
        file.removeClass(ERROR);
      }
    });
  });

  // -----------------------------------------------------
  $('#description').keyup(function() {
  	var textLength = $('#description').val().length;
  	$('.js-counter').html(textLength);
  });

  $('.js-select').select2({
  	minimumResultsForSearch: -1,
  	width: '100%',
  	height: '100%',
  });
});
