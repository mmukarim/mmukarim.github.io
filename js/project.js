$(document).ready(function() {

$('#myemail').focusout(function(){
                $('#myemail').filter(function(){
                   var emil=$('#myemail').val();
              var emailReg = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})?$/;
            if( !emailReg.test( emil ) ) {
				$('#email_strength').removeClass();
				$('#email_strength').addClass('short');
                $("#email_strength").html("Incorrect");
                } else {
				$('#email_strength').removeClass()
				$('#email_strength').addClass('strong')
                $("#email_strength").html("Correct");
                }
                })
            });   
			$('.thumbnail').hover(
				function(){
					$(this).find('.caption').slideDown(250); //.fadeIn(250)
				},
				function(){
					$(this).find('.caption').slideUp(250); //.fadeOut(205)
				}
			); 
});