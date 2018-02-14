import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import select2 from 'select2';
import formvalidator from 'jquery-form-validator';


svg4everybody();

$(document).ready(function() {

  const ERROR = 'is-error';

  $('.js-input-file').each((i, file) => {
    file = $(file);
    const field = file.find('.js-input-file-field');

    field.on('change', e => {
      if (field.get(0).files[0].size/1000000 > 5) {
        file.addClass(ERROR);
        $('.js-upload-image').removeClass('is-visible');
      } else {
        file.removeClass(ERROR);
        $('.js-upload-image').addClass('is-visible').css('background-image', 'url("' + URL.createObjectURL(event.target.files[0]) + '")');
      }
    });
  });

  $('.js-description').on('input', function(e) {
    var textLength = $(this).val().length;
    $(this).parent().find('.js-counter').html(textLength);
  });

  $('.js-select').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    height: '100%',
    templateSelection: function(data) {
      if (data.id === '') {
        $('.js-result').val(data.text);
      }
      return data.text;
    }
  });


  $.validate({
    modules : 'security'
  });
});


