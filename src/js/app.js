import '../scss/app.scss';

import { swiper } from './initSwiper';
import { burgerMenu } from './initBurgerMenu';
// import { fancybox } from './fancybox';
// import { initLists } from './initLists';
// import { initIMask } from './initIMask';
// import { initVideo } from './initVideo';





document.addEventListener('DOMContentLoaded', () => {
    init();
});
  
const init = () => {
    swiper();
    burgerMenu();


    document.querySelector('.footer__blocks-block.expand').addEventListener('click', (el) =>{
        document.querySelectorAll('.footer__blocks-block.close').forEach((elem) =>{
            elem.classList.replace('close', 'open')
            document.querySelector('.footer__blocks-block.expand').style.display = "none"
        })
    })
    document.querySelector('.footer__blocks-block.collapse').addEventListener('click', (el) =>{
        document.querySelectorAll('.footer__blocks-block.open').forEach((elem) =>{
            elem.classList.replace('open', 'close')
            document.querySelector('.footer__blocks-block.expand').style.display = "flex"
        })
    })

    //FAQ
    document.querySelectorAll('.questions__question').forEach((elem) =>{
        elem.addEventListener('click', async() =>{
            let question = elem.querySelector('.questions__question-content')
            let sign = elem.querySelector('.questions__question-sign')
            if(question.classList.contains('inactive')){
                elem.parentElement.querySelectorAll('.questions__question-content.active').forEach((button)=>{
                    button.classList.replace("active", "inactive"); 
                    button.parentElement.querySelector('.questions__question-sign').innerHTML = "+"                                   
                })
                
                question.classList.replace('inactive', 'active')
                sign.innerHTML = "-"
            }
            else{                
                question.classList.replace('active', 'inactive')
                sign.innerHTML = "+"
            }
        
        })
    })
};
