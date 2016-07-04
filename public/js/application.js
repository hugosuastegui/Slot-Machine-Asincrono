$(document).ready(function() {
  $("#spin").submit(function( event ){
    event.preventDefault();
    $.post('/rolls', function(data){
      $("#die").html(data);
    });
  });
});
