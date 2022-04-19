import Swiper, { Navigation, Autoplay } from 'swiper';

const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.onclick = function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
};

Swiper.use([Navigation]);
const swiper = new Swiper('.reviews__woman', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1157: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
