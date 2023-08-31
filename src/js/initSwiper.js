import Swiper, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "swiper/css/bundle";


export function swiper(){
    new Swiper('.popular-projects__slider', {
        modules: [ Navigation],
        slidesPerView: 4,
        spaceBetween: 40,
        // centeredSlides: true,
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
            nextEl: '.popular-project-swiper-button-next',
            prevEl: '.popular-project-swiper-button-prev',
        },

        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
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
    
}