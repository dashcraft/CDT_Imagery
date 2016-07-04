$(document).ready(function(){
var images=[];

$('#new-dropdown').hide();
$('#new-dropdown-2').hide();

$('#secondary-nav-dropdown').hide();

$('#dropdown').on('mouseover',function(){
	$('#new-dropdown').show(700);

})

$('#dropdown').on('click',function(){
	$('#new-dropdown').hide(700);
	$('#new-dropdown-2').hide(700);

})


$('#dropdown-2').on('mouseover',function(){
	$('#new-dropdown-2').show(800);

})


$('#dropdown-nav-phone').on('click',function(){


$('#secondary-nav-dropdown').toggle(700);

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
  	asNavFor: '.slider-nav',
  	fade:true,
	centerMode:true,
	arrows:false
});


$('.slider-nav').slick({
  slidesToShow:5,
  slidesToScroll: 1,
  infinite:true,
  asNavFor: '.sliderfor',
  focusOnSelect: true,
  arrows:false,
  centerMode:true,
  variableWidth:true
});



})
