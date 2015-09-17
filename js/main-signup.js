(function(){

	// signup js

  	$("#faf-signup-work").click(function(){
		$('#faf-signup-move').animate({'marginLeft' : "-=380px"}, 200);
		$("#faf-work-popup").fadeIn(200);
	});

    $("#faf-signup-select").click(function(){
        $('#faf-signup-move').animate({'marginLeft' : "-=380px"}, 200);
        $("#faf-select-popup").fadeIn(200);
    });

	function closepopup(objone){
	    $(objone).fadeOut(100);
        $('#faf-signup-move').animate({'marginLeft' : "+=380px"}, 200);
	}

	function closeslide(subject, objone, e){
        if(e.target.id != subject.attr('id') && !subject.has(e.target).length){
        	closepopup(objone);
        }
	}	

    $("#faf-work-popup").mousedown(function(e){
    	objone ="#faf-work-popup";
    	var subject1 = $("#faf-work-pop-container"); 
    	closeslide(subject1, objone, e);
    });

    $("#faf-work-x-icon").click(function(){
    	objone ="#faf-work-popup";    	
    	closepopup(objone);    	
    });

    $('#demolist li').on('click', function(){
    	$('#datebox').val($(this).text());
	});

    $("#faf-select-popup").mousedown(function(e)
    {
        objone ="#faf-select-popup";
        var subject1 = $("#faf-select-pop-container"); 
        closeslide(subject1, objone, e);
    });

    $("#faf-select-x-icon").click(function(){
        objone ="#faf-select-popup";      
        closepopup(objone);     
    });

    //signup button

    $("#faf-signup-work-join").click(function (e) {
        e.preventDefault();
        window.location.href = "sign-up-choose-work.html";
    });

    $("#faf-signup-select-join").click(function (e) {
        e.preventDefault();
        window.location.href = "sign-up-select.html";
    });

    $("#faf-signup-work-next").click(function (e) {
        e.preventDefault();
        window.location.href = "sign-up-work-2.html";
    });

    $("#faf-signup-work-back2").click(function (e) {
        e.preventDefault();
        window.location.href = "sign-up-work.html";
    });

    $("#faf-signup-join").click(function (e) {
        e.preventDefault();
        window.location.href = "sign-up-work.html";
    });

    //load html

     $("#faf-signup-w-body").load("sign-up-work-cc.html"); 


/* ADD EXP AND CERT BEGIN */

   var  addexp = 1, addcert = 1, addmorecert = 1;

    $dc = $(document);

    $dc.on("click", "#faf-s-w-add-exp", function(){
        if (addexp<=50){

            $('.faf-signup-w-exp1').before($('<div>').fadeOut(0).fadeIn().load('sign-up-work-cc.html .faf-signup-w-exp-hid'));

            addexp++;
            return false;
        }
        else alert('Only maximum of 5 can be added.');
    });

   
    $dc.on("click", "#faf-s-w-add-cert", function(){
        if (addcert<=50){

            $('.faf-signup-w-cert-u1 ').before($('<div>').fadeOut(0).fadeIn().load('sign-up-work-cc.html .faf-signup-w-cert-u-hid'));

            addcert++;
            return false;
        }
        else alert('Only maximum of 5 can be added.');
    });

    $dc.on("click", ".faf-signup-w-remove-exp", function(){
         $(this).parent().parent().fadeOut("normal", function() {
            $(this).remove(); 
            addcert--;         
            });
    });


   var addmorecert = 1;

    $dc.on("click", ".faf-s-w-up-more-cert", function(){
        if (addmorecert<=50){

            $(this).parent().parent().prev().after($('<div>').fadeOut(0).fadeIn().load('sign-up-work-cc.html .faf-signup-w-cert-hid'));

            addmorecert++;
            return false;
        }
        else alert('Only maximum of 5 can be added.');
    });

    $dc.on("click", ".faf-signup-w-remove-exp", function(){
         $(this).parent().parent().fadeOut("normal", function() {
            $(this).remove(); 
            addexp--;         
            });
    });

/* ADD EXP AND CERT END */

    function slideSpeech(currentpos){
        var position = $(currentpos).offset();
        var pos = position.top;
        $("#faf-signup-w-cc-speech > div").animate({top: pos-300}, 200);
    }

    $replace = $('.faf-buble-replace');

    $dc.on("click", ".faf-signup-w-upload-p", function(){
         slideSpeech(this);
         $('.faf-buble-replace').text('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat, est laborum"');
    });

    $dc.on("click", ".faf-signup-w-loc", function(){
         slideSpeech(this);
         $('.faf-buble-replace').text('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."');
    });

    $dc.on("click", ".faf-signup-w-type ", function(){
         slideSpeech(this);
         $('.faf-buble-replace').text('"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "');         
    });

    $dc.on("click", ".faf-signup-w-laguages", function(){
         slideSpeech(this);
         $('.faf-buble-replace').text('"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."');         
    });

    $dc.on("click", ".faf-signup-w-service", function(){
         slideSpeech(this);
         $('.faf-buble-replace').text('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat, est laborum"');         
    });

    $dc.on("click", ".faf-signup-w-avail", function(){
        slideSpeech(this);
        $('.faf-buble-replace').text('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."');         
    });

    $dc.on("click", ".faf-signup-w-exp", function(){
        slideSpeech(this);
        $('.faf-buble-replace').text('"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "');             
    });

    $dc.on("click", ".faf-signup-w-exp-hid", function(){
        slideSpeech(this);        
        $('.faf-buble-replace').text('"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"');              
    });

    $dc.on("click", ".faf-signup-w-cert-upload", function(){        
        slideSpeech(this);
        $('.faf-buble-replace').text('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat, est laborum"');
    });

    $dc.on("click", ".faf-signup-w-cert-u-hid", function(){
        var position = $('.faf-signup-w-cert-upload');
        slideSpeech(position);
        $('.faf-buble-replace').text('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat, est laborum"');  
    });

// $(".faf-signup-w-exp").fadeOut(0).fadeIn().append("sign-up-work-pd.html .faf-signup-w-exp");  
// $(".faf-signup-w-exp").load("sign-up-work-cc.html .faf-signup-w-exp");

// $.get("sign-up-work-cc.html .faf-signup-w-exp", function (data) {
//     $(".faf-signup-w-exp").append(data);
// });

// $("<div>").load("sign-up-work-cc.html .faf-signup-w-exp", function() {
//       $("#hi").append($(this).find("#posts").html());
// });


// $("#faf-s-w-add-exp").click(function () {
//   alert("Hello!");
// });

//   $('#faf-s-w-add-exp').live('click', function(){
//     alert("Hello!");
// }); 


// $(document).on("click", "#faf-s-w-add-exp", function(){
//     alert("Hello!");
// });

// if ($('[optradio="faf-signup-w-industry-radio1"]').is(':checked')){ 
//     $("#faf-signup-w-body").load("sign-up-work-cc.html"); 
// }); 


    //end load html

    // end sign up button

    //tooltip
       $("[data-toggle='tooltip']").tooltip(); 
    // end tooltip

	//end signup js

})();


$(window).load(function () {
        $('#dp1').datepicker({format: 'dd-mm-yyyy'});
});