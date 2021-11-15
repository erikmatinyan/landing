// header__logs
const log = document.querySelector(".header__logs");

function positioningLogs() {
	let optimalDistance;

	if (window.innerWidth > 1106) {
		optimalDistance =
			(window.innerWidth - document.querySelector("header").offsetWidth) /
			2;
		log.style.right = optimalDistance + "px";
	} else {
		log.style.right = 15 + "px";
	}
}

window.onresize = positioningLogs;
window.onload = positioningLogs;

// Menu
const menuIcon = document.querySelector(".header__menu_icon");
const menu = document.querySelector(".header__menu");

menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("open");
	menu.classList.toggle("open");
	document.body.classList.toggle("disable-scroll");
});

// Brands
const brandsSection = document.querySelector(".brands");
const brandsItems = brandsSection.querySelectorAll("li");

const choiceItems = document.querySelectorAll(".choice__item");

const statisticsInfoItems = document.querySelectorAll(".statistics__info_item");
statisticsInfoItems.forEach((e, i) => {
	e.setAttribute("data-aos", "fade-up");
	e.setAttribute("data-aos-delay", `${i * 100}`);
});

const elementsArr = [
	document.querySelector(".increase"),
	document.querySelector(".project"),
];

if (window.innerWidth > 768) {
	brandsItems.forEach((e) => {
		e.setAttribute("data-aos", "fade-up");
	});

	choiceItems.forEach((e, i) => {
		e.setAttribute("data-aos-delay", `${i * 100}`);
	});
} else {
	choiceItems.forEach((e, i) => {
		e.setAttribute("data-aos-delay", `${i * 50}`);
	});

	// Optimizing aos animations
	elementsArr.forEach((e) => {
		e.setAttribute("data-aos-delay", "200");
	});
}

AOS.init();

$(function () {
	var $body = $(document);
	$body.bind("scroll", function () {
		// "Disable" the horizontal scroll.
		if ($body.scrollLeft() !== 0) {
			$body.scrollLeft(0);
		}
	});
});