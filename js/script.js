AOS.init({
	duration: 1200,
	easing: "ease-in-out",
	delay: 0,
	once: false,
	anchorPlacement: "topBottom",
});
const headings = document.querySelectorAll(".heading-group");
headings.forEach((heading) => {
	heading.addEventListener("click", function () {
		headings.forEach((h) => h.classList.remove("clicked"));
		heading.classList.add("clicked");
	});
});
const swiper = new Swiper(".swiper", {
	loop: false,
	breakpoints: {
		1024: {
			slidesPerView: 4.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.4,
			spaceBetween: 18,
		},
		500: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		376: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},
});

const newswiper = new Swiper(".new-swiper", {
	loop: true,
	autoplay: {
		delay: 300,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		380: {
			slidesPerView: 2.5,
			spaceBetween: 40,
		},
		640: {
			slidesPerView: 3.5,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},
});
const swipernew = new Swiper(".tesimonial-swiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop: true,
	breakpoints: {
		1024: {
			slidesPerView: 3.07,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 18,
		},
		450: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
	},
});

let shownav = document.getElementById("nav-show");
let hidenav = document.getElementById("close-button");
let showmenu = document.querySelector(".mob-view-inner");
let showoverlay = document.querySelector(".mobile-overlay");

shownav.onclick = () => {
	showmenu.style.right = "0px";
	showoverlay.style.display = "block";
};

hidenav.onclick = () => {
	showmenu.style.right = "-300px";
	showoverlay.style.display = "none";
};

let showparas = document.querySelectorAll(".FAQ-right-item");
let hideparas = document.querySelectorAll(".tab-hide-text");

let currentlyOpenIndex = -1;

showparas.forEach((showpara, index) => {
	showpara.onclick = () => {
		if (currentlyOpenIndex !== -1 && currentlyOpenIndex !== index) {
			hideparas[currentlyOpenIndex].style.height = "0px";
			showparas[currentlyOpenIndex].classList.remove("FAQ-right-item-border");
		}

		if (
			hideparas[index].style.height === "0px" ||
			hideparas[index].style.height === ""
		) {
			hideparas[index].style.height = "100%";
			showpara.classList.add("FAQ-right-item-border");
			currentlyOpenIndex = index;
		} else {
			hideparas[index].style.height = "0px";
			showpara.classList.remove("FAQ-right-item-border");
			currentlyOpenIndex = -1;
		}
	};
});
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
	if (link.href.includes(activePage)) {
		link.classList.add("active");
	}
});
