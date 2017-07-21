$(document).ready(function(){
  submitForm()
});



function submitForm(){
  $('form').on('submit', function(event){
    let list = $('#item').val()
    $('ol').append('<li>' + list + '</li>')
    event.preventDefault()
  })
}
