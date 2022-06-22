(function($)
{
$(document).ready(function(e)
{
	//form validation 
    $('.home_request_form').parsley().on('field:validated', function() {
        var ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
      }).on('form:submit', function() {
        
        return false; // Don't submit form for this demo
      });


	//form validation
      $('.home_contact_form').parsley().on('field:validated', function() {
        var ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
      }).on('form:submit', function() {
        
        return false; // Don't submit form for this demo
      });
	  
	  

});
}(jQuery));