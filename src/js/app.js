import '../scss/app.scss';

// import Swiper, { Autoplay, EffectCards, EffectCreative, EffectFlip, Grid, Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation]);
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination'; //???

// import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

// import Choices from 'choices.js';

// import lax from 'lax.js'

// const popupS = require('popups');


document.addEventListener('DOMContentLoaded', () => {
   const swiper = new Swiper('.Popular-projects__slider', {
    slidesPerView: 4,
    spaceBetween: 41,
    // centeredSlides: true,
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Navigation arrows
    navigation: {
        nextEl: '.Popular-project-swiper-button-next',
        prevEl: '.Popular-project-swiper-button-prev',
    },
    });

   const Implement_project_swiper = new Swiper('.implemented-projects__slider', {
       slidesPerView: "auto",
       centeredSlides: true,
       spaceBetween: 70,
       loop: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
        // Navigation arrows
        navigation: {
            nextEl: '.implemented-projects-swiper-button-next',
            prevEl: '.implemented-projects-swiper-button-prev',
        },
    });


    const reviews_swiper = new Swiper('.reviews__slider', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 70,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.reviews-swiper-button-next',
            prevEl: '.reviews-swiper-button-prev',
        },
    });


});

//- <script>
//-   const swiper = new Swiper('.Popular-projects__slider', {
//-   slidesPerView: 4,
//-   spaceBetween: 41,
//-   // centeredSlides: true,
//-   // Optional parameters
//-   direction: 'horizontal',
//-   loop: false,


//-   // Navigation arrows
//-   navigation: {
//-       nextEl: '.Popular-project-swiper-button-next',
//-       prevEl: '.Popular-project-swiper-button-prev',
//-   },

//-   });
//- </script>




 //- <script>
      //-     const reviews_swiper = new Swiper('.reviews__slider', {
      //-         slidesPerView: "auto",
      //-         centeredSlides: true,
      //-         spaceBetween: 70,
      //-         loop: true,
      //-         pagination: {
      //-           el: ".swiper-pagination",
      //-           clickable: true,
      //-         },


      //-     // Navigation arrows
      //-     navigation: {
      //-         nextEl: '.reviews-swiper-button-next',
      //-         prevEl: '.reviews-swiper-button-prev',
      //-     },

      //-     });
      //-   </script>