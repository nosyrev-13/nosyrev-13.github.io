$(function () {
		// Scroll
		$("a.scroll-to").on("click", function(e){
	    e.preventDefault();
	    var anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	        scrollTop: $(anchor).offset().top
	    }, 500);
	});
});
		// Hide / Show
		$('.more__btn').click(function (e) {
		e.preventDefault();
		$('.vector__travel-more').toggleClass('vector__visible');
		
	 	$(this).text(function(e, text) {
 			return text === "Смотреть еще страны" ? "Скрыть страны" : "Смотреть еще страны";
  });
});


// PopUp form
$(document).ready(function() {
  $('a.call__btn').click(function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});
