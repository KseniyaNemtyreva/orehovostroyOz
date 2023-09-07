import Swiper, { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "swiper/css/bundle";


export function swiper(){
  new Swiper('.information', {
    modules: [Autoplay, 
      Pagination, 
      Navigation],
    loop: true,
    spaceBetween: 0,
    // autoplay: true,
    loop: false,
    // autoplay: {
    //   delay: 4500,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: ".information-swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.information-swiper-button-next',
        prevEl: '.information-swiper-button-prev',
    },
  });

  new Swiper('.popular-projects__slider', {
    modules: [ Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.popular-project-swiper-button-next',
        prevEl: '.popular-project-swiper-button-prev',
    },

    breakpoints: {
      720: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });

  new Swiper('.implemented-projects__slider', {
    modules: [ Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 70,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.implemented-projects-swiper-button-next',
        prevEl: '.implemented-projects-swiper-button-prev',
    },
  });


  new Swiper('.reviews__slider', {
    modules: [ Navigation,
        Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 70,
    loop: true,
    pagination: {
        el: ".reviews-swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
    },
  });
    
  new Swiper('.compare-swiper', {
    modules: [ Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.compare-section__swiper-button-next',
        prevEl: '.compare-section__swiper-button-prev',
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }
  });


  const subswiper = new Swiper(".project-cart-section__swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
  });
   const swiper = new Swiper(".project-cart-section__swiper2", {
    modules: [Thumbs],
    loop: true,
    spaceBetween: 10,
    slideToClickedSlide: true,
    thumbs: {
      swiper: subswiper,
    },
  });



  new Swiper('.project-card__similar-projects-grid-mobile', {
    modules: [ Navigation],
    slidesPerView: 1,
    spaceBetween: 10, 
    centeredSlides: true,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.project-card-swiper-button-next',
        prevEl: '.project-card-swiper-button-prev',
    },

    breakpoints: {
      480: {
        centeredSlides: false,
        slidesPerView: 2,
      },
    }
  });

  new Swiper('.catalog__banners', {
    modules: [ Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".catalog__banners-pagination",
        clickable: true,
    },
  });

}