$(function() {
  // Handler for .ready() called.

  //click event
  $('.more').click(more);

  //append text

  function more() {
  	console.log('more');
  	$('.hide-me').css('display', 'block');
  }
});