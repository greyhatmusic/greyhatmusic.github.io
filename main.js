var movementStrength = 100;
var  height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();

$("html").mousemove(function(e){
	
	var pageX = e.pageX - ($(window).width() / 2);
	var pageY = e.pageY - ($(window).height() / 2);
	
	var newvalueX = width * pageX * -1;
	var newvalueY = height * pageY * -1;
	
	$('#centeredDecal img').css("left", newvalueX + "px");
	$('#centeredDecal img').css("top", newvalueY + "px");
	
	$('#content').css("left", newvalueX * .2 + "px");
	$('#content').css("top", newvalueY * .2 + "px");
});