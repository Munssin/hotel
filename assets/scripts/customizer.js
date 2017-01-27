(function($) {
  // Site title
  wp.customize('blogname', function(value) {
    value.bind(function(to) {
      $('.brand').text(to);
    });
  });
})(jQuery);

$(document).ready(function() {
	$('.menu-icon').click(function() {
		$('.navbar').css('margin-left', '0');
	});
});