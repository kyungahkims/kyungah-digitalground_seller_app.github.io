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

/* modal 닫기 */
$('.sel_btn, .btn_wrap button, .modal_wrap, .modal_wrap2').click(function () {
	$('.modal_wrap, .modal_wrap2, .modal_wrap3').css('display', 'none');
});

$('.pop, .modal, .select_wrap .select, .search').click(function (e) {
	e.stopPropagation();
});

/* modal_wrap 열기 */
$('.filter_btn, .dispath, .filterwrap button, .withdrawal_btn').click(function () {
	$('.modal_wrap').css('display', 'flex');
});

/* modal_wrap2 열기 */
$('.change_btn, .product_btn').click(function () {
	$('.modal_wrap2').css('display', 'flex');
});

/* 견적보내기 버튼 */
$('.send_btn').click(function () {
	$('.modal_wrap3').css('display', 'flex');

	setTimeout(function () {
		$('.modal_wrap3').css('display', 'none');
	}, 2000);
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

/* faq tab */
$('.tab_wrap .tab').click(function () {
	$('.tab_wrap .tab').removeClass('active');
	$(this).addClass('active');
});

/* faq */
$('.faq .question').click(function () {
	$(this).siblings('.answer').stop().slideToggle('500');
	$(this).find('img').stop().toggleClass('active');
});

$('.info_box button').click(function () {
	$('.info_box').css('display', 'none');
});

/* 공지사항 상세 타이틀 높이 값 */
function onResize() {
	$(".notice_cont").css("padding-top", $(".notice_sel").outerHeight() + 20 + "px");
}

$(window).resize(onResize).trigger("resize");


/* 검색 */
$('.pop').click(function () {
	$('.search_list').stop().slideUp('500');
});

$('.modal_wrap .search').click(function () {
	$('.search_list').stop().slideDown('500');
});