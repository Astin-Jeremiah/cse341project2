$("#type").change(function() {
  if ($(this).data('options') === undefined) {
    $(this).data('options', $('#weight option').clone());
  }
  var id = $(this).val();
  var options = $(this).data('options').filter('[class=' + id + ']');
  $('#weight').html(options);
  $('#weight').prop("disabled", false);
});