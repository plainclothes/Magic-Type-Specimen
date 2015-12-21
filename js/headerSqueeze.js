$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#header').addClass('squeeze');
  } else {
    $('#header').removeClass('squeeze');
  }
});