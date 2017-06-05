(function($){
  var $navigation = $('.navigation');
  var $mobileToggle = $('.mobile-toggle');
  var $content = $('.content');
  var $heading = $('#about-me .heading');

  $mobileToggle.on('click', function(){
    $navigation.toggleClass('active');
    $content.toggleClass('active');
  })


  //Typed
  var $typed = $heading.find('.typed-container');
  $typed.typed({
		strings: [", Engineer", ", Yellow Jacket", ", Developer",  ""],
		typeSpeed: 40,
    startDelay: 1500,
    backDelay: 1500,
    backSpeed: 40,
	  callback: function(){
      $heading.find('span').remove();
    }
  });

})(jQuery)
