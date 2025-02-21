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

$('.pop, .modal, .select_wrap .select, .search').click(function (e) {
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

/* 히스토리 필터 버튼 */
$('.filterwrap button').click(function () {
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

/* select */
$('.select_wrap .select').click(function () {
	if (!$(this).hasClass('active')) {
		$('.select_box').stop().slideUp('500');
		$('.select_wrap .select, .select_wrap .select img').removeClass('active');
		$(this).toggleClass('active');
		$(this).find('img').toggleClass('active');
		$(this).siblings('.select_box').stop().slideToggle('500');
	} else {
		$(this).toggleClass('active');
		$(this).find('img').toggleClass('active');
		$(this).siblings('.select_box').stop().slideToggle('500');
	}
});

$('.select_box li').click(function () {
	let selectedText = $(this).text();
	let parentWrap = $(this).closest('.select_wrap');
	let selectElement = parentWrap.find('.select');

	if (selectElement.is('input')) {
		if ($(this).hasClass('no_sel')) {
			selectElement.val('').attr('placeholder', selectedText);
		} else {
			selectElement.val(selectedText);
		}
	} else {
		selectElement.html(`${selectedText} <img src="../img/ico-drop-down.svg" alt="열고닫기">`);
	}

	$('.select_box').stop().slideUp('500');
	selectElement.removeClass('active');

	if ($(this).hasClass('no_sel')) {
		selectElement.css('color', '#999');
	} else {
		selectElement.css('color', '#000');
	}
});

$('.wrap').click(function () {
	$('.select_wrap .select, .select_wrap .select img').removeClass('active');
	$('.select_box').stop().slideUp('500');
});

/* tab */
$('.tab_wrap .tab').click(function () {
	$('.tab_wrap .tab').removeClass('active');
	$(this).addClass('active');
});

/* faq */
$('.faq .question').click(function () {
	$(this).siblings('.answer').stop().slideToggle('500');
	$(this).find('img').stop().toggleClass('active');
});