$(document).ready(function(){

$('#new-dropdown').hide();



$('#dropdown').on('click',function(){
	$('#new-dropdown').toggle(700);

})




})


$(window).load(function(){

$('.main-background-slider').slick({ 
	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 2300,
	infinite: true,
	speed: 300,
	centerMode: true,
	variableWidth: true,
	arrows:false,
	
})

})