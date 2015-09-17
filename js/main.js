(function(){


	//begin index js

	$('.post1').addClass("vp-hidden").viewportChecker({
	    classToAdd: 'vp-visible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	   });   

	$('.post2').addClass("vp-hidden").viewportChecker({
	    classToAdd: 'vp-visible animated flipInX', // Class to add to the elements when they are visible
	    offset: 100    
	   });   

	$('.post3').addClass("vp-hidden").viewportChecker({
	    classToAdd: 'vp-visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100    
	   }); 	


	$('.post4').addClass("vp-hidden").viewportChecker({
	    classToAdd: 'vp-visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100    
	   });

	$('.postnumber').addClass("vp-hidden").viewportChecker({
		classToAdd: 'vp-visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100,	        
	});   

	animateNum();

	//end index js

})();



	//begin index js

	var ypos,divimage;
	function parallex(){
		ypos = window.pageYOffset;
		divimage = document.getElementById('faf-main-banner');
		divimage.style.top = ypos *.8 +'px';
	}

	window.addEventListener('scroll',parallex);

	function animateNum(){

		if( $('#faf-circ1').hasClass("vp-hidden") ){
			
			if( $('#faf-circ1').hasClass("vp-visible") ){

		    	$('#faf-circ1').removeClass("vp-hidden");

		    	var sec1 = 18, sec2 = 19, sec3 = 20;

				var timer = setInterval(function() { 

				   $('.faf-circle span.faf-span1').text(--sec1);
				   $('.faf-circle span.faf-span2').text(--sec2);
				   $('.faf-circle span.faf-span3').text(--sec3);

				   if (sec1 == 1) {
				      clearInterval(timer);
				   }

				}, 80);

		    }
		}
	}

	window.addEventListener('scroll',animateNum);

	//end index js