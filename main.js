import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');


const swiper1 = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1.1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 24
    }
  }
})

const swiper2 = new Swiper('.swiper2', {
  // Default parameters
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3.8,
      spaceBetween: 2
    }
  }
})


