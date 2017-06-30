$(function(){

	/*$(document).off('click.bs.dropdown.data-api');
	$(document).off('click.bs.dropdown.data-api');*/
	$(".dropdown").mouseover(function(){
		$(this).addClass("open");
	})
	$(".dropdown").mouseout(function(){
		$(this).removeClass("open");
	})
})