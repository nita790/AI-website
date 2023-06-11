$(document).ready(function () {
	
	// 漢堡選單
	$('.mobile-icon').click(function (e) {
		e.preventDefault();
		$('.menu-mobile').slideToggle();;
	});
	

	// 應用篩選按鈕
	$('.application-filter-menu').hide();
	$('.application-filter-btn').click(function(){
			$(".application-filter-menu").slideToggle();
	});

	$('.application-order-menu').hide();
	$('.application-order-btn').click(function(){
			$(".application-order-menu").slideToggle();
	});
	
	// fqa
	$('.fqa-item').click(function (e) { 
		e.preventDefault();
		$('.fqa-item-info-remove').slideToggle();
	});

	// fqa 還沒寫出來....
	// $('.fqa-item').click(function (event) {
  //   event.preventDefault();
  //   $(this).toggleClass('.fqa-item-active');
  //   $(this).find('.fqa-item-icon-add').toggleClass('');
  //   $(this).find('.fqa-item-icon-remove').toggle();
  //   $(this).find('.fqa-item-info-remove').slideToggle();
  // });

	// goTop 回到上方
	$('.gotop').click(function (e) { 
		e.preventDefault();
		// console.log($(window).scrollTop(););
		$('html, body').animate({
			scrollTop: 0 }, 500);
	});

});












