import '../scss/app.scss';

import { swiper } from './initSwiper';
import { burgerMenu } from './initBurgerMenu';
import { fancybox } from './fancybox';
import { initFooter } from './initFooter';
import { mask } from './mask';
import { faq } from './FAQ';
import { initRange } from './initRange';
// import { initIMask } from './initIMask';
// import { initVideo } from './initVideo';





document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname=='/'){
        document.querySelector('header').classList.add('header-margin')
    }
    init();
});
  
const init = () => {
    swiper();
    burgerMenu();
    fancybox();
    mask();
    initFooter();
    faq();
    initRange();
};
