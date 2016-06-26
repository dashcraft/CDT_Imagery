$(document).ready(function(){

$('#new-dropdown').hide();



$('#dropdown').on('click',function(){
	$('#new-dropdown').toggle(700);

})

$('.main-background-slider').slick({ 
	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 2000,
	infinite: true,
	speed: 300,
	centerMode: true,
	variableWidth: true,
	arrows:false,
	
})




})