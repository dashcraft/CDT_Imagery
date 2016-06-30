$(document).ready(function(){
var images=[];

$('#new-dropdown').hide();



$('#dropdown').on('click',function(){
	$('#new-dropdown').toggle(700);

})

/*$.get("/images",function(data){
	
	console.log(data);
		$.each(data,function(index,value){
			$('.main-background-slider').append(
			'<div class="slider-content"><img src="/images/SliderPhotos/'
			+ data[index] + '">'
				)
		})

		})*/


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


 $('.sliderfor').slick({
 	slidesToShow: 1,
  	slidesToScroll: 1,
  	infinite:true,
	centerMode:true,
	variableWidth: true,
	arrows:false
});


$('.slider-nav').slick({
  slidesToShow:8,
  slidesToScroll: 1,
  infinite:true,
  asNavFor: '.sliderfor',
  focusOnSelect: true,
  arrows:false,
  centerMode:true
});


})