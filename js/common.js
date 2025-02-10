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

/* 날짜 선택 라이브러리 */
/* $('#dateInput, #dateInput2').daterangepicker({
	singleDatePicker: true,
	alwaysShowCalendars: true,
	showCustomRangeLabel: false,
	autoApply: true,
	locale: {
		format: 'YYYY-MM-DD',
		daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	}
}); */

/* resize */
$(document).ready(function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	$(window).on('resize', function () {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});