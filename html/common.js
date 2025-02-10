/* nav bar*/
$('nav li').click(function () {
	$('nav li a').removeClass('active');
	$(this).find('a').addClass('active');
});

/* 충전 설정 */
$('.charging_box li').click(function () {
	$('.charging_box li').removeClass('active');
	$(this).addClass('active');
});

/* 판매상품 선택 */
$('.menu_wrap li').click(function () {
	$('.menu_wrap li').removeClass('active');
	$(this).addClass('active');
});

/* 모달 닫기 */
$('.sel_btn, .btn_wrap button').click(function () {
	$('.modal_wrap, .modal_wrap2').css('display', 'none');
});

$('.modal_wrap').click(function () {
	$('.modal_wrap, .modal_wrap2, .modal_wrap3').css('display', 'none');
});

$('.pop, .modal').click(function (e) {
	e.stopPropagation();
});

/* 기종 선택 */
$('.filter_btn').click(function () {
	$('.modal_wrap').css('display', 'flex');
});

/* 판매상품 선택 */
$('.change_btn').click(function () {
	$('.modal_wrap2').css('display', 'flex');
});

/* 견적보내기 버튼 */
$('.send_btn').click(function () {
	$('.modal_wrap3').css('display', 'flex');

	setTimeout(function () {
		$('.modal_wrap3').css('display', 'none');
	}, 2000);
});

/* 견적발송 버튼 */
$('.dispath').click(function () {
	$('.modal_wrap').css('display', 'flex');
});

/* resize */
$(document).ready(function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	$(window).on('resize', function () {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});