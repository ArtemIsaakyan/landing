import Swiper, { Navigation, Autoplay } from 'swiper';
import WOW from 'wowjs';
import './components/nav';
Swiper.use([Navigation]);
const swiper = new Swiper('.reviews__woman', {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
