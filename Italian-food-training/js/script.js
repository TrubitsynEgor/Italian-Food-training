function testWebP(callback) {
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.menu,.icon__link,.logo,.intro__box, .intro__slider, body,.top,.bot,.mid').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(document).ready(function () {
	$('.work__btn_1').click(function (event) {
		$('.work__spoiler-text_1,.work__btn_1').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(document).ready(function () {
	$('.work__btn_2').click(function (event) {
		$('.work__spoiler-text_2,.work__btn_2').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(document).ready(function () {
	$('.work__btn_3').click(function (event) {
		$('.work__spoiler-text_3,.work__btn_3').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

new Swiper('.slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});

