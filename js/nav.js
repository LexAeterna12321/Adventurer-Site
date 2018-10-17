// scrolling function

const nav = document.querySelectorAll(".header__nav__menu__item__link");
const anchors = ["header", "about", "service", "team", "works"];

nav.forEach((navBtn, index) => {
    navBtn.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(`.${anchors[index]}`).offsetTop
        });
    })
})

// mobile nav
const navBtn = document.querySelector(".header__nav__menu-icon i");
const mobileMenu = document.querySelector(".header__nav__menu");

navBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("header__nav__menu--show");
});

// active section toggle
const headerY = document.querySelector(".header").offsetTop;
const aboutY = document.querySelector(".about").offsetTop;
const serviceY = document.querySelector(".service").offsetTop;
const teamY = document.querySelector(".team").offsetTop;
const worksY = document.querySelector(".works").offsetTop;

window.addEventListener("scroll", () => {
    let windowScroll = window.scrollY;

    if (windowScroll < aboutY) {

        nav.forEach(item => {
            item.classList.remove("header__nav__menu__item__link--active");
            if (item.dataset.text == "home") {
                item.classList.add("header__nav__menu__item__link--active");
            }
        })
    } else if (windowScroll >= aboutY && windowScroll <= serviceY) {

        nav.forEach(item => {
            item.classList.remove("header__nav__menu__item__link--active");
            if (item.dataset.text == "about") {
                item.classList.add("header__nav__menu__item__link--active");
            }
        })
    } else if (windowScroll >= serviceY && windowScroll <= teamY) {

        nav.forEach(item => {
            item.classList.remove("header__nav__menu__item__link--active");
            if (item.dataset.text == "service") {
                item.classList.add("header__nav__menu__item__link--active");
            }
        })
    } else if (windowScroll >= teamY && windowScroll <= worksY) {

        nav.forEach(item => {
            item.classList.remove("header__nav__menu__item__link--active");
            if (item.dataset.text == "team") {
                item.classList.add("header__nav__menu__item__link--active");
            }
        })
    } else if (windowScroll >= worksY) {

        nav.forEach(item => {
            item.classList.remove("header__nav__menu__item__link--active");
            if (item.dataset.text == "portfolio") {
                item.classList.add("header__nav__menu__item__link--active");
            }
        })
    }

})