import '../scss/app.scss';

import { swiper } from './initSwiper';
import { burgerMenu } from './initBurgerMenu';
import { fancybox } from './fancybox';
import { initFooter } from './initFooter';
import { mask } from './mask';
import { faq } from './FAQ';
// import { initIMask } from './initIMask';
// import { initVideo } from './initVideo';





document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname=='/'){
        document.querySelector('header').classList.add('header-margin')
    }
    document.querySelector('#contact-number').addEventListener('click', (el) =>{
        if(document.querySelector('.contact__number-block').classList.contains('active')){
            document.querySelector('.contact__number-block').classList.remove('active')
        }
        else{
            document.querySelector('.contact__number-block').classList.add('active')
        }
    })

    

    document.querySelectorAll('.catalog-filter__choice').forEach(element => {
        element.addEventListener('click', () => {
            console.log(element.classList.contains("active"))
            if(element.classList.contains("inactive")){
                element.classList.replace("inactive","active")
            }
            else{
                element.classList.replace("active","inactive")
            }            
        })
    });

    init();
});
  
const init = () => {
    swiper();
    burgerMenu();
    fancybox();
    mask();
    initFooter();
    faq();
};
