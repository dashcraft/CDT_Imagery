$(document).ready(function(){

$('.new-dropdown-hide').hide();

$('#dropdown').on('click',function(){

	$('.new-dropdown-hide').slideToggle(1500);
})

})