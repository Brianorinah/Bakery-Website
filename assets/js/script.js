$(function(){
	//alert('Re');
	$(document).on('click','a[href^="#"]',function(e){
		
		//alert($(this).attr('href'));
		var id=$(this).attr('href');
		var $id=$(id);
		if($id.length==0){
			return;
		}
		e.preventDefault();
		var pos=$id.offset().top;
		$('body,html').animate({scrollTop: pos});
		closeNav();
	});

	function closeNav(){
		$('#mySidenav').css('width','0');
	}
	/*$('a#clickToggleMenu').click(function(){
		//alert('R');
		$('.menu').toggleClass('show_menu');
		$('.home').toggleClass('move_content');
		$('p').toggleClass('c');
	});*/

	/*$('#clickToggleMenu').click({
		alert('R');
		$('.menu').toggleClass('show_menu');
		$('.home').toggleClass('move_content');
	});*/
});
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}