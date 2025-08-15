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
  autoplay: {
   delay: 2000,
 },
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

//第七堂主線任務
AOS.init({
  duration: 800,
});

// click-animate
const elements = document.querySelectorAll('.click-animate');
elements.forEach((ele, key) => {
    ele.addEventListener('click', function () {
        ele.classList.add('animate__animated', 'animate__headShake');
    });
    ele.addEventListener('animationend', function () {
        ele.classList.remove('animate__animated', 'animate__headShake');
    });
});
